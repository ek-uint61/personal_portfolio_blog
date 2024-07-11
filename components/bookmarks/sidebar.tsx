import { useState, useEffect } from 'react';
import { BookmarkCategory } from '@/lib/bookmarks';
import { FaHome } from "react-icons/fa";

interface SidebarProps {
  categories: BookmarkCategory[];
  activeCategory: string | null;
  onCategoryClick: (category: string) => void;
  isVisible: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onCategoryClick, isVisible, toggleSidebar }) => {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setCurrentY(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      if (startY - currentY > 50) {
        toggleSidebar();
      } else if (currentY - startY > 50) {
        toggleSidebar();
      }
    };

    const sidebarElement = document.getElementById('sidebar');
    sidebarElement?.addEventListener('touchstart', handleTouchStart);
    sidebarElement?.addEventListener('touchmove', handleTouchMove);
    sidebarElement?.addEventListener('touchend', handleTouchEnd);

    return () => {
      sidebarElement?.removeEventListener('touchstart', handleTouchStart);
      sidebarElement?.removeEventListener('touchmove', handleTouchMove);
      sidebarElement?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, currentY, toggleSidebar]);

  if (!categories || categories.length === 0) {
    return <div className="bg-gray-800 text-gray-300 p-4">No categories available</div>;
  }

  return (
    <div
      id="sidebar"
      className={`lg:flex lg:flex-col lg:border-r lg:w-72 xl:w-80 bg-zinc-50 p-3 text-black h-screen lg:h-screen overflow-y-auto fixed lg:left-0 lg:top-0 lg:w-84 z-10 border-b px-5 transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full lg:translate-y-0 lg:translate-x-0'
      } bottom-0 w-full lg:bottom-auto`}
    >
      <div className='flex justify-between border-b px-3 py-3'>
        <h2 className="sticky top-0 z-10 bg-zinc-50 text-sm font-semibold tracking-tight text-black">Bookmarks</h2>
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
              <span className={`font-medium ${activeCategory === category.name ? 'text-slate-300' : 'text-slate-400 hover:text-black'}`}>{category.bookmarks.length} bookmarks</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
