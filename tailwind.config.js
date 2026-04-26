import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
            focus: "#ffffff",
          },
        },
      },
    }),
  ],
};
