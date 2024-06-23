/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      scrollBehavior: ['responsive'],
      colors: {
        customGray: '#5d5d5d',
        customRed: '#da251d',
      },
    },
  },
  variants: {
    scrollBehavior: ['responsive'],
  },
  plugins: [],
}