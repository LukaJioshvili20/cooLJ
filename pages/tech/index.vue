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
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4"
        >
          <li class="text-center mb-4" v-for="item in techList" :key="item.id">
            <NuxtLink class="group" :to="`/tech/${item.slug}`">
              <NuxtImg
                :src="`https://mrblyyuwhpbgbcjtgupx.supabase.co/storage/v1/object/public/tech/${item.id}/${item.image_name}`"
                loading="lazy"
                decoding="async"
                class="item__image rounded-lg object-cover object-center w-full sm:h-[160px] lg:w-[300px] lg:h-[200px] border-2 border-zinc-700 group-hover:border-zinc-500 duration-[400ms]"
                :placeholder="item.image_name"
              />
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
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
  const client = useSupabaseClient();
  interface TechItem {
    id: number;
    title: string;
    sub_title: string;
    description: string;
    image_name: string;
    slug: string;
  }

  const { data: techList } = useAsyncData(async () => {
    const { data } = await client
      .from("tech")
      .select("id,slug,title,sub_title,image_name");

    return data as TechItem[] | null;
  });
</script>
