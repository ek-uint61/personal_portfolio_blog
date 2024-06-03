"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { useState } from "react";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Header, Footer, Skills, About } from "@/components";
import Image from "next/image";


const AboutMe = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <ActiveSectionContextProvider>
      <ThemeContextProvider>
        <Header />
        <div className="relative min-h-screen flex flex-col items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 ">
          <Image
            width={1512}
            height={550}
            className={`absolute left-1/2 top-0 -z-10 -translate-x-1/2 transition-all duration-700 ${isImageLoaded ? 'blur-0' : 'blur-md'}`}
            src='/gradient-background-top.png'
            alt='Background Top'
            role='presentation'
            priority
            style={{
              transition: 'filter 700ms ease, transform 150ms ease',
              filter: isImageLoaded ? 'none' : 'blur(20px)',
            }}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
       <div className="mt-20">
        <About/>
        </div>
        <Skills/>
        
         

        <Image
            width={1512}
            height={447}
            className={`absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2 transition-all duration-700 ${isImageLoaded ? 'blur-0' : 'blur-md'}`}
            src='/gradient-background-bottom.png'
            alt='Background Bottom'
            role='presentation'
            priority
            style={{
              transition: 'filter 700ms ease, transform 150ms ease',
              filter: isImageLoaded ? 'none' : 'blur(20px)',
            }}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
                  </div>

      </ThemeContextProvider>
    </ActiveSectionContextProvider>
  );
};

export default AboutMe;
