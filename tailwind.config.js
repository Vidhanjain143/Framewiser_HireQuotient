/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customOrange:'#FDF3EC',
        customeGrey:'#767675',
        darkOrange:'#FE8162',
        customBlue:'#8247FF',
        customGreen:'#43D67E',
        lightPurple:'#EDEDFA',
        lightBlack:'#1C1C1C',
      },
    },
  },
  plugins: [],
}