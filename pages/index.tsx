// pages/index.tsx
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
        <meta
          name="description"
          content="Discover the world of Jus Buckingham, an Artist, Technologist, and Entrepreneur passionate about software engineering, music, and innovative startups."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.jusbuckingham.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Jus Buckingham',
            'url': 'https://www.jusbuckingham.com',
            'sameAs': [
              'https://www.linkedin.com/in/jus-buckingham/',
              'https://github.com/jusbuckingham',
              'https://www.imdb.com/name/nm2443321/',
              'https://www.stephenkingshortmovies.com/interviews/jus-buckingham-october-25-2009/',
            ],
            'jobTitle': 'Founder & Software Engineer',
            'worksFor': {
              '@type': 'Organization',
              'name': 'kofa.ai',
            },
          })}
        </script>
      </Head>

      <div className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 text-gray-900">
        {/* Clock Display */}
        <div className="absolute top-4 right-4 text-sm md:text-xl text-right">
          <div className="clock" aria-label="Current time">
            <div className="clock-face">
              <div
                className="hand hour-hand"
                style={{
                  transform: `rotate(${((time.getHours() % 12) / 12) * 360 + (time.getMinutes() / 60) * 30}deg)`,
                }}
              ></div>
              <div
                className="hand minute-hand"
                style={{
                  transform: `rotate(${(time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6}deg)`,
                }}
              ></div>
              <div
                className="hand second-hand"
                style={{
                  transform: `rotate(${(time.getSeconds() / 60) * 360}deg)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold my-4 text-crimson">
          Jus Buckingham
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-lg md:text-2xl">
          Artist, Technologist & Entrepreneur
        </p>

        {/* Profile Image */}
        <div className="mt-8">
          <Image
            src="/images/jusbuckingham-k-town.jpeg"
            alt="Jus Buckingham in Koreatown"
            width={192}
            height={256}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* About Section */}
        <section id="about" className="mt-12 w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crimson">About</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Jus Buckingham is an Artist, Technologist, and Entrepreneur whose creativity and dedication to innovation have driven his journey. Inspired by jazz greats like Coltrane and Dolphy, he pursued a diverse path in the arts, acting in films, performing in bands, and founding King Conundrum—a Chicago-based collective for live shows, podcasts, and travel content. Currently, Jus is building <a href="https://kofa.ai/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-crimson">kofa.ai</a>, a startup focused on delivering purpose-driven AI solutions, while also providing his expertise as a Software Engineer and Technical Consultant.
          </p>
        </section>

        {/* Interests Section */}
        <section id="interests" className="mt-12 w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crimson">Interests</h2>
          <ul className="text-lg md:text-xl leading-relaxed text-gray-700 list-disc list-inside ml-6">
            <li>Jazz</li>
            <li>Chess</li>
            <li>Software Engineering &amp; Data Science</li>
          </ul>
        </section>

        {/* Favorites Section */}
        <section id="favs" className="mt-12 w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crimson">Favorites</h2>
          
          {/* Books */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Books</h3>
          <ul className="text-lg md:text-xl leading-relaxed text-gray-700 list-disc list-inside ml-6">
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

          {/* Movies */}
          <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Movies</h3>
          <ul className="text-lg md:text-xl leading-relaxed text-gray-700 list-disc list-inside ml-6">
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

          {/* Albums */}
          <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Albums</h3>
          <ul className="text-lg md:text-xl leading-relaxed text-gray-700 list-disc list-inside ml-6">
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
        </section>

        {/* Selected Works Section */}
        <section id="selected-works" className="mt-12 w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crimson">Selected Works</h2>
          <ul className="text-lg md:text-xl leading-relaxed text-gray-700 list-disc list-inside ml-6">
            <li>
              <a
                href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-crimson"
              >
                Keep the Faith
              </a>
            </li>
            <li>
              <a
                href="https://music.apple.com/us/playlist/jusla/pl.u-8aAVodjIoaMmWY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-crimson"
              >
                Jusla
              </a>
            </li>
          </ul>
        </section>

        {/* Contact Button */}
        <div className="mt-12 w-full max-w-4xl flex justify-center p-6">
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-dark-crimson active:bg-dark-crimson focus:outline-none focus:ring-2 focus:ring-crimson"
            aria-label="Contact Jus Buckingham via Email"
          >
            Get in Touch
          </button>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-center w-full h-24 border-t mt-6 border-gray-300">
          <p className="text-sm md:text-base text-gray-600">&copy; {new Date().getFullYear()} Jus Buckingham</p>
        </footer>
      </div>

      {/* Inline CSS for Clock and Custom Colors */}
      <style jsx>{`
        /* Clock Styles */
        .clock {
          width: 60px;
          height: 60px;
          border: 6px solid #333;
          border-radius: 50%;
          position: relative;
          padding: 10px;
          background-color: #fff;
        }

        .clock-face {
          position: relative;
          width: 100%;
          height: 100%;
          transform: translateY(-3px);
        }

        .hand {
          width: 50%;
          background: #333;
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
          background: #e63946;
        }

        /* Custom Colors for Crimson */
        .text-crimson {
          color: #dc143c;
        }

        .hover\:text-crimson:hover {
          color: #dc143c;
        }

        .hover\:bg-crimson:hover {
          background-color: #dc143c;
        }

        .bg-crimson {
          background-color: #dc143c;
        }

        .hover\:bg-dark-crimson:hover,
        .active\:bg-dark-crimson:active {
          background-color: #a40e2c; /* Darker shade of crimson */
        }
      `}</style>
    </Layout>
  );
};

export default Home;
