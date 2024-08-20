/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(14, 86%, 42%)",
        brown: "hsl(14, 86%, 32%)",
        green: "hsl(159, 69%, 38%)",
        rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          200: "hsl(14, 25%, 72%)",
          300: "hsl(7, 20%, 60%)",
          400: "hsl(12, 20%, 44%)",
          500: "hsl(14, 65%, 9%)",
        },
      },
      fontFamily: {
        "sans-serif": ["Red Hat Text", " sans-serif"],
      },
    },
  },
  plugins: [],
};
