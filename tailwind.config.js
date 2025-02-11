import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "serif"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

export default config;
