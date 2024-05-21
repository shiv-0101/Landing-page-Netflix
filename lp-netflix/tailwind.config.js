/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'faq-acc-bg': '#2d2d2d',
      },
    },
  },
  plugins: [],
}

