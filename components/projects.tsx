"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import { useState } from "react";
import Link from 'next/link'; // Next.js Link bileşenini import ediyoruz
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { ARTICLES_DATA } from "@/constants";
import { scroller } from "react-scroll";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Article from "./article";

const Articles = () => {
  const { ref } = useSectionInView("Articles", 0.5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isIconToggled, setIsIconToggled] = useState(false);
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
      offset: -100,
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

  const handleIconToggle = () => {
    setIsIconToggled(!isIconToggled);
  };

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <div className="flex justify-center items-center space-x-4">
        <Link href="/postlist" target="_blank" onClick={handleIconToggle} onMouseEnter={handleIconToggle} onMouseLeave={handleIconToggle}>
          <svg className={`w-8 h-8 cursor-pointer transition-transform duration-500 ${isIconToggled ? "transform scale-110" : ""}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {isIconToggled ? (
              <path d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"/>
            ) : (
              <path d="M8 2h12v20H4V2h4zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2v-2z"/>
            )}
          </svg>
        </Link>
        <SectionHeading>projects & articles</SectionHeading>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1300px] px-8 sm:px-0 list-none p-0">
          {currentArticles.map((article, i) => (
            <Article key={`article-${i}`} {...article} />
          ))}
        </ul>
      </div>
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
    </section>
  );
};

export default Articles;
