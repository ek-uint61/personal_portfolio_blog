"use client";

import { useState, useEffect } from "react";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Header, Footer, Skills, About } from "@/components";
import Image from "next/image";
import { Metadata } from "next";
import { OWNER_NAME, OTHER_LINKS } from "@/constants";


export const metadata: Metadata = {
  title: "About | Emre",
  description: `${
    OWNER_NAME.split(" ")[0]
  } is a web development with 2+ years of experience.`,
  authors: {
    name: OWNER_NAME,
    url: OTHER_LINKS.github, 
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "portfolio",
    "portfolio-next",
    "framer-motion",
    "react-hot-toast",
    "react-icons",
    "react-intersection-observer",
    "react-vertical-timeline",
    "tailwindcss",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "html",
    "css",
  ],
  manifest: "/manifest.json",
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY!,
  },
};



const AboutMe = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <ActiveSectionContextProvider>
      <ThemeContextProvider>
        {/* <Header /> */}
        <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-100">
          <Image
            width={1512}
            height={550}
            className={`absolute left-1/2 top-0 -z-10 -translate-x-1/2 transition-all duration-700 ${
              isImageLoaded ? "blur-0" : "blur-md"
            }`}
            src="/gradient-background-top.png"
            alt="Background Top"
            role="presentation"
            priority
            style={{
              transition: "filter 700ms ease, transform 150ms ease",
              filter: isImageLoaded ? "none" : "blur(20px)",
            }}
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className="mt-20">
            <About />
          </div>
          <Image
            width={1512}
            height={447}
            className={`absolute -bottom-0 left-1/2 -z-10 -translate-x-1/2 transition-all duration-700 ${
              isImageLoaded ? "blur-0" : "blur-md"
            }`}
            src="/gradient-background-bottom.png"
            alt="Background Bottom"
            role="presentation"
            priority
            style={{
              transition: "filter 700ms ease, transform 150ms ease",
              filter: isImageLoaded ? "none" : "blur(20px)",
            }}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </ThemeContextProvider>
    </ActiveSectionContextProvider>
  );
};

export default AboutMe;
