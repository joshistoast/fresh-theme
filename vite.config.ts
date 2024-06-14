import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: 'src/styles.css',
      output: {
        dir: 'assets',
        assetFileNames: '[name][extname]',
      }
    }
  }
})
