import { smoothScroll } from '@/lib/smoothScroll';
import React from 'react';

type SmoothScrollLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const SmoothScrollLink = ({ href, className, children }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    smoothScroll(targetId);
  };

  return (
    <a href={href} onClick={handleClick} className={`hover:bg-gray-200 p-2 rounded block ${className}`}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
