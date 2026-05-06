import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se o './' não funcionou, vamos usar o nome exato do seu repositório.
  // Vi no seu terminal que a pasta se chama 'meu_site'. 
  // Se o nome do seu repositório no GitHub for diferente, substitua 'meu_site' abaixo.
  base: '/BrunoW/',
})