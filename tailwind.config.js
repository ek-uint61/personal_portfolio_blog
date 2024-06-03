/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['Pixelify Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
     
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        'fade-right': 'fade-right 1s ease-out',
        'fade-left': 'fade-left 1s ease-out',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
          play: {
            '0%': { height: '10%' },
            '25%': { height: '75%' },
            '50%': { height: '50%' },
            '75%': { height: '100%' },
            '100%': { height: '10%' },
          },
        },
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },      
        animation: {
          play: 'play 1s ease-out infinite',
        },
        'gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '120ch', // Burada istediğiniz maksimum genişliği belirleyin
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: "class",
};
