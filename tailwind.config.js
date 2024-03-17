/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          neutral : '#3A4256',
          base: "#ffffff",

        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

