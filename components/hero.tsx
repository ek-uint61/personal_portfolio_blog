'use client'

import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BlurImage } from '@tszhong0411/ui'
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaGithubSquare, FaMedium } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"
import { EXTRA_LINKS, OTHER_LINKS, OWNER_NAME } from "@/constants"
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const TEXTS = [
  {
    text: 'searching',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'learning',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'working',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  },
]

const Hero = () => {
  const [scope, animate] = useAnimate()

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    animate(
      [
        [scope.current, { y: '0%' }, { duration: 0.3 }],
        [scope.current, { y: '-33%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-66%' }, { duration: 0.3, at: '+1.3' }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <section
      ref={ref}
      id="home"
      className="mt-8 mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem] px-4"
    >
      <div className='flex flex-col md:flex-row md:justify-between md:gap-20 items-center'>
        <motion.div
          className='flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl'
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text font-title text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem]'>
            Hi, I'm <b>Emre</b>. I have 2+ years of experience in <b>web development</b> and I am currently {' '}
            <div className='inline-grid h-9 overflow-hidden sm:h-14'>
              <div ref={scope}>
                {TEXTS.map(({ text, className }, index) => (
                  <div className={className} key={index}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{' '}
            <b>embedded software and AI.</b>
          </h1>
        </motion.div>
        <motion.div
          className='relative w-full h-64 md:w-1/2 flex justify-center items-center md:flex '
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Canvas className="w-full h-full">
            <Model />
          </Canvas>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-1  mt-6"
      >
        <div className="flex gap-4 flex-col sm:flex-row text-base font-medium items-center justify-center">
          <Link
            href="#contact"
            className="group font-semibold text-base text-white px-7 py-2 bg-gray-700 hover:bg-gray-800 flex items-center gap-2 rounded-[9px] outline-none focus:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>
          <a
            href={OTHER_LINKS.resume}
            target="_blank"
            className="group font-semibold text-base px-5 py-2 rounded-[9px] border-none cursor-pointer font-inherit transition-all duration-300 bg-white flex items-center gap-2 outline-none focus:scale-105 hover:bg-[#efeeee] dark:bg-white dark:hover:bg-gray-300 dark:hover:text-white active:scale-35 visited:bg-white"
            style={{ boxShadow: 'inset 0 0 0 1px #dfdfdf'}}
          >
            <p className="text-gray-800">Download Resume{" "}</p>
            <HiDownload className="opacity-60 group-hover:translate-y-0.1 transition text-black" />
          </a>
        </div>
        <div className="flex gap-1 text-lg font-medium items-center justify-center">
          <Link
            href={OTHER_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 sm:p-3 text-gray-900 ml-3 flex items-center text-[1rem] sm:text-[0.9rem] rounded-[9px] outline-none active:scale-95 hover:bg-[#efeeee] hover:text-gray-800 transition borderBlack dark:bg-white dark:text-gray-700 dark:hover:bg-gray-300"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={OTHER_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 sm:p-3 text-gray-900 flex items-center gap-2 text-[1rem] sm:text-[0.9rem] rounded-[9px] outline-none active:scale-95 hover:bg-[#efeeee] hover:text-gray-800 transition borderBlack dark:bg-white dark:text-gray-700 dark:hover:bg-gray-300"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>
          <Link
            href="#about"
            target="_self"
            className="bg-white p-2 sm:p-3 text-gray-900 flex items-center gap-2 text-[1rem] sm:text-[0.9rem] rounded-[9px] outline-none active:scale-95 hover:bg-[#efeeee] hover:text-gray-800 transition borderBlack dark:bg-white dark:text-gray-700 dark:hover:bg-gray-300"
            aria-label="Medium"
            title="Medium"
          >
            <FaMedium />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
