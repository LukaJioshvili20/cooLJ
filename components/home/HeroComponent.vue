<template>
  <section>
    <div
      class="container z-20 mx-auto px-4 flex flex-col-reverse lg:flex-row relative items-center sm:items-start sm:my-6 lg:my-0 lg:min-h-[475px]"
    >
      <div class="flex-auto h-full flex flex-col self-center align-middle">
        <h1 class="text-xl mt-2">
          Greetings, 👋 I'm a web app developer based in Georgia!
        </h1>
        <div class="mt-10">
          <BaseButton
            class="mr-2 font-medium"
            :title="'Get Started'"
            :link="'/about/biography/biography'"
          />
          <a
            class="transition-colors text-zinc-400 hover:text-zinc-200 font-medium"
            href="https://github.com/LukaJioshvili20"
            target="_blank"
            >Github Profile</a
          >
        </div>
      </div>
      <div
        class="flex flex-row justify-center h-[475px] w-full lg:w-fit lg:block relative lg:absolute sm:right-0 flex-none"
      >
        <ClientOnly>
          <BaseModel
            :model-path="'/models/nuxty/nuxty.gltf'"
            :model-size="{ width: 475, height: 475 }"
          />
        </ClientOnly>
      </div>
    </div>
    <img
      src="@/assets/image/hero-gradient.svg"
      class="absolute right-0 top-0 z-10"
      role="presentation"
      width="1269"
      height="724"
    />
  </section>
</template>

<script></script>
