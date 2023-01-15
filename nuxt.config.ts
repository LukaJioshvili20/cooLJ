// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      link: [
        {
          href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
          rel: 'stylesheet',
        },
        {
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
          rel: 'stylesheet',
        },
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
        },
        {
          href: '/J-32.svg',
          rel: 'icon',
          type: 'image/x-icon'
        }
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  plugins: [
    { src: '~/plugins/three.js', mode: 'client' }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    strict: true
  },
  css: [
    '@/assets/css/main.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  pages: true
})