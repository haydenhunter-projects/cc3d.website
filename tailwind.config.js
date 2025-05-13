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
        // Custom colors
        primary: {
          light: '#ffffff',
          dark: '#000000',
        }
      },
      backgroundColor: {
        'theme-light': '#ffffff',
        'theme-dark': '#000000',
      }
    },
  },
  plugins: [],
} 