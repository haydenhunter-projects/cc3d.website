/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#4A4A4A',
      },
      backgroundColor: {
        'theme-light': '#ffffff',
        'theme-dark': '#000000',
      }
    },
  },
  plugins: [],
} 