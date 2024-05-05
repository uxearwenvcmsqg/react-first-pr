/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors: {
        'white': '#fff',
        'green': '#4fa893',
        'gray': '#476b69',
        'dark': '#000',
        'red': '#ff4719',
        'light-gray': '#7e8580',
        'orange': '#f5e076'
      }
    },
  },
  plugins: [],
}

