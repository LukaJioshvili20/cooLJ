<template>
  <header class="text-white">
    <div class="h-full container mx-auto flex flex-row justify-between">
      <div class="my-auto">luka</div>
      <div>
        <nav class="h-full">
          <ul class="flex flex-row h-full">
            <li
              class="my-auto mx-2 text-sm transition-colors text-zinc-400 hover:text-gray-200"
            >
              <NuxtLink to="/docs"> Docs </NuxtLink>
            </li>
            <li
              class="my-auto mx-2 text-sm transition-colors text-zinc-400 hover:text-gray-200"
            >
              <NuxtLink to="/roadmap"> Roadmap </NuxtLink>
            </li>
            <li
              class="my-auto mx-2 text-sm transition-colors text-zinc-400 hover:text-gray-200"
            >
              <NuxtLink to="/support"> Support </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul class="h-full flex flex-row">
          <li class="flex flex-col justify-center">
            <a href="/">
              <i
                class="mdi mdi-linkedin mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
          <li class="flex flex-col justify-center">
            <a href="/">
              <i
                class="mdi mdi-github mdi-24px transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    background-color: #0c0c0df2;
    max-height: 64px;
    height: 64px;
  }
</style>
