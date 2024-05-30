"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useState } from "react";
import Link from 'next/link';
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { ARTICLES_DATA } from "@/constants";
import { scroller } from "react-scroll";
import Article from "./article";

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
      offset: -100,
    });
  };

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>latest articles</SectionHeading>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-[1200px] px-4 sm:px-0 list-none p-0">
          {currentArticles.map((article, i) => (
            <Article key={`article-${i}`} {...article} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Link href="/posts" legacyBehavior>
          <a
          target="_blank"
           className="mt-8 font-bold text-sm px-5 py-2 rounded-[9px] border-none cursor-pointer font-inherit transition-all duration-300  flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#efeeee] dark:hover:bg-gray-700  active:scale-35 "
           style={{ boxShadow: 'inset 0 0 0 1px #dfdfdf'}}
           >
            see all articles
          </a>
    
        </Link>
      </div>
    </section>
  );
};

export default Articles;
