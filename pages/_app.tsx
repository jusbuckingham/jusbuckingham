import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jus Buckingham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Official site of Jus Buckingham – artist, technologist, and entrepreneur." />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
