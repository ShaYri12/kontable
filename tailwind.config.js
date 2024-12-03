/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bluish: "#0283fd",
        secondary: "#8A8A8F",
        blackish: "#2B303C",
      },
      backgroundColor: {
        bluish: "#0283fd",
      },
    },
  },
  plugins: [],
};
