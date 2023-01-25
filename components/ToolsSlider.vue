<template>
  <Splide
    class="splide"
    :options="{
      type: 'loop',
      perPage: 5,
      arrows: false,
      interval: 3500,
      pagination: false,
      autoplay: true,
    }"
    aria-label="Vue Splide Example"
  >
    <SplideSlide v-for="item in firstSlide" :key="item.name">
      <img
        class="h-[40px] w-auto"
        :src="'/_nuxt/assets/image/icons/' + item.image"
        :alt="item.name"
      />
    </SplideSlide>
  </Splide>
</template>

<script lang="ts" setup>
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  import "@splidejs/vue-splide/css";
  interface TypeSliderItem {
    name: string;
    image: string;
    // link: string;
  }

  type TypeSlider = TypeSliderItem[];
  const firstSlide = reactive<TypeSlider>([
    { name: "javascript", image: "javascript.png" },
    { name: "vuejs", image: "vue-js.png" },
    { name: "pinia", image: "pinia.svg" },
    { name: "nuxtjs", image: "figma.png" },
    { name: "typescript", image: "typescript.png" },
    { name: "python", image: "python.png" },
  ]);
</script>

<style lang="scss" scoped></style>
