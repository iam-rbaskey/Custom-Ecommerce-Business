/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bImg1': "url('../assets/Infinity War.gif')",
        'bImg2': "url('../assets/testpic1.1.jpg')"
      }
    },
  },
  plugins: [],
}

