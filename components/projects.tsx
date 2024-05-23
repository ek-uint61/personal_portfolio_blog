"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { ARTICLES_DATA } from "@/constants";
import { scroller } from "react-scroll";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Article from "./article"; // Article bileşenini içe aktarıyoruz

const Articles = () => {
  const { ref } = useSectionInView("Articles", 0.5);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(ARTICLES_DATA.length / articlesPerPage);

  // Get the articles for the current page
  const currentArticles = ARTICLES_DATA.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scroller.scrollTo('articles', {
      duration: 0,
      smooth: true,
      offset: -100, // adjust the offset value as needed
    });
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
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>projects & articles</SectionHeading>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1300px] px-8 sm:px-0 list-none p-0">
          {currentArticles.map((article, i) => (
            <Article key={`article-${i}`} {...article} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-8 items-center">
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
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === pageNumber
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
          className="mx-1 px-3 py-1 text-gray-700"
          disabled={currentPage >= totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Articles;
