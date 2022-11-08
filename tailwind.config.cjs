/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mulish"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
