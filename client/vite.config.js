// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Dwelling_Vault_CRM/',   // 👈 important for GitHub Pages
  server: { port: 5173 },
  build: { outDir: 'dist' }
})
