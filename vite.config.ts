import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:8787",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, "/api/contact"),
    //   },
    // },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    assetsInlineLimit: 0, 
    rollupOptions: {
      perf: true,
      treeshake: {
        preset: 'smallest',
        moduleSideEffects: false
      },
      output: {
        compact: true,
        indent: false,
        manualChunks(id) {
          if (id.includes('node_modules/.pnpm/')) {
            // Splits each package in node_modules into its own chunk.
            return id.toString().split('node_modules/.pnpm/')[1].split('/')[0];
          }

          if (id.includes('node_modules/')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }

          if (id.includes('/src/components/ui')) {
            return 'ui';
          }
        }
      }
    }
  }
})
