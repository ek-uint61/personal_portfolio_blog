import { ReactNode } from 'react';
import Navbar from './navbar';
import { PostData } from '@/lib/markdown';
import Image from 'next/image';
import ThemeContextProvider from '@/context/theme-context';

type BlogLayoutProps = {
  children: ReactNode;
  allPostsData: PostData[];
  currentPostSlug: string;
  headings: { id: string; text: string; level: number }[];
};

const BlogLayout = ({ children, allPostsData, currentPostSlug, headings }: BlogLayoutProps) => {
  return (
    <ThemeContextProvider>
    <div>
          {/* Arka plan üst görüntüsü */}
      <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="/gradient-background-top.png"
        alt=""
        role="presentation"
        priority
      />
    <div className="relative">  

      <Navbar allPostsData={allPostsData} currentPostSlug={currentPostSlug} headings={headings} />
      
      <main>{children}</main>

      {/* Arka plan alt görüntüsü */}
      <Image
        width={1512}
        height={447}
        className="absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2"
        src="/gradient-background-bottom.png"
        alt=""
        role="presentation"
        priority
      />
    </div>
    </div>
    </ThemeContextProvider>
  );
};

export default BlogLayout;
