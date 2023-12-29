/*
 * @LastEditors: John
 * @Date: 2023-12-29 15:33:02
 * @LastEditTime: 2023-12-29 15:47:34
 * @Author: John
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
