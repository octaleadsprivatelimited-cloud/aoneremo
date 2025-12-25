import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "localhost",
    port: 8080,
    open: true,
    // Enable SPA fallback for development
    strictPort: false,
  },
  preview: {
    port: 8080,
    // Enable SPA fallback for preview
    strictPort: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure proper handling of SPA routes in production
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
