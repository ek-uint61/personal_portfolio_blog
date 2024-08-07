'use client'

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { EXPERIENCES_DATA } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import "react-vertical-timeline-component/style.min.css";
import { useThemeContext } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();
  const { activeSection } = useActiveSectionContext();
  const [isExperienceSectionActive, setIsExperienceSectionActive] = useState(false);

  useEffect(() => {
    if (activeSection === "Experience") {
      setIsExperienceSectionActive(true);
    } else {
      setIsExperienceSectionActive(false);
    }
  }, [activeSection]);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {EXPERIENCES_DATA.map((experience, i) => (
          <VerticalTimelineElement
            key={`experience-${i}`}
            visible={isExperienceSectionActive}
            contentStyle={{
              background: theme === "light" ? "#dfdfdf" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "2%",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: theme === "light" ? "0.4rem solid #666" : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-bold">{experience.title}</h3>
            <p className="font-normal text-xs !mt-0">{experience.location}</p>
            <p className="!mt-2 font-medium text-xs text-gray-700 dark:text-white/75">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
