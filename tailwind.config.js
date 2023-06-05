/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class' ,
  content: ["./src/**/*.{html,js}"],
  theme: {
     extend: {
      animation: {
        moon: 'moonGrow 0.5s linear 0.2',
        sun: 'moonGrow 0.5s linear 0.2'
      },
      keyframes: {
        moonGrow: {
          '0%': { backgroundSize: '24px 24px' },
          '50%': { backgroundSize: '20px 20px' },
          '100%': {backgroundSize: '24px 24px' }
        },
          sunGrow: {
          '0%': { backgroundSize: '24px 24px' },
          '50%': { backgroundSize: '20px 20px' },
          '100%': {backgroundSize: '24px 24px' }
        }
      }
    }
  },
  plugins: [],
}