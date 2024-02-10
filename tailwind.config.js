/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
