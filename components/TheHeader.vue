<template>
  <header class="fixed w-full">
    <div
      v-if="!isMobile"
      id="desktopNavigation"
      class="h-full container mx-auto flex flex-row justify-between"
    >
      <div class="flex flex-col justify-center">
        <NuxtLink to="/">
          <span class="flex flex-row items-center">
            <img src="/J-32.svg" width="20" height="20" alt="J" class="mr-2" />
            <p class="font-semibold text-white">Luka Jioshvili</p>
          </span>
        </NuxtLink>
      </div>
      <div>
        <nav class="h-full">
          <ul class="flex flex-row h-full">
            <li
              class="my-auto mx-2 text-sm transition-colors text-zinc-400 hover:text-gray-200"
            >
              <NuxtLink to="/docs"> Docs </NuxtLink>
            </li>
            <li
              class="my-auto mx-2 text-sm transition-colors text-zinc-400 hover:text-gray-200"
            >
              <NuxtLink to="/roadmap"> Roadmap </NuxtLink>
            </li>
            <li
              class="my-auto mx-2 text-sm transition-colors text-zinc-400 hover:text-gray-200"
            >
              <NuxtLink to="/support"> Support </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul class="h-full flex flex-row">
          <li class="flex flex-col justify-center">
            <a href="/">
              <i
                class="mdi mdi-linkedin mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
          <li class="flex flex-col justify-center">
            <a href="/">
              <i
                class="mdi mdi-github mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="isMobile"
      id="mobileNavigation"
      class="h-full container mx-auto flex flex-row justify-between"
    >
      <i
        @click.left="toggleMobileNavigation"
        class="cursor-pointer mdi mdi-menu mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
      ></i>

      <transition name="mobile-nav" mode="out-in">
        <Teleport to="body">
          <div
            v-if="navigationOpened"
            class="text-white fixed inset-0 z-50 flex items-start overflow-y-auto bg-opacity-50 backdrop-blur dark:bg-opacity-50 lg:hidden"
          >
            <div
              id="mobileNavigationBar"
              class="bg-black min-h-full w-1/2 max-w-xs px-4 pb-12 shadow sm:px-6"
            >
              <div class="h-8 w-full my-2 flex flex-row justify-between">
                <i
                  @click.left="toggleMobileNavigation"
                  class="cursor-pointer mdi mdi-close mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
                ></i>
                <ul class="h-full flex flex-row">
                  <li class="flex flex-col justify-center">
                    <a href="/">
                      <i
                        class="mdi mdi-linkedin mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
                      ></i>
                    </a>
                  </li>
                  <li class="flex flex-col justify-center">
                    <a href="/">
                      <i
                        class="mdi mdi-github mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
              <ul>
                <li>
                  <NuxtLink to="/">Homepage</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/docs">Docs</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/roadmap">Roadmap</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/support">Support</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </Teleport>
      </transition>
    </div>
  </header>
</template>

<script lang="ts" setup>
  // TODO: use teleport for mobile nav
  import { AppActions, appStore } from "@/stores/app";
  const store = appStore();
  const isMobile = computed(() => store.isMobileGetter);
  const navigationOpened = computed(() => store.isNavigationOpenedGetter);
  function toggleMobileNavigation() {
    store[AppActions.toggleNavigationAction]();
  }
</script>

<style lang="scss" scoped>
  header {
    background-color: #0c0c0df2;
    max-height: 64px;
    height: 64px;
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: opacity 200ms;
  }
  .mobile-nav-enter,
  .mobile-nav-leave-to {
    opacity: 0;
  }
</style>
