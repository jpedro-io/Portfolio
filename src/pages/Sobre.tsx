/**
 * Página pessoal. Experiência, formação e cursos do currículo.
 * Não é a capa: o nome já está no cabeçalho, então aqui o título é "Sobre mim".
 */
import { Link } from 'react-router-dom'
import { contato, sobre } from '../data/conteudo.ts'

export function Sobre() {
  return (
    <article className="edition page-pad">
      <header className="ed-head">
        <h2>Sobre mim</h2>
        <p className="en">{sobre.local}</p>
      </header>

      <div className="reading">
        <h3>Resumo</h3>
        <p>{sobre.resumo}</p>

        <h3>Experiência</h3>
        <ul className="jobs">
          {sobre.experiencias.map((item) => (
            <li key={item.cargo}>
              <div className="job-top">
                <b>{item.cargo}</b>
                <span>{item.periodo}</span>
              </div>
              <em>{item.lugar}</em>
              <p>{item.texto}</p>
            </li>
          ))}
        </ul>

        <h3>Formação</h3>
        <ul className="jobs">
          {sobre.formacao.map((item) => (
            <li key={item.curso}>
              <div className="job-top">
                <b>{item.curso}</b>
                <span>{item.estado}</span>
              </div>
              <em>{item.lugar}</em>
            </li>
          ))}
        </ul>

        <h3>Habilidades</h3>
        {sobre.habilidades.map(([rotulo, valor]) => (
          <div className="skill-row" key={rotulo}>
            <span>{rotulo}</span>
            <span>{valor}</span>
          </div>
        ))}

        <h3>Idiomas</h3>
        <p>{sobre.idiomas}</p>

        <p className="links">
          <Link to="/">Início</Link>
          <a href={`mailto:${contato.email}`}>E-mail</a>
          <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </p>
      </div>
    </article>
  )
}
