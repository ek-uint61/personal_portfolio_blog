import Image from "next/image";
import { Metadata } from "next";
import Link from "./about/Link";
import Section from "./about/Section";
import ConnectLinks from "./about/ConnectLinks";
import Workplaces from "./about/Workplaces";
import Gallery from "./about/Gallery";

import first from "@/public/gallery/1.jpg";
import second from "@/public/gallery/2.jpg";
import third from "@/public/gallery/3.jpg";

import sistem from "@/public/work/c_ve_sistem.png";
import vbt from "@/public/work/vbt.png";
import ahi from "@/public/work/ahi.png";
import freelance from "@/public/work/freelance.png";

import Footer from "./footer";
import { OWNER_NAME, OTHER_LINKS } from "@/constants";

export const metadata: Metadata = {
  title: "About | Emre",
  description: `${OWNER_NAME.split(" ")[0]} is a web development with 2+ years of experience.`,
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

export default function About() {
  return (
    <div className="flex flex-col items-center gap-12 min-h-screen justify-center px-4 md:px-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary dark:text-gray-100">
          About
        </h1>
        <p
          className="animate-in mt-2"
          style={{ "--index": 1 } as React.CSSProperties}
        >
        </p>
      </div>
      <div className="mb-8 md:hidden flex justify-center items-center">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={first}
            alt={""}
            width={324}
            height={139}
            className="relative inset-0 h-48 w-48 sm:h-60 sm:w-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={second}
            alt={""}
            width={220}
            height={260}
            className="inset-0 -top-36 left-1/2 transform -translate-x-1/2 sm:left-[55%] sm:w-48 sm:top-0 w-40 h-40 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56 md:h-56"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={third}
            alt={""}
            width={220}
            height={260}
            className="inset-0 -top-36 left-1/2 transform -translate-x-1/2 sm:left-[55%] sm:w-48 sm:top-0 w-40 h-40 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-46 md:h-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div className="flex flex-col gap-16 md:gap-24 items-center w-full">
        <Section heading="About" headingAlignment="left" className="w-full md:max-w-3xl">
          <div className="flex flex-col gap-6 text-center md:text-left text-sm">
            <p>
              Hi, I&apos;m Emre, I live in Istanbul, Turkiye.
              I have been coding for {new Date().getFullYear() - 2018} years. As
              a software engineer, I specialize in full-stack web development
              and I am currently learning embedded software and machine learning
            </p>
            <p>
            In addition to coding, I like to read fantasy fiction, 
             history, and philosophy books, follow related YouTube channels, and try to create technical articles and content.
            </p>
            <p>
              When I&apos;m not at my desk, I&aposm probably lifting weights, watching a TV show or movie, or playing with my cat.
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left" className="w-full md:max-w-3xl">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity hover:opacity-100" key={link.label}>
                <Link
                  href={link.href}
                  className="link-item inline-grid w-full rounded-lg bg-[#f0eded] dark:bg-[#2d2d2d] px-4 py-3 no-underline transition-all"
                >
                  <div className="flex items-center gap-3 text-xs">
                    <span className=" text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary "
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                        className=" text-xs"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Experience" headingAlignment="center" className="w-full md:max-w-3xl">
          <div className="flex w-full flex-col gap-8 text-sm">
            <p className="text-center md:text-left">
            I specialize in React & Next.js, web development and UI/UX but I am currently learning Embedded Software, Computer Vision   
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

const workplaces = [
  {
    title: "Bootcamp",
    company: "C and System Programmers Association",
    date: "July 2024 - Dec 2024",
    imageSrc: sistem,
    link: "https://csystem.org/",
  },
  {
    title: "Software Developer Intern",
    company: "VBT Software",
    date: "June 2024 - Sep 2024",
    imageSrc: vbt,
    link: "https://www.vbt.com.tr/",
  },
  {
    title: "Wordpress Developer",
    company: "Freelance",
    date: "2021-2022",
    imageSrc: freelance,
    link: "https://wordpress.com/tr/",
  },
  {
    title: "Computer Science - 3.05",
    company: "Ahi Evran University",
    date: "2018 - 2024",
    imageSrc: ahi,
    link: "https://www.ahievran.edu.tr/",
  },
];

const Tech = [
  {
    title: "Programming",
    company: "C / Python",
    link: "https://hines.com",
  },
  {
    title: "Embedded Software",
    company: "ARM Assembly / Embedded Driver Development / STM32",
    link: "https://peripharma.com",
  },
  {
    title: "Web Development & AI Tools",
    company: "HTML / CSS / JavaScript / React.js / Next.js",
    link: "https://camstex.com",
  },
  {
    title: "CI / CD & Development Environments",
    company: "Git / VSCode / Vim",
    link: "https://www.uhd.edu/",
  },
  {
    title: "Others",
    company: "Electronics / Soldering / GNU Linux / Network",
    link: "https://www.uhd.edu/",
  },
];
