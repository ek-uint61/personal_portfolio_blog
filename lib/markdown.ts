import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrism from 'rehype-prism';
import rehypeSlug from 'rehype-slug';

const contentDirectory = path.join(process.cwd(), 'content');

export type PostData = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  contentHtml: string;
  tags: string[];
  slug: string;
  number: number;
  category: string;
  subcategory: string;
  image: string;
};

export function getPostData(slug: string): PostData | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .processSync(matterResult.content)
    .toString();

  if (
    !matterResult.data.title ||
    matterResult.data.title === 'Untitled' ||
    !matterResult.data.category ||
    matterResult.data.category === 'Uncategorized'
  ) {
    return null;
  }

  return {
    slug,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle || '',
    author: matterResult.data.author || 'Unknown',
    date: matterResult.data.date || 'Unknown date',
    tags: matterResult.data.tags || [],
    contentHtml: processedContent,
    number: matterResult.data.number ?? -1,
    category: matterResult.data.category,
    subcategory: matterResult.data.subcategory || 'General',
    image: matterResult.data.image || "no image",
  };
}

export function getSortedPostsData() {
  const filenames = fs.readdirSync(contentDirectory);
  const allPostsData = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const postData = getPostData(slug);
    return postData;
  }).filter(postData => postData !== null) as PostData[];

  return allPostsData.sort((a, b) => a.number - b.number);
}



