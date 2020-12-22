module.exports = {
  purge: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './components/**/*.js',
    './components/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Heebo', "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}