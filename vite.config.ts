import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/games-js/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
      }
    }
  }
})
