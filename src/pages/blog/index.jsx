import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../../firebase-config";

import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import Whats from "../../components/whats";

import styles from "../../styles/blog/Blog.module.css";

const formatarData = (valor) => {
  if (!valor) return "";

  const data = valor?.toDate ? valor.toDate() : new Date(valor);

  if (Number.isNaN(data.getTime())) return "";

  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const obterData = (artigo) => {
  const valor = artigo.publicadoEm || artigo.criadoEm;

  if (!valor) return 0;

  return valor?.toDate ? valor.toDate().getTime() : new Date(valor).getTime();
};

export default function Blog() {
  const [artigos, setArtigos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [palavrasChave, setPalavrasChave] = useState([]);

  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("");
  const [palavraAtiva, setPalavraAtiva] = useState("");

  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let ativo = true;

    const carregarBlog = async () => {
      try {
        const consultaArtigos = query(
          collection(db, "artigos"),
          where("status", "==", "publicado"),
        );

        const [artigosSnap, categoriasSnap, palavrasSnap] = await Promise.all([
          getDocs(consultaArtigos),
          getDocs(collection(db, "categorias")),
          getDocs(collection(db, "palavras-chave")),
        ]);

        if (!ativo) return;

        const artigosCarregados = artigosSnap.docs
          .map((documento) => ({
            id: documento.id,
            ...documento.data(),
          }))
          .sort((a, b) => obterData(b) - obterData(a));

        setArtigos(artigosCarregados);

        setCategorias(
          categoriasSnap.docs
            .map((documento) => ({
              id: documento.id,
              ...documento.data(),
            }))
            .sort((a, b) => (a.nome || "").localeCompare(b.nome || "")),
        );

        setPalavrasChave(
          palavrasSnap.docs
            .map((documento) => ({
              id: documento.id,
              ...documento.data(),
            }))
            .sort((a, b) => (a.nome || "").localeCompare(b.nome || "")),
        );
      } catch (error) {
        console.error("Erro ao carregar blog:", error);
        if (ativo) setErro(true);
      } finally {
        if (ativo) setCarregando(false);
      }
    };

    carregarBlog();

    return () => {
      ativo = false;
    };
  }, []);

  const artigosFiltrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    return artigos.filter((artigo) => {
      const correspondeBusca =
        !termo ||
        artigo.titulo?.toLowerCase().includes(termo) ||
        artigo.resumo?.toLowerCase().includes(termo) ||
        artigo.conteudoHtml?.toLowerCase().includes(termo);

      const correspondeCategoria =
        !categoriaAtiva || artigo.categoriaId === categoriaAtiva;

      const correspondePalavra =
        !palavraAtiva ||
        (Array.isArray(artigo.palavrasChave) &&
          artigo.palavrasChave.some((palavra) =>
            typeof palavra === "string"
              ? palavra === palavraAtiva
              : palavra?.id === palavraAtiva,
          ));

      return correspondeBusca && correspondeCategoria && correspondePalavra;
    });
  }, [artigos, busca, categoriaAtiva, palavraAtiva]);

  const artigoDestaque = artigosFiltrados[0];
  const demaisArtigos = artigosFiltrados.slice(1);

  const limparFiltros = () => {
    setBusca("");
    setCategoriaAtiva("");
    setPalavraAtiva("");
  };

  return (
    <>
      <Head>
        <title>Blog | Agência AL</title>
        <meta
          name="description"
          content="Ideias, estratégias e conteúdos sobre marketing, tecnologia, criatividade e negócios. Acompanhe o blog da Agência AL."
        />
        <meta property="og:title" content="Blog | Agência AL" />
        <meta
          property="og:description"
          content="Ideias que movimentam marcas, negócios e o digital."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Menu />

      <main className={styles.blog}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <span className={styles.overline}>
              Agência AL / IDEIAS EM MOVIMENTO
            </span>

            <h1>
              Informação que
              <br />
              <span>move ideias.</span>
            </h1>

            <p>
              Estratégia, criatividade, tecnologia e tudo aquilo que pode
              transformar a maneira como sua marca se posiciona no mundo.
            </p>

            <div className={styles.heroBottom}>
              <span>CONTEÚDO PARA IR ALÉM DO ÓBVIO.</span>
              <span>01 — BLOG Agência AL</span>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.overline}>NOSSO PONTO DE VISTA</span>
                <h2>Ideias, insights e repertório.</h2>
              </div>

              <span className={styles.articleTotal}>
                {artigos.length.toString().padStart(2, "0")} PUBLICAÇÕES
              </span>
            </div>

            <div className={styles.filters}>
              <div className={styles.searchBox}>
                <span>⌕</span>
                <input
                  type="search"
                  placeholder="O que você procura?"
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />
              </div>

              <div className={styles.filterGroup}>
                <button
                  type="button"
                  className={!categoriaAtiva ? styles.filterActive : ""}
                  onClick={() => setCategoriaAtiva("")}
                >
                  Todas
                </button>

                {categorias.map((categoria) => (
                  <button
                    type="button"
                    key={categoria.id}
                    className={
                      categoriaAtiva === categoria.id ? styles.filterActive : ""
                    }
                    onClick={() =>
                      setCategoriaAtiva(
                        categoriaAtiva === categoria.id ? "" : categoria.id,
                      )
                    }
                  >
                    {categoria.nome}
                  </button>
                ))}
              </div>

              {palavrasChave.length > 0 && (
                <div className={styles.keywordFilter}>
                  <span>EXPLORAR POR ASSUNTO</span>

                  <div>
                    {palavrasChave.map((palavra) => (
                      <button
                        type="button"
                        key={palavra.id}
                        className={
                          palavraAtiva === palavra.id
                            ? styles.keywordActive
                            : ""
                        }
                        onClick={() =>
                          setPalavraAtiva(
                            palavraAtiva === palavra.id ? "" : palavra.id,
                          )
                        }
                      >
                        #{palavra.nome}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {carregando ? (
              <div className={styles.stateMessage}>
                <span className={styles.loader} />
                <p>Carregando ideias...</p>
              </div>
            ) : erro ? (
              <div className={styles.stateMessage}>
                <h3>Não foi possível carregar os artigos.</h3>
                <p>Tente novamente em alguns instantes.</p>
              </div>
            ) : artigosFiltrados.length === 0 ? (
              <div className={styles.stateMessage}>
                <h3>Nenhum artigo encontrado.</h3>
                <p>Experimente outros termos ou remova os filtros.</p>
                <button onClick={limparFiltros} type="button">
                  Limpar filtros
                </button>
              </div>
            ) : (
              <>
                {artigoDestaque && (
                  <Link
                    href={`/blog/${artigoDestaque.slug}`}
                    className={styles.featured}
                  >
                    <div className={styles.featuredVisual}>
                      <span>DESTAQUE / Agência AL</span>
                      <strong>{artigoDestaque.categoriaNome || "BLOG"}</strong>
                      <div className={styles.featuredShape}>
                        <span>AL</span>
                      </div>
                    </div>

                    <div className={styles.featuredInfo}>
                      <div className={styles.articleMeta}>
                        <span>
                          {artigoDestaque.categoriaNome || "Agência AL"}
                        </span>
                        <span>
                          {formatarData(
                            artigoDestaque.publicadoEm ||
                              artigoDestaque.criadoEm,
                          )}
                        </span>
                      </div>

                      <h2>{artigoDestaque.titulo}</h2>

                      <p>
                        {artigoDestaque.resumo ||
                          "Confira este conteúdo no blog da Agência AL."}
                      </p>

                      <div className={styles.readMore}>
                        LER ARTIGO <span>↗</span>
                      </div>
                    </div>
                  </Link>
                )}

                {demaisArtigos.length > 0 && (
                  <div className={styles.articleGrid}>
                    {demaisArtigos.map((artigo, index) => (
                      <Link
                        href={`/blog/${artigo.slug}`}
                        className={styles.articleCard}
                        key={artigo.id}
                      >
                        <div className={styles.cardTop}>
                          <span>{(index + 2).toString().padStart(2, "0")}</span>
                          <span>↗</span>
                        </div>

                        <div className={styles.cardContent}>
                          <div className={styles.articleMeta}>
                            <span>{artigo.categoriaNome || "Agência AL"}</span>
                            <span>
                              {formatarData(
                                artigo.publicadoEm || artigo.criadoEm,
                              )}
                            </span>
                          </div>

                          <h3>{artigo.titulo}</h3>

                          <p>
                            {artigo.resumo ||
                              "Continue a leitura e confira nossas ideias."}
                          </p>

                          <div className={styles.cardKeywords}>
                            {artigo.palavrasChave
                              ?.slice(0, 3)
                              .map((palavra, i) => (
                                <span key={palavra.id || i}>
                                  #{palavra.nome || palavra}
                                </span>
                              ))}
                          </div>
                        </div>

                        <div className={styles.cardFooter}>
                          <span>CONTINUAR LENDO</span>
                          <span>↗</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className={styles.manifesto}>
          <div className={styles.container}>
            <span className={styles.overline}>
              NÃO É SOBRE ACOMPANHAR TENDÊNCIAS.
            </span>
            <h2>
              É sobre entender
              <span> o que vem depois.</span>
            </h2>
            <p>
              O digital não para. E boas ideias também não. Continue explorando,
              questionando e construindo.
            </p>
          </div>
        </section>
      </main>

      <Rodape />
      <Whats />
    </>
  );
}
