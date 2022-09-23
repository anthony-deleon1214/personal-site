/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '1/18': '5.555555556%',
        '1/24': '4.166666667%',
        '1/30': '3.333333333%'
      },
      height: {
        '11/12': '91.666666667%',
      }
    },
  },
  plugins: [],
}
