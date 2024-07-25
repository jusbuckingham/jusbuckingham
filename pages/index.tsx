import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useInterval } from 'react-use';

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date());
  const [bgColor, setBgColor] = useState('bg-gray-50');

  useInterval(() => {
    setTime(new Date());
  }, 60000); // Update every minute

  useEffect(() => {
    const hour = time.getHours();
    if (hour >= 6 && hour < 9) {
      setBgColor('bg-gray-50');
    } else if (hour >= 9 && hour < 12) {
      setBgColor('bg-gray-100');
    } else if (hour >= 12 && hour < 15) {
      setBgColor('bg-gray-200');
    } else if (hour >= 15 && hour < 18) {
      setBgColor('bg-gray-300');
    } else if (hour >= 18 && hour < 21) {
      setBgColor('bg-gray-400');
    } else if (hour >= 21 && hour < 24) {
      setBgColor('bg-gray-500');
    } else {
      setBgColor('bg-gray-600');
    }
  }, [time]);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen py-2 ${bgColor} text-gray-800`}>
      <Head>
        <title>jusbuckingham.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-4 right-4 text-sm md:text-xl text-right space-y-1">
        <p>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <p>{time.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-4 text-crimson">
          Jus Buckingham
        </h1>

        <p className="mt-3 text-lg md:text-2xl text-gray-800">
          Technologist and Entrepreneur
        </p>

        <div className="mt-6 flex flex-col items-center justify-center max-w-4xl w-full">
          <a href="https://kofa.ai/" target="_blank" className="p-4 md:p-6 m-2 md:m-4 max-w-sm bg-neutral-200 rounded-xl shadow-lg space-y-4 hover:bg-neutral-300 transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">kofa.ai</h2>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-gray-200">
        <p className="text-gray-800 text-sm md:text-base">&copy; {new Date().getFullYear()} Jus Buckingham</p>
      </footer>
    </div>
  );
}

export default Home;
