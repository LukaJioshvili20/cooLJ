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
          href: '/J-32.svg',
          rel: 'icon',
          type: 'image/x-icon'
        }
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
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