/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191919",
      },
      fontFamily: {
        manrope: "Manrope, Arial, sans-serif",
      },
    },
  },
  screens: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
};
