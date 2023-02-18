<template>
  <section class="relative mb-6 h-80 only:flex justify-center items-center">
    <div class="absolute w-full h-80 overflow-hidden">
      <NuxtImg
        v-if="isImage"
        class="absolute inset-0 min-w-full min-h-full object-cover opacity-30"
        :src="require(props.mediaUrl + '.webp')"
        placeholder="Hero"
      />
      <video
        v-if="isVideo"
        class="absolute inset-0 min-w-full min-h-full -top-3/4 opacity-30"
        :autoplay="true"
        :muted="true"
        :loop="true"
        :playsinline="true"
        :controls="false"
      >
        <source :src="props.mediaUrl + '.webm'" type="video/webm; codecs=vp9" />
        <source :src="props.mediaUrl + '.mp4'" type="video/mp4; codecs=hvc1" />
      </video>
    </div>
    <div
      class="z-10 flex-col flex h-full w-fit mx-auto justify-center text-center px-8 drop-shadow-lg shadow-black"
    >
      <span class="uppercase text-sm">Welcome to</span>
      <h1 class="text-4xl font-medium">List of tech I use</h1>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const props = defineProps({
    isImage: {
      type: Boolean,
      default: false,
    },
    isVideo: {
      type: Boolean,
      default: false,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
  });
</script>
