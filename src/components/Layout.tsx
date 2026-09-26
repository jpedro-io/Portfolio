/**
 * Moldura de todas as páginas: barra de leitura, botão Menu e a gaveta.
 * O nome no topo só entra nas páginas internas. A capa já tem o nome grande.
 */
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { contato, projetos } from '../data/conteudo.ts'

export function Layout() {
  const [aberto, setAberto] = useState(false)
  const fecharRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLButtonElement>(null)
  const gavetaId = useId()
  const { pathname } = useLocation()

  // Define que o nome só aparece se NÃO estiver na página inicial ('/')
  const mostrarNome = pathname !== '/'

  // Fecha o menu ao trocar de página, para a gaveta não ficar aberta por cima do texto.
  useEffect(() => {
    setAberto(false)
  }, [pathname])

  // Barra fina no topo: cresce conforme a pessoa desce a página.
  useEffect(() => {
    const barra = document.querySelector<HTMLElement>('.readbar')
    if (!barra) return
    const atualizar = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      barra.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`
    }
    atualizar()
    document.addEventListener('scroll', atualizar, { passive: true })
    return () => document.removeEventListener('scroll', atualizar)
  }, [pathname])

  // Esc fecha. Tab fica preso dentro da gaveta enquanto ela está aberta.
  useEffect(() => {
    if (!aberto) return
    fecharRef.current?.focus()
    const noTeclado = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        setAberto(false)
        menuRef.current?.focus()
        return
      }
      if (evento.key !== 'Tab') return
      const gaveta = document.getElementById(gavetaId)
      const itens = gaveta?.querySelectorAll<HTMLElement>('a, button')
      if (!itens || itens.length === 0) return
      const primeiro = itens[0]
      const ultimo = itens[itens.length - 1]
      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault()
        ultimo.focus()
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault()
        primeiro.focus()
      }
    }
    document.addEventListener('keydown', noTeclado)
    return () => document.removeEventListener('keydown', noTeclado)
  }, [aberto, gavetaId])

  // Trava a rolagem do fundo enquanto o menu cobre a tela.
  useEffect(() => {
    document.body.classList.toggle('menu-open', aberto)
    return () => document.body.classList.remove('menu-open')
  }, [aberto])

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div className="readbar" aria-hidden="true" />

      <header className="top">
        <div className={mostrarNome ? 'top-in top-com-nome' : 'top-in'}>
          <button
            ref={menuRef}
            type="button"
            className="menu-btn"
            aria-expanded={aberto}
            aria-controls={gavetaId}
            onClick={() => setAberto((valor) => !valor)}
          >
            Menu
          </button>

          {mostrarNome ? (
            <Link className="who" to="/">
              <span className="who-name">
                <strong>João Pedro</strong>
                <br />
                <strong>Campos Rocha</strong>
              </span>
              <span className="who-role">Desenvolvedor web júnior / estágio</span>
            </Link>
          ) : (
            <span />
          )}
          <span />
        </div>
      </header>

      <div
        className="scrim"
        hidden={!aberto}
        onClick={() => setAberto(false)}
      />

      <aside
        className="drawer"
        id={gavetaId}
        aria-hidden={!aberto}
        inert={!aberto}
      >
        <div className="drawer-head">
          <span>Campos Rocha</span>
          <button
            ref={fecharRef}
            type="button"
            className="close-btn"
            onClick={() => {
              setAberto(false)
              menuRef.current?.focus()
            }}
          >
            Fechar
          </button>
        </div>

        <nav aria-label="Páginas">
          <NavLink to="/" end>
            <span /> Início
          </NavLink>
          <NavLink to="/sobre">
            <span /> Sobre mim
          </NavLink>
          {projetos.map((projeto) => (
            <NavLink key={projeto.slug} to={`/${projeto.slug}`}>
              <span>{projeto.numero}</span>
              <span className="nome">{projeto.nome}</span>
            </NavLink>
          ))}
        </nav>

        <div className="drawer-contact">
          <p>Contato</p>
          <a href={`mailto:${contato.email}`}>{contato.email}</a>
          <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
            +55 33 99847-8236
          </a>
          <a href={contato.github} target="_blank" rel="noopener noreferrer">
            {contato.githubRotulo}
          </a>
          <a href={contato.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </aside>

      {/* key força a animação de entrada toda vez que a rota muda */}
      <main className="shell page-enter" id="conteudo" key={pathname}>
        <Outlet />
        <p className="foot">João Pedro Campos Rocha · Divisa Alegre · 2026</p>
      </main>
    </>
  )
}
