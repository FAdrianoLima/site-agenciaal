import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../../firebase-config";

import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import Whats from "../../components/whats";

import styles from "../../styles/blog/Artigo.module.css";

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

export default function ArtigoBlog() {
  const router = useRouter();
  const { slug } = router.query;

  const [artigo, setArtigo] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [naoEncontrado, setNaoEncontrado] = useState(false);

  useEffect(() => {
    if (!router.isReady || !slug) return;

    let ativo = true;

    const carregarArtigo = async () => {
      setCarregando(true);
      setNaoEncontrado(false);

      try {
        // A consulta já limita a leitura aos artigos publicados.
        const consulta = query(
          collection(db, "artigos"),
          where("status", "==", "publicado"),
        );

        const snapshot = await getDocs(consulta);

        const todosArtigos = snapshot.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));

        const encontrado = todosArtigos.find((item) => item.slug === slug);

        if (!ativo) return;

        if (!encontrado) {
          setArtigo(null);
          setNaoEncontrado(true);
          return;
        }

        setArtigo(encontrado);

        const outros = todosArtigos
          .filter(
            (item) =>
              item.id !== encontrado.id &&
              encontrado.categoriaId &&
              item.categoriaId === encontrado.categoriaId,
          )
          .slice(0, 3);

        setRelacionados(outros);
      } catch (error) {
        console.error("Erro ao carregar artigo:", error);
        if (ativo) setNaoEncontrado(true);
      } finally {
        if (ativo) setCarregando(false);
      }
    };

    carregarArtigo();

    return () => {
      ativo = false;
    };
  }, [router.isReady, slug]);

  const tituloSEO = artigo?.seoTitle || artigo?.titulo || "Blog | Agência AL";

  const descricaoSEO =
    artigo?.seoDescription ||
    artigo?.resumo ||
    "Confira os conteúdos da Agência AL.";

  const urlSite = process.env.NEXT_PUBLIC_SITE_URL || "";
  const urlArtigo = artigo?.slug ? `${urlSite}/blog/${artigo.slug}` : "";

  if (carregando) {
    return (
      <>
        <Menu />
        <main className={styles.loading}>
          <span />
          <p>Carregando artigo...</p>
        </main>
        <Rodape />
        <Whats />
      </>
    );
  }

  if (naoEncontrado || !artigo) {
    return (
      <>
        <Head>
          <title>Artigo não encontrado | Agência AL</title>
          <meta name="robots" content="noindex" />
        </Head>

        <Menu />

        <main className={`${styles.notFound} mt-60`}>
          <span>404 / CONTEÚDO NÃO ENCONTRADO</span>
          <h1>Essa ideia ainda não chegou por aqui.</h1>
          <p>
            O artigo pode ter sido removido ou ainda não estar disponível
            publicamente.
          </p>

          <Link href="/blog">Voltar ao blog ↗</Link>
        </main>

        <Rodape />
        <Whats />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{tituloSEO} | Agência AL</title>

        <meta name="description" content={descricaoSEO} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={tituloSEO} />
        <meta property="og:description" content={descricaoSEO} />

        {urlArtigo && (
          <>
            <meta property="og:url" content={urlArtigo} />
            <link rel="canonical" href={urlArtigo} />
          </>
        )}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={tituloSEO} />
        <meta name="twitter:description" content={descricaoSEO} />
      </Head>

      <Menu />

      <main className={styles.articlePage}>
        <header className={styles.articleHeader}>
          <div className={`${styles.container} `}>
            <Link href="/blog" className={`${styles.backLink} mt-10`}>
              ← VOLTAR AO BLOG
            </Link>

            <div className={styles.articleMeta}>
              <span>{artigo.categoriaNome || "Agência AL"}</span>
              <span>{formatarData(artigo.publicadoEm || artigo.criadoEm)}</span>
            </div>

            <h1>{artigo.titulo}</h1>

            {artigo.resumo && <p className={styles.excerpt}>{artigo.resumo}</p>}

            {Array.isArray(artigo.palavrasChave) &&
              artigo.palavrasChave.length > 0 && (
                <div className={styles.keywords}>
                  {artigo.palavrasChave.map((palavra, index) => (
                    <span key={palavra.id || index}>
                      #{palavra.nome || palavra}
                    </span>
                  ))}
                </div>
              )}
          </div>
        </header>

        <section className={styles.bodySection}>
          <article
            className={styles.articleBody}
            dangerouslySetInnerHTML={{
              __html: artigo.conteudoHtml || "",
            }}
          />

          <div className={styles.articleEnd}>
            <span>FIM DA LEITURA</span>
            <strong>IDEIAS EM MOVIMENTO. / Agência AL</strong>
          </div>
        </section>

        {relacionados.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.container}>
              <span className={styles.relatedEyebrow}>CONTINUE EXPLORANDO</span>

              <h2>Outras ideias para você.</h2>

              <div className={styles.relatedGrid}>
                {relacionados.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className={styles.relatedCard}
                  >
                    <span>{item.categoriaNome || "Agência AL"}</span>
                    <h3>{item.titulo}</h3>
                    <p>{item.resumo}</p>
                    <strong>LER ARTIGO ↗</strong>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.backToBlog}>
          <span>MAIS IDEIAS. MAIS POSSIBILIDADES.</span>
          <h2>O próximo insight pode estar no próximo artigo.</h2>
          <Link href="/blog">EXPLORAR O BLOG ↗</Link>
        </section>
      </main>

      <Rodape />
      <Whats />
    </>
  );
}
