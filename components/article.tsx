"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import { useRef, RefObject } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";

type ArticleProps = {
  date: string;
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  image: string; // Yeni image prop'u ekliyoruz
};

const Article = ({
  title,
  date,
  description,
  slug,
  keywords,
  image, // Yeni image prop'unu alıyoruz
}: ArticleProps) => {
  const articleRef: RefObject<HTMLLIElement> = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["0 1", "1.33 1"],
  });

  const bgColors = ["#51cf66", "#94d82d", "#ffd43b", "#AF8F6F"];

  return (
    <li
      ref={articleRef}
      className="mb-2 text-center pb-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between space-y-1"
    >
      <Link href={`/blog/${slug}`} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full h-64 object-cover mb-2 rounded-t-lg" />
        </a>
      </Link>
      <div className="p-1">
        <Link href={`/blog/${slug}`} legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
          >
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-500 mb-1">
              {title}
            </h3>
          </a>
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-1">{date}</p>
        <p className="text-xs text-gray-700 dark:text-gray-200 mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="rounded-full px-2 mb-2 sm:px-3 py-1 text-xs sm:text-xs text-gray-700 dark:text-gray-800"
            style={{ backgroundColor: bgColors[index % bgColors.length] }}
          >
            {keyword}
          </span>
        ))}
      </div>
    </li>
  );
};

export default Article;
