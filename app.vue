<template>
  <div class="font-main min-h-screen flex flex-col">
    <NuxtLayout />
  </div>
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "@/stores/app";
  import { TechActions, techStore } from "@/stores/tech";
  import { TechItemType } from "~~/stores/types";
  const client = useSupabaseClient();
  const techPinia = techStore();
  const appPinia = appStore();
  const windowWidth = ref(0);

  function currentWindowWidth() {
    windowWidth.value = window.innerWidth;
  }
  const { data: techList } = useAsyncData(async () => {
    const { data } = await client
      .from("tech")
      .select("id,created_at,title, sub_title,description,image_name,slug");

    return data as TechItemType[] | null;
  });

  if (techList) {
    techPinia[TechActions.setDataAction](techList.value);
  }

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
