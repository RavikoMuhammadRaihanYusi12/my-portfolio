import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    dark: {
      colors: {
        background: "#000000", // Pure black background
        foreground: "#ffffff", // Pure white text
        primary: {
          50: "#e6e6e6",
          100: "#cccccc",
          200: "#b3b3b3",
          300: "#999999",
          400: "#808080",
          500: "#666666",
          600: "#4d4d4d",
          700: "#333333",
          800: "#1a1a1a",
          900: "#000000",
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        focus: "#ffffff",
      },
    },
    light: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        primary: {
          50: "#1a1a1a",
          100: "#333333",
          200: "#4d4d4d",
          300: "#666666",
          400: "#808080",
          500: "#999999",
          600: "#b3b3b3",
          700: "#cccccc",
          800: "#e6e6e6",
          900: "#ffffff",
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        focus: "#000000",
      },
    },
  },
});
