import { Link as ScrollLink } from 'react-scroll';

type HeadingsSidebarProps = {
  headings: { id: string; text: string; level: number }[];
  className?: string; // className prop'unu ekleyin
};

const HeadingsSidebar = ({ headings, className }: HeadingsSidebarProps) => {
  return (
    <aside className="w-64 bg-white text-black p-4 fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto rounded-r-lg shadow-lg"> {/* h-[calc(100vh-4rem)] ile max-height ayarlandı */}
      <nav className="flex flex-col space-y-1">
        <h2 className="text-lg font-bold mb-0.5">Contents</h2>
        <ul className="list-none text-sm leading-tight  ">
          {headings.map((heading) => (
            <li key={heading.id} className={`pl-${heading.level * 2} flex items-center mb-2`}>
              <span className="mr-1 text-gray-700">•</span>
              <ScrollLink
                to={heading.id}
                smooth={true}
                duration={500}
                offset={-100}
                className="hover:bg-gray-200 p-1 rounded cursor-pointer"
              >
                {heading.text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default HeadingsSidebar;