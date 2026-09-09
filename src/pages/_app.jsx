import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());

          gtag('config', 'G-XXXXXXXXXX', {
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


      <script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
<script>
    // Version: 2.0
    window.Brevo = window.Brevo || [];
    Brevo.push([
        "init",
        {
        client_key: "43w4gqwzpxuhs3thydcz9m15",
        // Optional: Add other initialization options, see documentation
        }
    ]);
</script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
