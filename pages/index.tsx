import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const [time, setTime] = useState<Date>(new Date());

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
        <title>Jus Buckingham - Artist, Technologist & Entrepreneur</title>
        <meta name="description" content="Explore the personal website of Jus Buckingham, an Artist, Technologist & Entrepreneur with diverse talents in software engineering, technology, music, and more." />
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
              "https://github.com/jusbuckingham",
              "https://www.imdb.com/name/nm2443321/",
              "https://www.stephenkingshortmovies.com/interviews/jus-buckingham-october-25-2009/"
            ],
            "jobTitle": "Founder & Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "kofa.ai"
            }
          })}
        </script>
      </Head>

      <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-white text-gray-900">
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

        <p className="mt-3 text-lg md:text-2xl">
          Artist, Technologist & Entrepreneur
        </p>

        <div className="mt-6">
          <Image src="/images/jusbuckingham-k-town.jpeg" alt="Jus Buckingham in Koreatown" width={192} height={256} className="rounded-lg shadow-lg" />
        </div>

        <div id="about" className="mt-8 w-full max-w-4xl bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">About</h2>
          <p className="text-lg md:text-xl text-left leading-relaxed text-gray-700">
            Jus Buckingham is an Artist, Technologist, and Entrepreneur with a passion for innovation. Born in Lansing, Michigan, and having honed his craft in cities like Las Vegas, Vancouver, and Chicago, he now calls Los Angeles home.
            <br /><br />
            Jus started his journey in the arts at age 9, drawing inspiration from jazz legends like John Coltrane and Eric Dolphy. Over the years, he has acted in plays, films, performed in bands, and founded King Conundrum in Chicago—a creative collective producing live shows, podcasts, albums, and a travel show.
            <br /><br />
            Currently, Jus is building <a href="https://kofa.ai/" target="_blank" className="text-indigo-600 underline hover:text-crimson">kofa.ai</a>, a startup focused on AI solutions with a purpose. In addition to his artistic and entrepreneurial pursuits, Jus is a skilled Software Engineer and Technical Consultant available for hire. His work is driven by a deep commitment to innovation and creativity across multiple disciplines.
          </p>
        </div>

        <div id="interests" className="mt-8 w-full max-w-4xl bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Interests</h2>
          <div className="text-lg md:text-xl text-left leading-relaxed text-gray-700">
            <ul className="list-disc list-inside mt-2 ml-6">
              <li>Jazz</li>
              <li>Chess</li>
              <li>Software Engineering &amp; Data Science</li>
            </ul>
          </div>
        </div>

        <div id="favs" className="mt-8 w-full max-w-4xl bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Favorites</h2>
          <div className="text-lg md:text-xl text-left leading-relaxed text-gray-700">
            <h3 className="text-xl md:text-2xl font-bold my-4">Books</h3>
            <ul className="list-disc list-inside mt-2 ml-6">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Atlas_Shrugged"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Atlas Shrugged
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Siddhartha_(novel)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Siddhartha
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Post_Office_(novel)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Post Office
                </a>
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold my-4">Movies</h3>
            <ul className="list-disc list-inside mt-2 ml-6">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Malcolm_X_(1992_film)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Malcolm X
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/On_the_Waterfront"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  On the Waterfront
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Days_of_Heaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Days of Heaven
                </a>
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold my-4">Albums</h3>
            <ul className="list-disc list-inside mt-2 ml-6">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Voodoo_(D%27Angelo_album)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Voodoo
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Giant_Steps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Giant Steps
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Morning_View"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-crimson"
                >
                  Morning View
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="selected-works" className="mt-8 w-full max-w-4xl bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold my-4 text-crimson">Interview</h2>
          <div className="text-lg md:text-xl text-left leading-relaxed text-gray-700">
            <ul className="list-disc list-inside mt-2 ml-6">
              <li>
                <a href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-crimson">
                  Jus Buckingham - Keep the Faith (Podcast Interview)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 w-full max-w-4xl flex justify-center p-6">
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-indigo-600 active:bg-indigo-800 focus:outline-none"
          >
            Contact
          </button>
        </div>

        <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-gray-200">
          <p className="text-sm md:text-base text-gray-700">&copy; {new Date().getFullYear()} Jus Buckingham</p>
        </footer>
      </div>

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

        /* Add custom colors for crimson */
        .text-crimson {
          color: #dc143c;
        }

        .hover\:text-crimson:hover {
          color: #dc143c;
        }

        .hover\:bg-crimson:hover {
          background-color: #dc143c;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
