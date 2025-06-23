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
          Jus Buckingham is a modern renaissance man—artist, technologist, and entrepreneur. From playing jazz saxophone to founding King Conundrum and Kofa.ai, he creates impactful experiences through code, culture, and creativity.
        </p>
      ),
    },
    {
      id: 'interests',
      title: 'Interests',
      content: (
        <ul className="list-disc list-inside ml-6">
          <li>Art</li>
          <li>Business</li>
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
                { name: 'On the Waterfront', url: 'https://en.wikipedia.org/wiki/On_the_Waterfront' },
                { name: 'Mo Better Blues', url: 'https://en.wikipedia.org/wiki/Mo%27_Better_Blues' },
                { name: 'Dancer in the Dark', url: 'https://en.wikipedia.org/wiki/Dancer_in_the_Dark' },
                
              ]
            },
            {
              category: 'Albums',
              items: [
                { name: 'Voodoo', url: 'https://en.wikipedia.org/wiki/Voodoo_(D%27Angelo_album)' },
                { name: 'Aja', url: 'https://en.wikipedia.org/wiki/Aja_(album)' },
                { name: 'Leak 04-13 (Bait Ones)', url: 'https://en.wikipedia.org/wiki/Leak_04-13_(Bait_Ones)' },
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
              href="https://kofa.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-crimson"
            >
              kofa.ai
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Jus Buckingham | Artist, Technologist, Entrepreneur</title>
        <meta
          name="description"
          content="Explore the work of Jus Buckingham—jazz musician, full-stack engineer, and founder of cultural and AI-driven ventures like King Conundrum and Kofa.ai."
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
            src="/images/jus-buckingham-sfjazz.jpeg"
            alt="Jus Buckingham SFJAZZ"
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
          Contact
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