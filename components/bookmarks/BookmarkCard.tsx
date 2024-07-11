import Image from 'next/image';
import { Bookmark } from '@/lib/bookmarks';

interface BookmarkCardProps {
  bookmark: Bookmark;
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({ bookmark }) => {
  return (
    <div className="mb-3 mr-2 grid-item thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-3 rounded-xl p-4  transition-colors duration-300 hover:bg-gray-100 ">
      <div className="image-container relative h-44 w-80">
        <Image
          src={bookmark.imageUrl}
          alt={bookmark.title}
          fill
          className="object-cover rounded-lg"
          priority // fetchPriority yerine priority kullanıyoruz
        />
      </div>

      <div className="flex flex-col gap-1 p-1">
        <h3 className="line-clamp-4 text-md leading-snug font-bold">{bookmark.title}</h3>
        <div className="flex items-center gap-2">
          <svg fill="#000000" height="12" width="12" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
            <g>
              <path d="m491,94.4l-73.8-74c-12.5-12.5-35.4-12.5-47.8,0l-157,157.4c-7.3,6.3-10.4,14.6-10.4,24-8.8,0-17.7,3.1-23.9,9.4l-157.1,157.4c-7.3,6.3-10.4,14.6-10.4,24 0,9.4 4.2,17.7 10.4,24l73.8,74c6.2,7.3 14.6,10.4 23.9,10.4 9.4,0 17.7-4.2 23.9-10.4l157-157.4c7-6 10.2-14 10.4-22.9 8.3,0 16.6-4.2 23.9-10.4l157-157.4c12.2-11.8 13.4-33.8 0.1-48.1zm-204.8,224.2l-157.1,157.4c-5.2,5.2-14.6,5.2-19.8,0l-73.8-74c-4.7-4.6-6-12.6 0-18.8l157-156.4c5.8-5.7 14.8-6 19.8-1l29.5,29.6-52.8,53 14.7,14.7 52.8-53 29.6,29.7c6.5,6.9 5,14 0.1,18.8zm191.3-190.8l-157,157.4c-5.2,5.2-14.6,5.2-19.8,0l-29.6-29.7 51.7-51.9-14.7-14.7-51.7,51.9-29.5-29.6c-4.8-4.3-5.3-14.4 0-18.8l157-157.4c5.5-5.2 14-5.6 19.8,0l73.8,74c5.6,6.1 3.6,15.6 0,18.8z"/>
            </g>
          </svg>
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500"
          >
            <p className="line-clamp-4 inline-flex items-center gap-1 text-[13px] leading-[18px] text-gray-500">{bookmark.url}</p>
          </a>
        </div>
        <p className="line-clamp-6 text-[13px] leading-[18px]">{bookmark.description}</p>
      </div>
    </div>
  );
};

export default BookmarkCard;
