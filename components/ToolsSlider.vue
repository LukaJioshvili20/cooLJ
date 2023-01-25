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
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="slide in slide01" :key="slide">
      <a
        :href="slide.link"
        target="_blank"
        class="border-spacing-2 bg-backgroundDark-2 bg-opacity-30 border-zinc-700 hover:border-zinc-500 transition-colors border-2 rounded-lg w-[60px] h-[60px] flex z-10"
      >
        <nuxt-img
          class="self-center mx-auto h-[40px] w-auto z-20"
          :src="'images/icons/' + slide.image"
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
      disableOnInteraction: false,
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
          :src="'images/icons/' + slide.image"
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
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="slide in slide03" :key="slide">
      <a
        :href="slide.link"
        target="_blank"
        class="border-spacing-2 bg-backgroundDark-2 bg-opacity-30 border-zinc-700 hover:border-zinc-500 transition-colors border-2 rounded-lg w-[60px] h-[60px] flex z-10"
      >
        <nuxt-img
          class="self-center mx-auto h-[40px] w-auto z-20"
          :src="'images/icons/' + slide.image"
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
    { name: "javascript", image: "javascript.png", link: "" },
    { name: "vuejs", image: "vue-js.png", link: "" },
    { name: "pinia", image: "pinia.svg", link: "" },
    { name: "nuxtjs", image: "figma.png", link: "" },
    { name: "typescript", image: "typescript.png", link: "" },
    { name: "python", image: "python.png", link: "" },
  ]);
  const slide02 = reactive<TypeSlider>([
    { name: "figma", image: "figma.png", link: "" },
    { name: "css3", image: "css3.png", link: "" },
    { name: "html5", image: "html5.png", link: "" },
    { name: "sass", image: "sass.png", link: "" },
    { name: "tailwindcss", image: "tailwindcss.png", link: "" },
  ]);
  const slide03 = reactive<TypeSlider>([
    { name: "socketio", image: "socketio-io.svg", link: "" },
    { name: "swiperjs", image: "swiperjs.png", link: "" },
    { name: "jira", image: "jira.svg", link: "" },
    { name: "vueuse", image: "vue-use.svg", link: "" },
    { name: "api", image: "api.png", link: "" },
    { name: "firebase", image: "firebase.png", link: "" },
    { name: "git", image: "git.png", link: "" },
  ]);
</script>
