"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from 'react-icons/fa'; // İkonu içe aktardık
import { BsMoon, BsSun } from "react-icons/bs";

import { useThemeContext } from "@/context/theme-context";

// Header bileşenini tanımla
const PostHeader = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [isIconToggled, setIsIconToggled] = useState(false);

  const handleIconToggle = () => {
    setIsIconToggled(!isIconToggled);
  };

  return (
    <header className="z-[999] relative">
      {/* Stylish background element for the header */}
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full border-opacity-40 bg-white bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[20rem] sm:rounded-[10px] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:flex-nowrap sm:gap-5 text-sm">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 text-black hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200"
              )}
              href="/#home"
            >
              <FaHome className="mr-2" /> {/* İlk elemana ikon ekledik */}
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              className={clsx(
                "text-black flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200"
              )}
              href="/postlist" target="_blank" onClick={handleIconToggle} onMouseEnter={handleIconToggle} onMouseLeave={handleIconToggle}
            >
              <svg className={`w-5 h-5 cursor-pointer transition-transform duration-500 ${isIconToggled ? "transform scale-110" : ""}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {isIconToggled ? (
                  <path d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"/>
                ) : (
                  <path d="M8 2h12v20H4V2h4zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2v-2z"/>
                )}
              </svg>
            </Link>
          </motion.li>
        </ul>
        <span className="flex items-center justify-center mx-2 text-gray-300 dark:text-gray-400">|</span> {/* Dikey çizgi */}
        <button
          type="button"
          className="ml-2 w-[2rem] h-[2rem] rounded-[10px] flex items-center justify-center text-black dark:text-gray-300 hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light mode"
          title="Toggle Dark/Light mode"
          style={{ alignSelf: 'center' }} // Dikeyde ortalamak için
        >
          {theme === "dark" ? <BsMoon /> : <BsSun />}{" "}
        </button>
      </nav>
    </header>
  );
};

// Export the PostHeader component.
export default PostHeader;
