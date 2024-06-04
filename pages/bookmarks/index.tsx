"use client";

import { useState, useEffect } from "react";
import BookmarkCard from '@/components/bookmarks/BookmarkCard';
import Sidebar from '@/components/bookmarks/sidebar';
import { BookmarkCategory } from '@/lib/bookmarks';
import { categories } from '@/lib/categories';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';

const BookmarksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
    setCurrentPage(1); // Reset the page to 1 when the category changes
  };

  useEffect(() => {
    setTimeout(() => setIsContentVisible(true), 100);
  }, []);

  const filteredBookmarks = activeCategory
    ? categories
        .find((category) => category.name === activeCategory)
        ?.bookmarks.filter(bookmark =>
          bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bookmark.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) || []
    : [];

  const postsPerPage = 15;
  const totalPages = Math.ceil(filteredBookmarks.length / postsPerPage);
  const currentBookmarks = filteredBookmarks.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisiblePageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else if (currentPage <= 3) {
      return Array.from({ length: 5 }, (_, index) => index + 1);
    } else if (currentPage > totalPages - 3) {
      return Array.from({ length: 5 }, (_, index) => totalPages - 4 + index);
    } else {
      return Array.from({ length: 5 }, (_, index) => currentPage - 2 + index);
    }
  };

  

  const visiblePageNumbers = getVisiblePageNumbers();

  return (
    <div className="relative min-h-screen text-gray-900">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <main className="flex flex-col items-center pl-72 px-4">
        <div className="flex items-center mt-8 mb-4">
        </div>
        {activeCategory && (
          <div className="flex-1 p-4 w-full max-w-7xl">
      
            <h2 className="text-2xl font-bold mb-4 text-center">{activeCategory}</h2>
            <div className="relative w-full max-w-md mb-8 flex items-center justify-center mx-auto">
            <input
        type="text"
        placeholder="Type a command or search"
        className="w-full p-2 mb-4 border rounded border-gray-200 text-xs bg-gray-100 "
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
            </div>
            <div className="p-5 sm:p-8 grid-container">
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-2 md:columns-2 lg:columns-3  [&>img:not(:first-child)]:mt-8">
              {currentBookmarks.map((bookmark, index) => (
                <BookmarkCard key={bookmark.id} bookmark={bookmark} />
              ))}
            </div>
            </div>
            {filteredBookmarks.length > 0 && (
              <div className="flex justify-center mt-8 items-center mb-10">
                <button
                  onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                  className="mx-1 px-3 py-1 text-gray-700"
                  disabled={currentPage === 1}
                >
                  <FaArrowLeft />
                </button>
                {visiblePageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`mx-1 px-3 py-1 rounded-full ${currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                  className="mx-1 px-2 py-1 text-gray-700"
                  disabled={currentPage >= totalPages}
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default BookmarksPage;
