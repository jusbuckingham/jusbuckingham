import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useInterval } from 'react-use';

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date());
  const [bgColor, setBgColor] = useState('bg-red-50');

  useInterval(() => {
    setTime(new Date());
  }, 60000); // Update every minute

  useEffect(() => {
    const hour = time.getHours();
    if (hour >= 6 && hour < 9) {
      setBgColor('bg-red-50');
    } else if (hour >= 9 && hour < 12) {
      setBgColor('bg-red-100');
    } else if (hour >= 12 && hour < 15) {
      setBgColor('bg-red-200');
    } else if (hour >= 15 && hour < 18) {
      setBgColor('bg-red-300');
    } else if (hour >= 18 && hour < 21) {
      setBgColor('bg-red-400');
    } else if (hour >= 21 && hour < 24) {
      setBgColor('bg-red-500');
    } else {
      setBgColor('bg-red-600');
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
        <h1 className="text-4xl md:text-6xl font-bold my-4 text-gray-800">
          Jus Buckingham
        </h1>

        <p className="mt-3 text-lg md:text-2xl text-gray-800">
          Renaissance Man
        </p>

        <div className="mt-6 flex flex-col items-center justify-center max-w-4xl w-full">
          <section className="p-4 md:p-6 m-2 md:m-4 max-w-sm bg-white rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Artist</h2>
          </section>

          <div className="flex flex-col md:flex-row justify-center mt-6">
            <section className="p-4 md:p-6 m-2 md:m-4 max-w-sm bg-white rounded-xl shadow-lg space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Technologist</h2>
            </section>

            <section className="p-4 md:p-6 m-2 md:m-4 max-w-sm bg-white rounded-xl shadow-lg space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Entrepreneur</h2>
            </section>
          </div>
        </div>

        <div className="mt-8 w-full flex flex-col items-center">
          <a href="https://link1.com" className="w-full max-w-xs p-4 m-2 bg-white rounded-xl shadow-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">Link 1</a>
          <a href="https://link2.com" className="w-full max-w-xs p-4 m-2 bg-white rounded-xl shadow-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">Link 2</a>
          <a href="https://link3.com" className="w-full max-w-xs p-4 m-2 bg-white rounded-xl shadow-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">Link 3</a>
          <a href="https://link4.com" className="w-full max-w-xs p-4 m-2 bg-white rounded-xl shadow-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">Link 4</a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-gray-200">
        <p className="text-gray-800 text-sm md:text-base">&copy; {new Date().getFullYear()} Jus Buckingham</p>
      </footer>
    </div>
  );
}

export default Home;
