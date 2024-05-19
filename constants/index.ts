import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import timer from "@/public/Timer.jpg";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";
import teknoopak from "@/public/teknoopak.png";
import mobileApp from "@/public/mobileApp.png";



import { SectionName } from "@/context/active-section-context";

export const LINKS: { href?: string; hash?: string; name: SectionName }[] = [
  { hash: "#home", name: "Home" },
  { hash: "#about", name: "About" },
  { hash: "#skills", name: "Skills" },
  { hash: "#experience", name: "Experience" },
  { hash: "#articles", name: "Articles" },
  { hash: "#contact", name: "Contact" },
];


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
      "Throughout my university education, I honed my skills in robust mathematics, embedded systems, and ai subjects, laying a strong foundation in these areas"
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




// Data for skills
export const SKILLS1_DATA = [
  "C",
  "Python",
  "ARM Assembly",
  "ARM® Cortex® -M3 & M4 MCU Architecture",
  "Embedded Driver Development",

  "STM32",
  "ESP32",
  "GPIO",
  "Interputs",
  "Timers",
  "ADC/DAC",
  "PWM",
  "DMA",
  "UART",
  "USART",
  "SPI",
  "I²C",
  "1-Wire Bus Protocol",
  "CANBUS",
  "MODBUS",
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
  "React.js",
  "Next.js",
  "/",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-Learn",
  "TensorFlow",
  "PyTorch",
  "OpenAI API",
  "Llama 3",
  "Mixtral 8x7B"
] as const;


// Data for skills
export const SKILLS5_DATA = [ 
  "Git",
  "VSCode",
  "Vim",
  "STM32CubeIDE",
  "Atollic TrueSTUDIO",
  "IAR Embedded Workbench for ARM",
] as const;

// Data for skills
export const SKILLS6_DATA = [    
  "Electronics",
  "Soldering",
  // "Basic PCB Design",
  // "Fusion 360", 
  "GNU Linux",
  "Network",
] as const;


// /constants/articlesData.ts
export const ARTICLES_DATA = [
  {
    date: "2024-05-18",
    title: "Upsampling and Downsampling in Digital Signal Processing",
    description: "A comprehensive guide on the techniques of upsampling and downsampling, their applications, and their importance in digital signal processing.",
    keywords: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next"],
    slug: "deneme1", 
  },
  {
    date: "2023-03-22",
    title: "Designing Effective Intrusion Detection Systems",
    description: "Exploring the methodologies and technologies involved in creating robust intrusion detection systems for vehicle cybersecurity.",
    keywords: ["Intrusion Detection", "Cybersecurity", "Vehicle Security"],
    slug: "datatype"
  },
  {
    date: "2023-02-15",
    title: "Upsampling and Downsampling in Digital Signal Processing",
    description: "A comprehensive guide on the techniques of upsampling and downsampling, their applications, and their importance in digital signal processing.",
    keywords: ["Upsampling", "Downsampling", "DSP"],
    slug: "deneme2"
  },
  {
    date: "2023-01-30",
    title: "AUTOSAR ECU Development: Challenges and Solutions",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["AUTOSAR", "ECU Development", "Challenges"],
    slug: "deneme3"
  },
  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme4"
  },
  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },
  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },  

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  }, 

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  }, 

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  }, 

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },


  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  },

  {
    date: "2023-01-30",
    title: "Interfacing SX1278 (Ra-02) LORA Module with Arduino",
    description: "An overview of the development process of AUTOSAR ECUs, highlighting common challenges and practical solutions.",
    keywords: ["LORA", "Arduino", "SX1278"],
    slug: "deneme5"
  }, 
];

// Owner name
export const OWNER_NAME = "Emre KALAYCİ";
