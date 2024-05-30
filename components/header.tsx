"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from 'react-icons/fa'; // İkonu içe aktardık
import { BsMoon, BsSun, BsCommand } from "react-icons/bs";
import Modal from './Modal';
import ModalContent from './ModalContent';

import { LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";

// Header bileşenini tanımla
const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useThemeContext();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="z-[999] relative">
        {/* Stylish background element for the header */}
        <motion.div
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          className="fixed top-0 left-[45%] h-[4.5rem] w-full border-opacity-40 bg-white bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[39rem] sm:rounded-[10px] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        />

        <nav className="flex fixed top-[0.15rem] left-[45%] h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5 text-sm">
            {LINKS.map((link, index) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {link.hash ? (
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
                      {
                        "!text-gray-950 font-medium dark:!text-gray-100": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {index === 0 && <FaHome className="mr-2" />}
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="bg-gray-200 rounded-[10px] absolute inset-0 -z-10 dark:bg-gray-600"
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
                      {
                        "!text-gray-950 font-medium dark:!text-gray-100": activeSection === link.name,
                      }
                    )}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {index === 0 && <FaHome className="mr-2" />}
                    {link.name}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
          <span className="flex items-center justify-center mx-2 text-gray-300 dark:text-gray-400">|</span>

          <button
            type="button"
            className="ml-2 w-[2rem] h-[2rem] rounded-[10px] flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light mode"
            title="Toggle Dark/Light mode"
            style={{ alignSelf: 'center' }}
          >
            {theme === "dark" ? <BsMoon /> : <BsSun />}{" "}
          </button>

          <button
            type="button"
            className="ml-2 w-[2rem] h-[2rem] rounded-[10px] flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
            onClick={handleModalToggle}
            aria-label="Command Icon"
            title="Command Icon"
            style={{ alignSelf: 'center' }}
          >
            <BsCommand />
          </button>
        </nav>

        <Modal show={isModalOpen} onClose={handleModalToggle}>
          <ModalContent onClose={handleModalToggle} />
        </Modal>
      </header>
    </>
  );
};

// Export the Header component.
export default Header;
