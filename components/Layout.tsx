import { useEffect, useState } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Personal website of Jus Buckingham." />
        <link rel="icon" href="/favicon.ico" />
        <title>Jus Buckingham</title>
      </Head>
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
