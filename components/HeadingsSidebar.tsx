import { Link as ScrollLink } from 'react-scroll';

type HeadingsSidebarProps = {
  headings: { id: string; text: string; level: number }[];
  className?: string;
};

const HeadingsSidebar = ({ headings, className }: HeadingsSidebarProps) => {
  return (
    <aside className={`border-r-2 border-gray-600 w-64 bg-white text-black p-4 top-16 left-0 h-[calc(100vh)] overflow-y-auto rounded-r-lg  ${className}`}>
      <nav className="flex flex-col space-y-1">
        <h2 className="text-sm font-semibold mb-4 border-b-4 border-black p-3 custom-font ">Table of Contents</h2>
        <ul className="list-none text-sm leading-tight">
          {headings.map((heading) => (
            <ScrollLink
              key={heading.id}
              to={heading.id}
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="bg-gray-200"
              className={`${heading.level * 2} text-sm font-semibold border-l-4 border-transparent cursor-pointer flex items-center py-1 hover:bg-gray-100 hover:border-gray-300 transition-colors duration-200`}
            >
              <span className="mr-2 text-gray-500">•</span>
              {heading.text}
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default HeadingsSidebar;
