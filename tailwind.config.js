/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

