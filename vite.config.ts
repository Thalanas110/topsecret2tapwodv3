import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages needs /<repo-name>/, Netlify uses /
  // Set GITHUB_PAGES=true when building for GitHub Pages
  base: process.env.GITHUB_PAGES === "true" ? "/topsecret2tapwodv3/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
