import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ARTICLES_DATA } from '@/constants';
import { CgWorkAlt } from "react-icons/cg";
import { SlArrowRight } from 'react-icons/sl';
// import MusicPlayer from '@/components/MusicPlayer';
import "../styles/music.css";
import { FaIcons } from 'react-icons/fa';

type Article = {
  date: string;
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  number: number;
  image: string;
  category: string;
  subcategory: string;
};

const NewPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedArticles, setSortedArticles] = useState<Article[]>([]);
  const [isIconToggled, setIsIconToggled] = useState(false);

  useEffect(() => {
    const sortedData = ARTICLES_DATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as Article[];
    setSortedArticles(sortedData);
  }, []);

  const filteredArticles = sortedArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.date.includes(searchTerm)
  );

  const handleIconToggle = () => {
    setIsIconToggled(!isIconToggled);
  };

  return (
    <div className="flex flex-col min-h-screen mt-20">   
      <div className="mx-auto px-4 flex-grow">
        <div className="flex justify-center items-center space-x-4">
          <Link href="/#articles" legacyBehavior>
            <a onClick={handleIconToggle} onMouseEnter={handleIconToggle} onMouseLeave={handleIconToggle}>
              <svg className={`w-8 h-8 cursor-pointer transition-transform duration-500 ${isIconToggled ? "transform scale-110" : ""}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {isIconToggled ? (
                  <path d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"/>
                ) : (
                  <path d="M8 2h12v20H4V2h4zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2v-2z"/>
                )}
              </svg>
            </a>
          </Link>
        </div>
        <div className="my-6 text-left">
          <h2 className="text-xs text-black font-semibold leading-none flex justify-center mb-2">Search the archives</h2>
          <input 
            type="text" 
            className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-xs shadow-sm transition-colors file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search by Title or Published Date"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full border-collapse mb-20 rounded-md">
          <thead>
            <tr className="border-b">
              <th className="py-1 px-2 text-left text-xs">Published</th>
              <th className="py-1 px-2 text-left text-xs">Title</th>
              <th className='py-1 px-2 text-left text-xs'>Category </th>
              <th className='py-1 px-2 text-left text-xs'></th>
              <th className='py-1 px-2 text-left text-xs'>Subcategory </th>
            </tr>
          </thead>
          <tbody>
  {filteredArticles.map((article, index) => (
    <tr key={index} className="border-b hover:bg-gray-100">
      <td className="py-1 px-2 text-xs flex items-center">
        <CgWorkAlt className="w-4 h-4 mr-2" />
        {article.date}
      </td>
      <td className="py-1 px-2 text-xs">
        <Link  href={`/blog/${article.slug}`} legacyBehavior>
          <a className="text-gray-700  cursor-pointer"  target='_blank'>         
            {article.title}
          </a>
        </Link>
      </td>
      <td className='py-1 px-2 text-xs'>
        <p className="flex  text-gray-500 ">
          {article.category}  
        </p>
      </td>
      <td className='py-1 px-2 text-xs'>
        <p className="flex  text-gray-500 ">
        <SlArrowRight/></p>
      </td>
      <td className='py-1 px-2 text-xs'>
        <p className="flex  text-gray-500 ">
          {article.subcategory}
        </p>
      </td>
  
    </tr>
  ))}
</tbody>
        </table>
      </div>
      {/* <div className="mb-20">
        <MusicPlayer />
      </div> */}
    </div>
    
  );
};

export default NewPage;
