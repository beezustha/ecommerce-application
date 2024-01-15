/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headerStyle: ['"Eczar"', "sans-serif"],
        paraFont: ['"Poppins"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
