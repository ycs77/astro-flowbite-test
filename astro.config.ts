import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'http://localhost:4321',
  output: 'server',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
})
