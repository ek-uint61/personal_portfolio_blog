"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useRef, RefObject } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { FaPen, FaLocationArrow } from 'react-icons/fa';

type ArticleProps = {
  date: string;
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  image: string;
  category: string;
  type: string; // New type prop for Blog or Project
};

const Article = ({
  title,
  date,
  description,
  slug,
  keywords,
  image,
  category,
  type, // New type prop for Blog or Project
}: ArticleProps) => {
  const articleRef: RefObject<HTMLLIElement> = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <li
      ref={articleRef}
      className="group mb-4 p-4 border rounded-lg bg-white dark:bg-gray-800 flex flex-col justify-between space-y-4 w-full shadow-md  transition-shadow duration-300"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <FaPen className="text-gray-700 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-400">{type}</span>
        </div>
        <Link href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <FaLocationArrow className="text-white bg-black bg-opacity-75 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300" />
        </Link>
      </div>
      <Link href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="px-4 text-left space-y-2">
        <p className="text-xs text-zinc-500 dark:text-gray-300">{date}</p>
        <Link href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="">
          <h3 className="text-md font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
        </Link>
        <p className="text-xs text-gray-600 dark:text-gray-200 line-clamp-3">{description}</p>
      </div>
    </li>
  );
};

export default Article;
