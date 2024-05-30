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
import Image from 'next/image';
import { Footer } from '@/components';

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
      <div className="relative min-h-screen flex flex-col mt-24 "> {/* Added mt-24 for margin-top */}
     <div className='flex justify-center items-center'>
       <h1 className="bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center font-title text-4xl font-bold text-transparent dark:from-white dark:via-white/90 dark:to-white/70 md:text-4xl md:leading-[64px] ">{postData.title}</h1>
     </div>
     <div className="flex justify-center items-center text-sm font-semibold text-center mb-4 space-x-12 mt-20" >
     <div className="author-info flex flex-col items-start">
  <p className="text-gray-500 mb-1 text-xs">Written by</p>
  <div className="flex items-center">
    <Image src="/icons/icon-384x384.png" alt="Author" width={24} height={24} className="rounded-full" />
    <p className="ml-1 text-gray-800">{postData.author}</p>
  </div>
</div>

  <div className="publish-info flex flex-col items-center">
    <p className="text-gray-500 mb-1 text-xs">Published on</p>
    <span className="text-gray-800">{new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
  </div>
</div>

        <div className="flex mt-2 flex-grow">
          
          <div className="flex-1 flex flex-col items-center p-4">
          <div className="header-container p-4 mb-1 mx-auto text-center">
              
              <Image src={postData.image} alt="Post Image" width={960} height={504} className="rounded-lg" />
            </div>
            <article className="prose max-w-3xl w-full mt-24">
              
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
      <Footer />
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
