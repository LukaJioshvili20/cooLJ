<template>
  <section>
    <div class="lg:w-1/2 mx-auto" v-if="tech">
      <nuxt-img :src="`${imageURL}`" :placeholder="`${tech.sub_title} image`" />
      <div class="py-4 border-b-zinc-400 border-b">
        <h1 class="text-zinc-200">{{ tech.title }}</h1>
        <h2 class="text-zinc-400">{{ tech.sub_title }}</h2>
      </div>
      <div v-html="tech.description" class="my-4"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const client = useSupabaseClient();
  const imageURL = ref("");
  const route = useRoute();
  interface TechData {
    id: number;
    title: string;
    sub_title: string;
    description: string;
    image_name: string;
  }
  const { data: tech } = await useAsyncData(async () => {
    const { data } = await client
      .from("tech")
      .select("id, title, sub_title, description, image_name")
      .eq("slug", route.params.slug)
      .single();

    return data as TechData;
  });
  const { data: fileData } = await useAsyncData(async () => {
    if (!tech.value) return;
    const { data } = await client.storage
      .from("tech")
      .getPublicUrl(`${tech.value.id}/${tech.value.image_name}`);
    return data;
  });
  if (fileData.value) {
    imageURL.value = fileData.value.publicUrl;
  }
</script>