/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '480px',
        '2xs': '300px',
      },

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
      },

      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',   
          'xs': '1rem',      
          'sm': '2rem',      
          'lg': '4rem',     
          '2xl': '6rem',     
        },
        screens: {
          'sm': '100%',     
          'md': '768px',    
          'lg': '1024px',   
          'xl': '1280px',   
        },
      },

    },
  },
  plugins: [],
}