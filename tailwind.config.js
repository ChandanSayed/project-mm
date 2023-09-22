/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#363C4F',
        blue: '#494AF8',
        'blue-10': 'rgba(73,74,248,.1)',
        'blue-0': 'rgba(73,74,248,0)',
        darkGrey: '#555555',
        lightGrey: '#CCCCCC',
        errorColor: '#EB5757'
      },
      fontFamily: {
        dm: 'DM Sans',
        jetBrain: "'JetBrains Mono', monospace"
      }
    },
    screens: {
      vvs: '200px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
    }
  },
  plugins: []
};
