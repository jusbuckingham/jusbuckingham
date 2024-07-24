module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#FFEBEB',
          100: '#FFD6D6',
          200: '#FFB3B3',
          300: '#FF8F8F',
          400: '#FF6B6B',
          500: '#FF4747',
          600: '#E3342F',
        },
        gray: {
          50: '#F7FAFC',
          800: '#2D3748',
          200: '#E2E8F0',
          600: '#718096',
        },
      },
    },
  },
  plugins: [],
}
