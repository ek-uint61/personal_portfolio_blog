import React from 'react';

interface BookmarkCategory {
  name: string;
  count: number;
}

const categories: BookmarkCategory[] = [
  { name: 'Apps & Tools', count: 135 },
  { name: 'Art & Prints', count: 59 },
  { name: 'Books & Magazines', count: 12 },
  { name: 'Design', count: 74 },
  { name: 'Fonts', count: 67 },
  { name: 'Frontend', count: 204 },
  { name: 'Icons', count: 26 },
  { name: 'Portfolio', count: 162 },
  { name: 'Reading', count: 161 },
  { name: 'Tweets', count: 45 },
];

const BookmarkList = () => {
  return (
    <div className="flex flex-col space-y-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex justify-between px-4 py-2 bg-white shadow-md rounded-md"
        >
          <span>{category.name}</span>
          <span>{category.count} bookmarks</span>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;