/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appskep': {
          'primary': '#00a3e9',
          'primary-hover': '#0095e8',
          'secondary': '#68748b',
          'dark': '#2e3a40'
        }
      }
    },
  },
  plugins: [],
}