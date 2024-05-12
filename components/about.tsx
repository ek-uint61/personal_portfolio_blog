// client-side component
"use client";

// Import necessary dependencies and components.
import { color, motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      I've developed projects in various domains during my university years. 


      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
      I've developed projects in various domains during my <b className="font-medium">university</b> years. ,
      It took me some time to determine my preferred domain, 
      and I found common ground between embedded systems software, 
      which I've been tinkering with since childhood through  <b className="font-medium">electronics</b>, <b className="font-medium">soldering</b> , and <b className="font-medium">repair</b> tasks. 
      Currently, I'm focused on <b className="font-medium">embedded systems software development</b>
, along with conducting research in <b className="font-medium">machine learning</b>, <b className="font-medium">computer vision</b>, and <b className="font-medium">LLMs</b>. I've always had a passion for learning new technologies.
      </p>

      <b className="font-medium"></b>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
    <i className="italic ">When I'm not coding</i>, I enjoy playing video
    games, watching series and movies, and playing with <a href="./cadi_pamuk.jpg" target="_blank" className="font-medium italic text-blue-400 hover:text-blue-700">my cat</a>. I also enjoy <b className="font-medium">learning new things</b>.
</p>

    </motion.section>
  );
};

// Export the About component.
export default About;
