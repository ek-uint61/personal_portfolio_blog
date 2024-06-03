"use client"; // Bu yorum, bu kodun Next.js'de istemci tarafında çalışması gerektiğini belirtir.

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaBars, FaPen, FaPlane, FaStackOverflow, FaToolbox } from 'react-icons/fa'; // İkonları içe aktardık
import { BsMoon, BsSun, BsCommand, BsBookmark } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import Modal from './Modal';
import ModalContent from './ModalContent';

import { LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";

// Define the possible section names
type SectionName = 'Home' | 'Writing' | 'Journey' | 'Stack' | 'Workspace' | 'Bookmarks';

// Header bileşenini tanımla
const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useThemeContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define the icons for each section
  const icons: Record<SectionName, JSX.Element> = {
    Home: <FaHome className="mr-2" />,
    Writing: <FaPen className="mr-2" />,
    Journey: <FaPlane className="mr-2" />,
    Stack: <FaStackOverflow className="mr-2" />,
    Workspace: <FaToolbox className="mr-2" />,
    Bookmarks: <BsBookmark className="mr-2" />,
  };

  return (
    <>
      <header className="z-[999] relative">
        {/* Stylish background element for the header */}
        <motion.div
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          className="fixed top-0 left-[50%] h-[3rem] sm:h-[3.5rem] w-full border-opacity-40 bg-white bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[26rem] sm:rounded-[12px] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        />

        <nav className="flex fixed top-[0.15rem] left-[50%] justify-center items-center h-10 sm:h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:py-0">
          <ul className="hidden sm:flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.7rem] sm:text-sm font-semibold text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
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
                      "flex w-full items-center justify-center px-3 py-[0.35rem] hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
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
                    {icons[link.name as SectionName]}
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="bg-zinc-200 rounded-[10px] absolute inset-0 -z-10 dark:bg-gray-600"
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    className={clsx(
                      "flex w-full items-center justify-center px-1 py-1 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
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
                    {icons[link.name as SectionName]}
                    {link.name}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="sm:hidden ml-2 w-[2rem] h-[2rem] mr-40 rounded-[10px] flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
            onClick={handleMobileMenuToggle}
            aria-label="Mobile Menu"
            title="Mobile Menu"
          >
            <FaBars />
          </button>

          <span className="hidden sm:flex items-center justify-center mx-2 text-gray-300 dark:text-gray-400">|</span>

          <button
            type="button"
            className="font-semibold ml-2 w-[2rem] h-[2rem] rounded-[10px] flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light mode"
            title="Toggle Dark/Light mode"
            style={{ alignSelf: 'center' }}
          >
            {theme === "dark" ? <BsMoon /> : <BsSun />}{" "}
          </button>

          <button
            type="button"
            className="font-semibold ml-2 w-[2rem] h-[2rem] rounded-[10px] flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
            onClick={handleModalToggle}
            aria-label="Bookmark Icon"
            title="Bookmarks"
            style={{ alignSelf: 'center' }}
          >
            <BsBookmark />
          </button>

          <button
            type="button"
            className="font-semibold ml-2 w-[2rem] h-[2rem] rounded-[10px] flex items-center justify-center hover:bg-gray-300 hover:dark:bg-gray-600 inset-0 -z-10 dark:border-gray-600"
            onClick={handleModalToggle}
            aria-label="Command Icon"
            title="Command"
            style={{ alignSelf: 'center' }}
          >
            <BsCommand />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.y > 100) {
                setMobileMenuOpen(false);
              }
            }}
            className="fixed bottom-0 left-0 w-full h-3/4 bg-white dark:bg-gray-950 shadow-lg z-50 rounded-t-2xl p-4"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full dark:bg-gray-700"></div>
            </div>
            <ul className="flex flex-col items-center justify-start space-y-4 text-[0.8rem] sm:text-[0.9rem]">
              {LINKS.map((link, index) => (
                <li
                  key={link.hash}
                  className={clsx(
                    "w-full text-left py-1 px-4 rounded-lg flex items-center",
                    {
                      "bg-black text-white rounded-lg dark:bg-black dark:text-white": activeSection === link.name,
                      "border-b dark:border-gray-600": index !== LINKS.length - 1,
                    }
                  )}
                >
                  <AiOutlineRight className="mr-2" /> {/* Add the right arrow icon */}
                  {link.hash ? (
                    <Link
                      className={clsx(
                        "block w-full py-1 text-gray-700 font-semibold dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg",
                        {
                          "!text-white !bg-black !dark:text-white !dark:bg-gray-700": activeSection === link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      className={clsx(
                        "block w-full py-2 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg",
                        {
                          "!text-white !bg-black !dark:text-white !dark:bg-gray-700": activeSection === link.name,
                        }
                      )}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <Modal show={isModalOpen} onClose={handleModalToggle}>
          <ModalContent onClose={handleModalToggle} />
        </Modal>
      </header>
    </>
  );
};

// Export the Header component.
export default Header;
