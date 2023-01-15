<template>
  <i
    @click.left="toggleDarkTheme"
    class="cursor-pointer mdi mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
    :class="isDarkTheme ? 'mdi-lightbulb-on' : 'mdi-lightbulb'"
  ></i>
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "@/stores/app";
  const store = appStore();
  const isDarkTheme = computed(() => store.darkModeGetter);
  function toggleDarkTheme() {
    store[AppActions.themeToggleAction]();
  }
</script>
