import { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import '../styles/globals.css';
import Loading from './chest/Loading';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };
    const endLoading = () => setLoading(false);
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>Номлог | Хамгийн том номын систем</title>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
