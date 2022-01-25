module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './nuxt.config.js', './pages/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0466c8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
