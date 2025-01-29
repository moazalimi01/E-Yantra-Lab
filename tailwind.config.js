/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        loopingUp: 'loopingUp 20s linear infinite',
        loopingDown: 'loopingDown 20s linear infinite',
        looping: 'looping 5s linear infinite',
      },
      keyframes: {
        loopingUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        loopingDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        looping: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  }, 
};
