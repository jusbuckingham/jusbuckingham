import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        {children}
      </main>
      <footer className="w-full py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Jus Buckingham. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
