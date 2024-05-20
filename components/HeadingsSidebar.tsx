import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa'; // Sağ oku eklemek için

type HeadingsSidebarProps = {
  headings: { id: string; text: string; level: number }[];
  className?: string;
};

const HeadingsSidebar = ({ headings, className }: HeadingsSidebarProps) => {
  return (
    <aside className={`w-64 bg-white text-black p-4 fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto rounded-r-lg shadow-lg ${className}`}>
      <nav className="flex flex-col space-y-1">
        <h2 className="text-lg font-bold mb-0.5">Contents</h2>
        <ul className="list-none text-sm leading-tight">
          {headings.map((heading) => (
            <li key={heading.id} className={`pl-${heading.level * 2} flex items-center mb-2`}>
              <span className="mr-1 text-gray-700">
                <FaArrowRight  className='border-2 border-black rounded-full'/>
              </span>
              <ScrollLink
                to={heading.id}
                smooth={true}
                duration={500}
                offset={-100}
                spy={true} // spy özelliği
                activeClass="active" // activeClass özelliği
                className="hover:bg-gray-200 p-1 rounded cursor-pointer scroll-link"
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
