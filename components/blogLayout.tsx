// components/blogLayout.tsx

import { ReactNode } from 'react';
import Navbar from './navbar';
import { PostData } from '@/lib/markdown';



type BlogLayoutProps = {
  children: ReactNode;
  allPostsData: PostData[];
  currentPostSlug: string;
  headings: { id: string; text: string; level: number }[];
};

const BlogLayout = ({ children, allPostsData, currentPostSlug, headings }: BlogLayoutProps) => {
  return (
    <div>
      <Navbar allPostsData={allPostsData} currentPostSlug={currentPostSlug} headings={headings} />
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;
