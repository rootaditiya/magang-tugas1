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
          'black': '#181c32',
          'dark': '#2e3a40',
          'blue': '#335ca7',
          'lightBlue': '#85cede',
          'white': '#ffffff',
        },
      }
    },
  },
  plugins: [],
}