/**
 * Ponto de entrada. Monta o React na div #root e carrega o CSS.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './styles/global.css'

const raiz = document.getElementById('root')
if (!raiz) {
  throw new Error('Não achei o elemento #root no index.html')
}

createRoot(raiz).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
