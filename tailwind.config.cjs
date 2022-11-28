/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mulish: ['"Mulish"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
