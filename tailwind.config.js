module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "'Inter','M Plus' ,serif",
        mainItalic: "'Inter Italic', 'M Plus Italic' ,serif",
      },
      colors:{
        "grey-passive": "#A1A1AA",
        "backgroundDark": "#0c0c0f",
        "backgroundDark-2": "#27272a"
      },
      container: {
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1024px',
          '2xl': '1280px',
        },
      },
    }
  },
  plugins: []
}
