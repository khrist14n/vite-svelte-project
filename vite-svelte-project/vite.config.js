import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/vite-svelte-project/',
  plugins: [
    svelte({
      /* plugin options */
    })
  ]
});