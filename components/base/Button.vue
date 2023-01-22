<template>
  <NuxtLink
    :to="props.link"
    class="px-4 py-2 rounded-md bg-red-400 transition-colors hover:bg-red-600"
  >
    {{ props.title }}
  </NuxtLink>
</template>

<script lang="ts" setup>
  const props = defineProps({
    link: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  });
</script>
