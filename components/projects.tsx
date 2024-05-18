"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import { useRef, RefObject } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { ARTICLES_DATA } from "@/constants";

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
      <div className="flex justify-center mt-4 space-x-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="rounded-full px-3 py-1 text-xs text-gray-700 dark:text-gray-800"
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

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects & Articles</SectionHeading>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-6 sm:px-0 list-none p-0">
          {ARTICLES_DATA.map((article, i) => (
            <Article key={`article-${i}`} {...article} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
