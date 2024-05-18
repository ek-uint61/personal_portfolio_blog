import { ReactNode } from 'react';
import Navbar from './navbar';


type BlogLayoutProps = {
  children: ReactNode;
};

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 text-center py-6">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          © {new Date().getFullYear()} Emre
        </p>
      </footer>
    </div>
  );
};

export default BlogLayout;
