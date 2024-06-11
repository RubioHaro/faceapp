const colors = require('tailwindcss/colors')

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'secondary': '#E2EAE6',
        'white': '#FFFFFF',
        ...colors,
      },
    },
  },
  plugins: [],
};
export default config;
