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
          I&apos;m Jus, an artist, technologist, and entrepreneur passionate about innovation and creativity. Inspired by jazz legends like John Coltrane, I&apos;ve pursued diverse paths—acting, performing, and founding King Conundrum, a Chicago-based arts collective.  Currently I am a Software Engineer working on Kofa.ai a research startup focused on conscious AI solutions.
        </p>
      ),
    },
    {
      id: 'interests',
      title: 'Interests',
      content: (
        <ul className="list-disc list-inside ml-6">
          <li>Business</li>
          <li>Technology</li>
          <li>Law</li>
        </ul>
      ),
    },
    {
      id: 'favs',
      title: 'Favorites',
      content: (
        <>
          {[
            {
              category: 'Books',
              items: [
                { name: 'Atlas Shrugged', url: 'https://en.wikipedia.org/wiki/Atlas_Shrugged' },
                { name: 'Siddhartha', url: 'https://en.wikipedia.org/wiki/Siddhartha_(novel)' },
                { name: 'Post Office', url: 'https://en.wikipedia.org/wiki/Post_Office_(novel)' },
              ]
            },
            {
              category: 'Movies',
              items: [
                { name: 'The Passion of the Christ', url: 'https://en.wikipedia.org/wiki/The_Passion_of_the_Christ' },
                { name: 'On the Waterfront', url: 'https://en.wikipedia.org/wiki/On_the_Waterfront' },
                { name: 'Malcolm X', url: 'https://en.wikipedia.org/wiki/Malcolm_X_(1992_film)' },
              ]
            },
            {
              category: 'Albums',
              items: [
                { name: 'Voodoo', url: 'https://en.wikipedia.org/wiki/Voodoo_(D%27Angelo_album)' },
                { name: 'Giant Steps', url: 'https://en.wikipedia.org/wiki/Giant_Steps' },
                { name: 'Aja', url: 'https://en.wikipedia.org/wiki/Aja_(album)' },
              ]
            },
          ].map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{category}</h3>
              <ul className="list-disc list-inside ml-6">
                {items.map(({ name, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline hover:text-crimson"
                    >
                      {name}
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
              href="https://music.apple.com/us/playlist/ju%24la/pl.u-8aAVodjIoaMmWY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-crimson"
            >
              Ju$la
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/17Ur4obaKkDfs_Nfe3s-yuud_RVX_rxsXITi69JQT5ng/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-crimson"
            >
              The Kofa Papers
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-crimson"
            >
              The ABE Podcast - Keep the Faith
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Jus Buckingham - Renaissance Man</title>
        <meta
          name="description"
          content="Discover the world of Jus Buckingham, an Artist, Technologist, and Entrepreneur passionate about software engineering, music, and innovative startups."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-center min-h-screen py-12 bg-gray-50 text-gray-900 space-y-6">
        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-crimson">
            Jus Buckingham
          </h1>
          <p className="mt-2 text-lg md:text-2xl">
            Renaissance Man
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center bg-gray-50 rounded-xl shadow-lg border-4 border-gray-200 p-2">
          <Image
            src="/images/jus-buckingham-malibu.png"
            alt="Jus Buckingham with Keilani in Malibu"
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
        </div>
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