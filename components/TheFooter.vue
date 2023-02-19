<template>
  <footer class="border-t-[1px] bg-black border-white/20 text-white">
    <div class="container mx-auto flex flex-row justify-between h-full px-4">
      <div class="flex items-center">
        <ul class="flex flex-row">
          <li>
            <DownloadResume
              class="mr-2"
              :file-name="'LukaJioshvili.pdf'"
              :file-path="'resume'"
              :title="'Resume'"
            />
          </li>
          <li>
            <a
              class="underline underline-offset-2 h-full flex flex-col justify-center"
              href="https://github.com/LukaJioshvili20/cooLJ"
              target="_blank"
            >
              Source
            </a>
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <ul class="flex flex-row">
          <li>
            <a
              href="https://www.linkedin.com/in/luka-jioshvili/"
              target="_blank"
            >
              <i
                class="mdi mdi-linkedin mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/LukaJioshvili20" target="_blank">
              <i
                class="mdi mdi-github mdi-24px mr-2 transition-colors text-zinc-400 hover:text-gray-200"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    max-height: 64px;
    height: 64px;
  }
</style>
