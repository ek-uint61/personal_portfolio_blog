import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData } from '@/lib/markdown';
import Link from 'next/link';
import { BlogLayout } from '@/components';
import Prism from 'prismjs';
import { useEffect } from 'react';

type PostData = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  contentHtml: string;
  tags: string[];
};

type Params = {
  slug: string;
};

const BlogPost = ({ postData }: { postData: PostData }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [postData]);

  if (!postData) {
    return <p>Post not found</p>;
  }

  return (
    <BlogLayout>
      <article className="prose lg:prose-xl mx-auto">
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
        <div className="content prose">
      
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </BlogLayout>
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

export const getStaticProps: GetStaticProps<{ postData: PostData | null }> = async ({ params }) => {
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

  return {
    props: {
      postData,
    },
  };
};

export default BlogPost;
