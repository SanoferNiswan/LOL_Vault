'use client';

import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-darkBlue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2m-14 0H3m16.364-6.364l-1.414 1.414M6.05 6.05l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 17.95l-1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 01.894.553l1 2a1 1 0 01-.223 1.113l-1.5 1.5a1 1 0 00-.223 1.113l1 2a1 1 0 01-.894 1.447H8.618a1 1 0 01-.894-1.447l1-2a1 1 0 00-.223-1.113l-1.5-1.5A1 1 0 016 4.553l1-2A1 1 0 018 2h2zm4 8a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
