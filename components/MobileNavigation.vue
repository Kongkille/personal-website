<template>
  <div class="text-sm text-text-primary dark:text-dark-text-primary">
    <button
      type="button"
      @click="openModal"
      class="group inline-flex items-end gap-1 rounded-full bg-white/90 px-4 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      Menu
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/10 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-x-0 top-12 mx-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md bg-white ring-1 transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-900 ring-zinc-900/5 dark:ring-white/20"
              >
                <DialogTitle
                  as="h2"
                  class="font-light text-text-tertiary dark:text-dark-text-tertiary mb-4"
                >
                  Navigation
                </DialogTitle>
                <div
                  class="divide-y text-text-primary dark:text-dark-text-primary divide-gray-200 dark:divide-zinc-800 flex flex-col"
                >
                  <MobileNavigationItem
                    v-for="link in links"
                    @click="onNavigationItemClick"
                    :key="link.name"
                    :url="link.url"
                  >
                    {{ link.name }}
                  </MobileNavigationItem>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

function onNavigationItemClick() {
  closeModal();
}

const links = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Work",
    url: "/work",
  },
  {
    name: "Articles",
    url: "/articles",
  },
];
</script>
