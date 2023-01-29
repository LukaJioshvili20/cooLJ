<template>
  <main>
    <div class="container mx-auto flex flex-row">
      <TheAside />
      <div class="flex-auto">
        <ContentDoc>
          <template v-slot="{ doc }">
            <div v-if="doc.header">
              <h1 class="text-red-400">{{ doc.header.title }}</h1>
            </div>
            <div v-else>no</div>
          </template>
          <template #not-found>
            <h1>Costume message for not content not found.</h1>
          </template>
        </ContentDoc>
      </div>
    </div>
  </main>
</template>
