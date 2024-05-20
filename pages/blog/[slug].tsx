import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getSortedPostsData } from '@/lib/markdown';
import Navbar from '@/components/navbar';
import HeadingsSidebar from '@/components/HeadingsSidebar';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type PostData = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  contentHtml: string;
  tags: string[];
  slug: string;
  number: number;
};

type Params = {
  slug: string;
};

const extractHeadings = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((heading) => ({
    id: heading.id,
    text: heading.textContent || '',
    level: parseInt(heading.tagName.replace('H', ''), 10),
  }));
  return headings;
};

const BlogPost = ({ postData, allPostsData }: { postData: PostData; allPostsData: PostData[] }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const router = useRouter();

  useEffect(() => {
    Prism.highlightAll();
    const extractedHeadings = extractHeadings(postData.contentHtml);
    setHeadings(extractedHeadings);
  }, [postData]);

  const currentIndex = allPostsData.findIndex((post) => post.slug === postData.slug);
  const prevPost = allPostsData[currentIndex - 1] || null;
  const nextPost = allPostsData[currentIndex + 1] || null;

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex mt-16 flex-grow">
        <HeadingsSidebar headings={headings} />
        <div className="flex-1 flex flex-col items-center p-8 ml-64">
          <article className="prose max-w-xl w-full">
            <div className="header-container p-4 rounded-lg mb-4">
              <h1 className="text-base font-bold mb-2 text-center">{postData.title}</h1>
              <h4 className="text-sm text-gray-700 mb-4 text-center">{postData.subtitle}</h4>
              <div className="tags-container">
                {postData.tags.map((tag, index) => (
                  <span key={tag} className={`tag-${(index % 5) + 1}`}>{tag}</span>
                ))}
              </div>
              <div className="author-info">
                <p className="author-name">{postData.author} </p>
                <p> / </p>
                <p className="author-date">{postData.date}</p>
              </div>
            </div>
            <div className="content prose max-w-full">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
          </article>
          <div className="flex justify-between w-full mt-8">
            {prevPost && (
              <button
                onClick={() => router.push(`/blog/${prevPost.slug}`)}
                className="group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700"
                style={{ boxShadow: 'inset 0 0 0 2px #000'}}
              >
                <FaArrowLeft className="text-gray-800" /> Previous Post
              </button>
            )}
            {nextPost && (
              <button
                onClick={() => router.push(`/blog/${nextPost.slug}`)}
                className="group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700"
                style={{ boxShadow: 'inset 0 0 0 2px #000'}}
              >
                Next Post <FaArrowRight className="text-gray-800" />
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

const contentDirectory = path.join(process.cwd(), 'content');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(contentDirectory);
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ postData: PostData; allPostsData: PostData[] }> = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const postData = getPostData(slug);
  if (!postData || !postData.title) {
    return {
      notFound: true,
    };
  }

  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData,
      allPostsData,
    },
  };
};

export default BlogPost;
