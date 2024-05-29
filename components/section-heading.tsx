import React from "react";


type SectionHeadingProps = {
  children: React.ReactNode; 
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    
    <h2 className="font-title font-bold mb-8 mt-4  text-center sm:text-2xl md:text-3xl lg:text-4xl opacity-1 transform-none dark:text-white ">
      {children}
    </h2>
  );
};

export default SectionHeading;
