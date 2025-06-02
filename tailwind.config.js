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
        }
      },
    },
  },
  plugins: [],
}