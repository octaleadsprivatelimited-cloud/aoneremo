import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "localhost",
    port: 8081,
    open: true,
    strictPort: true,
  },
  preview: {
    port: 8081,
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
    // Optimize build for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Simplified chunking strategy - split only react/vendor to prevent loading issues
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // All other vendor code in one chunk
            return 'vendor';
          }
        },
      },
    },
    // Enable minification (esbuild is faster and doesn't require additional dependencies)
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps in production for debugging (optional, can remove for smaller bundle)
    sourcemap: false,
    // Disable CSS code splitting to prevent loading issues
    cssCodeSplit: false,
    // Optimize asset inlining threshold
    assetsInlineLimit: 4096,
  },
}));
