/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16, 24, 40, 0.08)',
      },
      colors: {
        accent: {
          // Red accent used for section underline and subtle highlights
          DEFAULT: '#EF4444'
        }
      }
    },
  },
  plugins: [],
};
