<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();

const route = useRoute();
const isActive = computed(() => route.path === props.url);
</script>
<template>
  <NuxtLink :to="url" :class="isActive && 'text-emerald-500'" class="py-3">
    <slot></slot>
  </NuxtLink>
</template>
