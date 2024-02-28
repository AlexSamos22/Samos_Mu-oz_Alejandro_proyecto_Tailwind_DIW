/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fuente/**/*.{html,js}"],
  theme: {
    extend: {
      gridAutoColumns: {
        'custom': 'calc((100% / 4) - 16px)',
      },
    },
    plugins: [],
  }
}

