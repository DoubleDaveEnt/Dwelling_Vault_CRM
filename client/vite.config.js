import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use the repo name as base when running in GitHub Actions / Pages
const ghBase = '/Dwelling_Vault_CRM/'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? ghBase : '/', // '/' for local dev, GH base for Pages
  server: { port: 5173 },
})
