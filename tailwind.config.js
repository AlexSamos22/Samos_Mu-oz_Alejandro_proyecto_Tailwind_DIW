/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fuente/**/*.{html,js}"],
  theme: {
    extend: {
      gridAutoColumns: {
        'xl': 'calc((100% / 4) - 16px)',
        'g': 'calc((100% / 3) - 7px)',
        'm': "calc((100% / 2) - 5px)",
        'p': "calc((100% / 1))"
      },
      screens: {
        'xg': '1200px',
        's': '550px',
        'lx': '1160px',
        'sg': '800px',
        'smd': '690px',
        'mini': '350px',
      },
      colors:{
        'color-fondo': '#e4e4e4',
        'flecha-carrusel': 'rgba(255, 255, 255, 0.5)',
        'azul-web': '#0177E3'
      },
      plugins: [],
    }
  }
}
