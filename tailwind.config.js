/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        lighterBlack: '#353535',
        white: {
          100: '#EFEFEF',
          200: '#fafafa',
          default: '#FFF',
        },
        orange: '#FAA500',
      },
      fontFamily: {
        sans: ['Titillium Web'],
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
