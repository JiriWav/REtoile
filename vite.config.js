import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/REtoile/",
  plugins: [svelte()],
  build: {
    outDir: 'docs'  // Change 'public' à 'docs'
  }
})
