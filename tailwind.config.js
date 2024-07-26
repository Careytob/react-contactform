/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    
  
   

    extend: {

      colors: {
        green200: 'hsl(148, 38%, 91%)', // lighter green
        green600: 'hsl(169, 82%, 27%)', // medium green
        red: 'hsl(0, 66%, 54%)',
        white: 'hsl(0, 0%, 100%)',
        grey500: 'hsl(186, 15%, 59%)', // medium grey
        grey900: 'hsl(187, 24%, 22%)', // darker grey
    }, 
      fontFamily: {
        karla: ['Karla', 'sans-serif'], // Add Karla font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
