import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, description, slug, image }) => {
  return (
    <Link href={`/posts/${slug}`} legacyBehavior>
      <a className="mb-3 mr-2 grid-item thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-3 rounded-xl p-4 transition-colors duration-300 hover:bg-gray-100">
        <div className="image-container relative h-44 w-80">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 p-1">
          <h3 className="line-clamp-4 text-md leading-snug font-bold">{title}</h3>
          <p className="text-xs text-gray-500">{date}</p>
          <p className="line-clamp-6 text-[13px] leading-[18px]">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
