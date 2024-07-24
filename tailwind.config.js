module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
        neutral: {
          200: '#E5E7EB',
          300: '#D1D5DB',
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
