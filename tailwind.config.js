/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#363C4F',
        blue: '#494AF8',
        'blue-0': 'rgba(73,74,248,0)',
        darkGrey: '#555555',
        lightGrey: '#CCCCCC'
      },
      fontFamily:{
        dm: 'DM Sans'
      },

      backgroundImage: {}
    }
  },
  plugins: []
};
