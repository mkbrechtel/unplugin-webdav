import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import webdav from '../../src/plugins/vite'

export default defineConfig({
  plugins: [
    inspect(),
    webdav({
    }),
  ],
})
