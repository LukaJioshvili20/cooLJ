<template>
  <aside class="w-auto z-50">
    <nav>
      <ul>
        <li>
          <button
            class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
            @click.left="toggleOption('bio')"
          >
            <span class="text-white">Bio</span>
            <Icon
              name="uil:angle-double-up"
              class="transition-transform text-2xl transform-gpu"
              :class="accordions.bio ? '-rotate-180' : 'rotate-0'"
            />
          </button>
          <ul class="z-50 overflow-hidden" v-if="accordions.bio">
            <li
              :class="isRouteActive(route._path)"
              class="border-l transition-colors"
              v-for="route in contentBio"
            >
              <NuxtLink
                :to="route._path"
                class="flex items-center justify-between py-1.5 text-sm pl-4 font-medium"
              >
                {{ route.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <button
            class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
            @click.left="toggleOption('another')"
          >
            <span class="text-white">another</span>
            <Icon
              name="uil:angle-double-up"
              class="transition-transform text-2xl transform-gpu"
              :class="accordions.another ? '-rotate-180' : 'rotate-0'"
            />
          </button>
          <ul class="z-50 overflow-hidden" v-if="accordions.another">
            <li
              :class="isRouteActive(route._path)"
              class="border-l transition-colors"
              v-for="route in contentAnother"
            >
              <NuxtLink
                :to="route._path"
                class="flex items-center justify-between py-1.5 text-sm pl-4 font-medium"
              >
                {{ route.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "~~/stores/app";
  const route = useRoute();
  const store = appStore();

  const accordions = computed(() => store.accordionsGetter);

  function isRouteActive(payload: string | undefined): string {
    if (typeof payload === "undefined")
      if (route.path === payload) {
        return " border-red-400 text-red-400";
      }
    return " border-zinc-400 hover:border-zinc-200 text-zinc-400 hover:text-zinc-200";
  }
  function toggleOption(payload: string): void {
    store[AppActions.toggleAccordionAction](payload);
  }
  const { data } = await useAsyncData("homepage", async () => {
    return queryContent("/").find();
  });
  // TODO : NEEEDS TO BE CONVERTED TO REACTIVE DATA
  const contentBio = data.value?.filter((item) => item._dir === "bio");
  const contentAnother = data.value?.filter((item) => item._dir === "another");
</script>
