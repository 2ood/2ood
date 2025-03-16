import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import dotenv from 'dotenv'
import vercel from 'vite-plugin-vercel'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),routify({/* config */}), vercel()],
})
