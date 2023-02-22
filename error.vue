<template>
  <main class="font-main min-h-screen flex flex-col">
    <TheHeader />
    <section
      class="relative min-h-screen flex flex-col justify-center bg-backgroundDark text-white pt-16"
    >
      <div
        class="container mx-auto px-8 text-white flex flex-col lg:flex-row justify-center"
      >
        <div class="min-h-[420px] max-w-1000px relative mx-auto block">
          <figure class="not-found__content z-20">
            <video
              class="z-10"
              :autoplay="true"
              :muted="true"
              :loop="true"
              :playsinline="true"
              :controls="false"
            >
              <source
                src="@/assets/videos/lebowski-404.webm"
                type="video/webm; codecs=vp9"
              />
              <source
                src="@/assets/videos/lebowski-404.mp4"
                type="video/mp4; codecs=hvc1"
              />
            </video>
          </figure>
          <div
            class="relative px-2 my-8 lg:px-0 lg:absolute z-30 lg:left-20 lg:top-1/2 lg:-translate-y-1/2"
          >
            <h2
              class="font-bold font-mainItalic text-4xl lg:text-8xl text-opacity-75 text-white mb-2"
            >
              Ooh shit!
            </h2>
            <h1 v-if="props.message">{{ props.message }}</h1>
            <h1 v-else class="mb-4">Where is the page Lebowski ?!</h1>
            <NuxtLink
              to="/"
              class="text-red-400 font-medium border-red-400 hover:border-white border-b-2 pb-2 hover:text-white transition-colors"
              >Back to homepage
              <Icon name="uil:arrow-circle-right" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>

<script lang="ts" setup>
  const props = defineProps({
    message: {
      type: String,
      default: null,
    },
  });
  fetchAllTechItems();
  useHead({
    title: "404 - Page not found",
    meta: [
      {
        hid: "title",
        name: "title",
        content: "404 - Page not found",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "404 - Page not found",
      },
      {
        hid: "author",
        name: "author",
        content: "Luka Jioshvili",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Not found",
      },
      {
        hid: "description",
        name: "description",
        content: "404 - Page not found",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "404 - Page not found",
      },
    ],
  });
</script>
<style lang="scss" scoped>
  .not-found {
    &__content {
      &::after {
        z-index: 20;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        background-image: url("@/assets/image/pattern.png");
      }
    }
  }
</style>
