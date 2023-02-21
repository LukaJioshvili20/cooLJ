<template>
  <main>
    <section>
      <div class="container mx-auto w-full items-center mb-8">
        <ul
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-zinc-600"
        >
          <li class="mr-2">
            <a
              @click="addTechA"
              aria-current="page"
              :class="addTech ? 'active bg-zinc-100' : 'bg-zinc-900'"
              class="cursor-pointer inline-block p-4 text-red-400 font-bold rounded-t-lg transition-all"
              >Add Tech</a
            >
          </li>
          <li class="mr-2">
            <a
              @click="updateTechA"
              :class="updateTech ? 'active bg-zinc-100' : 'bg-zinc-900'"
              class="cursor-pointer inline-block p-4 rounded-t-lg text-red-400 bg-zinc-900 transition-all"
              >Update Tech</a
            >
          </li>
          <li class="mr-2">
            <a
              @click="deleteTechA"
              :class="deleteTech ? 'active bg-zinc-100' : 'bg-zinc-900'"
              class="cursor-pointer inline-block p-4 rounded-t-lg text-red-400 bg-zinc-900 transition-all"
              >Delete Tech</a
            >
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="container mx-auto">
        <AdminAddTechItem v-if="addTech" />
        <AdminUpdateTechItem v-if="updateTech" />
        <AdminDeleteTechItem v-if="deleteTech" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
  import { techStore } from "@/stores/tech";
  import { TechItemType } from "~~/stores/types";
  const store = techStore();
  const user = useSupabaseUser();
  const addTech = ref(true);
  const updateTech = ref(false);
  const deleteTech = ref(false);
  const list = computed((): TechItemType[] => Object.values(store.dataGetter));
  console.log(list);

  function addTechA() {
    addTech.value = true;
    updateTech.value = false;
    deleteTech.value = false;
  }
  function updateTechA() {
    updateTech.value = true;
    addTech.value = false;
    deleteTech.value = false;
  }
  function deleteTechA() {
    deleteTech.value = true;
    addTech.value = false;
    updateTech.value = false;
  }
  watchEffect(() => {
    if (!user.value) {
      return navigateTo("/login");
    }
  });
  definePageMeta({
    middleware: "auth",
    layout: "admin",
  });
</script>
