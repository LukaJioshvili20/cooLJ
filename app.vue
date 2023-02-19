<template>
  <div class="font-main min-h-screen flex flex-col">
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "@/stores/app";

  const store = appStore();
  const windowWidth = ref(0);

  function currentWindowWidth() {
    windowWidth.value = window.innerWidth;
  }

  watch(windowWidth, () => {
    if (windowWidth.value <= 840) {
      store[AppActions.isMobileAction](true);
      return;
    }
    store[AppActions.isMobileAction](false);
  });

  onBeforeMount(() => {
    currentWindowWidth();
    window.addEventListener("resize", currentWindowWidth);

    store[AppActions.themeToggleAction](initializeThemePreferance());
  });
</script>
