/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Components/Assets/login_background.jpg')",
      }
    },
    colors: {
      'seal-brown': '#582F0E',
      'russet': '#7F4F24',
      'raw-umber': '#936639',
      'lion': '#A68A64',
      'khaki': '#B6AD90',
      'sage': '#C2C5AA',
      'sage2': '#A4AC86',
      'reseda-green': '#656D4A',
      'ebony': '#414833',
      'black-olive': '#333D29',

    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', // Firefox için
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          'display': 'none', // Chrome, Safari ve Opera için
        },
      }, ['responsive', 'hover']);
    },
  ],
}

