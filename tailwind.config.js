/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        dark: '#1C1C1C',
        light: '#ccc',
        pink: '#DB2763',
      },
      fontFamily: {
        sans: ["Play", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
