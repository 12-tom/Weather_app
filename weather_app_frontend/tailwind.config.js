/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        slide: 'slide 5s linear infinite'
      },
      colors: {
        'primary': '#ffedd5',
        'secondary':'#fff7ed',
        'back': '#282c34',
        'border': '#fed7aa'
      },
    },
  },
  plugins: [],
}

