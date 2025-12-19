import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  alias: {
    '@components': './src/components',
    '@styles': './src/styles',
    '@data': './src/data',
    '@layouts': './src/layouts'
  },
  server: {
    port: 4321
  }
})
