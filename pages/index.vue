<template>
  <main>
    <HomeHeroComponent />
    <HighLevelStacks class="mt-20" />
    <section>
      <div class="container mx-auto">
        <ClientOnly>
          <ToolsSlider />
        </ClientOnly>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
  useHead({
    title: "Luka Jioshvili - Homepage",
    meta: [
      {
        hid: "title",
        name: "title",
        content: "Luka Jioshvili | Homepage",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Luka Jioshvili | Homepage",
      },
      {
        hid: "author",
        name: "author",
        content: "Luka Jioshvili",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "keywords for index page",
      },
      {
        hid: "description",
        name: "description",
        content: "description for index page",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "description for index page",
      },
      {
        hid: "og:image",
        name: "",
        content: "",
      },
    ],
  });
</script>
