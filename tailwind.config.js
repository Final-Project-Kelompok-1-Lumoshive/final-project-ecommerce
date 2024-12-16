/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#DB4444",
        green: "#00FF66",
      },
    },
  },
  plugins: [],
};
