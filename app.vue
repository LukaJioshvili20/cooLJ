<template>
  <main>
    <div class="bg-green-300">
      hello there
    </div>
    <div class="text-primary">
      {{ isDark }}
    </div>
  </main>
</template>

<script lang="ts" setup>
import { appStore } from '@/stores/app'
const store = appStore()
const isDark = computed(function (): boolean {
  return store.darkMode
})
</script>
