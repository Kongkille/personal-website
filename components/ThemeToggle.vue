<script setup lang="ts">
const props = defineProps<{
  isDarkModeEnabled: boolean | undefined;
  onclick: () => void;
}>();

const ariaLabel = computed(() =>
  props.isDarkModeEnabled ? "Switch to light theme" : "Switch to dark theme"
);
</script>

<template>
  <button
    @click="onclick"
    :aria-label="ariaLabel"
    class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="dark:hidden block w-6 h-6 fill-teal-50 stroke-teal-500 group-hover:stroke-teal-600"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      class="hidden dark:block h-6 w-6 fill-zinc-700 stroke-zinc-500 transition group-hover:stroke-zinc-400"
    >
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</template>
