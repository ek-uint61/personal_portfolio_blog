// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaMedium } from "react-icons/fa";

import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

// Define the Intro component.
const Intro = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Home", 0.5);
  // Use the 'useActiveSectionContext' to manage active sections and clicks.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] px-4"
    >
      <div className="flex items-center justify-center transition-all duration-400 ease-cubic-bezier-03_0.98_0.52_0.99 will-change-transform transform perspective-[1000px] rotate-x-[0deg] rotate-y-[0deg] scale-[1]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt={`${OWNER_NAME.split(" ")[0]} portrait`}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-20 w-20 sm:h-24 sm:w-24 object-cover border-[0.2rem] border-white shadow-x2 rounded-xl rotate-[6deg] bg-gray-500 p-1"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-2xl bottom-0 right-0 custom-shake"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
  className="text-gray-800 mb-8 mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.5px] md:!leading-tight"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  <b>Hi, I'm Emre.</b> <b className="font-bold">I have 2+ years of experience in web development and I am currently learning <b> embedded software and AI.</b></b>
</motion.h1>



      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
      >
        <div className="flex gap-4 flex-col sm:flex-row text-lg font-medium">
          <Link
            href="#contact"
            className="group font-semibold text-white px-7 py-2 bg-gray-700 hover:bg-gray-800 flex items-center gap-2 rounded-[9px] outline-none focus:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => {
              // Set the active section and the time of the last click.
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>
          <a
            href={EXTRA_LINKS.resume}
            target="_blank"
            className="group font-semibold px-7 py-2 rounded-[9px] border-none cursor-pointer font-inherit transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#e8d6d6] hover:border-6 hover:border-gray-100 dark:bg-white dark:hover:bg-gray-300 dark:hover:text-white active:scale-35 visited:bg-white  "
            style={{ boxShadow: 'inset 0 0 0 2px #000'}}
          >
            <p className="text-gray-800">Download Resume{" "}</p>
            <HiDownload className="opacity-60 group-hover:translate-y-0.1 transition text-black" />
          </a>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 sm:p-4 text-gray-900 flex items-center gap-2 text-[1rem] sm:text-[1.1rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:bg-[#eee1e1] hover:text-gray-800 transition borderBlack dark:bg-white dark:text-gray-700 dark:hover:bg-gray-300"
            style={{ boxShadow: 'inset 0 0 0 1px #000' }}
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 sm:p-4 text-gray-900 flex items-center gap-2 text-[1rem] sm:text-[1.1rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:bg-[#eee1e1] hover:text-gray-800 transition borderBlack dark:bg-white dark:text-gray-700 dark:hover:bg-gray-300"
            style={{ boxShadow: 'inset 0 0 0 1px #000' }}
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>
          <Link
            href="#about"
            target="_self"
            className="bg-white p-3 sm:p-4 text-gray-900 flex items-center gap-2 text-[1rem] sm:text-[1.1rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:bg-[#eee1e1] hover:text-gray-800 transition borderBlack dark:bg-white dark:text-gray-700 dark:hover:bg-gray-300"
            style={{ boxShadow: 'inset 0 0 0 1px #000' }}
            aria-label="Medium"
            title="Medium"
          >
            <FaMedium />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
