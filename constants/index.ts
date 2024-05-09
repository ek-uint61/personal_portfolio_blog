import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import timer from "@/public/Timer.jpg";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/emre-kalayc%C4%B1-b22a651bb/",
  github: "https://github.com/ek-uint61",
  resume: "/resume.pdf",
  source_code: "",
  email: "emrklyci61@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Freelance Web Developer",
    location: "Kirsehir, Turkiye",
    description:
      "Using WordPress and WooCommerce, I've developed e-commerce apps for local businesses. These apps are easy to use and help businesses manage their online stores effectively.",
      icon: React.createElement(CgWorkAlt),
      date: "April   2020 - June 2022",
  },
  {
    title: "Ahi Evran University",
    location: "Kirsehir, Turkiye",
    description:
      "Throughout my university education, I honed my skills in robust mathematics, embedded systems, and artificial intelligence subjects, laying a strong foundation in these areas",
    icon: React.createElement(LuGraduationCap),
    date: "May - 2024",
  },
  {
    title: "C ve Sistem Programlama Dernegi",
    location: "Istanbul, Turkiye",
    description:      
      "The course covers microcontroller fundamentals, focusing on general and ARM microcontroller principles, software development without an operating system, basic software architectures, multitasking, and common communication protocols. Projects will be developed using C programming language and low-level system and hardware libraries. It aims to provide both introductory and advanced knowledge on microcontroller applications, with additional basic electronics and measurement tool usage.",
    icon: React.createElement(CgWorkAlt),
    date: "July - 2024",
  },
  {
    title: "X - Intern",
    location: "Istanbul, Turkiye",
    description:
      ".",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Timer Applications",
    description:
      "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
    tags: ["STM32F103C8T6 - Blue Pill", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: timer,
    projectUrl: "https://circuitdigest.com/microcontroller-projects/how-to-use-adc-in-stm32f103c8-stm32-blue-pill-board",
  },
  {
    title: "Realtor",
    description:
      "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "https://real-estate-app-react.vercel.app/",
  },
  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },

  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },

  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "C",
  "C++",
  "Python",
  "STM32F407 Discovery Board",
  "STM32F103C8T6 - Blue Pill",
  "GPIO",
  "Interputs",
  "ADC/DAC",
  "Timers",
  "DMA",
  "PWM",
  "I2C",
  "SPI",
  "UART",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-Learn",
  "OpenCv",
  "PyTorch",
  "OpenAI API",
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Three.js",
  "Git",

] as const;

// Owner name
export const OWNER_NAME = "Emre KALAYCİ";
