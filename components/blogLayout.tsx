import { NextSeo } from 'next-seo';
import { ReactNode, ComponentProps } from 'react';
import Navbar from './navbar';
import { PostData } from '@/lib/markdown';
import Image from 'next/image';
import ThemeContextProvider from '@/context/theme-context';

type BlogLayoutProps = {
  children: ReactNode;
  allPostsData: PostData[];
  currentPostSlug: string;
  headings: { id: string; text: string; level: number }[];
  seo?: Partial<ComponentProps<typeof NextSeo>>;
};

const BlogLayout = ({ children, allPostsData, currentPostSlug, headings, seo }: BlogLayoutProps) => {
  const seoProps = {
    title: 'Blog Post Title', // Varsayılan başlık
    description: 'Blog Post Description', // Varsayılan açıklama
    ...seo,
  };

  return (
    <ThemeContextProvider>
      <div className="relative min-h-screen">
        <NextSeo {...seoProps} />
        
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
          <main className="flex flex-col justify-center sm:px-8">{children}</main>
        </div>
        
        {/* Arka plan alt görüntüsü */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
          <Image
            width={1512}
            height={447}
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
