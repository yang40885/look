/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
