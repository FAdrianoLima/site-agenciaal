import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CKCMZGYHQC"
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

    gtag('config', 'G-CKCMZGYHQC', {
      page_path: window.location.pathname,
    });
  `}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
        strategy="afterInteractive"
      />

      <Script id="google-ads" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-XXXXXXXXX');
  `}
      </Script>

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
