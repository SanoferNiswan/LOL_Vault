/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0a1d37",
        lightBlue: "#1c2c48",
        accentBlue: "#4a6ea9",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
