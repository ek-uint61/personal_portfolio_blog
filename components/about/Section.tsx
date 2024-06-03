"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "right" | "left" | "center";
  children: ReactNode;
  invert?: boolean;
  className?: string; // Add className prop for custom styles
};

export default function Section({
  heading,
  headingAlignment = "left", // Default alignment to left
  children,
  invert = false,
  className = "", // Default to an empty string
}: SectionProps) {
  return (
    <section
      className={clsx("flex flex-col gap-6 md:flex-row md:gap-9 items-center md:items-start", className)}
      id={heading.toLowerCase().replace(/\s/g, "-")}
    >
      <h2
        className={clsx(
          "shrink-0 md:w-32",
          headingAlignment === "right" && "md:text-right",
          headingAlignment === "center" && "w-full",
          invert ? "font-medium text-primary" : "text-secondary"
        )}
      >
        {heading}
      </h2>
      <div className="flex flex-col gap-4 items-center md:items-start w-full">
        {children}
      </div>
    </section>
  );
}
