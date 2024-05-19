import SmoothScrollLink from './SmoothScrollLink';

type HeadingsSidebarProps = {
  headings: { id: string; text: string; level: number }[];
};

const HeadingsSidebar = ({ headings }: HeadingsSidebarProps) => {
  return (
    <aside className="w-64 bg-white text-black p-4 fixed top-16 left-0 h-full overflow-y-auto rounded-r-lg shadow-lg">
      <nav className="flex flex-col space-y-0.5"> {/* Mesafeyi azaltmak için space-y-0.5 kullanıyoruz */}
        <h2 className="text-lg font-bold mb-4">Content</h2>
        <ul className="list-none">
          {headings.map((heading) => (
            <li key={heading.id} className={`pl-${heading.level * 2} flex items-center text-sm`}> {/* Yazı boyutunu küçültmek için text-sm kullanıyoruz */}
              <span className="mr-1 text-gray-700">•</span>
              <SmoothScrollLink href={`#${heading.id}`} className="hover:bg-gray-200 p-1 rounded"> {/* Padding değerini p-1 ile küçültüyoruz */}
                {heading.text}
              </SmoothScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default HeadingsSidebar;
