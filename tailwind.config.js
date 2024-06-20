/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#141414",
        grey: "#1f1f1f",
        green: "#c4f82a",
        white: "#ffffff",
        lgrey: "#333333"
      }
    },
  },
  plugins: [],
}

