import { Metadata } from "next";
import Image from "next/image"; // Image bileşenini ekliyoruz
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Header, Footer, ThemeSwitch } from "@/components";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { EXTRA_LINKS, OTHER_LINKS, OWNER_NAME } from "@/constants";
import "./globals.css";

// inter font export
const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: '#CCD6E0',
};

// site metadata
export const metadata: Metadata = {
  title: `${OWNER_NAME.split(" ")[0]} | Personal Portfolio`,
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

// root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body  
        className={`${inter.className}  font-sans bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* Arka plan üst görüntüsü */}
        <Image
          width={1512}
          height={550}
          className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
          src='/gradient-background-top.png'
          alt=''
          role='presentation'
          priority
        />
        {/* dark:bg-[#b18e8f] */}
        {/* <div className="relative">
          <div className=" dark:bg-[#b18e8f]  absolute top-[10rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"/>
            <div className="bg-[#cfccc975] dark:bg-[#cbc6c3] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"/>
        </div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <aside>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>
            <aside>
              {/* <ThemeSwitch /> */}
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* Arka plan alt görüntüsü */}
        <Image
          width={1512}
          height={800}
          className='absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2'
          src='/gradient-background-bottom.png'
          alt=''
          role='presentation'
          priority
        />

        {/* vercel analytics */}
        <Analytics />

        {/* vercel speed insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}