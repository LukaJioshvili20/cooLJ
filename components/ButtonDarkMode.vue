<template>
  <Icon
    @click.left="toggleTheme"
    :name="isDarkTheme ? 'uil:moon' : 'uil:sun'"
    class="cursor-pointer text-3xl transition-colors text-zinc-400 hover:text-gray-200"
  />
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "@/stores/app";
  const store = appStore();
  const isDarkTheme = computed(() => store.darkModeGetter);
  function toggleTheme() {
    store[AppActions.themeToggleAction]();
  }
</script>
