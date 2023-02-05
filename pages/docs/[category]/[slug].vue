<template>
  <main>
    <div class="container mx-auto flex flex-row">
      <TheAside />
      <div class="flex-auto">
        <ContentDoc>
          <template v-slot="{ doc }">
            <div v-if="doc.header">
              <h1 class="text-red-400">{{ doc.header.title }}</h1>
              <p>{{ doc.header.paragraph }}</p>
            </div>
            <div v-if="doc.body">
              <h2>{{ doc.body.title }}</h2>
              <div v-html="doc.body.description"></div>
            </div>
            <div v-if="doc.roadmap">
              <ul v-for="item in doc.roadmap">
                <li class="flex flex-col">
                  <span class="item__date text-zinc-400">{{ item.date }}</span>
                  <span class="item__title text-zinc-200">
                    {{ item.title }}
                  </span>
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
