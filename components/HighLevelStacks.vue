<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <div class="w-full lg:w-1/2">
        <h2 class="text-4xl">
          Deliver an optimized <b class="text-red-400">User Experience</b>
        </h2>
        <p class="text-xl mt-4 text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
          <b>et dolore magna aliqua. Ut enim ad minim veniam</b>, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="my-8">
        <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="item in items">
            <div
              class="border-spacing-2 bg-backgroundDark-2 bg-opacity-30 border-zinc-700 hover:border-zinc-500 transition-colors border-2 rounded-lg p-6"
            >
              <div>
                <img
                  src="@/assets/image/hero-gradient.svg"
                  :alt="`Image of ${item.title}`"
                />
              </div>
              <h3 class="font-medium text-xl">{{ item.title }}</h3>
              <p class="text-zinc-400 text-lg pt-2">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  interface ItemObject {
    title: string;
    description: string;
    image: string;
  }
  const items: Array<ItemObject> = [
    {
      title: "Sketching, Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      image: "@/assets/image/hero-gradient.svg",
    },
    {
      title: "Implimenting, Coding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      image: "@/assets/image/hero-gradient.svg",
    },
    {
      title: "Upcoming...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      image: "@/assets/image/hero-gradient.svg",
    },
  ];
</script>
