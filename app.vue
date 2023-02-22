<template>
  <div class="font-main min-h-screen flex flex-col">
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "@/stores/app";
  const appPinia = appStore();
  const windowWidth = ref(0);

  function currentWindowWidth() {
    windowWidth.value = window.innerWidth;
  }
  fetchAllTechItems();
  watch(windowWidth, () => {
    if (windowWidth.value <= 840) {
      appPinia[AppActions.isMobileAction](true);
      return;
    }
    appPinia[AppActions.isMobileAction](false);
  });

  onBeforeMount(() => {
    currentWindowWidth();
    window.addEventListener("resize", currentWindowWidth);

    appPinia[AppActions.themeToggleAction](initializeThemePreferance());
  });
</script>
