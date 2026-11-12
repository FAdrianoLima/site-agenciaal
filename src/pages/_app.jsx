import "../styles/globals.css";

import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Registra as mudanças de página no Google Analytics
  useEffect(() => {
    if (!GA_ID) return;

    const handleRouteChange = (url) => {
      window.gtag?.("config", GA_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics e Google Ads */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              window.gtag = gtag;

              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}

      {/* Brevo */}
      <Script
        src="https://cdn.brevo.com/js/sdk-loader.js"
        strategy="afterInteractive"
      />

      <Script id="brevo-tracker" strategy="afterInteractive">
        {`
          window.Brevo = window.Brevo || [];

          window.Brevo.push([
            "init",
            {
              client_key: "f09inoz30qqsg5mmku0sy2a5"
            }
          ]);
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
