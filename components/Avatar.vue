<script setup lang="ts">
defineProps<{
  size: "small" | "large";
}>();
</script>

<template>
  <img
    class="rounded-full"
    :class="{
      'w-24 h-24': size === 'large',
      'w-10 h-10': size === 'small',
    }"
    src="https://avatars.githubusercontent.com/u/45588799?v=4"
    alt="Markus Kilendahl"
  />
</template>
