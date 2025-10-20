import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const linkClass = "text-indigo-600 underline decoration-1 underline-offset-2 hover:decoration-2 hover:text-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson";

const Home: NextPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About',
      content: (
        <div>
          <p>
            A multidisciplinary creator blending art, technology, and entrepreneurship. Originally from Lansing, Michigan, with a background in theatre and experience performing in bands in Las Vegas, he is also a saxophonist who brings the improvisational spirit of jazz into his work as an engineer and entrepreneur.
          </p>
          <p className="mt-4">
            He founded King Conundrum in Chicago, a collective for live shows, podcasts, and albums. Now based in Los Angeles, he leads <a
              href="https://www.kofa.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >Kofa.ai</a>, building AI‑driven tools rooted in Black consciousness to inform, protect, and inspire communities.
          </p>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                { name: 'The Prestige', url: 'https://en.wikipedia.org/wiki/The_Prestige_(film)' },
                
              ]
            },
            {
              category: 'Albums',
              items: [
                { name: 'Voodoo', url: 'https://en.wikipedia.org/wiki/Voodoo_(D%27Angelo_album)' },
                { name: 'Aja', url: 'https://en.wikipedia.org/wiki/Aja_(album)' },
                { name: 'Pieces of a Man', url: 'https://en.wikipedia.org/wiki/Pieces_of_a_Man' },
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
                      className={linkClass}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'selected-works',
      title: 'Selected Works',
      content: (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="list-disc list-inside ml-4">
            <a
              href="https://www.kofa.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Kofa.ai
            </a>
          </li>
          <li className="list-disc list-inside ml-4">
            <a
              href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ABE Podcast
            </a>
          </li>
          <li className="list-disc list-inside ml-4">
            <a
              href="https://music.apple.com/us/playlist/ju%24la/pl.u-8aAVodjIoaMmWY"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Ju$la
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <Layout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-gray-900 focus:p-2 focus:shadow focus:rounded">
        Skip to content
      </a>
      <Head>
        <title>Jus Buckingham | Artist, Technologist, Entrepreneur</title>
        <meta
          name="description"
          content="The digital home of Jus Buckingham—renaissance man and founder of Kofa.ai. Discover selected works, favorite influences, and a vision driven by art, technology, and cultural innovation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://jusbuckingham.com/" />
        <meta property="og:title" content="Jus Buckingham | Artist, Technologist, Entrepreneur" />
        <meta property="og:description" content="The digital home of Jus Buckingham—renaissance man and founder of Kofa.ai. Discover selected works, favorite influences, and a vision driven by art, technology, and cultural innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jusbuckingham.com/" />
        <meta property="og:image" content="https://jusbuckingham.com/images/grama-and-jus.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jus Buckingham | Artist, Technologist, Entrepreneur" />
        <meta name="twitter:description" content="The digital home of Jus Buckingham—renaissance man and founder of Kofa.ai." />
        <meta name="twitter:image" content="https://jusbuckingham.com/images/grama-and-jus.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jus K. Buckingham',
              url: 'https://jusbuckingham.com/',
              email: 'mailto:jus.buckingham@gmail.com',
              jobTitle: 'Artist, Technologist, Entrepreneur',
              image: 'https://jusbuckingham.com/images/grama-and-jus.jpeg',
              sameAs: [
                'https://www.kofa.ai/',
                'https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584',
                'https://music.apple.com/us/playlist/ju%24la/pl.u-8aAVodjIoaMmWY'
              ]
            })
          }}
        />
      </Head>
      <main id="main-content" role="main" className="flex flex-col items-center min-h-screen py-12 px-4 md:px-8 bg-gray-50 text-gray-900 space-y-6">
        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-crimson">
            Jus Buckingham
          </h1>
          <p className="mt-2 text-lg md:text-2xl italic text-gray-700">
            Renaissance Man
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center bg-white rounded-xl shadow-md border border-gray-200 p-2">
          <Image
            src="/images/grama-and-jus.jpeg"
            alt="Jus with his grandmother in Detroit"
            width={500}
            height={500}
            sizes="(min-width: 768px) 500px, 100vw"
            priority
            className="object-contain rounded-lg"
          />
        </div>
        {/* Sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="mt-12 w-full max-w-4xl bg-white p-8 rounded-xl shadow-md"
          >
            <h2 id={`${section.id}-heading`} className="text-3xl md:text-4xl font-bold mb-4 text-crimson">
              {section.title}
            </h2>
            {section.content}
          </section>
        ))}

        {/* Contact Button */}
        <a
          href="mailto:jus.buckingham@gmail.com"
          className="mt-12 inline-block px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-md hover:bg-dark-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson"
        >
          Contact
        </a>

        {/* Footer */}
        <footer className="mt-6 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Jus Buckingham
        </footer>
      </main>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .text-crimson {
          color: #dc143c;
        }
        .hover\:bg-dark-crimson:hover {
          background-color: #a40e2c;
        }
        :global(a:focus-visible), :global(button:focus-visible) {
          outline: 2px solid #dc143c;
          outline-offset: 2px;
        }
      `}</style>
    </Layout>
  );
};

export default Home;