import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Servidor de desenvolvimento.
// host 0.0.0.0 deixa o preview abrir fora desta máquina.
// allowedHosts aceita o domínio do preview, senão o Vite recusa a página.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
    allowedHosts: true,
  },
})
