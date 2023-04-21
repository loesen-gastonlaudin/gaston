import Script from 'next/script';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BGCVPZTK6M"></Script>
    <Script>
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-BGCVPZTK6M');`}
    </Script>
    <Component {...pageProps} />
  </>)
}

export default MyApp
