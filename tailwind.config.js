/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      playFair: ['Playfair Display'],
      lora: ['Lora'],
    },
    extend: {
      colors: {
        swirl: {
          50: '#f8f6f4',
          100: '#eeeae6',
          200: '#dbd1c9',
          300: '#c7b6aa',
          400: '#af9688',
          500: '#9f7f70',
          600: '#927064',
          700: '#7a5c54',
          800: '#644c48',
          900: '#52403c',
          950: '#2b211f',
        },
        shark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
};