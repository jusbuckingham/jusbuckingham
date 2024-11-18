import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jus.buckingham@gmail.com';
  };

  const sections = [
    {
      id: 'about',
      title: 'About',
      content: (
        <p>
          Jus Buckingham is a multidisciplinary artist, technologist, and
          entrepreneur driven by a passion for innovation and creativity.
          Inspired by jazz legends like John Coltrane, he has explored diverse
          paths—from acting in plays and performing in bands to founding King
          Conundrum, a Chicago-based arts collective. Now, Jus leads{' '}
          <a
            href="https://kofa.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-crimson"
          >
            kofa.ai
          </a>
          , crafting AI solutions with purpose.
        </p>
      ),
    },
    {
      id: 'interests',
      title: 'Interests',
      content: (
        <ul className="list-disc list-inside ml-6">
          <li>Jazz</li>
          <li>Chess</li>
          <li>Technology</li>
        </ul>
      ),
    },
    {
      id: 'favs',
      title: 'Favorites',
      content: (
        <>
          {[
            { category: 'Books', items: ['Atlas Shrugged', 'Siddhartha', 'Post Office'] },
            { category: 'Movies', items: ['Malcolm X', 'On the Waterfront', 'Days of Heaven'] },
            { category: 'Albums', items: ['Voodoo', 'Giant Steps', 'Morning View'] },
          ].map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{category}</h3>
              <ul className="list-disc list-inside ml-6">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`https://en.wikipedia.org/wiki/${item.replace(/\s+/g, '_')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline hover:text-crimson"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ),
    },
    {
      id: 'selected-works',
      title: 'Selected Works',
      content: (
        <ul className="list-disc list-inside ml-6">
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
      ),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Jus Buckingham - Artist, Technologist & Entrepreneur</title>
        <meta
          name="description"
          content="Discover the world of Jus Buckingham, an Artist, Technologist, and Entrepreneur passionate about software engineering, music, and innovative startups."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-center min-h-screen py-12 bg-gray-50 text-gray-900">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold my-4 text-crimson">
          Jus Buckingham
        </h1>
        <p className="mt-2 text-lg md:text-2xl">
          Artist, Technologist & Entrepreneur
        </p>

        {/* Profile Image */}
        <Image
          src="/images/jusbuckingham-k-town.jpeg"
          alt="Jus Buckingham in Koreatown"
          width={192}
          height={256}
          className="rounded-xl shadow-lg"
        />

        {/* Sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-12 w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crimson">
              {section.title}
            </h2>
            {section.content}
          </section>
        ))}

        {/* Contact Button */}
        <button
          onClick={handleEmailClick}
          className="mt-12 px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-lg hover:bg-dark-crimson focus:ring-2 focus:ring-crimson"
        >
          Get in Touch
        </button>

        {/* Footer */}
        <footer className="mt-6 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Jus Buckingham
        </footer>
      </div>
      <style jsx>{`
        .text-crimson {
          color: #dc143c;
        }
        .hover\:bg-dark-crimson:hover {
          background-color: #a40e2c;
        }
      `}</style>
    </Layout>
  );
};

export default Home;