/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'obnc': {
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#B91C1C', // Main brand red, darkened for web
            600: '#991B1B',
            700: '#7F1D1D',
            800: '#701A1A',
            900: '#581616',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#166534', // Main brand green, darkened for web
            600: '#15803D',
            700: '#166534',
            800: '#14532D',
            900: '#134429',
          }
        }
      }
    },
  },
  plugins: [],
};