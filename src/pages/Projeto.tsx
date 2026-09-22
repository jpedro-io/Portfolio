/**
 * Página de um projeto. O endereço (/oficina, /cybernode…) escolhe o texto.
 * No fim ficam dois botões: o site publicado e o repositório.
 * O repositório só vira link quando `repositorio` deixa de ser null em conteudo.ts.
 */
import { Link, useParams } from 'react-router-dom'
import { projetoPorSlug } from '../data/conteudo.ts'

export function Projeto() {
  const { slug } = useParams()
  const projeto = projetoPorSlug(slug)

  if (!projeto) {
    return (
      <article className="edition page-pad">
        <header className="ed-head">
          <h2>Página não encontrada</h2>
          <p className="en">Esse endereço não corresponde a um projeto.</p>
        </header>
        <p className="links">
          <Link to="/">Voltar ao início</Link>
        </p>
      </article>
    )
  }

  return (
    <article className="edition page-pad">
      <header className="ed-head">
        <h2>{projeto.nome}</h2>
        <p className="en">{projeto.linha}</p>
        <p className="restrict">{projeto.contexto}</p>
        <p className="tags">{projeto.tags}</p>
      </header>

      <figure className="shot">
        <img src={projeto.imagem} alt={projeto.alt} />
      </figure>

      <div className="reading">
        {projeto.secoes.map((secao) => (
          <section key={secao.titulo}>
            <h3>{secao.titulo}</h3>
            {secao.blocos.map((bloco) => (
              <p key={bloco.texto}>
                {bloco.destaque ? <b>{bloco.destaque}</b> : null}
                {bloco.texto}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="end-actions">
        <a className="btn" href={projeto.link} target="_blank" rel="noopener noreferrer">
          Ver o projeto
        </a>
        {projeto.repositorio ? (
          <a
            className="btn btn-repo"
            href={projeto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </a>
        ) : (
          <button type="button" className="btn" disabled title="Link do repositório em seguida">
            Repositório
          </button>
        )}
      </div>
    </article>
  )
}
