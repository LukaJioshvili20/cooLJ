// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
          rel: "stylesheet",
        },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
          rel: "stylesheet",
        },
        {
          href: "/apple-touch-icon.png",
          rel: "apple-touch-icon",
        },
        {
          href: "/J-32.svg",
          rel: "icon",
          type: "image/x-icon",
        },
      ],
      meta: [
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Luka Jioshvili",
        },
        // {
        //   hid: "og:url",
        //   name: "og:url",
        //   content: "https:///////",
        // },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:image:alt",
          name: "og:image:alt",
          content: "Luka Jioshvili",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@LJioshvili",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: [
    { src: "~/plugins/three.js", mode: "client" },
    { src: "~/plugins/splide.js", mode: "client" },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
  css: ["@/assets/css/main.scss", "@mdi/font/css/materialdesignicons.min.css"],
  pages: true,
});
