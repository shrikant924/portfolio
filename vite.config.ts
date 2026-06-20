import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind is configured via PostCSS (postcss.config.js) — do not call tailwindcss() here.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
