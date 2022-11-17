/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px) { ... }

      'md': '576px',
      // => @media (min-width: 576px) { ... }

      'lg': '720px',
      // => @media (min-width: 720px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    }
  },
  plugins: [require("daisyui")],
}