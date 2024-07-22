/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'orb-1': 'orb-1 20s infinite',
        'orb-2': 'orb-2 20s infinite',
      },
      keyframes: {
        'orb-1': {
          '0%': { transform: 'translate(20%, -40%) rotate(-20deg)' },
          '20%': { transform: 'translate(0) skew(-15deg, -15deg) rotate(80deg)' },
          '40%': { transform: 'translate(-40%, 50%) rotate(180deg)' },
          '60%': { transform: 'translate(-20%, -20%) skew(15deg, 15deg) rotate(80deg)' },
          '80%': { transform: 'translate(10%, -30%) rotate(180deg)' },
          '100%': { transform: 'translate(20%, -40%) rotate(340deg)' },
        },
        'orb-2': {
          '0%': { transform: 'translate(-30%, 40%) rotate(-20deg)' },
          '25%': { transform: 'translateY(20%) skew(-15deg, -15deg) rotate(80deg)' },
          '50%': { transform: 'translate(30%, -10%) rotate(180deg)' },
          '75%': { transform: 'translate(-30%, 40%) skew(15deg, 15deg) rotate(240deg)' },
          '100%': { transform: 'translate(-30%, 40%) rotate(-20deg)' },
        },
      },
      blur: {
        '250px': '250px',
      },
    },
  },
  plugins: [],
};
