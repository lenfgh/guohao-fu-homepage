import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/guohao-fu-homepage/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
