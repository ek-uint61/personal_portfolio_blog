// components/navbar.tsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { PostData } from '@/lib/markdown';

type NavbarProps = {
  allPostsData: PostData[];
  currentPostSlug: string;
};

const Navbar = ({ allPostsData, currentPostSlug }: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const sortedPosts = [...allPostsData].sort((a, b) => a.number - b.number);

  const boxShadowStyle = {
    boxShadow: 'inset 0 0 0 2px #45260a'
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-transform transform ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-white dark:bg-gray-900 border-solid border-b border-gray-100`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="flex items-center ml-2">
          <Link href="/" className="group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700" style={boxShadowStyle}>
            <FaArrowLeft className="text-black text-sm" />
            <span className="text-black text-sm font-semibold">back to home</span>
          </Link>
        </div>
        <button
          type="button"
          className="flex text-sm rounded-full md:me-0 dark:focus:ring-gray-500"
          id="menu-button"
          onClick={toggleMenu}
        >
          <FaBars className="text-black text-2xl" />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-black dark:text-white"
          onClick={toggleMenu}
        >
          <FaBars className="text-2xl" />
        </button>
        <div className="p-4 bg-white gap-x-3 rounded-r-lg shadow-lg h-[calc(100vh)] overflow-y-auto">
          <h2 className="text-sm font-semibold mb-8 border-b-4 border-black p-4">All Posts</h2>
          <ul className="space-y-2">
            {sortedPosts.map((post) => (
              <li className={`p-2 border-2 rounded-md border-black ${post.slug === currentPostSlug ? 'bg-gray-200 rounded-md ' : ''}`} key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`text-gray-600 hover:text-blue-700 text-xs ${post.slug === currentPostSlug ? 'text-gray-800': ''}`}
                  onClick={toggleMenu}
                >
                  {post.number}. {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
