<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();

const route = useRoute();
const isActive = computed(() => route.path === props.url);
</script>
<template>
  <li
    class="px-3 py-2 relative hover:text-teal-500"
    :class="isActive && 'text-teal-500'"
  >
    <NuxtLink :to="url"><slot></slot></NuxtLink>
    <div
      v-if="isActive"
      role="presentation"
      class="absolute inset-x-1 w-full -bottom-[3px] h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-500/0 dark:via-teal-500/40 dark:to-teal-500/0"
    ></div>
  </li>
</template>
