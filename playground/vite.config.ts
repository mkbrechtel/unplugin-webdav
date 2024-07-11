import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Webdav from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Webdav(),
  ],
})
