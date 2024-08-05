import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
        <title>Jus Buckingham - Renaissance Man, Software Engineer, Technologist</title>
        <meta name="description" content="Explore the personal website of Jus Buckingham, a Renaissance man with diverse talents in software engineering, technology, music, and more." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.jusbuckingham.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jus Buckingham",
              "url": "https://www.jusbuckingham.com",
              "sameAs": [
                "https://www.linkedin.com/in/jus-buckingham/",
                "https://github.com/jusbuckingham"
              ],
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "kofa.ai"
              }
            }
          `}
        </script>
      </Head>

      <div className="absolute top-4 right-4 text-sm md:text-xl text-right space-y-1">
        <div className="clock" role="img" aria-label="Analog clock showing the current time">
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
          <Image src="/images/jusbuckingham-k-town.jpeg" alt="Jus Buckingham in Koreatown" width={192} height={192} className="rounded-lg shadow-lg" />
        </div>

        <div className="mt-8 w-full max-w-4xl bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Bio</h2>
          <p className="text-lg md:text-xl text-gray-800 text-left leading-relaxed">
            Jus Kwesi Buckingham, whose name means &quot;fair leader,&quot; was born in Lansing, MI, and has been residing in Los Angeles for the past 10 years. Prior to that, he lived in Las Vegas, Vancouver, and Chicago.
            <br /><br />
            Jus began playing the saxophone at the age of 9, inspired by jazz legends like John Coltrane and Eric Dolphy. He has acted in independent films and plays, and performed as a saxophonist in various bands. In Chicago, Jus founded King Conundrum, an initiative that organized live shows, hosted a podcast, produced an album, and launched a travel show.
            <br /><br />
            Currently, Jus is a software engineer with over a decade of experience. His professional background spans across payment processing, streaming services, and entertainment data platforms.
          </p>
        </div>

        <div className="mt-8 w-full max-w-4xl bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Currently Working On</h2>
          <div className="text-lg md:text-xl text-gray-800 text-left leading-relaxed">
            Right now, Jus is immersed in a few exciting projects:
            <ul className="list-disc list-inside mt-2 ml-6">
              <li><strong>Startup:</strong> Developing kofa.ai, a startup focused on woke AI solutions.</li>
              <li><strong>Writing:</strong> Crafting a criticism series titled &quot;The Violence&quot;.</li>
              <li><strong>Creative Projects:</strong> Working on a movie and music project named &quot;Hollywood Rojo&quot;.</li>
              <li><strong>Consulting:</strong> Freelancing as a software engineering consultant.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 w-full max-w-4xl bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Interviews</h2>
          <div className="text-lg md:text-xl text-gray-800 text-left leading-relaxed">
            <ul className="list-disc list-inside mt-2 ml-6">
              <li>
                <a href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Jus Buckingham - Keep the Faith (Podcast Interview)
                </a>
              </li>
            </ul>
          </div>
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
