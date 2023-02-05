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
              <NuxtLink to="/about/biography/biography"> About </NuxtLink>
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
              <Icon
                name="uil:linkedin"
                class="cursor-pointer mr-2 transition-colors text-3xl text-zinc-400 hover:text-gray-200"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/LukaJioshvili20" target="_blank">
              <Icon
                name="uil:github"
                class="cursor-pointer mr-2 transition-colors text-3xl text-zinc-400 hover:text-gray-200"
              />
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
      <Icon
        @click.left="toggleMobileNavigation()"
        name="uil:bars"
        class="cursor-pointer text-3xl transition-colors text-zinc-400 hover:text-gray-200"
      />
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
        class="text-white min-h-screen absolute inset-0 z-100 flex items-start overflow-y-auto bg-opacity-50 dark:bg-opacity-50 lg:hidden"
      >
        <div
          id="mobileNavigationBar"
          class="bg-black h-full min-w-[320px] max-w-3/4 max-w-xs px-4 pb-12 shadow sm:px-6"
        >
          <div class="h-8 w-full my-2 flex flex-row justify-between mb-">
            <Icon
              @click.left="toggleMobileNavigation()"
              name="uil:exit"
              class="cursor-pointer transition-colors text-3xl text-zinc-400 hover:text-gray-200"
            />
            <ul class="h-full flex flex-row items-center">
              <li class="mr-2">
                <a
                  href="https://www.linkedin.com/in/luka-jioshvili/"
                  target="_blank"
                >
                  <Icon
                    name="uil:linkedin"
                    class="cursor-pointer transition-colors text-3xl text-zinc-400 hover:text-gray-200"
                  />
                </a>
              </li>
              <li class="mr-2">
                <a href="https://github.com/LukaJioshvili20" target="_blank">
                  <Icon
                    name="uil:github"
                    class="cursor-pointer transition-colors text-3xl text-zinc-400 hover:text-gray-200"
                  />
                </a>
              </li>
              <li>
                <ButtonDarkMode />
              </li>
            </ul>
          </div>
          <ul>
            <li class="mb-1">
              <NuxtLink to="/">Homepage</NuxtLink>
            </li>
            <li class="mb-1">
              <button
                class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
                @click.left="about = !about"
              >
                <span class="text-white">About</span>
                <Icon
                  name="uil:angle-double-up"
                  class="transition-transform text-2xl transform-gpu"
                  :class="about ? '-rotate-180' : 'rotate-0'"
                />
              </button>
              <ul
                v-if="about"
                class="pl-2 border-l transition-colors border-zinc-400 hover:border-zinc-200 text-zinc-400 hover:text-zinc-200"
              >
                <li>
                  <button
                    class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
                    @click.left="toggleOption('biography')"
                  >
                    <span class="text-white">Biography</span>
                    <Icon
                      name="uil:angle-double-up"
                      class="transition-transform text-2xl transform-gpu"
                      :class="accordions.biography ? '-rotate-180' : 'rotate-0'"
                    />
                  </button>
                  <ul class="z-50 overflow-hidden" v-if="accordions.biography">
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
                    @click.left="toggleOption('tools')"
                  >
                    <span class="text-white">Tools</span>
                    <Icon
                      name="uil:angle-double-up"
                      class="transition-transform text-2xl transform-gpu"
                      :class="accordions.tools ? '-rotate-180' : 'rotate-0'"
                    />
                  </button>
                  <ul class="z-50 overflow-hidden" v-if="accordions.tools">
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
            </li>
            <li class="mb-1">
              <NuxtLink to="/roadmap">Roadmap</NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink to="/support">Support</NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="bg-transparent z-100 flex-auto h-full w-full"
          @click.left="toggleMobileNavigation(false)"
        ></div>
      </div>
    </transition>
  </header>
</template>

<script lang="ts" setup>
  import { AppActions, appStore } from "@/stores/app";
  const routeState = useRoute();
  const store = appStore();
  const about = ref(false);
  const route = useRoute();
  const accordions = computed(() => store.accordionsGetter);

  // Navigation
  const navigationOpened = computed(() => store.isNavigationOpenedGetter);
  function toggleMobileNavigation(payload?: boolean) {
    store[AppActions.toggleNavigationAction](payload);
  }
  // Active link
  watch(routeState, () => {
    toggleMobileNavigation(false);
  });
  function isRouteActive(payload: string | undefined): string {
    if (typeof payload === "undefined") return "";
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
  const contentBio = data.value?.filter((item) => item._dir === "biography");
  const contentAnother = data.value?.filter((item) => item._dir === "tools");
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
