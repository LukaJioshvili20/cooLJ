<template>
  <main>
    <BaseHero :media-url="'/videos/tech-hero'" :is-video="true" />
    <section>
      <div class="container mx-auto px-4 lg:px-0">
        <div class="mb-4">
          <p>
            As a developer and student, I've been spending hours and hours at my
            desk every day. So, I recently have started improving my workspace
            in order to boost my productivity and study quality. So, here is a
            living snapshot and a place to point curious people to when I get
            asked.
            <NuxtLink to="/" class="text-red-400">
              Learn more about me
              <Icon name="uil:arrow-right" />
            </NuxtLink>
          </p>
        </div>
        <ul
          v-if="list"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4"
        >
          <li class="text-center mb-4" v-for="item in list" :key="item.id">
            <NuxtLink class="group" :to="`/tech/${item.slug}`">
              <div
                class="w-full relative sm:h-[160px] lg:w-[300px] lg:h-[200px]"
              >
                <NuxtImg
                  :src="`https://mrblyyuwhpbgbcjtgupx.supabase.co/storage/v1/object/public/tech/${item.id}/${item.image_name}`"
                  loading="lazy"
                  decoding="async"
                  class="item__image relative z-10 rounded-lg w-full h-full object-cover object-center border-2 border-zinc-700 group-hover:border-zinc-500 duration-[400ms]"
                  :placeholder="item.image_name"
                />
                <div
                  class="sub-group absolute z-10 p-2 bg-black top-2 right-2 rounded-full bg-opacity-50 hover:bg-opacity-100 transition-all text-white hover:text-red-400"
                >
                  <Icon class="z-20 text-2xl" v-if="user" name="uil:edit" />
                </div>
              </div>
              <div class="pt-2 pb-4">
                <h3
                  class="text-zinc-200 font-medium group-hover:text-red-400 duration-[400ms]"
                >
                  {{ item.title }}
                </h3>
                <h4 class="text-zinc-400">{{ item.sub_title }}</h4>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="w-full" v-else>
          <h2 class="text-center w-full">List is empty😢</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
  import { techStore } from "@/stores/tech";

  import { TechItemType } from "~~/stores/types";
  const store = techStore();
  const user = useSupabaseUser();
  const list = computed((): TechItemType[] => Object.values(store.dataGetter));

  useHead({
    title: "What I use - Luka Jioshvili",
    meta: [
      {
        hid: "title",
        name: "title",
        content: "What I use - Luka Jioshvili",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "What I use - Luka Jioshvili",
      },
      {
        hid: "author",
        name: "author",
        content: "Luka Jioshvili",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Luka Jioshvili, Tech, Devices, Gadgets",
      },
      {
        hid: "description",
        name: "description",
        content:
          "As a developer and student, I've been spending hours and hours at my desk every day. So, I recently have started improving my workspace in order to boost my productivity and study quality.",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "As a developer and student, I've been spending hours and hours at my desk every day. So, I recently have started improving my workspace in order to boost my productivity and study quality.",
      },
    ],
  });
</script>
