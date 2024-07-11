import { FaBars, FaHome } from 'react-icons/fa';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow-md lg:hidden">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        <a href="/" className="text-sm font-semibold">
          <FaHome />
        </a>
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
