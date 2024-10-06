import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(220, 10%, 8%)",
        "bg-2": "hsl(220, 10%, 11%)",
        "bg-3": "hsl(220, 10%, 16%)",
        "txt-3": "hsl(220, 11%, 35%)",
        "txt-2": "hsl(220, 11%, 60%)",
        txt: "hsl(220, 30%, 80%)",
        "txt-0": "hsl(220, 45%, 90%)",
        blue: "hsl(190, 70%, 50%)",
        purple: "hsl(240, 80%, 66%)",
        pink: "hsl(279, 80%, 66%)",
      },
      fontFamily: {
        primary: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        secondary: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
