/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        navbg:'rgba(var(--navbg),0.98)',
        background:'var(--background)',
        secBackground:'var(--secBackground)',
        cards:'var(--cards)',
        cardsFrom:'var(--cardsFrom)',
        cardsText:'var(--cardsText)',
        cardsText2:'var(--cardsText2)',
        textBlack:'var(--textBlack)',
        movingtext:'var(--movingtext)',
        borderMove:'var(--borderMove)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

