/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "@pages/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{tsx}",
    "./src/pages/**/*.tsx",
    "./src/*.{tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text1gradient' : '#861657'
      },
    },
  },
  plugins: [],
}

