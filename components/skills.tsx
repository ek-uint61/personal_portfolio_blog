"use client";

import { motion } from "framer-motion";

import { SKILLS_DATA } from "@/constants";
import { SKILLS1_DATA } from "@/constants";
import { SKILLS2_DATA } from "@/constants";
import { SKILLS4_DATA } from "@/constants";
import { SKILLS5_DATA } from "@/constants";
import { SKILLS6_DATA } from "@/constants";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Define animation variants for the fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Stagger the delay for each skill item
    },
  }),
};

const Skills = () => {
  // Use the custom hook to determine when this section is in view
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-8 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>


      <h2 className="mb-4">Programming:</h2>


      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {SKILLS_DATA.map((skill, i) => (
          <motion.li
            id="skills"
            key={`skill-${i}`}
            className="bg-white borderBlack rounded-xl px-4 py-1 text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i} // Assign a custom index for animation delay
          >
            {skill}
          </motion.li>
        ))}
      </ul>


      <h2 className="mt-8 mb-4">Embedded Software:</h2>


      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-6">

        {SKILLS1_DATA.map((skill, i) => (
          <motion.li
            id="skills"
            key={`skill-${i}`}
            className="bg-white borderBlack rounded-xl px-4 py-1 text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i} // Assign a custom index for animation delay
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <h2 className="mt-12 mb-4">Testing & Debugging Tools: </h2>

<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-6">

{SKILLS2_DATA.map((skill, i) => (
  <motion.li
    id="skills"
    key={`skill-${i}`}
    className="bg-white borderBlack rounded-xl px-4 py-1 text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white/80"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={i} // Assign a custom index for animation delay
  >
    {skill}
  </motion.li>
))}
</ul>





<h2 className="mt-12 mb-4">Web Development & AI Tools: </h2>

<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-6">

{SKILLS4_DATA.map((skill, i) => (
  <motion.li
    id="skills"
    key={`skill-${i}`}
    className="bg-white borderBlack rounded-xl px-4 py-1 text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white/80"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={i} // Assign a custom index for animation delay
  >
    {skill}
  </motion.li>
))}
</ul>

<h2 className="mt-12 mb-4">CI / CD & Development Environments: </h2>

<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-6">

{SKILLS5_DATA.map((skill, i) => (
  <motion.li
    id="skills"
    key={`skill-${i}`}
    className="bg-white borderBlack rounded-xl px-4 py-1 text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white/80"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={i} // Assign a custom index for animation delay
  >
    {skill}
  </motion.li>
))}
</ul>

<h2 className="mt-12 mb-4">Others: </h2>

<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-6">

{SKILLS6_DATA.map((skill, i) => (
  <motion.li
    id="skills"
    key={`skill-${i}`}
    className="bg-white borderBlack rounded-xl px-4 py-1 text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white/80"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={i} // Assign a custom index for animation delay
  >
    {skill}
  </motion.li>
))}
</ul>


    </section>
  );
};

export default Skills;
