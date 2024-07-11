// pages/about.tsx

import Image from "next/image";
import { Metadata } from "next";
import Link from "@/components/about/Link";
import Section from "@/components/about/Section";
import ConnectLinks from "@/components/about/ConnectLinks";
import Workplaces from "@/components/about/Workplaces";
import Gallery from "@/components/about/Gallery";
import Footer from "@/components/footer";
import { OWNER_NAME, OTHER_LINKS } from "@/constants";

import first from "@/public/gallery/1.jpg";
import second from "@/public/gallery/2.jpg";
import third from "@/public/gallery/3.jpg";

import sistem from "@/public/work/c_ve_sistem.png";
import vbt from "@/public/work/vbt.png";
import ahi from "@/public/work/ahi.png";
import freelance from "@/public/work/freelance.png";
import teknoopak from '@/public/work/tekno.png'
import Header from "./header";

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
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY!,
  },
};

export default function About() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen text-black">
            <Header/>

        <div className="flex flex-col items-center mb-8">
          <Gallery />
        </div>
        <div className="w-full max-w-screen-xl px-4 md:px-8">
          <div className="flex flex-col justify-center items-center text-center lg:text-left mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary">
              About
            </h1>
          </div>
          <div className="flex flex-col items-center gap-16 md:gap-24">
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex flex-col gap-16">
              <Section heading="About" headingAlignment="left">
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
                    When I&apos;m not at my desk, I&apos;m probably lifting weights, watching a series or movie, playing with my cat, or playing competitive and strategy games.
                  </p>
                </div>
              </Section>

              <Section heading="Connect" headingAlignment="left">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {ConnectLinks.map((link) => (
                    <li className="col-span-1 transition-opacity hover:opacity-100" key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-grid w-full rounded-lg bg-[#f0eded] px-4 py-3 no-underline transition-all"
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

              <Section heading="Experience" headingAlignment="left">
                <div className="flex flex-col gap-8 text-sm">
                  <p className="text-center md:text-left">
                    I specialize in React & Next.js, web development in particular front end and UI/UX but I am currently learning Embedded Software, Computer Vision   
                  </p>
                  <Workplaces items={workplaces} />
                </div>
              </Section>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
  );
}

const workplaces = [

  {
    title: "Software Developer Intern",
    company: "VBT Software",
    date: "06/2024 - 09/2024",
    imageSrc: vbt,
    link: "https://www.vbt.com.tr/",
  },
  {
    title: "Web Developer",
    company: "Remote",
    date: "07/2023 - 01/2024",
    imageSrc: teknoopak,
    link: "https://www.teknoopak.com.tr/",
  },
  {
    title: "Wordpress Developer",
    company: "Freelance",
    date: "06/2020 - 09/2021",
    imageSrc: freelance,
    link: "https://wordpress.com/tr/",
  },
  
  {
    title: "Computer Science - 3.05",
    company: "Ahi Evran University",
    date: "09/2018 - 06/2024",
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
