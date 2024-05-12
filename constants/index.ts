import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import timer from "@/public/Timer.jpg";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";
import teknoopak from "@/public/teknoopak.png";
import mobileApp from "@/public/mobileApp.png";

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
    title: "Ahi Evran University Computer Science - GPA: 3.05",
    location: "Kirsehir, Turkiye",
    description:
      "Throughout my university education, I honed my skills in robust mathematics, embedded systems, and artificial intelligence subjects, laying a strong foundation in these areas"
       , 
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
    title: "LCD module, 4-bit parallel communication",
    description:
      "This project links an alphanumeric LCD module to the STM32F103C8T6 Blue Pill board, enabling text display through 4-bit parallel communication. It provides hands-on embedded system experience",
    tags: ["STM32F103C8T6 - Blue Pill", "Alphanumeric LCD module", "Jumper wires", "10k potentiometer", "Breadboard","USB cable", " ST-LINK v2 "],
    imageUrl: timer,
    projectUrl: "https://github.com/ek-uint61/Ecomm-Mobile-App",
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
    title: "EComm Mobile App",
    description:
      "This application is an e-commerce mobile application of the support packages provided by the above technoopak company. Our app consist of a NodeJS Backend, a separate stripe Node server and React Native front end.  ",
    tags: ["React Native", "NodeJS", "Stripe", "MongoDB", "RestAPI", ],
    imageUrl: mobileApp,
    projectUrl: "https://github.com/ek-uint61/Ecomm-Mobile-App",
  },

  {
    title: "Teknoopak",
    description:
      "Teknoopak is an advanced ERP software for businesses. It streamlines processes, supports digital transitions like e-Invoicing, and offers broad solutions from production to finance. Teknoopak aims to evolve with technology, becoming a top choice for businesses worldwide.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: teknoopak,
    projectUrl: "https://www.teknoopak.com.tr/",
  },




] as const;

// Data for skills
export const SKILLS_DATA = [
  "C",,
  "Python",
] as const;


// Data for skills
export const SKILLS1_DATA = [
  "STM32F407 Discovery Board",
  "STM32F103C8T6 - Blue Pill",
  "STM32 Nucleo-F401RE",
  "STM32 NUCLEO-C031C6",
  "EK-TM4C123GXL LaunchPad Evaluation Board",
  "ESP32",
  "Internal architecture of ARM Cortex M3/M4 Processor",
  "Embeddedd C",
  "Assembly - Basic",
  "Driver Development",
  "GPIO",
  "Interputs",
  "ADC/DAC",
  "Timers",
  "DMA",
  "PWM",
  "I2C",
  "SPI",
  "UART",
  "CAN",
] as const;

// Data for skills
export const SKILLS2_DATA = [ 
  "GCC",
  "CMake",
  "GDB",
  "TDD",
  "Unit Testing"
] as const;


// Data for skills
export const SKILLS3_DATA = [ 

  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-Learn",
  "OpenCv",
  "YOLOv5",
  "PyTorch",
  "OpenAI API",
  "Llama 3",

  // "QT Framework",


// "Three.js",
// "WebGL",
// "Blender",

] as const;

// Data for skills
export const SKILLS4_DATA = [ 
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
] as const;



// Data for skills
export const SKILLS5_DATA = [ 
  "Git",
  "VSCode",
  "STM32CubeIDE",
  "Atollic TrueSTUDIO",
  "IAR Embedded Workbench for ARM",
  "Keil MDK",
  "Jupyter Notebook",
  "Google Colab"
] as const;

// Data for skills
export const SKILLS6_DATA = [ 
   
  "Electronics",
  "Soldering",
  "Basic PCB Design",
  "Fusion 360", 
  "GNU Linux",
  "Network",

] as const;




// Owner name
export const OWNER_NAME = "Emre KALAYCİ";
