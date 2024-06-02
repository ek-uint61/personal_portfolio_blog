"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useState } from "react";
import Image from "next/image";
import Article from "@/components/article";
import { ARTICLES_DATA } from "@/constants";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PostHeader from "@/components/postHeader"; // PostHeader bileşenini içe aktarın
import ThemeContextProvider from "@/context/theme-context";
import { Footer, About } from "@/components";
import ActiveSectionContextProvider from "@/context/active-section-context";

const AboutMe = () => {
 
  return (
      <div className="relative min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
    <ActiveSectionContextProvider>
    <ThemeContextProvider> {/* ThemeContextProvider ile sarın */}


       


    </ThemeContextProvider>
    </ActiveSectionContextProvider>
    </div>

  );
};

export default AboutMe;
