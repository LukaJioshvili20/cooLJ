<template>
  <Swiper
    :modules="[SwiperFreeMode, SwiperAutoplay]"
    slides-per-view="5"
    :grab-cursor="true"
    :space-between="30"
    :speed="4000"
    :free-mode="true"
    :loop="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="slide in 5" :key="slide">
      <strong>{{ slide }}</strong>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
</script>
