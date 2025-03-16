import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess({}), 
    mdsvex({
      extensions: ['.svx'], 
      layout: {
        _ : "src/layouts/default-layout.svelte",
        project : "src/layouts/project-layout.svelte",
      }})],
    kit: {
        adapter: adapter({})
      }
}
