/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-in forwards',
        'title-glow': 'title-glow 2s ease-in-out infinite',
        'fade-up': 'fade-up 1200ms ease-out forwards',
        'bounce-scale': 'bounce-scale 1000ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'title-glow': {
          '0%, 100%': {
            'text-shadow': '0 0 10px rgba(59, 130, 246, 0.5)',
            'transform': 'scale(1)'
          },
          '50%': {
            'text-shadow': '0 0 20px rgba(59, 130, 246, 0.7)',
            'transform': 'scale(1.01)'
          }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'bounce-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}