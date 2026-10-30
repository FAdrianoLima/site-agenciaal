import * as React from "react";
import { useRouter } from "next/router";

import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TitleIcon from "@mui/icons-material/Title";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import TableChartIcon from "@mui/icons-material/TableChart";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";

import { db } from "../../firebase-config";
import styles from "../styles/admin/EditorArtigo.module.css";

const gerarSlug = (texto = "") => {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const formatarDataLocal = (data) => {
  if (!data) return "";

  const valor = data?.toDate ? data.toDate() : new Date(data);

  if (Number.isNaN(valor.getTime())) return "";

  const pad = (numero) => String(numero).padStart(2, "0");

  return `${valor.getFullYear()}-${pad(valor.getMonth() + 1)}-${pad(
    valor.getDate(),
  )}T${pad(valor.getHours())}:${pad(valor.getMinutes())}`;
};

const obterNomePalavra = (palavra, todas) => {
  if (!palavra.parentId) return palavra.nome;

  const pai = todas.find((item) => item.id === palavra.parentId);

  return pai ? `${pai.nome} / ${palavra.nome}` : palavra.nome;
};

const ToolbarButton = ({ active, onClick, title, children, disabled }) => (
  <button
    type="button"
    title={title}
    aria-label={title}
    disabled={disabled}
    onClick={onClick}
    className={`${styles.toolbarButton} ${active ? styles.toolbarActive : ""}`}
  >
    {children}
  </button>
);

export default function EditorArtigo({ artigoId = null, initialData = null }) {
  const router = useRouter();
  const editando = Boolean(artigoId);

  const [titulo, setTitulo] = React.useState(initialData?.titulo || "");
  const [slug, setSlug] = React.useState(initialData?.slug || "");
  const [slugManual, setSlugManual] = React.useState(
    Boolean(initialData?.slug),
  );
  const [resumo, setResumo] = React.useState(initialData?.resumo || "");

  const [categoriaId, setCategoriaId] = React.useState(
    initialData?.categoriaId || "",
  );

  const [palavrasSelecionadas, setPalavrasSelecionadas] = React.useState(
    (initialData?.palavrasChave || []).map((item) =>
      typeof item === "string" ? item : item.id,
    ),
  );

  const [seoTitle, setSeoTitle] = React.useState(
    initialData?.seoTitle || initialData?.titulo || "",
  );

  const [seoDescription, setSeoDescription] = React.useState(
    initialData?.seoDescription || initialData?.resumo || "",
  );

  const [agendadoPara, setAgendadoPara] = React.useState(
    formatarDataLocal(initialData?.agendadoPara),
  );

  const [categorias, setCategorias] = React.useState([]);
  const [palavrasChave, setPalavrasChave] = React.useState([]);

  const [salvando, setSalvando] = React.useState(false);
  const [erro, setErro] = React.useState("");
  const [notificacao, setNotificacao] = React.useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
      Table.configure({
        resizable: false,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialData?.conteudo || "",
    onUpdate: ({ editor: instancia }) => {
      // O conteúdo é obtido diretamente do editor no momento do salvamento.
    },
    editorProps: {
      attributes: {
        class: styles.editorProse,
        spellcheck: "true",
      },
    },
  });

  React.useEffect(() => {
    const unsubscribeCategorias = onSnapshot(
      collection(db, "categorias"),
      (snapshot) => {
        setCategorias(
          snapshot.docs
            .map((item) => ({ id: item.id, ...item.data() }))
            .sort((a, b) =>
              (a.nome || "").localeCompare(b.nome || "", "pt-BR"),
            ),
        );
      },
      (error) => console.error("Erro ao carregar categorias:", error),
    );

    const unsubscribePalavras = onSnapshot(
      collection(db, "palavras-chave"),
      (snapshot) => {
        setPalavrasChave(
          snapshot.docs
            .map((item) => ({ id: item.id, ...item.data() }))
            .sort((a, b) =>
              (a.nome || "").localeCompare(b.nome || "", "pt-BR"),
            ),
        );
      },
      (error) => console.error("Erro ao carregar palavras-chave:", error),
    );

    return () => {
      unsubscribeCategorias();
      unsubscribePalavras();
    };
  }, []);

  React.useEffect(() => {
    if (!slugManual) {
      setSlug(gerarSlug(titulo));
    }
  }, [titulo, slugManual]);

  React.useEffect(() => {
    if (!seoTitle && titulo) setSeoTitle(titulo);
  }, [titulo, seoTitle]);

  React.useEffect(() => {
    if (!seoDescription && resumo) setSeoDescription(resumo);
  }, [resumo, seoDescription]);

  const categoriaSelecionada = categorias.find(
    (item) => item.id === categoriaId,
  );

  const palavrasSelecionadasDados = palavrasChave
    .filter((item) => palavrasSelecionadas.includes(item.id))
    .map((item) => ({
      id: item.id,
      nome: item.nome,
      slug: item.slug || gerarSlug(item.nome),
      parentId: item.parentId || null,
    }));

  const adicionarLink = () => {
    if (!editor) return;

    const linkAtual = editor.getAttributes("link").href || "";
    const url = window.prompt("Informe o endereço do link:", linkAtual);

    if (url === null) return;

    if (!url.trim()) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    const urlFinal = /^https?:\/\//i.test(url) ? url : `https://${url}`;

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: urlFinal })
      .run();
  };

  const adicionarTabela = () => {
    if (!editor) return;

    editor
      .chain()
      .focus()
      .insertTable({
        rows: 3,
        cols: 3,
        withHeaderRow: true,
      })
      .run();
  };

  const salvarArtigo = async (status) => {
    setErro("");

    if (!titulo.trim()) {
      setErro("Informe o título do artigo.");
      return;
    }

    if (!slug.trim()) {
      setErro("Informe um slug válido para o artigo.");
      return;
    }

    if (status === "agendado" && !agendadoPara) {
      setErro("Informe a data e o horário da publicação agendada.");
      return;
    }

    if (status === "agendado") {
      const dataAgendada = new Date(agendadoPara);

      if (Number.isNaN(dataAgendada.getTime())) {
        setErro("A data de agendamento é inválida.");
        return;
      }

      if (dataAgendada.getTime() <= Date.now()) {
        setErro("Escolha uma data futura para o agendamento.");
        return;
      }
    }

    setSalvando(true);

    try {
      const conteudo = editor?.getJSON() || null;
      const conteudoHtml = editor?.getHTML() || "";

      const dados = {
        titulo: titulo.trim(),
        slug: gerarSlug(slug),
        resumo: resumo.trim(),
        conteudo,
        conteudoHtml,
        status,
        categoriaId: categoriaSelecionada?.id || "",
        categoriaNome: categoriaSelecionada?.nome || "",
        palavrasChave: palavrasSelecionadasDados,
        seoTitle: seoTitle.trim() || titulo.trim(),
        seoDescription: seoDescription.trim() || resumo.trim(),
        atualizadoEm: serverTimestamp(),
        agendadoPara:
          status === "agendado"
            ? Timestamp.fromDate(new Date(agendadoPara))
            : null,
      };

      if (status === "publicado") {
        dados.publicadoEm = initialData?.publicadoEm || serverTimestamp();
      }

      if (editando) {
        await updateDoc(doc(db, "artigos", artigoId), dados);
        setNotificacao("Artigo atualizado com sucesso.");
        router.push("/admin/artigos");
      } else {
        dados.criadoEm = serverTimestamp();

        const novoArtigo = await addDoc(collection(db, "artigos"), dados);

        setNotificacao("Artigo criado com sucesso.");
        router.push(`/admin/artigos/${novoArtigo.id}`);
      }
    } catch (error) {
      console.error("Erro ao salvar artigo:", error);
      setErro("Não foi possível salvar o artigo. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  if (!editor) {
    return (
      <div className={styles.carregandoEditor}>
        <CircularProgress />
        <p>Preparando editor...</p>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <header className={styles.topo}>
        <div>
          <span className={styles.eyebrow}>
            CONTEÚDO / BLOG / {editando ? "EDIÇÃO" : "NOVO"}
          </span>

          <Typography component="h1" className={styles.titulo}>
            {editando ? "Editar artigo" : "Novo artigo"}
            <span>.</span>
          </Typography>

          <p className={styles.subtitulo}>
            Produza, organize e otimize seu conteúdo para os mecanismos de
            busca.
          </p>
        </div>

        <Button
          onClick={() => router.push("/admin/artigos")}
          className={styles.botaoVoltar}
        >
          Voltar para artigos
        </Button>
      </header>

      {erro && (
        <Alert
          severity="error"
          onClose={() => setErro("")}
          className={styles.alerta}
        >
          {erro}
        </Alert>
      )}

      <div className={styles.layout}>
        <main className={styles.colunaPrincipal}>
          <section className={styles.bloco}>
            <div className={styles.blocoCabecalho}>
              <span>01</span>
              <div>
                <h2>Informações do artigo</h2>
                <p>Comece pelo título e pela apresentação do conteúdo.</p>
              </div>
            </div>

            <TextField
              label="Título do artigo"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              fullWidth
              placeholder="Ex.: Como construir uma presença digital forte"
              className={styles.campo}
            />

            <div className={styles.slugCampo}>
              <TextField
                label="URL / Slug"
                value={slug}
                onChange={(event) => {
                  setSlugManual(true);
                  setSlug(gerarSlug(event.target.value));
                }}
                fullWidth
                helperText={`Endereço: /blog/${slug || "seu-artigo"}`}
                className={styles.campo}
              />

              <Button
                className={styles.botaoSlug}
                onClick={() => {
                  setSlugManual(false);
                  setSlug(gerarSlug(titulo));
                }}
              >
                Gerar do título
              </Button>
            </div>

            <TextField
              label="Resumo / Introdução"
              value={resumo}
              onChange={(event) => setResumo(event.target.value)}
              fullWidth
              multiline
              minRows={3}
              maxRows={6}
              inputProps={{ maxLength: 300 }}
              helperText={`${resumo.length}/300 caracteres`}
              placeholder="Escreva um resumo que apresente o assunto e desperte o interesse pela leitura."
              className={styles.campo}
            />
          </section>

          <section className={styles.bloco}>
            <div className={styles.blocoCabecalho}>
              <span>02</span>
              <div>
                <h2>Conteúdo</h2>
                <p>Estruture o texto com títulos, listas, links e tabelas.</p>
              </div>
            </div>

            <div className={styles.editorContainer}>
              <div className={styles.toolbar}>
                <ToolbarButton
                  title="Título 2"
                  active={editor.isActive("heading", { level: 2 })}
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  <TitleIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Título 3"
                  active={editor.isActive("heading", { level: 3 })}
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                >
                  <span className={styles.toolbarTexto}>H3</span>
                </ToolbarButton>

                <span className={styles.toolbarSeparador} />

                <ToolbarButton
                  title="Negrito"
                  active={editor.isActive("bold")}
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  <FormatBoldIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Itálico"
                  active={editor.isActive("italic")}
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  <FormatItalicIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Tachado"
                  active={editor.isActive("strike")}
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                  <FormatStrikethroughIcon />
                </ToolbarButton>

                <span className={styles.toolbarSeparador} />

                <ToolbarButton
                  title="Lista com marcadores"
                  active={editor.isActive("bulletList")}
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                >
                  <FormatListBulletedIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Lista numerada"
                  active={editor.isActive("orderedList")}
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                >
                  <FormatListNumberedIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Citação"
                  active={editor.isActive("blockquote")}
                  onClick={() =>
                    editor.chain().focus().toggleBlockquote().run()
                  }
                >
                  <FormatQuoteIcon />
                </ToolbarButton>

                <span className={styles.toolbarSeparador} />

                <ToolbarButton
                  title="Inserir link"
                  active={editor.isActive("link")}
                  onClick={adicionarLink}
                >
                  <LinkOutlinedIcon />
                </ToolbarButton>

                <ToolbarButton title="Inserir tabela" onClick={adicionarTabela}>
                  <TableChartIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Linha divisória"
                  onClick={() =>
                    editor.chain().focus().setHorizontalRule().run()
                  }
                >
                  <HorizontalRuleIcon />
                </ToolbarButton>

                <span className={styles.toolbarSeparador} />

                <ToolbarButton
                  title="Desfazer"
                  disabled={!editor.can().undo()}
                  onClick={() => editor.chain().focus().undo().run()}
                >
                  <UndoIcon />
                </ToolbarButton>

                <ToolbarButton
                  title="Refazer"
                  disabled={!editor.can().redo()}
                  onClick={() => editor.chain().focus().redo().run()}
                >
                  <RedoIcon />
                </ToolbarButton>
              </div>

              <EditorContent editor={editor} />
            </div>

            <p className={styles.dicaEditor}>
              Dica: utilize títulos H2 e H3 para organizar a leitura e facilitar
              a interpretação do conteúdo pelos mecanismos de busca.
            </p>
          </section>

          <section className={styles.bloco}>
            <div className={styles.blocoCabecalho}>
              <span>03</span>
              <div>
                <h2>Otimização para SEO</h2>
                <p>
                  Defina como o artigo poderá aparecer nos resultados de busca.
                </p>
              </div>
            </div>

            <TextField
              label="Título para SEO"
              value={seoTitle}
              onChange={(event) => setSeoTitle(event.target.value)}
              fullWidth
              inputProps={{ maxLength: 70 }}
              helperText={`${seoTitle.length}/70 caracteres`}
              className={styles.campo}
            />

            <TextField
              label="Descrição para SEO"
              value={seoDescription}
              onChange={(event) => setSeoDescription(event.target.value)}
              fullWidth
              multiline
              minRows={3}
              maxRows={5}
              inputProps={{ maxLength: 160 }}
              helperText={`${seoDescription.length}/160 caracteres`}
              className={styles.campo}
            />

            <div className={styles.previewSeo}>
              <span className={styles.previewLabel}>
                PRÉVIA NOS RESULTADOS DE BUSCA
              </span>
              <p className={styles.previewUrl}>
                https://seudominio.com.br/blog/{slug || "seu-artigo"}
              </p>
              <h3>{seoTitle || titulo || "Título do seu artigo"}</h3>
              <p>
                {seoDescription ||
                  resumo ||
                  "A descrição do artigo aparecerá aqui nos resultados de busca."}
              </p>
            </div>
          </section>
        </main>

        <aside className={styles.colunaLateral}>
          <section className={styles.blocoLateral}>
            <h2>Publicação</h2>

            <div className={styles.statusAtual}>
              <span className={styles.pontoStatus} />
              {initialData?.status
                ? initialData.status.charAt(0).toUpperCase() +
                  initialData.status.slice(1)
                : "Novo artigo"}
            </div>

            <Button
              fullWidth
              startIcon={<SaveOutlinedIcon />}
              disabled={salvando}
              onClick={() => salvarArtigo("rascunho")}
              className={styles.botaoRascunho}
            >
              Salvar rascunho
            </Button>

            <Button
              fullWidth
              startIcon={<SendOutlinedIcon />}
              disabled={salvando}
              onClick={() => salvarArtigo("publicado")}
              className={styles.botaoPublicar}
            >
              Publicar agora
            </Button>

            <div className={styles.agendamento}>
              <label htmlFor="agendadoPara">
                <ScheduleOutlinedIcon />
                Agendar publicação
              </label>

              <TextField
                id="agendadoPara"
                type="datetime-local"
                value={agendadoPara}
                onChange={(event) => setAgendadoPara(event.target.value)}
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
                className={styles.campoData}
              />

              <Button
                fullWidth
                disabled={salvando}
                onClick={() => salvarArtigo("agendado")}
                className={styles.botaoAgendar}
              >
                Agendar artigo
              </Button>
            </div>

            {salvando && (
              <div className={styles.salvando}>
                <CircularProgress size={18} />
                Salvando...
              </div>
            )}
          </section>

          <section className={styles.blocoLateral}>
            <h2>Organização</h2>

            <FormControl fullWidth size="small" className={styles.campoSelect}>
              <InputLabel id="categoria-artigo-label">Categoria</InputLabel>
              <Select
                labelId="categoria-artigo-label"
                value={categoriaId}
                label="Categoria"
                onChange={(event) => setCategoriaId(event.target.value)}
              >
                <MenuItem value="">
                  <em>Sem categoria</em>
                </MenuItem>

                {categorias.map((categoria) => (
                  <MenuItem key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small" className={styles.campoSelect}>
              <InputLabel id="palavras-artigo-label">Palavras-chave</InputLabel>
              <Select
                labelId="palavras-artigo-label"
                multiple
                value={palavrasSelecionadas}
                label="Palavras-chave"
                onChange={(event) =>
                  setPalavrasSelecionadas(event.target.value)
                }
                renderValue={(selecionadas) => (
                  <Box className={styles.chipsSelecionadas}>
                    {selecionadas.map((id) => {
                      const palavra = palavrasChave.find(
                        (item) => item.id === id,
                      );

                      return palavra ? (
                        <Chip
                          key={id}
                          size="small"
                          label={obterNomePalavra(palavra, palavrasChave)}
                        />
                      ) : null;
                    })}
                  </Box>
                )}
              >
                {palavrasChave.map((palavra) => (
                  <MenuItem key={palavra.id} value={palavra.id}>
                    {palavra.parentId ? "↳ " : ""}
                    {obterNomePalavra(palavra, palavrasChave)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {palavrasChave.length === 0 && (
              <p className={styles.avisoPalavras}>
                Nenhuma palavra-chave cadastrada. Você poderá criá-las na seção
                Palavras-chave do CMS.
              </p>
            )}
          </section>

          <section className={styles.blocoLateral}>
            <h2>Resumo do artigo</h2>

            <div className={styles.resumoInfo}>
              <span>Palavras no conteúdo</span>
              <strong>
                {(editor.getText().trim().match(/\S+/g) || []).length}
              </strong>
            </div>

            <div className={styles.resumoInfo}>
              <span>Caracteres do resumo</span>
              <strong>{resumo.length}/300</strong>
            </div>

            <div className={styles.resumoInfo}>
              <span>Palavras-chave</span>
              <strong>{palavrasSelecionadas.length}</strong>
            </div>

            <div className={styles.resumoInfo}>
              <span>Categoria</span>
              <strong>{categoriaSelecionada?.nome || "Não definida"}</strong>
            </div>
          </section>
        </aside>
      </div>

      <Snackbar
        open={Boolean(notificacao)}
        autoHideDuration={3500}
        onClose={() => setNotificacao("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          {notificacao}
        </Alert>
      </Snackbar>
    </div>
  );
}
