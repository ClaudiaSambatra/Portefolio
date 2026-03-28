
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#0a0a1a', // Deep navy
          950: '#050510', // Darker navy
          black: '#000000',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#a855f7',
          glow: 'rgba(0, 212, 255, 0.5)',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Montserrat', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)' },
          '50%': { opacity: 0.7, boxShadow: '0 0 10px rgba(0, 212, 255, 0.1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
