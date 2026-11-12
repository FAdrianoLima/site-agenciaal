import Head from "next/head";

const SITE_URL = "https://www.agenciaal.com.br";

export default function SeoHead({
  title,
  description,
  path = "",
  type = "website",
  schema = true,
}) {
  const canonical = `${SITE_URL}${path}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Agência AL",
    url: SITE_URL,
    telephone: "+55 54 98116-8850",
    email: "contato@agenciaal.com.br",
    description:
      "Agência de marketing em Caxias do Sul especializada em estratégia, desenvolvimento web, gestão de redes sociais, tráfego pago e design.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Angelo Agostini",
      postalCode: "95042-090",
      addressLocality: "Caxias do Sul",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Caxias do Sul",
    },
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Agência AL",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "pt-BR",
  };

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Agência AL" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schema && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                organizationSchema,
                websiteSchema,
              ]).replace(/</g, "\\u003c"),
            }}
          />
        </>
      )}
    </Head>
  );
}
