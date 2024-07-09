import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@styles': path.resolve(__dirname, './src/assets/styles/'),
      '@components': path.resolve(__dirname, './src/components/')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/main.scss";`
      }
    }
  }
})
