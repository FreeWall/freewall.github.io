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
      },
      colors: {
        main: '#292e33',
        secondary: '#31363B',
        hightlight: '#ffffff',
        body: '#b2b8bf',
        conversion: '#36a9dc',
      },
      maxWidth: {
        pc: '1140px',
      },
      boxShadow: {
        header:
          '0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px 0px rgb(0 0 0 / 0.2);',
      },
      animation: {
        progress: 'progress 0.7s ease 0.5s forwards',
        fadeIn: 'fadeIn 0.4s ease forwards',
        slideIn: 'slideIn 0.4s ease forwards',
      },
      keyframes: {
        progress: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        slideIn: {
          '0%': {
            transform: 'scale(0.8)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
