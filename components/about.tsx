// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import LocationCard from "./LocationCard";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="relative mb-28 max-w-[52rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>about me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3 font-rubik  text-xs sm:text-sm md:text-base">
         I developed projects across many different fields. Initially, it took me some time to find my preferred domain. Eventually, I discovered a strong interest in <b className="font-medium">embedded software</b>, a field that connects with my childhood experiences of working with <b className="font-medium">electronics</b>, <b className="font-medium">soldering</b>, and repair tasks. This hands-on background provided a solid foundation for my current focus on <b className="font-medium">embedded software development</b>.
      </p>

      <p className="mb-3 font-rubik text-sm sm:text-sm md:text-base">
        Currently, I am deeply involved in developing <b className="font-medium">embedded software</b> and conducting research in <b className="font-medium">machine learning</b>, <b className="font-medium">computer vision</b>, and <b className="font-medium">large language models </b>. My journey has been driven by a passion for learning new technologies. This passion motivates me to continually expand my knowledge and skills, keeping up with the latest advancements in these cutting-edge fields.
      </p>   
      {/* Display another paragraph about the user's interests and hobbies. */}
      <p className="font-rubik  text-sm sm:text-sm md:text-base">
        When I'm not coding, I enjoy playing competitive games, watching series and movies, and playing with my <a href="./putin1.png" target="_blank" className="font-bold italic bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">cat</a>. I also enjoy learning new things.
      </p>

      { <div className="flex justify-center mt-6">
   
        <LocationCard />
      </div> }
    </motion.section>
  );
};

// Export the About component.
export default About;
