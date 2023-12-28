<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();

const route = useRoute();
const isActive = computed(() => route.path === props.url);
</script>
<template>
  <NuxtLink :to="url">
    <li
      class="px-3 py-2 relative hover:text-emerald-500"
      :class="isActive && 'text-emerald-500'"
    >
      <slot></slot>
      <div
        v-if="isActive"
        role="presentation"
        class="absolute inset-x-1 w-full -bottom-[3px] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 dark:from-emerald-500/0 dark:via-emerald-500/40 dark:to-emerald-500/0"
      ></div>
    </li>
  </NuxtLink>
</template>
