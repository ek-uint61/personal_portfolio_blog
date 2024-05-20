// components/blogLayout.tsx

import { ReactNode } from 'react';
import Navbar from './navbar';
import { PostData } from '@/lib/markdown';

type BlogLayoutProps = {
  children: ReactNode;
  allPostsData: PostData[];
  currentPostSlug: string;
};

const BlogLayout = ({ children, allPostsData, currentPostSlug }: BlogLayoutProps) => {
  return (
    <div>
      <Navbar allPostsData={allPostsData} currentPostSlug={currentPostSlug} />
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;
