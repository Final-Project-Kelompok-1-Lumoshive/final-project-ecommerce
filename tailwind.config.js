/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'red': '#DB4444',
        'green': '#00FF66',
      },
    },
  },
  plugins: [],
};
