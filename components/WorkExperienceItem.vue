<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  link: string;
  from: number;
  technologies: string[];
  to?: number;
};

defineProps<Props>();
</script>

<template>
  <div class="flex justify-between">
    <p
      class="font-light flex-none w-28 text-text-tertiary dark:text-dark-text-tertiary"
    >
      {{ from }} - {{ to ?? "present" }}
    </p>
    <div class="grow flex flex-col gap-2">
      <a
        class="font-bold text-text-primary dark:text-dark-text-primary font-heading"
        :href="link"
        target="_blank"
        >{{ title }}</a
      >
      <p>
        {{ description }}
      </p>
      <p class="text-text-tertiary dark:text-dark-text-tertiary font-light">
        {{ technologies.join(" · ") }}
      </p>
    </div>
  </div>
</template>
