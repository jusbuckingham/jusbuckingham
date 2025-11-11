import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jus Buckingham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Official site of Jus Buckingham — entrepreneur, AI engineer, and producer." />
        <meta name="theme-color" content="#dc143c" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jus Buckingham" />
        <meta property="og:description" content="Entrepreneur, AI engineer, and producer." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jusbuckingham.com" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jus Buckingham" />
        <meta name="twitter:description" content="Entrepreneur, AI engineer, and producer." />
        <meta name="twitter:image" content="/images/preview.png" />

        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <meta property="og:site_name" content="Jus Buckingham" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://jusbuckingham.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jus Buckingham" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;