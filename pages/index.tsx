import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const LINK_CLASS =
  'text-indigo-600 underline decoration-1 underline-offset-2 hover:decoration-2 hover:text-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson';

const CONTACT_EMAIL = 'jus.buckingham@gmail.com';

const Home: NextPage = () => {
  const sections = [
    {
      id: 'about',
      title: 'About',
      content: (
        <div>
          <p>
            Jus Buckingham is an entrepreneur, engineer, and producer whose work sits at the intersection of technology, culture, and modern media. With a background spanning software engineering, creative production, and live performance, he brings a multidisciplinary perspective to building products and stories that connect technical depth with human experience.
          </p>
          <p className="mt-4">
            He is the founder of{' '}
            <a
              href="https://legatepro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              LegatePro
            </a>
            , a modern command center for estate and probate workflows designed to make complex administrative processes more accessible, organized, and efficient.
          </p>
          <p className="mt-4">
            His broader work reflects a continuing interest in design, systems, storytelling, and the ways technology can support clarity, creativity, and independent thinking.
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
                { name: 'The Fountainhead | Atlas Shrugged', url: 'https://en.wikipedia.org/wiki/The_Fountainhead|https://en.wikipedia.org/wiki/Atlas_Shrugged' },
                { name: 'Siddhartha', url: 'https://en.wikipedia.org/wiki/Siddhartha_(novel)' },
                { name: 'Post Office', url: 'https://en.wikipedia.org/wiki/Post_Office_(novel)' },
              ]
            },
            {
              category: 'Movies',
              items: [
                { name: 'On the Waterfront', url: 'https://en.wikipedia.org/wiki/On_the_Waterfront' },
                { name: 'Sunset Blvd.', url: 'https://en.wikipedia.org/wiki/Sunset_Boulevard_(film)' },
                { name: 'Days of Heaven', url: 'https://en.wikipedia.org/wiki/Days_of_Heaven' },
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
                {items.map(({ name, url }) => {
                  if (name.includes('|')) {
                    const [firstUrl, secondUrl] = url.split('|');
                    const [firstName, secondName] = name.split('|').map((s) => s.trim());

                    return (
                      <li key={name}>
                        <a
                          href={firstUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={LINK_CLASS}
                        >
                          {firstName}
                        </a>
                        {' | '}
                        <a
                          href={secondUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={LINK_CLASS}
                        >
                          {secondName}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={name}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={LINK_CLASS}
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'selected-works',
      title: 'Interview',
      content: (
        <ul className="grid grid-cols-1 gap-4">
          <li className="list-disc list-inside ml-4">
            <a
              href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              ABE Podcast
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
          content="The digital home of Jus Buckingham—entrepreneur, engineer, and producer. Founder of LegatePro. Explore interviews, influences, and contact information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://jusbuckingham.com/" />
        <meta property="og:title" content="Jus Buckingham | Artist, Technologist, Entrepreneur" />
        <meta property="og:description" content="The digital home of Jus Buckingham—entrepreneur, engineer, and producer. Founder of LegatePro. Explore interviews, influences, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jusbuckingham.com/" />
        <meta property="og:image" content="https://jusbuckingham.com/images/grama-and-jus.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jus Buckingham | Artist, Technologist, Entrepreneur" />
        <meta name="twitter:description" content="The digital home of Jus Buckingham—founder of LegatePro." />
        <meta name="twitter:image" content="https://jusbuckingham.com/images/grama-and-jus.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jus K. Buckingham',
              url: 'https://jusbuckingham.com/',
              email: `mailto:${CONTACT_EMAIL}`,
              jobTitle: 'Artist, Technologist, Entrepreneur',
              image: 'https://jusbuckingham.com/images/grama-and-jus.jpeg',
              sameAs: [
                'https://legatepro.com/',
                'https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584'
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
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-12 inline-block px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-md hover:bg-dark-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson relative z-10 pointer-events-auto"
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