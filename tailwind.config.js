/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    rotate: {
      '360': '360deg',
    },
    fontFamily: {
      family: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}

