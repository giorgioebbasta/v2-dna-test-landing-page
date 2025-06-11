
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
          'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'vendor-icons': ['lucide-react'],
          'vendor-router': ['react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
        },
      },
    },
    // Enable compression and optimization
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable asset inlining for small files
    assetsInlineLimit: 4096,
  },
  // Enable gzip compression in dev mode for testing
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
}));
