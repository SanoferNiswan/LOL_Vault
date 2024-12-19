'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const categories = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Animals' },
  { id: 3, name: 'Technology' },
  { id: 4, name: 'Food' },
  { id: 5, name: 'Miscellaneous' },
  { id: 6, name: 'Dad_Jokes' },
];

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);

    if (categoryId === '') {
      router.push('/');
    } else if (categoryId === '0') {
      router.push('/jokes');
    } else {
      router.push(`/jokes/${categoryId}`);
    }
  };

  return (
    <nav className="bg-darkBlue dark:bg-gray-900 p-4 h-[5rem] flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Humour Hive
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-accentBlue transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-accentBlue transition">
            About
          </Link>
          <Link href="/addJoke" className="hover:text-accentBlue transition">
            Add Joke
          </Link>
          <Link href="/jokes" className="hover:text-accentBlue transition">
            Jokes
          </Link>
          <Link href="/contact" className="hover:text-accentBlue transition">
            Contact
          </Link>

          {/* Category Dropdown */}
          <div className="relative z-10">
            <select
              id="category-dropdown"
              className="bg-transparent text-white border border-white rounded p-2 hover:bg-darkBlue focus:bg-darkBlue transition"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="" className="bg-darkBlue text-white">Categories</option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-darkBlue text-white"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
