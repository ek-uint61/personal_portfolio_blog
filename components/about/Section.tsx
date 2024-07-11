"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  heading: string;
  headingAlignment?: "right" | "left" | "center";
  children: ReactNode;
  invert?: boolean;
  className?: string;
};

export default function Section({
  heading,
  headingAlignment = "left",
  children,
  invert = false,
  className = "",
}: SectionProps) {
  return (
    <section
      className={clsx(
        "flex flex-col gap-3 md:flex-row md:gap-6 items-center md:items-start",
        className
      )}
      id={heading.toLowerCase().replace(/\s/g, "-")}
    >
      <h2
        className={clsx(
          "shrink-0 md:w-32",
          headingAlignment === "right" && "md:text-right",
          headingAlignment === "center" && "w-full text-center",
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
