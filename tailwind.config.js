/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Sans', 'sans-serif'],
        body: ['Instrument Sans', 'sans-serif']
      },
      keyframes: {
        'home-marquee': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' }
        }
      },
      animation: {
        'home-marquee': 'home-marquee 30s linear infinite'
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
