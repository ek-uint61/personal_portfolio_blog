import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(contentDirectory);
  return filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''),
    },
  }));
}

export function getSortedPostsData(): PostData[] {
  const filenames = fs.readdirSync(contentDirectory);
  const allPostsData = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
      date: matterResult.data.date,
      image: matterResult.data.image,
      contentHtml: '', // İçerik HTML'ini boş bırakıyoruz
      tags: matterResult.data.tags || [],
    };
  }) as PostData[];
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
