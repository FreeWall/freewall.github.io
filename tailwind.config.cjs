/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '11px',
        xs: '13px',
        base: '15px',
        lg: '17px',
        xl: '22px',
      },
      spacing: {
        pc: '1140px',
        mobile: '768px',
      },
      colors: {
        main: '#292e33',
        secondary: '#35393e',
        hightlight: '#ffffff',
        body: '#bbbbbb',
        conversion: '#36a9dc',
      },
      maxWidth: {
        pc: '1140px',
      },
      boxShadow: {
        header:
          '0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px 0px rgb(0 0 0 / 0.2);',
      },
    },
  },
  plugins: [],
};
