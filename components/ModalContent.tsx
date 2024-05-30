import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaTimes, FaTwitter, FaFileAlt } from 'react-icons/fa';
import { EXTRA_LINKS } from '@/constants';
import ThemeContextProvider from '@/context/theme-context';

type ModalContentProps = {
  onClose: () => void;
};

const items = [
  { category: 'General', icon: <FaCode />, text: 'Source code', href: EXTRA_LINKS.source.href },
  { category: 'Social', icon: <FaGithub />, text: 'GitHub', href: EXTRA_LINKS.github.href },
  { category: 'Social', icon: <FaLinkedin />, text: 'LinkedIn', href: EXTRA_LINKS.linkedin.href },
  { category: 'Social', icon: <FaTwitter />, text: 'Twitter', href: EXTRA_LINKS.twitter.href },
  { category: 'Social', icon: <FaInstagram />, text: "Instagram", href: EXTRA_LINKS.instagram.href },
  { category: 'Other', icon: <FaFileAlt />, text: 'Resume', href: EXTRA_LINKS.resume.href },
];

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <button
          className="text-sm absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
          style={{ alignSelf: 'center' }}
        >
          <FaTimes />
        </button>
        <input
          type="text"
          placeholder="Type a command or search"
          className="w-full p-2 mb-4 border rounded text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="space-y-4">
          {['General', 'Social', 'Other'].map((category, index) => (
            <React.Fragment key={category}>
              <h2 className="text-xs font-light text-gray-800 dark:text-gray-300">{category}</h2>
              {filteredItems
                .filter(item => item.category === category)
                .map(item => (
                  <a
                    key={item.text}
                    href={item.href}
                    target='_blank'
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer text-sm font-normal text-gray-800 dark:text-gray-200"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm font-normal">{item.text}</span>
                  </a>
                ))}
              {index < ['General', 'Social', 'Other'].length - 1 && <hr className="my-2 border-gray-200 dark:border-gray-700" />} {/* Bölümler arasına ayraç ekle */}
            </React.Fragment>
          ))}
        </div>
      </div>
  );
};

export default ModalContent;
