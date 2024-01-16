/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-arsenal)"],
    },
    colors: {
      leaf: "#457D58",
      oatmeal: "#F6F6E9",
      black: "#10100F",
      red: "#d61313",
    },
    extend: {},
  },
  plugins: [],
};
