import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione a linha abaixo. 
  // O './' garante que o site encontre os arquivos em qualquer subpasta (como no GitHub Pages)
  base: './',
})