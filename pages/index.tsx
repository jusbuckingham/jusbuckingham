import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';  // Adjust the import path as needed

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:jus.buckingham@gmail.com';
  };

  return (
    <Layout>
      <Head>
        <title>Jus Buckingham - Renaissance Man, Software Engineer, Technologist</title>
        <meta name="description" content="Explore the personal website of Jus Buckingham, a Renaissance man with diverse talents in software engineering, technology, music, and more." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.jusbuckingham.com" />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Head>

      <div className="absolute top-4 right-4 text-sm md:text-xl text-right space-y-1">
        <div className="clock" role="img" aria-label="Analog clock showing the current time">
          <div className="clock-face">
            <div className="hand hour-hand" style={{ transform: `rotate(${(time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30}deg)` }}></div>
            <div className="hand minute-hand" style={{ transform: `rotate(${(time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6}deg)` }}></div>
            <div className="hand second-hand" style={{ transform: `rotate(${(time.getSeconds() / 60) * 360}deg)` }}></div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold my-4 text-crimson">
        Jus Buckingham
      </h1>

      <p className="mt-3 text-lg md:text-2xl text-soft-white">
        Renaissance Man
      </p>

      <div className="mt-6">
        <Image src="/images/jusbuckingham-k-town.jpeg" alt="Jus Buckingham in Koreatown" width={192} height={256} className="rounded-lg shadow-lg" />
      </div>

      <div id="about" className="mt-8 w-full max-w-4xl bg-dark-green p-6 rounded-lg shadow-lg text-soft-white">
        <h2 className="text-2xl md:text-3xl font-bold my-4">About</h2>
        <p>
          Jus Kwesi Buckingham, whose name means &quot;fair leader,&quot; was born in Lansing, MI, and has been living in Los Angeles for the past 10 years, with previous stints in Las Vegas, Vancouver, and Chicago. He is an artist, technologist, and entrepreneur. Jus picked up the saxophone at the age of 9, influenced by John Coltrane and Eric Dolphy, and has since acted in films and plays, and performed in various bands. In Chicago, he founded the collective King Conundrum, hosting live shows, a podcast, an album, and a travel show. Currently, Jus is developing <a href="https://kofa.ai/" target="_blank" className="text-blue-600 underline hover:text-soft-white">kofa.ai</a>, focusing on &quot;woke&quot; AI solutions, writing a criticism series titled &quot;The Violence,&quot; and working on a movie and music project called &quot;Hollywood Rojo.&quot;
        </p>

      </div>

      <div id="selected-works" className="mt-8 w-full max-w-4xl bg-dark-green p-6 rounded-lg shadow-lg text-soft-white">
        <h2 className="text-2xl md:text-3xl font-bold my-4">Selected Works</h2>
        <div className="text-lg md:text-xl text-left leading-relaxed">
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              <a href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-soft-white">
                Jus Buckingham - Keep the Faith (Podcast Interview)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl flex justify-center p-6">
        <button
          onClick={handleEmailClick}
          className="px-8 py-4 bg-dark-green text-soft-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-crimson"
        >
          Contact
        </button>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-gray-200">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Jus Buckingham</p>
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
    </Layout>
  );
};

export default Home;
