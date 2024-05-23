import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getSortedPostsData, PostData } from '@/lib/markdown';
import BlogLayout from '@/components/blogLayout';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight, FaBookmark } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';

const extractHeadings = (html: string) => {
  const headingRegex = /<(h[1-6]) id="([^"]*)">([^<]*)<\/\1>/g;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    headings.push({
      id: match[2],
      text: match[3],
      level: parseInt(match[1].replace('h', ''), 10),
    });
  }
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
    <BlogLayout allPostsData={allPostsData} currentPostSlug={postData.slug} headings={headings}>
      <div className="relative min-h-screen flex flex-col">
        <div className="flex mt-2 flex-grow">
          <div className="flex-1 flex flex-col items-center p-4">
          <div className="image-container w-8/12">
                <img src={postData.image} alt="post data image" className="w-full h-auto object-cover" />
              </div>
            <article className="prose max-w-2xl w-full">
            
              <div className="header-container p-4 mb-1 mx-auto">
                <h1 className="text-base font-bold mb-2 text-center">{postData.title}</h1>
                <h4 className="text-sm text-gray-700 mb-4 text-center">{postData.subtitle}</h4>
                <div className="flex justify-center items-center text-sm font-semibold text-center">
                  <FaBookmark className="text-gray-600 mr-2" />
                  {postData.category} <SlArrowRight className="m-1" /> {postData.subcategory}
                </div>
                <div className="author-info flex items-center justify-center">
                  <p className="author-name">{postData.author}</p>
                  <p className="text-gray-500">/</p>
                  <p className="author-date text-gray-500">{postData.date}</p>
                </div>
              </div>
              <div className="content prose max-w-full">
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </div>
            </article>
            <div className="flex justify-center gap-2 w-full mt-8">
              {prevPost && (
                <button
                  onClick={() => router.push(`/blog/${prevPost.slug}`)}
                  className="custom-font group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700"
                  style={{ boxShadow: 'inset 0 0 0 2px #000' }}
                >
                  <FaArrowLeft className="text-gray-800" /> Previous Post
                </button>
              )}
              {nextPost && (
                <button
                  onClick={() => router.push(`/blog/${nextPost.slug}`)}
                  className="custom-font group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700"
                  style={{ boxShadow: 'inset 0 0 0 2px #000' }}
                >
                  Next Post <FaArrowRight className="text-gray-800" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(path.join(process.cwd(), 'content'));
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
