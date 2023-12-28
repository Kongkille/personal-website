<script setup lang="ts">
import { computed } from "vue";
const { isDarkMode, toggleDarkMode } = useDarkMode();

const route = useRoute();
const isAvatarHidden = computed(() => route.path === "/");
</script>

<template>
  <header class="w-full flex justify-center h-16 absolute top-0">
    <div class="max-w-xl mx-2 relative w-full justify-center items-center flex">
      <nuxt-link
        v-show="!isAvatarHidden"
        class="absolute left-0 animate-fadeIn"
        to="/"
      >
        <avatar size="small" />
      </nuxt-link>
      <desktop-navigation class="hidden sm:block" />
      <mobile-navigation class="sm:hidden" />
      <theme-toggle
        class="dark:text-neutral-200 text-neutral-800 absolute right-0"
        :onclick="toggleDarkMode"
        :is-dark-mode-enabled="isDarkMode"
      />
    </div>
  </header>
</template>
