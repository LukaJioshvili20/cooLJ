<template>
  <Swiper
    class="mt-4"
    :modules="[SwiperFreeMode, SwiperAutoplay]"
    slides-per-view="5"
    :grab-cursor="true"
    :space-between="30"
    :speed="3500"
    :free-mode="true"
    :loop="true"
    :autoplay="{
      delay: 1000,
      reverseDirection: false,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in slide01" :key="slide">
      <a
        :href="slide.link"
        target="_blank"
        class="border-spacing-2 bg-backgroundDark-2 bg-opacity-30 mx-auto border-zinc-700 hover:border-zinc-500 transition-colors border-2 rounded-lg w-[60px] h-[60px] flex z-10"
      >
        <nuxt-img
          class="self-center mx-auto h-[40px] w-auto z-20"
          :src="slide.image"
          :placeholder="slide.image"
        />
      </a>
    </SwiperSlide>
  </Swiper>
  <Swiper
    class="my-4"
    :modules="[SwiperFreeMode, SwiperAutoplay]"
    slides-per-view="5"
    :grab-cursor="true"
    :space-between="30"
    :speed="3500"
    :free-mode="true"
    :loop="true"
    :autoplay="{
      delay: 1000,
      reverseDirection: true,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in slide02" :key="slide">
      <a
        :href="slide.link"
        target="_blank"
        class="border-spacing-2 bg-backgroundDark-2 bg-opacity-30 border-zinc-700 hover:border-zinc-500 transition-colors border-2 rounded-lg w-[60px] h-[60px] flex z-10"
      >
        <nuxt-img
          class="self-center mx-auto h-[40px] w-auto z-20"
          :src="slide.image"
          :placeholder="slide.image"
        />
      </a>
    </SwiperSlide>
  </Swiper>
  <Swiper
    class="mb-4"
    :modules="[SwiperFreeMode, SwiperAutoplay]"
    slides-per-view="5"
    :grab-cursor="true"
    :space-between="30"
    :speed="3500"
    :free-mode="true"
    :loop="true"
    :autoplay="{
      delay: 1000,
      reverseDirection: false,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in slide03" :key="slide">
      <a
        :href="slide.link"
        target="_blank"
        class="border-spacing-2 bg-backgroundDark-2 bg-opacity-30 mx-auto border-zinc-700 hover:border-zinc-500 transition-colors border-2 rounded-lg w-[60px] h-[60px] flex z-10"
      >
        <nuxt-img
          class="self-center mx-auto p-2 w-auto z-20"
          :src="slide.image"
          :placeholder="slide.image"
        />
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
  interface TypeSliderItem {
    name: string;
    image: string;
    link: string;
  }

  type TypeSlider = TypeSliderItem[];
  const slide01 = reactive<TypeSlider>([
    {
      name: "javascript",
      image: "images/icons/javascript.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "vuejs",
      image: "images/icons/vue-js.png",
      link: "https://vuejs.org/",
    },
    {
      name: "pinia",
      image: "images/icons/pinia.svg",
      link: "https://pinia.vuejs.org/",
    },
    {
      name: "nuxtjs",
      image: "images/icons/nuxt-js.png",
      link: "https://nuxt.com/",
    },
    {
      name: "typescript",
      image: "images/icons/typescript.png",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "python",
      image: "images/icons/python.png",
      link: "https://www.python.org/",
    },
  ]);
  const slide02 = reactive<TypeSlider>([
    {
      name: "figma",
      image: "images/icons/figma.png",
      link: "https://www.figma.com/",
    },
    { name: "css3", image: "images/icons/css3.png", link: "#" },
    { name: "html5", image: "images/icons/html5.png", link: "#" },
    {
      name: "sass",
      image: "images/icons/sass.png",
      link: "https://sass-lang.com/",
    },
    {
      name: "tailwindcss",
      image: "images/icons/tailwindcss.png",
      link: "https://tailwindcss.com/",
    },
  ]);
  const slide03 = reactive<TypeSlider>([
    {
      name: "socketio",
      image: "images/icons/socket-io.svg",
      link: "https://socket.io/",
    },
    {
      name: "swiperjs",
      image: "images/icons/swiperjs.svg",
      link: "https://swiperjs.com/",
    },
    {
      name: "jira",
      image: "images/icons/jira.png",
      link: "https://www.atlassian.com/",
    },
    {
      name: "vueuse",
      image: "images/icons/vue-use.svg",
      link: "https://vueuse.org/",
    },
    {
      name: "axios",
      image: "images/icons/axios.png",
      link: "https://axios-http.com/",
    },
    {
      name: "firebase",
      image: "images/icons/firebase.png",
      link: "https://firebase.google.com/",
    },
    {
      name: "git",
      image: "images/icons/git.png",
      link: "https://git-scm.com/",
    },
    {
      name: "github",
      image: "images/icons/github.png",
      link: "https://github.com/",
    },
  ]);
</script>
