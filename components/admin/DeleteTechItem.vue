<template>
  <section>
    <div
      class="block p-6 rounded-lg shadow-lg bg-zinc-900 border-zinc-400 border-2 max-w-sm text-white"
    >
      <form @submit.prevent="deleteTech">
        <div class="form-group mb-2">
          <select
            v-model="selected"
            class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-400 focus:border-red-400"
          >
            <option value="default" disabled>Choose slug to delete item</option>
            <option
              v-for="item in techList"
              :key="item.slug"
              :value="item.slug"
            >
              {{ item.title }}
            </option>
          </select>
        </div>
        <button
          type="submit"
          class="px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Remove
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const client = useSupabaseClient();
  const selected = ref("default");
  async function deleteTech() {
    if (selected.value.length == 0 && selected.value === "default") return;
    const { error } = await client
      .from("tech")
      .delete()
      .eq("slug", selected.value);

    if (error) {
      console.error("ERROR -- Could not delete data:", error);
      throw error;
    }
  }
  interface TechItem {
    title: string;
    slug: string;
  }

  const { data: techList } = useAsyncData(async () => {
    const { data } = await client.from("tech").select("slug,title");

    return data as TechItem[] | null;
  });
</script>
