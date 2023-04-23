/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: '15px',
      },
      spacing: {
        pc: '1140px',
        mobile: '768px',
      },
      colors: {
        main: '#292c30',
        secondary: '#35393e',
        hightlight: '#ffffff',
        body: '#bbbbbb',
        conversion: '#36a9dc',
      },
      maxWidth: {
        pc: '1140px',
      },
    },
  },
  plugins: [],
};
