/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Cinzel", "serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/Background.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

