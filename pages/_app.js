import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-BGCVPZTK6M'
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-BGCVPZTK6M');`}
      </Script>
      {/* <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${gtm.GA_TRACKING_ID_DIGITALLAB}');
      `,
        }}
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
