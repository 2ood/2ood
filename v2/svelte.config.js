import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess({extensions: ['.svelte'], }), 
    mdsvex({
      extensions: ['.svx'], 
      layout: {
        _ : "src/layouts/default-layout.svelte",
        project : "src/layouts/project-layout.svelte",
      }})]
}
