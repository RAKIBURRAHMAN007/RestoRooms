/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('/src/assets/img/Polygon Luminary .svg')", 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

