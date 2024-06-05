import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getSortedPostsData, PostData } from '@/lib/markdown';
import BlogLayout from '@/components/blogLayout';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    const extractedHeadings = extractHeadings(postData.contentHtml);
    setHeadings(extractedHeadings);
  }, [postData]);

  const currentIndex = allPostsData.findIndex((post) => post.slug === postData.slug);
  const prevPost = allPostsData[currentIndex - 1] || null;
  const nextPost = allPostsData[currentIndex + 1] || null;

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  const seoProps = {
    title: `${postData.title} ─ Blog`,
    description: postData.subtitle || '',
    openGraph: {
      title: postData.title,
      description: postData.subtitle || '',
      images: [
        {
          url: postData.image,
          alt: postData.title,
          width: 1280,
          height: 720,
        },
      ],
    },
  };

  return (
    <BlogLayout allPostsData={allPostsData} currentPostSlug={postData.slug} headings={headings} seo={seoProps}>
      <div className="relative min-h-screen flex flex-col items-center mt-12 px-4 py-16 overflow-hidden">
        <NextSeo {...seoProps} />
        <div className="max-w-2xl mx-auto text-center mb-12">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
    {postData.title}
  </h1>
  {postData.subtitle && (
    <p className="mt-2 text-lg sm:text-md lg:text-lg text-gray-600 dark:text-gray-300">
      {postData.subtitle}
    </p>
  )}
  <div className="flex flex-col sm:flex-row justify-center items-center mt-4 text-sm sm:text-base lg:text-lg font-semibold text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-12">
    <div className="flex items-center space-x-2">
      <Image src="/icons/icon-384x384.png" alt="Author" width={24} height={24} className="rounded-full" />
      <p>{postData.author}</p>
    </div>
    <div>
      <p>{new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
    </div>
  </div>
</div>


        <div className="flex flex-col items-center w-full px-4">
          <div className="w-full max-w-3xl header-container ">
            <Image
              src={postData.image}
              alt="Post Image"
              width={1000}
              height={400}
              className={`rounded-lg transition-all duration-700 ${isImageLoaded ? 'blur-0' : 'blur-md'} w-full h-auto max-h-64 lg:max-h-96 mb-8 rounded-3xl object-cover select-none shadow-xl default-transition`}
              style={{
                transition: 'filter 700ms ease, transform 150ms ease',
                filter: isImageLoaded ? 'none' : 'blur(20px)',
              }}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
          <article className="prose max-w-3xl w-full mt-8 text-left">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <div className="flex justify-center gap-4 w-full mt-8">
  {prevPost && (
    <button
      onClick={() => router.push(`/posts/${prevPost.slug}`)}
      className="custom-font group font-semibold px-4 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 dark:bg-gray-800 dark:text-white visited:bg-gray-100"
      style={{ boxShadow: 'inset 0 0 0 2px #000' }}
    >
      <FaArrowLeft className="text-gray-800 dark:text-white" />
      <span className="text-xs md:text-base lg:text-lg">Previous Post</span>
    </button>
  )}
  {nextPost && (
    <button
      onClick={() => router.push(`/posts/${nextPost.slug}`)}
      className="custom-font group font-semibold px-4 py-2 rounded-lg border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 dark:bg-gray-800 dark:text-white visited:bg-gray-100"
      style={{ boxShadow: 'inset 0 0 0 2px #000' }}
    >
      <span className="text-xs md:text-base lg:text-lg">Next Post</span>
      <FaArrowRight className="text-gray-800 dark:text-white" />
    </button>
  )}
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
