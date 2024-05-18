"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";

// Header bileşenini tanımla
const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Header için şık bir arka plan öğesi */}
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 left-1/2 h-[3.5rem] w-[55%] rounded-none border border-white border-opacity-30 bg-white bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40%] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:bg-transparent"
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 w-[55%] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:bg-transparent">
        <ul className="flex flex-wrap w-full items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-800 sm:w-full sm:flex-nowrap sm:gap-5">
          {LINKS.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.name}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {link.href ? (
                <a
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
                    {
                      "!text-gray-950 font-medium dark:!text-gray-100":
                        activeSection === link.name,
                    }
                  )}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
                    {
                      "!text-gray-950 font-medium dark:!text-gray-100":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash!} // Burada ! işareti hash'in var olduğunu belirtir
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="bg-gray-200/50 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    />
                  )}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Header bileşenini dışa aktar
export default Header;
