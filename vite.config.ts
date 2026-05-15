import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (ou vue, svelte, selon ton framework)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Cette fonction sépare automatiquement les packages node_modules en fichiers distincts
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (ou vue, svelte, selon ton framework)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Cette fonction sépare automatiquement les packages node_modules en fichiers distincts
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})