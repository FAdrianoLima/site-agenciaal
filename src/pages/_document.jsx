import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentosSite extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Agência AL | Marketing Digital, Websites e Tecnologia</title>

          <meta
            name="description"
            content="Agência AL especializada em Marketing Digital, Desenvolvimento de Websites, SEO, Google Ads, Meta Ads, Branding e Tecnologia para empresas."
          />

          <meta
            name="keywords"
            content="Agência AL, agência de marketing, marketing digital, desenvolvimento web, websites, SEO, Google Ads, Meta Ads, branding, Caxias do Sul"
          />

          <meta name="author" content="Agência AL" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Agência AL" />
          <meta
            property="og:description"
            content="Marketing, Tecnologia e Comunicação unidos para gerar resultados."
          />
          <meta property="og:url" content="https://www.agenciaal.com.br" />
          <meta
            property="og:image"
            content="https://www.agenciaal.com.br/og.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />

          <link rel="canonical" href="https://www.agenciaal.com.br/" />

          <link rel="icon" href="/favicon.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Syne:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentosSite;
