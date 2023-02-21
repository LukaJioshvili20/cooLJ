<template>
  <main class="font-main min-h-screen flex flex-col">
    <TheHeader />
    <section
      class="relative min-h-screen min-w-full bg-backgroundDark text-white pt-16"
    >
      <img
        src="/images/404.jpg"
        class="z-10 w-full object-cover opacity-75"
        alt="404"
      />
      <div
        class="absolute container left-1/2 top-1/2 bg-zinc-900 w-fit px-8 py-12 rounded-lg bg-opacity-75 -translate-x-1/2 -translate-y-1/2 mx-auto z-20 text-white"
      >
        <h2 class="text-center font-semibold text-4xl">Not found</h2>
        <h1 class="text-center font-medium text-2xl">
          The page you're looking for was not found.
        </h1>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
