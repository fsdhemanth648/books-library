/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#218BE6",
        "primary-light": "#219BE7",
        'navy': '#0D0842',
        'magenta': '#FF5841'
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}