import React from "react";
import { FaHome } from "react-icons/fa";
import { ARTICLES_DATA } from '@/constants';

interface Article {
  title: string;
  slug: string;
  category: string;
}

interface ArticleCategory {
  name: string;
  articles: Article[];
}

interface SidebarProps {
  categories: ArticleCategory[];
  activeCategory: string | null;
  onCategoryClick: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onCategoryClick }) => {
  if (!categories || categories.length === 0) {
    return <div className="bg-gray-800 text-gray-300 p-4">No categories available</div>;
  }

  return (
    <div className="lg:flex lg:flex-col lg:border-r lg:w-72 xl:w-80 bg-zinc-50 p-3 text-black h-screen overflow-y-auto fixed left-0 top-0 w-84 z-10 border-b px-5">
      <div className='flex justify-between border-b px-3 py-3'>
        <h2 className="sticky top-0 z-10 bg-zinc-50 text-sm font-semibold tracking-tight text-black">Articles</h2>
        <a href="/" className='sticky top-0 z-10 bg-zinc-50 text-sm font-semibold tracking-tight text-black'>
          <FaHome />
        </a>
      </div>
      <ul className='mt-4'>
        {categories.map((category) => (
          <li key={category.name} className="mb-2">
            <button
              className={`flex flex-col gap-1 text-xs rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300 w-full ${
                activeCategory === category.name ? 'bg-black text-white' : 'font-medium bg-zinc-50 hover:bg-gray-300 hover:text-black'
              }`}
              onClick={() => onCategoryClick(category.name)}
            >
              {category.name}
              <span className={`font-medium ${
                activeCategory === category.name ? 'text-slate-300' : 'text-slate-400 hover:text-black'
              }`}>{category.articles.length} articles</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

// Utility function to transform ARTICLES_DATA into categories
export function getCategoriesFromArticles(articles: typeof ARTICLES_DATA): ArticleCategory[] {
  const categories: { [key: string]: ArticleCategory } = {};

  articles.forEach((article) => {
    const categoryName = article.category;

    if (!categories[categoryName]) {
      categories[categoryName] = { name: categoryName, articles: [] };
    }

    categories[categoryName].articles.push({
      title: article.title,
      slug: article.slug,
      category: article.category,
    });
  });

  return Object.values(categories);
}