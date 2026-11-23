import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { globSync } from 'node:fs'

const htmlFiles = [
  ...globSync('*.html'),
  ...globSync('robots/*.html'),
  ...globSync('outreach/*.html'),
]

export default defineConfig({
  base: '/TDU-Website/',

  build: {
    rollupOptions: {
      input: htmlFiles.map(file => resolve(process.cwd(), file)),
    },
  },
})