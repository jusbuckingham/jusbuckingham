import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date());
  const [bgColor, setBgColor] = useState('bg-gray-50');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

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

    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    const hourHand = document.querySelector('.hour-hand') as HTMLElement;
    const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
    const secondHand = document.querySelector('.second-hand') as HTMLElement;

    const updateClockHands = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

      if (hourHand) hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      if (minuteHand) minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      if (secondHand) secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    };

    updateClockHands();
    const intervalId = setInterval(updateClockHands, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen py-2 ${bgColor} text-gray-800`}>
      <Head>
        <title>jusbuckingham.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-4 right-4 text-sm md:text-xl text-right space-y-1">
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand minute-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-4 text-crimson">
          Jus Buckingham
        </h1>

        <p className="mt-3 text-lg md:text-2xl text-gray-800">
          Renaissance Man
        </p>

        <div className="mt-6">
          <img src="/jusbuckingham-k-town.jpeg" alt="Original Koreatown Picture" className="w-32 h-auto rounded-lg shadow-lg" />
        </div>

        <div className="mt-8 w-full max-w-4xl bg-red-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Bio</h2>
          <p className="text-lg md:text-xl text-gray-800 text-left">
            Hi, I'm Jus Kwesi Buckingham, and my name means 'fair leader'. I was born in Lansing, MI, but I've been calling Los Angeles home for the past 10 years. Before that, I lived in Las Vegas, Vancouver, and Chicago.
            <br /><br />
            I picked up the saxophone when I was 9, inspired by legends like John Coltrane and Eric Dolphy. I've acted in a few independent movies and plays, and played saxophone in various bands in Las Vegas. In Chicago, I founded King Conundrum, where we put on live shows, hosted a podcast, created an album, and even started a travel show.
            <br /><br />
            Professionally, I'm a software engineer with over a decade of experience. I've worked in payment processing, streaming, and entertainment data platforms.
          </p>
        </div>

        <div className="mt-8 w-full max-w-4xl bg-red-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Currently Working On</h2>
          <p className="text-lg md:text-xl text-gray-800 text-left">
            Right now, I'm immersed in a few exciting projects:
            <ul className="list-disc list-inside">
              <li><strong>Startup:</strong> I'm building kofa.ai, a startup focused on 'woke' AI solutions.</li>
              <li><strong>Writing:</strong> I'm writing a criticism series called "The Violence".</li>
              <li><strong>Creative Projects:</strong> I'm working on a movie and music project named "Hollywood Rojo".</li>
              <li><strong>Consulting:</strong> I'm also freelancing as a software engineering consultant.</li>
            </ul>
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center max-w-4xl w-full">
          <a href="https://github.com/jusbuckingham" target="_blank" className="p-4 md:p-6 m-2 md:m-4 max-w-sm bg-neutral-200 rounded-xl shadow-lg space-y-4 hover:bg-neutral-300 transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">GitHub</h2>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-gray-200">
        <p className="text-gray-800 text-sm md:text-base">&copy; {new Date().getFullYear()} Jus Buckingham</p>
      </footer>

      <style jsx>{`
        .clock {
          width: 60px;
          height: 60px;
          border: 6px solid black;
          border-radius: 50%;
          position: relative;
          padding: 10px;
        }
        
        .clock-face {
          position: relative;
          width: 100%;
          height: 100%;
          transform: translateY(-3px); /* account for the extra height in the clock hands */
        }
        
        .hand {
          width: 50%;
          background: black;
          position: absolute;
          top: 50%;
          transform-origin: 100%;
          transform: rotate(90deg);
          transition: all 0.05s;
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
        }
        
        .hour-hand {
          height: 4px;
        }
        
        .minute-hand {
          height: 3px;
        }
        
        .second-hand {
          height: 2px;
          background: red;
        }
      `}</style>
    </div>
  );
}

export default Home;
