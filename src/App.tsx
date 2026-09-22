/**
 * Rotas do site.
 * /                 capa
 * /sobre            página pessoal
 * /:slug            um projeto (oficina, cybernode, transporte, newtech)
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { Inicio } from './pages/Inicio.tsx'
import { Projeto } from './pages/Projeto.tsx'
import { Sobre } from './pages/Sobre.tsx'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path=":slug" element={<Projeto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
