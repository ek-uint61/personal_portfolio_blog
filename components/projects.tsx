"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import { useRef, RefObject, useState } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { ARTICLES_DATA } from "@/constants";
import { animateScroll as scroll, scroller } from "react-scroll";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type ArticleProps = {
  date: string;
  title: string;
  description: string;
  keywords: string[];
  slug: string;
};

const Article = ({
  title,
  date,
  description,
  slug,
  keywords,
}: ArticleProps) => {
  const articleRef: RefObject<HTMLLIElement> = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["0 1", "1.33 1"],
  });

  const bgColors = ["#51cf66", "#94d82d", "#ffd43b", "#fdf2e9"];

  return (
    <li
      ref={articleRef}
      className="mb-6 text-center border rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 flex flex-col justify-between space-y-2"
    >
      <div>
        <Link href={`/blog/${slug}`} legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
          >
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-500 mb-1">{title}</h3>
          </a>
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-1">{date}</p>
        <p className="text-xs text-gray-700 dark:text-gray-200">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-800"
            style={{ backgroundColor: bgColors[index % bgColors.length] }}
          >
            {keyword}
          </span>
        ))}
      </div>
    </li>
  );
};

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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-6 sm:px-0 list-none p-0">
          {currentArticles.map((article, i) => (
            <Article key={`article-${i}`} {...article} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-8 items-center">
        <button
          onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="mx-1 px-3 py-1  text-gray-700"
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
          className="mx-1 px-3 py-1  text-gray-700"
          disabled={currentPage >= totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Articles;
