/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redfooter': '#F83A3A',
        'pinkback':'#FFF9F9'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif']
      },
      animation: {
        'spin-x': 'spinX 1s linear infinite',
        'spin-y': 'spinY 2s linear infinite',
      },
      keyframes: {
        spinX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': '#FF0000', // Customize stroke color as needed
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

