import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-dark-blue p-4">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center">
        <li>
          <Link href="/" legacyBehavior>
            <a className="text-soft-white font-semibold text-lg transition duration-300 ease-in-out hover:text-light-beige hover:underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className="text-soft-white font-semibold text-lg transition duration-300 ease-in-out hover:text-light-beige hover:underline">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
