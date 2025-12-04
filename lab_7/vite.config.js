import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**', 'tests/components/**'],
    exclude: ['tests/e2e/**'],
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
