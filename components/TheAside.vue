<template>
  <aside class="w-auto z-50">
    <nav>
      <ul>
        <li>
          <button
            class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
            @click.left="toggleOption('option01')"
          >
            <span class="text-white">Option 1</span>
            <Icon
              name="uil:angle-double-up"
              class="transition-transform text-2xl transform-gpu"
              :class="accordions.option01 ? '-rotate-180' : 'rotate-0'"
            />
          </button>
          <ul class="z-50 overflow-hidden" v-if="accordions.option01">
            <li
              :class="isRouteActive(route.link)"
              class="border-l transition-colors"
              v-for="route in option01Routes"
            >
              <NuxtLink
                :to="'/' + route.link"
                class="flex items-center justify-between py-1.5 text-sm pl-4 font-medium"
              >
                {{ route.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <button
            class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
            @click.left="toggleOption('option02')"
          >
            <span class="text-white">Option 2</span>
            <Icon
              name="uil:angle-double-up"
              class="transition-transform text-2xl transform-gpu text-zinc-400"
              :class="accordions.option02 ? '-rotate-180' : 'rotate-0'"
            />
          </button>
          <ul class="transition-all" v-if="accordions.option02">
            <li
              :class="isRouteActive(route.link)"
              class="border-l transition-colors"
              v-for="route in option02Routes"
            >
              <NuxtLink
                :to="'/' + route.link"
                class="flex items-center justify-between py-1.5 text-sm pl-4 font-medium"
              >
                {{ route.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <button
            class="z-60 overflow-hidden hover:text-zinc-200 text-zinc-400 transition-colors"
            @click.left="toggleOption('option03')"
          >
            <span class="text-white">Option 3</span>
            <Icon
              name="uil:angle-double-up"
              class="transition-transform text-2xl transform-gpu text-zinc-400"
              :class="accordions.option03 ? '-rotate-180' : 'rotate-0'"
            />
          </button>
          <ul v-if="accordions.option03">
            <li
              :class="isRouteActive(route.link)"
              class="border-l transition-colors"
              v-for="route in option03Routes"
            >
              <NuxtLink
                :to="'/' + route.link"
                class="flex items-center justify-between py-1.5 text-sm pl-4 font-medium"
              >
                {{ route.name }}
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
  //   console.log(accordions.value.option01);
  console.log(accordions.value);

  const option01 = ref<boolean>(true);
  const option02 = ref<boolean>(false);
  const option03 = ref<boolean>(false);

  interface RouteItems {
    name: string;
    link: string;
  }

  type Routes = RouteItems[];
  const option01Routes = reactive<Routes>([
    {
      name: "Option 1.1",
      link: "docs/bio/option1.1",
    },
    {
      name: "Option 1.2",
      link: "docs/bio/option1.2",
    },
    {
      name: "Option 1.3",
      link: "docs/bio/option1.3",
    },
  ]);
  const option02Routes = reactive<Routes>([
    {
      name: "Option 2.1",
      link: "docs/bio/option2.1",
    },
    {
      name: "Option 2.2",
      link: "docs/bio/option2.2",
    },
    {
      name: "Option 2.3",
      link: "docs/bio/option2.3",
    },
  ]);
  const option03Routes = reactive<Routes>([
    {
      name: "Option 3.1",
      link: "docs/bio/option3.1",
    },
    {
      name: "Option 2.2",
      link: "docs/bio/option3.2",
    },
    {
      name: "Option 3.3",
      link: "docs/bio/option3.3",
    },
  ]);
  function isRouteActive(payload: string): string {
    console.log("here", payload);

    if (route.path === "/" + payload) {
      return " border-red-400 hover:border-red-600 text-red-400 hover:text-red-600";
    }
    return " border-zinc-400 hover:border-zinc-200 text-zinc-400 hover:text-zinc-200";
  }
  function toggleOption(payload: string): void {
    store[AppActions.toggleAccordionAction](payload);
  }
</script>
