<template>
  <div
    role="presentation"
    class="fixed inset-0 flex justify-center pointer-events-none"
  >
    <div class="max-w-2xl w-full flex">
      <div
        class="dark:outline-zinc-800 outline-zinc-100 outline outline-1 w-full"
      ></div>
    </div>
  </div>
  <the-header />
  <div
    class="animate-fadeIn flex justify-center min-h-screen text-text-secondary dark:text-dark-text-secondary text-sm"
  >
    <main class="max-w-2xl w-full flex flex-col p-4 pt-28 gap-12 px-12">
      <slot></slot>
    </main>
  </div>
</template>
