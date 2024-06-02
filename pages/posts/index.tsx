"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useState, useEffect } from "react";
import Image from "next/image";
import Article from "@/components/article";
import { ARTICLES_DATA } from "@/constants";
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';
import PostHeader from "@/components/postHeader"; // PostHeader bileşenini içe aktarın
import { Header } from "@/components";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

const AllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [searchTerm, setSearchTerm] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Filter articles based on search term
  const filteredArticles = ARTICLES_DATA.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

  // Get the articles for the current page
  const currentArticles = filteredArticles.slice(
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

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <ActiveSectionContextProvider>
    <ThemeContextProvider> {/* ThemeContextProvider ile sarın */}
      <div className="relative min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        {/* Arka plan üst görüntüsü */}
        <Image
          width={1512}
          height={550}
          className={`absolute left-1/2 top-0 -z-10 -translate-x-1/2 transition-all duration-700 ${isImageLoaded ? 'blur-0' : 'blur-md'}`}
          src='/gradient-background-top.png'
          alt=''
          role='presentation'
          priority
          style={{
            transition: 'filter 700ms ease, transform 150ms ease',
            filter: isImageLoaded ? 'none' : 'blur(20px)',
          }}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />

        <main className="flex flex-col items-center px-4">
          {/* <PostHeader />  */}
          <Header/>
          
        
          <h1 className="text-4xl font-bold mt-32 mb-8">All Posts</h1>
          <div className="relative w-full max-w-md mb-8 flex items-center justify-center">

          <input 
            type="text" 
            className="w-full p-2 pl-10  border-gray-300 shadow-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex h-8  max-w-md rounded-md border border-input bg-transparent px-2 py-1 text-xs transition-colors file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mb-8"
            placeholder="Search by Title or Published Date"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
             <FaSearch className=" absolute left-3 top-2 text-gray-400" />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
            {currentArticles.map((article, index) => (
              <Article
                key={index}
                title={article.title}
                date={article.date}
                description={article.description}
                keywords={article.keywords}
                slug={article.slug}
                image={article.image}
                category={article.category}
                type={article.type}
              />
            ))}
          </ul>
          <div className="flex justify-center mt-8 items-center">
            <button onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
              className="mx-1 px-3 py-1 text-gray-700"
              disabled={currentPage === 1}>
              <FaArrowLeft />
            </button>
            {visiblePageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`mx-1 px-3 py-1 rounded-full ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}>
                {pageNumber}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className="mx-1 px-3 py-1 text-gray-700"
              disabled={currentPage >= totalPages}>
              <FaArrowRight />
            </button>
          </div>
        </main>

        {/* Arka plan alt görüntüsü */}
        <Image
          width={1512}
          height={447}
          className={`absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2 transition-all duration-700 ${isImageLoaded ? 'blur-0' : 'blur-md'}`}
          src='/gradient-background-bottom.png'
          alt=''
          role='presentation'
          priority
          style={{
            transition: 'filter 700ms ease, transform 150ms ease',
            filter: isImageLoaded ? 'none' : 'blur(20px)',
          }}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </div>
    </ThemeContextProvider>
    </ActiveSectionContextProvider>
  );
};

export default AllPosts;
