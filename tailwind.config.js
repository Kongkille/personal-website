/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        ["text-primary"]: "#151517", // zinc 800
        ["text-secondary"]: "#52525b", // zinc 600
        ["text-tertiary"]: "#71717a", // zinc 500
        dark: {
          ["text-primary"]: "#f4f4f5", // zinc 100
          ["text-secondary"]: "#a1a1aa", // zinc 400
          ["text-tertiary"]: "#71717a", // zinc 500
        },
      },
      fontFamily: {
        heading: ["'Noto sans'", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",

  variants: {
    extend: {
      textColor: ["dark"],
      backgroundColor: ["dark"],
    },
  },
};
