import Link from "next/link";
import Head from "next/head";

export default function Error404() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Head>
        <title>Página não encontrada | Agência AL</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>O conteúdo que você procura não existe ou foi removido.</p>

      <Link href="/">Voltar para a página inicial</Link>
    </main>
  );
}
