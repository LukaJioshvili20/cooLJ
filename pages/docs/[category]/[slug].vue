<template>
  <main>
    <div class="container mx-auto flex flex-row">
      <TheAside />
      <div class="flex-auto">
        <ContentDoc>
          <template v-slot="{ doc }">
            <div v-if="doc.header" class="pb-2">
              <h2 class="text-2xl font-semibold text-red-400">
                {{ doc.header.title }}
              </h2>
              <p class="text-lg">{{ doc.header.paragraph }}</p>
            </div>
            <div v-if="doc.body">
              <h2>{{ doc.body.title }}</h2>
              <div v-html="doc.body.description"></div>
            </div>
            <div v-if="doc.roadmap" class="pb-2">
              <h2 class="text-2xl text-red-400 font-semibold pb-2">
                Roadmap of my journey
              </h2>
              <ul class="list-disc marker:text-red-400">
                <li
                  v-for="item in doc.roadmap"
                  :key="item.date + item.title"
                  class="flex flex-row mb-2"
                >
                  <span class="font-bold text-4xl pr-2 pt-1 text-zinc-400"
                    >&dot;</span
                  >
                  <div class="flex flex-col text-lg">
                    <span class="item__date text-zinc-400">{{
                      item.date
                    }}</span>
                    <span class="item__title text-zinc-200">
                      {{ item.title }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </template>
          <template #not-found>
            <h1>Costume message for not content not found.</h1>
          </template>
        </ContentDoc>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  ul {
    list-style: disc;
  }
</style>
