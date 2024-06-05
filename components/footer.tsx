import { FOOTER_LINKS, OWNER_NAME, EXTRA_LINKS } from '@/constants';
import NowPlaying from './footer/now-playing';
import Link from 'next/link';
import { IconType } from 'react-icons';


import Spoti from './footer/spotify2';
import Spo from './footer/spo';


const Footer = () => {
  return (
    <footer className="relative mx-auto mb-10 flex max-w-5xl flex-col rounded-2xl bg-white/30 dark:bg-gray-800/30 p-8 shadow-sm saturate-100 backdrop-blur-[10px] text-gray-700 dark:text-gray-300">
      <div className="mt-35 flex gap-6 justify-center items-center">
          {/* <NowPlaying /> */}
        {/* <div className="col-span-2 mt-12 grid grid-cols-2 sm:grid-cols-2 gap-6">
          {FOOTER_LINKS.map((list, index) => (
            <div key={index} className="mb-10 flex flex-col items-start gap-4 pr-4">
              <Link href={list.hash || list.href || "#"} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex items-center gap-2">
                <list.icon />
                {list.name}
              </Link>
            </div>
          ))}
        </div> */}


        <Spo/>
      </div>
      <div className="mt-20 flex flex-col items-center justify-between text-sm sm:flex-row">
  <div className='flex items-center text-xs font-md'>&copy; {new Date().getFullYear()} | <b className='ml-1 text-sm font-semibold'>{OWNER_NAME.split(" ")[0]}</b></div>
  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
    {Object.entries(EXTRA_LINKS).map(([key, link], index) => (
      <Link key={index} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 flex items-center gap-2">
        <link.icon />
      </Link>
    ))}
  </div>
</div>

    </footer>
  );
};

export default Footer;
