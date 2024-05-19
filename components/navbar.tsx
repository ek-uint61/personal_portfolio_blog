import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-solid border-b border-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="flex items-center bg-white p-2 rounded space-x-3">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <FaArrowLeft className="text-black text-sm" />
            <span className="text-black text-sm font-semibold">back to home</span>
          </Link>
        </div>         
        <button
          type="button"
          className="flex text-sm  rounded-full md:me-0  dark:focus:ring-gray-500"
          id="user-menu-button"
        >
          <img className="w-8 h-8 rounded-full" src="https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_640.png" alt="user photo" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
