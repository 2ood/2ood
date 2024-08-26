import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess({}), 
    mdsvex({ 
      extensions: ['.svx'], 
      layout: {
        project : "./src/layouts/project-layout.svelte",
        _:"./src/layouts/default-layout.svelte",
      } 
    })]
}
