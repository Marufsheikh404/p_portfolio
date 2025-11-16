/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Playfair Display", "serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Background.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

