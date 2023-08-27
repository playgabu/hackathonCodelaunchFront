/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#383F93',
        primaryLighter: '#6C20EE',
        inputBg: '#F2F4F5',
        secondary: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

