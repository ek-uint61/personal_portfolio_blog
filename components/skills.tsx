"use client";

import { motion } from "framer-motion";

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
      className="mb-28 max-w-[53rem] scroll-mt-8 text-center sm:mb-40 px-4 sm:px-8"
    >
      <SectionHeading>tech stack</SectionHeading>

      <div className="mt-8">
        <h2 className="mb-2 font-semibold">Embedded Software:</h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800 mt-6">
          {SKILLS1_DATA.map((skill, i) => (
            <motion.li
              id="skills"
              key={`skill-${i}`}
              className="bg-white borderBlack rounded-xl px-2 py-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white"
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
      </div>

      <div className="mt-8">
        <h2 className="mb-2 font-semibold">Testing & Debugging Tools: </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800 mt-6">
          {SKILLS2_DATA.map((skill, i) => (
            <motion.li
              id="skills"
              key={`skill-${i}`}
              className="bg-white borderBlack rounded-xl px-2 py-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white"
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
      </div>

      <div className="mt-8">
        <h2 className="mb-2 font-semibold">Web Development & AI Tools: </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800 mt-6">
          {SKILLS4_DATA.map((skill, i) => (
            <motion.li
              id="skills"
              key={`skill-${i}`}
              className="bg-white borderBlack rounded-xl px-2 py-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white"
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
      </div>

      <div className="mt-8">
        <h2 className="mb-2 font-semibold">CI / CD & Development Environments: </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800 mt-6">
          {SKILLS5_DATA.map((skill, i) => (
            <motion.li
              id="skills"
              key={`skill-${i}`}
              className="bg-white borderBlack rounded-xl px-2 py-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white"
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
      </div>

      <div className="mt-8">
        <h2 className="mb-2 font-semibold">Others: </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800 mt-6">
          {SKILLS6_DATA.map((skill, i) => (
            <motion.li
              id="skills"
              key={`skill-${i}`}
              className="bg-white borderBlack rounded-xl px-2 py-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-800 dark:text-white"
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
      </div>
    </section>
  );
};


export default Skills;
