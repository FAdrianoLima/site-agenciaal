import React, { useEffect, useMemo, useState } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import Admin from "../components/admin";
import { db } from "../../firebase-config";
import styles from "../styles/admin/CadastroTaxonomia.module.css";

const CONFIG = {
  categorias: {
    titulo: "Categorias",
    descricao: "Organize os assuntos e temas do seu blog.",
    colecao: "categorias",
    singular: "categoria",
    icone: "categoria",
    campos: ["nome", "slug", "descricao"],
  },
  palavras: {
    titulo: "Palavras-chave",
    descricao: "Organize os termos que ajudam a classificar seus artigos.",
    colecao: "palavras-chave",
    singular: "palavra-chave",
    icone: "palavra",
    campos: ["nome", "slug", "parentId"],
  },
};

const gerarSlug = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function CadastroTaxonomia({ tipo }) {
  const config = CONFIG[tipo];

  const [itens, setItens] = useState([]);
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  const [dialogAberto, setDialogAberto] = useState(false);
  const [itemEditando, setItemEditando] = useState(null);

  const [nome, setNome] = useState("");
  const [slug, setSlug] = useState("");
  const [descricao, setDescricao] = useState("");
  const [parentId, setParentId] = useState("");

  const [salvando, setSalvando] = useState(false);
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState(null);

  const [notificacao, setNotificacao] = useState({
    aberto: false,
    mensagem: "",
    tipo: "success",
  });

  useEffect(() => {
    const unsubscribeItens = onSnapshot(
      collection(db, config.colecao),
      (snapshot) => {
        setItens(
          snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          })),
        );
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
        mostrarNotificacao("Não foi possível carregar os registros.", "error");
      },
    );

    const unsubscribeArtigos = onSnapshot(
      collection(db, "artigos"),
      (snapshot) => {
        setArtigos(
          snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          })),
        );
      },
    );

    return () => {
      unsubscribeItens();
      unsubscribeArtigos();
    };
  }, [config.colecao]);

  const mostrarNotificacao = (mensagem, tipo = "success") => {
    setNotificacao({
      aberto: true,
      mensagem,
      tipo,
    });
  };

  const quantidadeArtigos = (item) => {
    if (tipo === "categorias") {
      return artigos.filter((artigo) => artigo.categoriaId === item.id).length;
    }

    return artigos.filter((artigo) =>
      Array.isArray(artigo.palavrasChave)
        ? artigo.palavrasChave.some((palavra) =>
            typeof palavra === "string"
              ? palavra === item.id
              : palavra?.id === item.id,
          )
        : false,
    ).length;
  };

  const itensFiltrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    return [...itens]
      .filter((item) => {
        if (!termo) return true;

        return (
          item.nome?.toLowerCase().includes(termo) ||
          item.slug?.toLowerCase().includes(termo) ||
          item.descricao?.toLowerCase().includes(termo)
        );
      })
      .sort((a, b) => (a.nome || "").localeCompare(b.nome || ""));
  }, [itens, busca]);

  const abrirNovo = () => {
    setItemEditando(null);
    setNome("");
    setSlug("");
    setDescricao("");
    setParentId("");
    setDialogAberto(true);
  };

  const abrirEdicao = (item) => {
    setItemEditando(item);
    setNome(item.nome || "");
    setSlug(item.slug || "");
    setDescricao(item.descricao || "");
    setParentId(item.parentId || "");
    setDialogAberto(true);
  };

  const fecharDialog = () => {
    if (salvando) return;
    setDialogAberto(false);
  };

  const salvar = async (event) => {
    event.preventDefault();

    const nomeFinal = nome.trim();
    const slugFinal = gerarSlug(slug || nomeFinal);

    if (!nomeFinal || !slugFinal) {
      mostrarNotificacao("Preencha o nome e o slug.", "error");
      return;
    }

    if (tipo === "palavras" && parentId && parentId === itemEditando?.id) {
      mostrarNotificacao(
        "Uma palavra-chave não pode ser sua própria categoria principal.",
        "error",
      );
      return;
    }

    const slugDuplicado = itens.some(
      (item) => item.slug === slugFinal && item.id !== itemEditando?.id,
    );

    if (slugDuplicado) {
      mostrarNotificacao("Este slug já está sendo utilizado.", "error");
      return;
    }

    if (tipo === "palavras" && parentId) {
      const pai = itens.find((item) => item.id === parentId);

      if (!pai) {
        mostrarNotificacao(
          "A palavra-chave principal não foi encontrada.",
          "error",
        );
        return;
      }

      // Evita hierarquia circular.
      let atual = pai;

      while (atual?.parentId) {
        if (atual.parentId === itemEditando?.id) {
          mostrarNotificacao(
            "Essa alteração criaria uma hierarquia circular.",
            "error",
          );
          return;
        }

        atual = itens.find((item) => item.id === atual.parentId);
      }
    }

    setSalvando(true);

    try {
      const dados = {
        nome: nomeFinal,
        slug: slugFinal,
        atualizadoEm: serverTimestamp(),
      };

      if (tipo === "categorias") {
        dados.descricao = descricao.trim();
      } else {
        dados.parentId = parentId || null;
        dados.parentNome = parentId
          ? itens.find((item) => item.id === parentId)?.nome || ""
          : "";
      }

      if (itemEditando) {
        await updateDoc(doc(db, config.colecao, itemEditando.id), dados);

        mostrarNotificacao("Registro atualizado com sucesso.");
      } else {
        await addDoc(collection(db, config.colecao), {
          ...dados,
          criadoEm: serverTimestamp(),
        });

        mostrarNotificacao("Registro cadastrado com sucesso.");
      }

      setDialogAberto(false);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      mostrarNotificacao("Não foi possível salvar o registro.", "error");
    } finally {
      setSalvando(false);
    }
  };

  const excluir = async () => {
    if (!confirmacaoExclusao) return;

    const item = confirmacaoExclusao;

    if (quantidadeArtigos(item) > 0) {
      mostrarNotificacao(
        "Este registro está associado a artigos e não pode ser excluído.",
        "error",
      );
      setConfirmacaoExclusao(null);
      return;
    }

    if (
      tipo === "palavras" &&
      itens.some((filho) => filho.parentId === item.id)
    ) {
      mostrarNotificacao(
        "Remova ou reorganize as palavras-chave relacionadas antes de excluir.",
        "error",
      );
      setConfirmacaoExclusao(null);
      return;
    }

    try {
      await deleteDoc(doc(db, config.colecao, item.id));

      mostrarNotificacao("Registro excluído com sucesso.");
    } catch (error) {
      console.error("Erro ao excluir:", error);
      mostrarNotificacao("Não foi possível excluir o registro.", "error");
    } finally {
      setConfirmacaoExclusao(null);
    }
  };

  const nomePrincipal = (item) =>
    itens.find((registro) => registro.id === item.parentId)?.nome || "";

  return (
    <Admin>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>CONTEÚDO / ORGANIZAÇÃO</span>
            <h1>{config.titulo}</h1>
            <p>{config.descricao}</p>
          </div>

          <Button
            variant="contained"
            startIcon={<AddOutlinedIcon />}
            onClick={abrirNovo}
            className={styles.addButton}
          >
            Novo registro
          </Button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>Total cadastrado</span>
            <strong>{itens.length}</strong>
          </div>

          <div className={styles.stat}>
            <span>Utilizados em artigos</span>
            <strong>
              {itens.filter((item) => quantidadeArtigos(item) > 0).length}
            </strong>
          </div>

          <div className={styles.stat}>
            <span>Sem utilização</span>
            <strong>
              {itens.filter((item) => quantidadeArtigos(item) === 0).length}
            </strong>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.toolbar}>
            <div>
              <h2>Todos os registros</h2>
              <span>{itensFiltrados.length} resultados</span>
            </div>

            <TextField
              size="small"
              placeholder="Buscar por nome ou slug..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              className={styles.search}
              InputProps={{
                startAdornment: (
                  <SearchOutlinedIcon
                    fontSize="small"
                    className={styles.searchIcon}
                  />
                ),
              }}
            />
          </div>

          {loading ? (
            <div className={styles.loading}>
              <CircularProgress size={28} />
            </div>
          ) : itensFiltrados.length === 0 ? (
            <div className={styles.empty}>
              {tipo === "categorias" ? (
                <FolderOutlinedIcon />
              ) : (
                <SellOutlinedIcon />
              )}

              <strong>
                {busca
                  ? "Nenhum resultado encontrado"
                  : "Nenhum registro cadastrado"}
              </strong>

              <span>
                {busca
                  ? "Experimente buscar por outro termo."
                  : "Comece adicionando seu primeiro registro."}
              </span>

              {!busca && (
                <Button onClick={abrirNovo} startIcon={<AddOutlinedIcon />}>
                  Adicionar agora
                </Button>
              )}
            </div>
          ) : (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nome</th>
                    {tipo === "categorias" && <th>Descrição</th>}
                    {tipo === "palavras" && <th>Principal</th>}
                    <th>Slug</th>
                    <th>Artigos</th>
                    <th className={styles.actionsHeader}>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {itensFiltrados.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className={styles.nameCell}>
                          <strong>{item.nome}</strong>
                        </div>
                      </td>

                      {tipo === "categorias" && (
                        <td className={styles.descriptionCell}>
                          {item.descricao || "—"}
                        </td>
                      )}

                      {tipo === "palavras" && (
                        <td>
                          {nomePrincipal(item) ? (
                            <Chip
                              label={nomePrincipal(item)}
                              size="small"
                              className={styles.parentChip}
                            />
                          ) : (
                            <span className={styles.muted}>Principal</span>
                          )}
                        </td>
                      )}

                      <td>
                        <code className={styles.slug}>{item.slug}</code>
                      </td>

                      <td>
                        <span className={styles.count}>
                          {quantidadeArtigos(item)}
                        </span>
                      </td>

                      <td>
                        <div className={styles.actions}>
                          <Tooltip title="Editar">
                            <IconButton
                              size="small"
                              onClick={() => abrirEdicao(item)}
                            >
                              <EditOutlinedIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Excluir">
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => setConfirmacaoExclusao(item)}
                            >
                              <DeleteOutlineIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <Dialog
          open={dialogAberto}
          onClose={fecharDialog}
          fullWidth
          maxWidth="sm"
        >
          <form onSubmit={salvar}>
            <DialogTitle className={styles.dialogTitle}>
              <div>
                <span>
                  {itemEditando ? "EDITAR REGISTRO" : "NOVO REGISTRO"}
                </span>
                <strong>
                  {itemEditando ? "Atualizar dados" : `Nova ${config.singular}`}
                </strong>
              </div>

              <IconButton onClick={fecharDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent className={styles.dialogContent}>
              <TextField
                label="Nome"
                value={nome}
                onChange={(event) => {
                  const valor = event.target.value;
                  setNome(valor);

                  if (!slug || slug === gerarSlug(nome)) {
                    setSlug(gerarSlug(valor));
                  }
                }}
                fullWidth
                required
                autoFocus
                margin="normal"
              />

              <TextField
                label="Slug"
                value={slug}
                onChange={(event) => setSlug(gerarSlug(event.target.value))}
                fullWidth
                required
                margin="normal"
                helperText="Identificador utilizado na URL."
              />

              {tipo === "categorias" ? (
                <TextField
                  label="Descrição"
                  value={descricao}
                  onChange={(event) => setDescricao(event.target.value)}
                  fullWidth
                  multiline
                  minRows={3}
                  margin="normal"
                  helperText="Uma breve descrição sobre esta categoria."
                />
              ) : (
                <TextField
                  select
                  label="Palavra-chave principal"
                  value={parentId}
                  onChange={(event) => setParentId(event.target.value)}
                  fullWidth
                  margin="normal"
                  helperText="Opcional. Utilize para organizar palavras relacionadas."
                >
                  <MenuItem value="">Nenhuma (principal)</MenuItem>

                  {itens
                    .filter(
                      (item) =>
                        item.id !== itemEditando?.id &&
                        item.parentId !== itemEditando?.id,
                    )
                    .sort((a, b) => a.nome.localeCompare(b.nome))
                    .map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.nome}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            </DialogContent>

            <DialogActions className={styles.dialogActions}>
              <Button onClick={fecharDialog} color="inherit">
                Cancelar
              </Button>

              <Button
                type="submit"
                variant="contained"
                disabled={salvando}
                className={styles.addButton}
              >
                {salvando ? (
                  <CircularProgress size={20} color="inherit" />
                ) : itemEditando ? (
                  "Salvar alterações"
                ) : (
                  "Cadastrar"
                )}
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <Dialog
          open={Boolean(confirmacaoExclusao)}
          onClose={() => setConfirmacaoExclusao(null)}
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle>Excluir registro?</DialogTitle>

          <DialogContent>
            <p>
              Deseja realmente excluir{" "}
              <strong>{confirmacaoExclusao?.nome}</strong>?
            </p>

            <p>
              Registros utilizados em artigos ou relacionados a outras
              palavras-chave não poderão ser excluídos.
            </p>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => setConfirmacaoExclusao(null)}
              color="inherit"
            >
              Cancelar
            </Button>

            <Button color="error" variant="contained" onClick={excluir}>
              Excluir
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={notificacao.aberto}
          autoHideDuration={4000}
          onClose={() =>
            setNotificacao((anterior) => ({
              ...anterior,
              aberto: false,
            }))
          }
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            severity={notificacao.tipo}
            variant="filled"
            onClose={() =>
              setNotificacao((anterior) => ({
                ...anterior,
                aberto: false,
              }))
            }
          >
            {notificacao.mensagem}
          </Alert>
        </Snackbar>
      </div>
    </Admin>
  );
}
