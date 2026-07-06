/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub Pages: set base to "/<repo-name>/" or use "./" for user/org pages root.
export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/netplus-duo/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
