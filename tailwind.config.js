/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a65929',
        'primary-dark': '#8a471f',
        dark: '#2a1f1b',
        light: '#f9f9f9',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}