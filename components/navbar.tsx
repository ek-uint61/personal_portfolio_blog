"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-transform transform ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-white dark:bg-gray-900 border-solid border-b border-gray-100`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="flex items-center ml-2"> {/* Margin-left added here */}
          <Link href="/" className="group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700" style={{ boxShadow: 'inset 0 0 0 2px #000' }}>
            <FaArrowLeft className="text-black text-sm" />
            <span className="text-black text-sm font-semibold">back to home</span>
          </Link>
        </div>
        <button
          type="button"
          className="flex text-sm rounded-full md:me-0 dark:focus:ring-gray-500"
          id="user-menu-button"
        >
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_640.png"
            alt="user photo"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
