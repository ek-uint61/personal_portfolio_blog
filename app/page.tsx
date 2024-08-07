// /app/page.tsx

// Importing necessary components from the specified location ("@/components").
import {
  About,
  Contact,
  // Intro,
  Projects,
  SectionDivider,
  Skills,
  Hero,
} from "@/components";

import Experience from "@/components/experience";

  
// This is the main component for the Home page.
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* The Intro component is displayed at the top of the page. */}
      <Hero />

      {/* <Intro /> */}

      {/* A Vertical line or divider separating sections on the page. */}
      <SectionDivider />

      {/* The About component provides information about the author or user. */}
      {/* { <About /> } */}

      {/* The Skills component shows the skills of the author or user. */}
      <Skills />

      {/* The Experience component displays work or education experience. */}
      <Experience />

      {/* The Projects component displays information about projects. */}
      <Projects />

      {/* The Contact component allows users to get in touch. */}
      <Contact />

    </main>
  );
}