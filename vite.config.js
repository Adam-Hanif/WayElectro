import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@app", replacement: path.resolve(__dirname, "src/app") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "src/features"),
      },
      {
        find: "@entities",
        replacement: path.resolve(__dirname, "src/entities"),
      },
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  plugins: [react()],
});
