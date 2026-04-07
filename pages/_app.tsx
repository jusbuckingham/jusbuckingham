import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jus Buckingham | Entrepreneur, Engineer & Producer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Official site of Jus Buckingham — entrepreneur, engineer, and producer. Founder of LegatePro."
          key="description"
        />
        <meta name="theme-color" content="#dc143c" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jus Buckingham" key="og:title" />
        <meta
          property="og:description"
          content="Entrepreneur, engineer, and producer. Founder of LegatePro."
          key="og:description"
        />
        <meta property="og:image" content="https://jusbuckingham.com/images/preview.png" key="og:image" />
        <meta property="og:image:alt" content="Portrait preview for Jus Buckingham" key="og:image:alt" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content="https://jusbuckingham.com/" key="og:url" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Jus Buckingham" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Entrepreneur, engineer, and producer. Founder of LegatePro."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://jusbuckingham.com/images/preview.png" key="twitter:image" />
        <meta name="twitter:image:alt" content="Portrait preview for Jus Buckingham" key="twitter:image:alt" />

        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <meta property="og:site_name" content="Jus Buckingham" key="og:site_name" />
        <meta property="og:locale" content="en_US" key="og:locale" />
        <link rel="canonical" href="https://jusbuckingham.com/" key="canonical" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" key="robots" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          key="googlebot"
        />
        <meta name="author" content="Jus Buckingham" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;