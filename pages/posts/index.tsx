"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useState } from "react";
import Image from "next/image";
import Article from "@/components/article";
import { ARTICLES_DATA } from "@/constants";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PostHeader from "@/components/postHeader"; // PostHeader bileşenini içe aktarın
import ThemeContextProvider from "@/context/theme-context";

const AllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(ARTICLES_DATA.length / postsPerPage);

  // Get the articles for the current page
  const currentArticles = ARTICLES_DATA.slice(
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
    <ThemeContextProvider> {/* ThemeContextProvider ile sarın */}
      <div className="relative min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        {/* Arka plan üst görüntüsü */}
        <Image
          width={1512}
          height={550}
          className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 dark:hidden'
          src='/gradient-background-top.png'
          alt=''
          role='presentation'
          priority
        />

        <main className="flex flex-col items-center px-4">
          <PostHeader /> {/* PostHeader bileşenini ekleyin */}
        
          <h1 className="text-4xl font-bold mt-32 mb-8">All Posts</h1>
          
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
          className='absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2 dark:hidden'
          src='/gradient-background-bottom.png'
          alt=''
          role='presentation'
          priority
        />
      </div>
    </ThemeContextProvider>
  );
};

export default AllPosts;
