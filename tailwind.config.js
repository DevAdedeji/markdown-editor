/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#151619',
        black2: '#1D1F22',
        lightBlack: '#2B2D31',
        veryLightBlack: '#35393F',
        darkGrey: '#5A6069',
        grey: '#7C8187',
        lightGrey: 'C1C4CB',
        veryLightGrey: '#E4E4E4',
        greyish: '#F5F5F5',
        white: '#FFFFFF',
        orange: '#E46643',
        lightOrange: '#F39765'
      }
    }
  },
  plugins: []
}
