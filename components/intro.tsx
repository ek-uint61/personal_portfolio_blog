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
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >  
      <div className="flex items-center justify-center ransition: all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s; will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)">
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
  className="h-24 w-24 object-cover border-[0.1rem] border-white shadow-x2 rounded-xl rotate-[6deg] bg-gray-500 p-1 ;
  "
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
            className="absolute text-2xl bottom-0 right-0  custom-shake"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b className="font-semibold ">Hi, I&apos;m </b> <b className=" italic font-bold"> {OWNER_NAME.split(" ")[0]}.</b>{" "}
        I&apos;m a <b className="font-bold italic">Embedded Software Engineer</b> with{" "}
        <b className="font-semibold ">1+ years</b> of experience. Also I enjoy building{" "}
        <b className="font-semibold">Web and Machine Learning Application</b>{" "}
      </motion.h1>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
      >
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
          <Link
            href="#contact"
            className="group bg-gradient-to-br from-gray-900 to-gray-500 text-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition"
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
            className="group bg-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition borderBlack dark:bg-white/10"
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </a>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-900 flex items-center gap-2 text-[1.1rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-blue-700 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-900 flex items-center gap-2 text-[1.1rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-blue-700 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>

          <Link
           href="#about"
          target="_self"
          className="bg-white p-4 text-gray-900 flex items-center gap-2 text-[1.1rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-blue-700 transition borderBlack dark:bg-white/10 dark:text-white/60"
          aria-label="cat"
          title="cat"
        >
        <FaMedium />
      </Link>



        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
