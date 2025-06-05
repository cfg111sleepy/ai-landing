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
        'code-1_15s_forwards': 'code-1 15s forwards',
        'code-2_15s_forwards': 'code-2 15s forwards',
        'code-3_15s_forwards': 'code-3 15s forwards',
        'code-4_15s_forwards': 'code-4 15s forwards',
        'code-5_15s_forwards': 'code-5 15s forwards',
        'code-6_15s_forwards': 'code-6 15s forwards',
        'code-7_15s_forwards': 'code-7 15s forwards',
        'code-8_15s_forwards': 'code-8 15s forwards',
        'code-9_15s_forwards': 'code-9 15s forwards',
        'code-10_15s_forwards': 'code-10 15s forwards',
        'code-11_15s_forwards': 'code-11 15s forwards',
        'code-12_15s_forwards': 'code-12 15s forwards',
      },
      keyframes: {
        'code-1': { '0%': { opacity: 0 }, '8.3%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-2': { '0%': { opacity: 0 }, '16.6%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-3': { '0%': { opacity: 0 }, '24.9%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-4': { '0%': { opacity: 0 }, '33.2%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-5': { '0%': { opacity: 0 }, '41.5%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-6': { '0%': { opacity: 0 }, '49.8%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-7': { '0%': { opacity: 0 }, '58.1%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-8': { '0%': { opacity: 0 }, '66.4%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-9': { '0%': { opacity: 0 }, '74.7%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-10': { '0%': { opacity: 0 }, '83%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-11': { '0%': { opacity: 0 }, '91.3%': { opacity: 1 }, '100%': { opacity: 1 } },
        'code-12': { '0%': { opacity: 0 }, '99.6%': { opacity: 1 }, '100%': { opacity: 1 } },
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