<template>
  <header class="fixed w-full z-50">
    <div
      id="desktopNavigation"
      class="h-full container mx-auto flex-row justify-between px-4"
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
        <ul class="h-full flex flex-row items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/luka-jioshvili/"
              target="_blank"
            >
              <i
                class="mdi mdi-linkedin mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/LukaJioshvili20" target="_blank">
              <i
                class="mdi mdi-github mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
          <li>
            <ButtonDarkMode />
          </li>
        </ul>
      </div>
    </div>
    <div
      id="mobileNavigation"
      class="h-full container mx-auto flex-row justify-between items-center px-4"
    >
      <i
        @click.left="toggleMobileNavigation()"
        class="cursor-pointer mdi mdi-menu mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
      ></i>
      <NuxtLink to="/">
        <span class="flex flex-row items-center">
          <img src="/J-32.svg" width="20" height="20" alt="J" class="mr-2" />
          <p class="font-semibold text-white">Luka Jioshvili</p>
        </span>
      </NuxtLink>

      <ButtonDarkMode />
    </div>
    <transition
      name="custom-classes"
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <div
        v-if="navigationOpened"
        class="text-white min-h-screen absolute inset-0 z-50 flex items-start overflow-y-auto bg-opacity-50 dark:bg-opacity-50 lg:hidden"
      >
        <div
          id="mobileNavigationBar"
          class="bg-black h-full min-w-[320px] max-w-3/4 max-w-xs px-4 pb-12 shadow sm:px-6"
        >
          <div class="h-8 w-full my-2 flex flex-row justify-between">
            <i
              @click.left="toggleMobileNavigation()"
              class="cursor-pointer mdi mdi-close mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
            ></i>
            <ul class="h-full flex flex-row items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/luka-jioshvili/"
                  target="_blank"
                >
                  <i
                    class="mdi mdi-linkedin mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
                  ></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/LukaJioshvili20" target="_blank">
                  <i
                    class="mdi mdi-github mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
                  ></i>
                </a>
              </li>
              <li>
                <ButtonDarkMode />
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
    </transition>
  </header>
</template>

<script lang="ts" setup>
  // TODO: use teleport for mobile nav
  import { AppActions, appStore } from "@/stores/app";
  const store = appStore();
  const navigationOpened = computed(() => store.isNavigationOpenedGetter);
  function toggleMobileNavigation(payload?: boolean) {
    store[AppActions.toggleNavigationAction](payload);
  }
  const routeState = useRoute();

  watch(routeState, () => {
    toggleMobileNavigation(false);
  });
</script>

<style lang="scss" scoped>
  header {
    background-color: #0c0c0db9;
    max-height: 64px;
    height: 64px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 840px) {
    #mobileNavigation {
      display: flex;
    }
    #desktopNavigation {
      display: none;
    }
  }
  @media screen and (min-width: 840px) {
    #mobileNavigation {
      display: none;
    }
    #desktopNavigation {
      display: flex;
    }
  }
  .animate__animated .animate__slideOutLeft {
    transition: all 190ms ease-in-out;
  }

  .animate__animated .animate__slideInLeft {
    transition: all 160ms ease-in-out;
  }
</style>
