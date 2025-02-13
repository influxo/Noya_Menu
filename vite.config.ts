import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
  ],
  base: '/', // or './' if deployed in a subdirectory
  build: {
    outDir: 'dist'
  }
})
