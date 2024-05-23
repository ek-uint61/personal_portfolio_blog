import React from "react";


type SectionHeadingProps = {
  children: React.ReactNode; 
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    
    <h2 className="text-gray-700 mb-8 mt-4 text-md text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.5px] md:!leading-tight dark:text-white ">
      {children}
    </h2>
  );
};

export default SectionHeading;
