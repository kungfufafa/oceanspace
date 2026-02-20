/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Sans', 'sans-serif'],
        body: ['Instrument Sans', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#006AFF',
          100: '#006AFF',
          700: '#006AFF',
          800: '#006AFF',
          900: '#006AFF'
        }
      }
    }
  },
  plugins: []
}
