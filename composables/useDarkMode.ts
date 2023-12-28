import { onMounted } from "vue";
import { watch } from "vue";

type Theme = "light" | "dark";

export function useDarkMode() {
  const isDarkMode = ref<boolean | undefined>(undefined);

  function toggleDarkMode() {
    if (isDarkMode.value === undefined) {
      isDarkMode.value = getPreferredColorScheme() === "dark";
      return;
    }

    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  }

  function initializeDarkMode() {
    if (typeof localStorage !== "undefined") {
      const localTheme = localStorage.getItem("theme");

      if (localTheme) {
        isDarkMode.value = localTheme === "dark";
      } else {
        isDarkMode.value = getPreferredColorScheme() === "dark";
      }

      localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDarkMode.value);
    }
  }

  onMounted(initializeDarkMode);

  watch(isDarkMode, (newValue) => {
    document.documentElement.classList.toggle("dark", newValue);
  });

  return { isDarkMode, toggleDarkMode };
}

function getPreferredColorScheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
}
