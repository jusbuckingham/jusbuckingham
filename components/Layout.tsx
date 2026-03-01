import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Skip to content (accessibility) */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-md focus:shadow"
      >
        Skip to content
      </a>

      {/* Main Content */}
      <main
        id="content"
        role="main"
        className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
