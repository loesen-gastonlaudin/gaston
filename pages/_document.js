// Package Imports
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID_DIGITALLAB } from '../lib/gtm';

// Component Imports

// Config Imports

// Custom Hook Imports

// Helper Imports

// Icon Imports

// Exported Component
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta
            name='description'
            content='Centro de reciclado de vehículos legales de la Argentina, con más de 40.000 vehículos procesados.'
          />
          <meta
            name='keywords'
            content='Vehiculos, Reciclado, Motores, Cajas de Velocidades, Carrocería, Puerta, Capot, Baúl'
          />
          <meta name='author' content='Loesen SA' />
        </Head>
        <body className='bg-gray-50'>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID_DIGITALLAB}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
