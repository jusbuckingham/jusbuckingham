import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  width?: 'default' | 'wide' | 'narrow';
  noPadding?: boolean;
}

const widthClasses: Record<NonNullable<LayoutProps['width']>, string> = {
  default: 'max-w-5xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-3xl',
};

const Layout = ({
  children,
  className = '',
  width = 'default',
  noPadding = false,
}: LayoutProps) => {
  return (
    <div className="min-h-dvh scroll-smooth bg-white text-gray-900 font-sans antialiased">
      {/* Skip to content (accessibility) */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
      >
        Skip to content
      </a>

      <header className="sr-only">Jus Buckingham</header>

      {/* Main Content */}
      <main
        id="content"
        role="main"
        className={`mx-auto flex w-full ${widthClasses[width]} flex-1 flex-col ${
          noPadding ? '' : 'px-6 py-12'
        } ${className}`.trim()}
      >
        <div className="w-full max-w-full">{children}</div>
      </main>

      <footer className="sr-only">Official site of Jus Buckingham</footer>
    </div>
  );
};

export default Layout;
