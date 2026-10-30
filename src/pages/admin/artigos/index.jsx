import * as React from "react";
import Link from "next/link";

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ScheduleOutlinedIcon from "@mui/icons-material/Schedule";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

import Admin from "../../../components/admin";
import { db } from "../../../../firebase-config";

import styles from "../../../styles/admin/Artigos.module.css";

const STATUS = {
  publicado: {
    label: "Publicado",
    className: "publicado",
    icon: <CheckCircleOutlineIcon fontSize="small" />,
  },
  rascunho: {
    label: "Rascunho",
    className: "rascunho",
    icon: <DraftsOutlinedIcon fontSize="small" />,
  },
  agendado: {
    label: "Agendado",
    className: "agendado",
    icon: <ScheduleOutlinedIcon fontSize="small" />,
  },
};

const formatarData = (valor) => {
  if (!valor) return "—";

  const data = valor?.toDate ? valor.toDate() : new Date(valor);

  if (Number.isNaN(data.getTime())) return "—";

  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const obterDataOrdenacao = (artigo) => {
  const valor = artigo.atualizadoEm || artigo.criadoEm;

  if (!valor) return 0;

  const data = valor?.toDate ? valor.toDate() : new Date(valor);

  return Number.isNaN(data.getTime()) ? 0 : data.getTime();
};

function ConteudoArtigos() {
  const [artigos, setArtigos] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);

  const [busca, setBusca] = React.useState("");
  const [statusFiltro, setStatusFiltro] = React.useState("todos");
  const [categoriaFiltro, setCategoriaFiltro] = React.useState("todas");

  const [carregando, setCarregando] = React.useState(true);
  const [erro, setErro] = React.useState("");

  const [artigoExcluir, setArtigoExcluir] = React.useState(null);
  const [excluindo, setExcluindo] = React.useState(false);

  const [notificacao, setNotificacao] = React.useState({
    aberta: false,
    mensagem: "",
    tipo: "success",
  });

  React.useEffect(() => {
    const unsubscribeArtigos = onSnapshot(
      collection(db, "artigos"),
      (snapshot) => {
        const lista = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        lista.sort((a, b) => obterDataOrdenacao(b) - obterDataOrdenacao(a));

        setArtigos(lista);
        setCarregando(false);
        setErro("");
      },
      (error) => {
        console.error("Erro ao carregar artigos:", error);
        setErro("Não foi possível carregar os artigos.");
        setCarregando(false);
      },
    );

    const unsubscribeCategorias = onSnapshot(
      collection(db, "categorias"),
      (snapshot) => {
        const lista = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        lista.sort((a, b) =>
          (a.nome || "").localeCompare(b.nome || "", "pt-BR"),
        );

        setCategorias(lista);
      },
      (error) => {
        console.error("Erro ao carregar categorias:", error);
      },
    );

    return () => {
      unsubscribeArtigos();
      unsubscribeCategorias();
    };
  }, []);

  const contadores = React.useMemo(
    () => ({
      todos: artigos.length,
      publicado: artigos.filter((artigo) => artigo.status === "publicado")
        .length,
      rascunho: artigos.filter((artigo) => artigo.status === "rascunho").length,
      agendado: artigos.filter((artigo) => artigo.status === "agendado").length,
    }),
    [artigos],
  );

  const artigosFiltrados = React.useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-BR");

    return artigos.filter((artigo) => {
      const correspondeBusca =
        !termo ||
        (artigo.titulo || "").toLocaleLowerCase("pt-BR").includes(termo) ||
        (artigo.slug || "").toLocaleLowerCase("pt-BR").includes(termo) ||
        (artigo.resumo || "").toLocaleLowerCase("pt-BR").includes(termo);

      const correspondeStatus =
        statusFiltro === "todos" || artigo.status === statusFiltro;

      const correspondeCategoria =
        categoriaFiltro === "todas" || artigo.categoriaId === categoriaFiltro;

      return correspondeBusca && correspondeStatus && correspondeCategoria;
    });
  }, [artigos, busca, statusFiltro, categoriaFiltro]);

  const abrirNotificacao = (mensagem, tipo = "success") => {
    setNotificacao({
      aberta: true,
      mensagem,
      tipo,
    });
  };

  const confirmarExclusao = async () => {
    if (!artigoExcluir) return;

    setExcluindo(true);

    try {
      await deleteDoc(doc(db, "artigos", artigoExcluir.id));

      abrirNotificacao("Artigo excluído com sucesso.");
      setArtigoExcluir(null);
    } catch (error) {
      console.error("Erro ao excluir artigo:", error);
      abrirNotificacao(
        "Não foi possível excluir o artigo. Tente novamente.",
        "error",
      );
    } finally {
      setExcluindo(false);
    }
  };

  const obterCategoria = (artigo) => {
    if (artigo.categoriaNome) return artigo.categoriaNome;

    const categoria = categorias.find((item) => item.id === artigo.categoriaId);

    return categoria?.nome || "Sem categoria";
  };

  const renderStatus = (status) => {
    const configuracao = STATUS[status] || STATUS.rascunho;

    return (
      <span className={`${styles.status} ${styles[configuracao.className]}`}>
        {configuracao.icon}
        {configuracao.label}
      </span>
    );
  };

  return (
    <section className={styles.root}>
      <header className={styles.topo}>
        <div>
          <span className={styles.eyebrow}>CONTEÚDO / BLOG</span>
          <Typography component="h1" className={styles.titulo}>
            Artigos<span>.</span>
          </Typography>
          <p className={styles.subtitulo}>
            Gerencie os conteúdos, publicações e rascunhos do seu blog.
          </p>
        </div>

        <Button
          component={Link}
          href="/admin/artigos/novo"
          variant="contained"
          startIcon={<AddIcon />}
          className={styles.botaoNovo}
        >
          Novo artigo
        </Button>
      </header>

      <div className={styles.indicadores}>
        <button
          type="button"
          className={`${styles.cardIndicador} ${styles.indicadorTodos} ${
            statusFiltro === "todos" ? styles.indicadorAtivo : ""
          }`}
          onClick={() => setStatusFiltro("todos")}
        >
          <div className={styles.indicadorIcone}>
            <ArticleOutlinedIcon />
          </div>
          <div>
            <span className={styles.indicadorLabel}>Todos os artigos</span>
            <strong>{contadores.todos}</strong>
          </div>
        </button>

        <button
          type="button"
          className={`${styles.cardIndicador} ${styles.indicadorPublicado} ${
            statusFiltro === "publicado" ? styles.indicadorAtivo : ""
          }`}
          onClick={() => setStatusFiltro("publicado")}
        >
          <div className={styles.indicadorIcone}>
            <CheckCircleOutlineIcon />
          </div>
          <div>
            <span className={styles.indicadorLabel}>Publicados</span>
            <strong>{contadores.publicado}</strong>
          </div>
        </button>

        <button
          type="button"
          className={`${styles.cardIndicador} ${styles.indicadorRascunho} ${
            statusFiltro === "rascunho" ? styles.indicadorAtivo : ""
          }`}
          onClick={() => setStatusFiltro("rascunho")}
        >
          <div className={styles.indicadorIcone}>
            <DraftsOutlinedIcon />
          </div>
          <div>
            <span className={styles.indicadorLabel}>Rascunhos</span>
            <strong>{contadores.rascunho}</strong>
          </div>
        </button>

        <button
          type="button"
          className={`${styles.cardIndicador} ${styles.indicadorAgendado} ${
            statusFiltro === "agendado" ? styles.indicadorAtivo : ""
          }`}
          onClick={() => setStatusFiltro("agendado")}
        >
          <div className={styles.indicadorIcone}>
            <ScheduleOutlinedIcon />
          </div>
          <div>
            <span className={styles.indicadorLabel}>Agendados</span>
            <strong>{contadores.agendado}</strong>
          </div>
        </button>
      </div>

      <div className={styles.painel}>
        <div className={styles.painelTopo}>
          <div>
            <h2>Todos os conteúdos</h2>
            <p>
              {artigosFiltrados.length}{" "}
              {artigosFiltrados.length === 1
                ? "artigo encontrado"
                : "artigos encontrados"}
            </p>
          </div>

          <div className={styles.filtros}>
            <TextField
              size="small"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Buscar artigo..."
              className={styles.campoBusca}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl size="small" className={styles.filtroSelect}>
              <InputLabel id="categoria-filtro-label">Categoria</InputLabel>
              <Select
                labelId="categoria-filtro-label"
                value={categoriaFiltro}
                label="Categoria"
                onChange={(event) => setCategoriaFiltro(event.target.value)}
              >
                <MenuItem value="todas">Todas as categorias</MenuItem>
                {categorias.map((categoria) => (
                  <MenuItem key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={styles.abasStatus}>
          {[
            { value: "todos", label: "Todos" },
            { value: "publicado", label: "Publicados" },
            { value: "rascunho", label: "Rascunhos" },
            { value: "agendado", label: "Agendados" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setStatusFiltro(item.value)}
              className={statusFiltro === item.value ? styles.abaAtiva : ""}
            >
              {item.label}
              <span>{contadores[item.value]}</span>
            </button>
          ))}
        </div>

        {erro && (
          <Alert severity="error" className={styles.alerta}>
            {erro}
          </Alert>
        )}

        {carregando ? (
          <div className={styles.estado}>
            <CircularProgress />
            <p>Carregando artigos...</p>
          </div>
        ) : artigosFiltrados.length === 0 ? (
          <div className={styles.vazio}>
            <div className={styles.vazioIcone}>
              <ArticleOutlinedIcon />
            </div>

            {artigos.length === 0 ? (
              <>
                <h3>Seu blog está esperando pelo primeiro artigo.</h3>
                <p>
                  Comece criando um conteúdo para organizar suas publicações.
                </p>
                <Button
                  component={Link}
                  href="/admin/artigos/novo"
                  variant="contained"
                  startIcon={<AddIcon />}
                  className={styles.botaoNovo}
                >
                  Criar primeiro artigo
                </Button>
              </>
            ) : (
              <>
                <h3>Nenhum artigo encontrado.</h3>
                <p>Tente alterar os filtros ou o termo utilizado na busca.</p>
                <Button
                  onClick={() => {
                    setBusca("");
                    setStatusFiltro("todos");
                    setCategoriaFiltro("todas");
                  }}
                  className={styles.botaoLimpar}
                >
                  Limpar filtros
                </Button>
              </>
            )}
          </div>
        ) : (
          <div className={styles.listaArtigos}>
            {artigosFiltrados.map((artigo) => (
              <article key={artigo.id} className={styles.artigo}>
                <div className={styles.artigoPrincipal}>
                  <div className={styles.artigoTituloLinha}>
                    <h3>{artigo.titulo || "Artigo sem título"}</h3>
                    {renderStatus(artigo.status)}
                  </div>

                  <p className={styles.artigoResumo}>
                    {artigo.resumo || "Nenhum resumo cadastrado."}
                  </p>

                  <div className={styles.artigoMetadados}>
                    <span>
                      <CategoryOutlinedIcon />
                      {obterCategoria(artigo)}
                    </span>

                    <span>
                      <ScheduleOutlinedIcon />
                      Atualizado em{" "}
                      {formatarData(artigo.atualizadoEm || artigo.criadoEm)}
                    </span>

                    {artigo.slug && (
                      <span className={styles.slug}>/{artigo.slug}</span>
                    )}
                  </div>
                </div>

                <div className={styles.artigoAcoes}>
                  <Button
                    component={Link}
                    href={`/admin/artigos/${artigo.id}`}
                    startIcon={<EditOutlinedIcon />}
                    className={styles.botaoEditar}
                  >
                    Editar
                  </Button>

                  <button
                    type="button"
                    aria-label={`Excluir ${artigo.titulo || "artigo"}`}
                    title="Excluir artigo"
                    className={styles.botaoExcluir}
                    onClick={() => setArtigoExcluir(artigo)}
                  >
                    <DeleteOutlineIcon />
                  </button>

                  <ArrowForwardIcon className={styles.setaArtigo} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Dialog
        open={Boolean(artigoExcluir)}
        onClose={() => !excluindo && setArtigoExcluir(null)}
        PaperProps={{
          className: styles.dialogExcluir,
        }}
      >
        <DialogTitle>Excluir artigo?</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Você está prestes a excluir{" "}
            <strong>{artigoExcluir?.titulo || "este artigo"}</strong>. Essa ação
            não poderá ser desfeita.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setArtigoExcluir(null)} disabled={excluindo}>
            Cancelar
          </Button>

          <Button
            onClick={confirmarExclusao}
            color="error"
            variant="contained"
            disabled={excluindo}
          >
            {excluindo ? "Excluindo..." : "Excluir artigo"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={notificacao.aberta}
        autoHideDuration={4000}
        onClose={() =>
          setNotificacao((anterior) => ({
            ...anterior,
            aberta: false,
          }))
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          severity={notificacao.tipo}
          variant="filled"
          onClose={() =>
            setNotificacao((anterior) => ({
              ...anterior,
              aberta: false,
            }))
          }
        >
          {notificacao.mensagem}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default function Artigos() {
  return (
    <Admin>
      <ConteudoArtigos />
    </Admin>
  );
}
