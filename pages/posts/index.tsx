"use client";

import { useState, useEffect } from "react";
import ArticleCard from "@/components/allPost/postCard";
import Sidebar, { getCategoriesFromArticles } from "@/components/allPost/sidebar"; // Correct import
import { ARTICLES_DATA } from "@/constants";
import { FaSearch } from "react-icons/fa";
import ThemeContextProvider from "@/context/theme-context";
import Navbar from '@/components/bookmarks/navbar'; // Corrected import path

const AllPosts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;
  const [searchTerm, setSearchTerm] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);

  const categories = getCategoriesFromArticles(ARTICLES_DATA);
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0]?.name || null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
    setCurrentPage(1); // Reset the page to 1 when the category changes
  };

  useEffect(() => {
    if (!activeCategory && categories.length > 0) {
      setActiveCategory(categories[0].name);
    }
    setTimeout(() => setIsContentVisible(true), 100);
  }, [activeCategory, categories]);

  const filteredArticles = activeCategory
    ? ARTICLES_DATA.filter(article =>
        article.category === activeCategory &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.date.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : ARTICLES_DATA.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.date.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisiblePageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <ThemeContextProvider>
      <div className="relative min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <Navbar toggleSidebar={toggleSidebar} /> {/* Ensure Navbar is correctly imported and used */}
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
          isVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex flex-col items-center pl-0 lg:pl-72 px-4">
          <div className="flex items-center mt-8 mb-4">
          </div>
          {activeCategory && (
            <div className="flex-1 p-4 w-full max-w-7xl">
              <div className="flex items-center justify-center mb-4 gap-2">
                <h2 className="text-2xl font-bold text-center">{activeCategory}</h2>
              </div>
              <div className="relative w-full max-w-md mb-8 flex items-center justify-center mx-auto">
                <input
                  type="text"
                  placeholder="Search by Title or Published Date"
                  className="w-full p-2 mb-4 border rounded border-gray-200 text-xs bg-gray-100"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className={`p-5 sm:p-8 grid-container transition-all duration-700 ${isContentVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}>
                <div className="columns-1 gap-5 sm:columns-2 sm:gap-2 md:columns-2 lg:columns-3  [&>img:not(:first-child)]:mt-8">
                  {currentArticles.map((article, index) => (
                    <ArticleCard
                      key={index}
                      title={article.title}
                      date={article.date}
                      description={article.description}
                      slug={article.slug}
                      image={article.image}
                    />
                  ))}
                </div>
              </div>
              {filteredArticles.length > 0 && (
                <div className="flex justify-center mt-8 items-center mb-10">
                  {visiblePageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={` mx-1 px-3 py-1 rounded-[10px] text-xs ${currentPage === pageNumber ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-700"}`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default AllPosts;
