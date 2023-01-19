/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'blue-main': '#133984',
        'yellow-banner': '#f39200'
      },
      fontFamily: {
        main: ['Montserrat']
      }
    },
  },
  plugins: [],
}
