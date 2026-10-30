import * as React from "react";
import Link from "next/link";

import { collection, onSnapshot } from "firebase/firestore";

import { Box, Typography, Button, Chip, CircularProgress } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CategoryIcon from "@mui/icons-material/Category";

import Admin from "../../components/admin";
import { db } from "../../../firebase-config";

import styles from "../../styles/admin/Dashboard.module.css";

const formatarData = (data) => {
  if (!data) return "Sem data";

  try {
    const dataConvertida =
      typeof data.toDate === "function" ? data.toDate() : new Date(data);

    if (Number.isNaN(dataConvertida.getTime())) {
      return "Sem data";
    }

    return dataConvertida.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Sem data";
  }
};

const indicadores = [
  {
    id: "total",
    titulo: "Total de artigos",
    icon: ArticleIcon,
    cor: "pink",
  },
  {
    id: "publicados",
    titulo: "Publicados",
    icon: CheckCircleIcon,
    cor: "lime",
  },
  {
    id: "rascunhos",
    titulo: "Rascunhos",
    icon: EditNoteIcon,
    cor: "white",
  },
  {
    id: "agendados",
    titulo: "Agendados",
    icon: ScheduleIcon,
    cor: "black",
  },
];

function Content() {
  const [artigos, setArtigos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [erro, setErro] = React.useState("");

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "artigos"),
      (snapshot) => {
        const lista = snapshot.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));

        lista.sort((a, b) => {
          const dataA = a.criadoEm?.toDate
            ? a.criadoEm.toDate().getTime()
            : new Date(a.criadoEm || 0).getTime();

          const dataB = b.criadoEm?.toDate
            ? b.criadoEm.toDate().getTime()
            : new Date(b.criadoEm || 0).getTime();

          return dataB - dataA;
        });

        setArtigos(lista);
        setErro("");
        setLoading(false);
      },
      (error) => {
        console.error("Erro ao carregar artigos:", error);
        setErro("Não foi possível carregar os artigos.");
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const estatisticas = {
    total: artigos.length,
    publicados: artigos.filter((artigo) => artigo.status === "publicado")
      .length,
    rascunhos: artigos.filter((artigo) => artigo.status === "rascunho").length,
    agendados: artigos.filter((artigo) => artigo.status === "agendado").length,
  };

  const recentes = artigos.slice(0, 5);

  const statusConfig = {
    publicado: {
      label: "Publicado",
      className: styles.statusPublicado,
    },
    rascunho: {
      label: "Rascunho",
      className: styles.statusRascunho,
    },
    agendado: {
      label: "Agendado",
      className: styles.statusAgendado,
    },
  };

  return (
    <section className={styles.root}>
      <div className={styles.topo}>
        <div>
          <span className={styles.eyebrow}>
            <DashboardIcon fontSize="small" />
            PAINEL DE CONTROLE
          </span>

          <Typography component="h1" className={styles.titulo}>
            Seu conteúdo<span>.</span>
          </Typography>

          <p className={styles.subtitulo}>
            Bem-vindo ao seu espaço de gerenciamento. Aqui você acompanha e
            organiza o conteúdo do blog.
          </p>
        </div>

        <Link href="/admin/artigos/novo" className={styles.botaoNovo}>
          <AddIcon />
          Novo artigo
        </Link>
      </div>

      <div className={styles.indicadores}>
        {indicadores.map((indicador) => {
          const Icon = indicador.icon;

          return (
            <div
              key={indicador.id}
              className={`${styles.cardIndicador} ${styles[indicador.cor]}`}
            >
              <div className={styles.cardIndicadorTopo}>
                <span>{indicador.titulo}</span>
                <Icon />
              </div>

              <strong>
                {loading ? (
                  <CircularProgress size={25} sx={{ color: "inherit" }} />
                ) : (
                  estatisticas[indicador.id]
                )}
              </strong>
            </div>
          );
        })}
      </div>

      <div className={styles.conteudoGrid}>
        <div className={styles.painelArtigos}>
          <div className={styles.painelTopo}>
            <div>
              <span className={styles.eyebrow}>ACOMPANHAMENTO</span>
              <h2>Artigos recentes</h2>
            </div>

            <Link href="/admin/artigos" className={styles.linkTodos}>
              Ver todos <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>

          {loading ? (
            <div className={styles.estado}>
              <CircularProgress sx={{ color: "#d82087" }} />
              <p>Carregando artigos...</p>
            </div>
          ) : erro ? (
            <div className={styles.estado}>
              <p>{erro}</p>
            </div>
          ) : recentes.length === 0 ? (
            <div className={styles.vazio}>
              <div className={styles.vazioIcone}>
                <ArticleIcon />
              </div>

              <h3>Seu blog começa aqui.</h3>

              <p>
                Você ainda não cadastrou nenhum artigo. Crie seu primeiro
                conteúdo e comece a construir sua biblioteca.
              </p>

              <Link href="/admin/artigos/novo" className={styles.botaoNovo}>
                <AddIcon />
                Criar primeiro artigo
              </Link>
            </div>
          ) : (
            <div className={styles.listaArtigos}>
              {recentes.map((artigo) => {
                const status =
                  statusConfig[artigo.status] || statusConfig.rascunho;

                return (
                  <Link
                    key={artigo.id}
                    href={`/admin/artigos/${artigo.id}`}
                    className={styles.artigo}
                  >
                    <div className={styles.artigoInfo}>
                      <strong>{artigo.titulo || "Artigo sem título"}</strong>

                      <span>
                        {formatarData(artigo.criadoEm)}
                        {artigo.slug ? ` · /${artigo.slug}` : ""}
                      </span>
                    </div>

                    <Chip
                      label={status.label}
                      size="small"
                      className={status.className}
                    />

                    <ArrowForwardIcon className={styles.artigoSeta} />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <aside className={styles.acoes}>
          <span className={styles.eyebrow}>ATALHOS</span>
          <h2>O que vamos fazer?</h2>

          <Link href="/admin/artigos/novo" className={styles.acao}>
            <div className={styles.acaoIcone}>
              <AddIcon />
            </div>

            <div>
              <strong>Criar artigo</strong>
              <span>Escreva um novo conteúdo</span>
            </div>

            <ArrowForwardIcon />
          </Link>

          <Link href="/admin/artigos" className={styles.acao}>
            <div className={styles.acaoIcone}>
              <ArticleIcon />
            </div>

            <div>
              <strong>Gerenciar artigos</strong>
              <span>Consulte e edite publicações</span>
            </div>

            <ArrowForwardIcon />
          </Link>

          <Link href="/admin/categorias" className={styles.acao}>
            <div className={styles.acaoIcone}>
              <CategoryIcon />
            </div>

            <div>
              <strong>Categorias</strong>
              <span>Organize seus conteúdos</span>
            </div>

            <ArrowForwardIcon />
          </Link>

          <div className={styles.destaque}>
            <span>AGÊNCIA AL / BLOG</span>
            <strong>Conteúdo que posiciona. Estratégia que transforma.</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function Dashboard() {
  return (
    <Admin>
      <Content />
    </Admin>
  );
}
