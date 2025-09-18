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
        <meta name="theme-color" content="#dc143c" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jus Buckingham" />
        <meta property="og:description" content="Artist, technologist, and entrepreneur." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jusbuckingham.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jus Buckingham" />
        <meta name="twitter:description" content="Artist, technologist, and entrepreneur." />
        <meta name="twitter:image" content="/images/preview.png" />

        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
