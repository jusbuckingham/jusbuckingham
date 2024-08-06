import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center pt-16 md:pt-24 text-soft-white">
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

      <h1 className="text-4xl md:text-6xl font-bold my-4 text-beige">
        Jus Buckingham
      </h1>

      <p className="mt-3 text-lg md:text-2xl">
        Renaissance Man
      </p>

      <div className="mt-6">
        <Image src="/images/jusbuckingham-k-town.jpeg" alt="Jus Buckingham in Koreatown" width={192} height={256} className="rounded-lg shadow-lg" />
      </div>

      <div className="mt-8 w-full max-w-4xl bg-dark-green p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold my-4 text-beige">Bio</h2>
        <p className="text-lg md:text-xl text-left leading-relaxed">
          Jus Kwesi Buckingham, whose name means &quot;fair leader,&quot; was born in Lansing, MI, and has been residing in Los Angeles for the past 10 years. Prior to that, he lived in Las Vegas, Vancouver, and Chicago.
          <br /><br />
          Jus began playing the saxophone at the age of 9, inspired by jazz legends like John Coltrane and Eric Dolphy. He has acted in independent films and plays, and performed as a saxophonist in various bands. In Chicago, Jus founded King Conundrum, an initiative that organized live shows, hosted a podcast, produced an album, and launched a travel show.
          <br /><br />
          Currently, Jus is a software engineer with over a decade of experience. His professional background spans across payment processing, streaming services, and entertainment data platforms.
        </p>
      </div>

      <div className="mt-8 w-full max-w-4xl bg-dark-green p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold my-4 text-beige">Currently Working On</h2>
        <div className="text-lg md:text-xl text-left leading-relaxed">
          Right now, Jus is immersed in a few exciting projects:
          <ul className="list-disc list-inside mt-2 ml-6">
            <li><strong>Startup:</strong> Developing kofa.ai, a startup focused on woke AI solutions.</li>
            <li><strong>Writing:</strong> Crafting a criticism series titled &quot;The Violence&quot;.</li>
            <li><strong>Creative Projects:</strong> Working on a movie and music project named &quot;Hollywood Rojo&quot;.</li>
            <li><strong>Consulting:</strong> Freelancing as a software engineering consultant.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl bg-dark-green p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold my-4 text-beige">Interviews</h2>
        <div className="text-lg md:text-xl text-left leading-relaxed">
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              <a href="https://podcasts.apple.com/us/podcast/jus-buckingham-keep-the-faith/id1527013923?i=1000508511584" target="_blank" rel="noopener noreferrer" className="text-light-beige underline hover:text-soft-white">
                Jus Buckingham - Keep the Faith (Podcast Interview)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
