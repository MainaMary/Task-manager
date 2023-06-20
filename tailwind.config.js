/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#2F7BF7",
        "secondary-color":"#E3EAF9",
        "mid-gray":"#919191",
        "light-gray":"#F9F9F9",
        "light-dark":"#939393",
        "light-blue":"#E5E7EB"
      }
    },
  },
  plugins: [],
}