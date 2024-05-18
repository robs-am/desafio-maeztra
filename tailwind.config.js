/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        lighterBlack: '#353535',
        orange: '#FAA500',
      },
      fontFamily: {
        sans: ['Titillium Web'],
      },
    },
  },
  plugins: [],
};
