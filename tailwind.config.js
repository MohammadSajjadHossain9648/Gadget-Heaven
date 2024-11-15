/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: 'rgb(255, 255, 255)',
        shade_white_color1: 'rgba(255, 255, 255, 0.3)',
        shade_white_color2: 'rgb(246, 246, 246)',

        black_color: 'rgb(11, 11, 11)',
        Shade_black_color_1: 'rgba(11, 11, 11, 0.7)',
        Shade_black_color_2: 'rgba(11, 11, 11, 0.1)',
        black_bg_color: 'rgba(11, 11, 11, 0.15)',

        favicon_color: 'rgb(58, 58, 58)',

        dark_blue_color: 'rgb(9, 8, 15)',
        shade_dark_blue_color_1: 'rgba(9, 8, 15, 0.8)',
        shade_dark_blue_color_2: 'rgba(9, 8, 15, 0.6)',
        dark_blue_bg_color: 'rgba(9, 8, 15, 0.05)',

        green_color: 'rgb(48, 156, 8)',
        green_bg_color: 'rgba(48, 156, 8, 0.1)',

        red_color: 'rgb(156, 8, 8)',
        red_color_2: 'rgb(255, 0, 0)',
        red_bg_color: 'rgba(156, 8, 8, 0.1)',

        purple_color: 'rgb(149, 56, 226)',

        yellow_color: 'rgb(249, 192, 4)',
      },
      gridTemplateColumns: {
        custom: '.7fr 1.3fr',
        customCart1: '.3fr 1.7fr',
        customCart2: '.5fr 1.5fr',
        customWishlist1: '.5fr 1.5fr',
        customWishlist2: '.6fr 1.4fr',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

