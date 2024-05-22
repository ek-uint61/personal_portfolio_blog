"use client"; // Add this directive at the top

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBars, FaFolder, FaFolderOpen, } from 'react-icons/fa';
import { PostData } from '@/lib/markdown';
import HeadingsSidebar from './HeadingsSidebar';

type NavbarProps = {
  allPostsData: PostData[];
  currentPostSlug: string;
  headings: { id: string; text: string; level: number }[];
};

const Navbar = ({ allPostsData, currentPostSlug, headings }: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({});

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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleSubcategory = (subcategoryKey: string) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [subcategoryKey]: !prev[subcategoryKey],
    }));
  };

  const sortedPosts = [...allPostsData].sort((a, b) => a.number - b.number);

  const groupedPosts = sortedPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = {};
    }
    if (!acc[post.category][post.subcategory]) {
      acc[post.category][post.subcategory] = [];
    }
    acc[post.category][post.subcategory].push(post);
    return acc;
  }, {} as Record<string, Record<string, PostData[]>>);

  return (
    <nav className={`border-b-2 border-gray-600 fixed top-0 left-0 w-full z-10 transition-transform transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'} bg-white`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3 ">
        <div className="flex justify-center w-full">
          <Link
            href="/"
            className="group font-semibold px-7 py-2 rounded-[9px] border-2 border-gray-500 cursor-pointer transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#bab6b6] hover:border-6 hover:border-gray-700 dark:hover:bg-white active:scale-95 dark:bg-white/10 visited:bg-white visited:text-gray-700"
          >
            <FaArrowLeft className="text-black text-sm" />
            <span className="text-black text-sm font-semibold">back to home</span>
          </Link>
        </div>

        <div className="flex items-center mr-2">
          <button
            type="button"
            className="flex fixed top-5 right-10 text-sm rounded-full md:me-0 dark:focus:ring-gray-500"
            id="menu-button"
            onClick={toggleMenu}
          >
            <p className="text-sm font-bold border-dashed border-b-2 border-black mr-3">other posts</p>
            <FaBars className="text-black text-2xl" />
          </button>
        </div>

        <div className="flex items-center ml-2">
          <button
            type="button"
            className="flex fixed top-5 left-10 text-sm rounded-full md:me-0 dark:focus:ring-gray-500 mr-4"
            id="sidebar-button"
            onClick={toggleSidebar}
          >
            <p className="text-sm font-semibold border-dashed border-b-2 border-black mr-4">post content</p>
            <FaBars className="text-black text-2xl" />
          </button>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          type="button"
          className="absolute top-5 left-5 text-black dark:text-white"
          onClick={toggleMenu}
        >
          <FaBars className="text-2xl" />
        </button>
        <div className="border-l-2 border-black rounded-l-lg p-4 bg-white gap-x-3 rounded-r-lg shadow-lg h-[calc(100vh)] overflow-y-auto">
          <h2 className="text-sm font-semibold mb-8 border-b-4 border-black p-3 text-center">All Posts</h2>
          <ul className="space-y-2">
            {Object.keys(groupedPosts).map((category) => (
              <li key={category}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleCategory(category)}
                >
                  {expandedCategories[category] ? (
                    <FaFolderOpen className="mr-2 text-black" />
                  ) : (
                    <FaFolder className="mr-2 text-black" />
                  )}
                  <h3 className="text-sm font-bold flex items-center mr-2">{category}</h3>
                </div>
                {expandedCategories[category] && (
                  <ul className="pl-4 border-l-2 border-black ml-2">
                    {Object.keys(groupedPosts[category]).map((subcategory) => {
                      const subcategoryKey = `${category}-${subcategory}`;
                      return (
                        <li key={subcategory}>
                          <div
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleSubcategory(subcategoryKey)}
                          >
                            {expandedSubcategories[subcategoryKey] ? (
                              <FaFolderOpen className="mr-2 text-black" />
                            ) : (
                              <FaFolder className="mr-2 text-black" />
                            )}
                            <h4 className="text-xs font-bold flex items-center mr-2">{subcategory}</h4>
                          </div>
                          {expandedSubcategories[subcategoryKey] && (
                            <ul className="pl-4 border-l-2 border-black ml-2">
                              {groupedPosts[category][subcategory].map((post) => (
                                <li className={`text-sm font-semibold hover:underline ${post.slug === currentPostSlug ? 'bg-[#b1b1b1b1] hover:bg-[#b4b4b4] border-2 border-black mt-2 mb-2 hover:no-underline rounded-md ' : ''}`} key={post.slug}>
                                  <Link href={`/blog/${post.slug}`} className={`text-gray-600 hover:text-blue-700 text-xs ${post.slug === currentPostSlug ? 'text-gray-800 hover:text-gray-800 ' : ''}`}>
                                    {post.number}- {post.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <button
          type="button"
          className="absolute top-4 right-4 text-black dark:text-white"
          onClick={toggleSidebar}
        >
          <FaBars className="text-2xl " />
        </button>
        <HeadingsSidebar headings={headings} className="p-4" />
      </div>
    </nav>
  );
};

export default Navbar;
