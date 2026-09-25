/**
 * Capa. Fica centrada: nome, contatos, botão Sobre mim e os quatro projetos.
 * O texto vem de conteudo.ts. Aqui só está a ordem visual.
 */
import { Link } from 'react-router-dom'
import { contato, projetos } from '../data/conteudo.ts'

export function Inicio() {
  return (
    <section className="hero" id="inicio">
       <header className="ed-head">
      <p className="kicker">Divisa Alegre, MG · IFBA · 3º semestre</p>
      <h1>
        João Pedro
        <br />
        Campos Rocha
      </h1>
      <p className="role">Desenvolvimento Web (Full Stack/Front-End/Back-End), Suporte Técnico N1/N2 ou Operações de TI.</p>
      <hr className="rule letter" />
      <p className="line">Código no lugar. Suporte que entrega.</p>
      <p className="bio">
        Estudante do 3º semestre de Sistemas de Informação no IFBA. Três anos de
        suporte, manutenção e gestão do próprio negócio. Busco oportunidades de Estágio 
        ou nível Júnior nas áreas de Desenvolvimento Web (Full Stack/Front-End/Back-End), Suporte Técnico N1/N2 ou Operações de TI.
      </p>

      <div className="contacts">
        <a href={`mailto:${contato.email}`}>{contato.email}</a>
        <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer">
          {contato.telefone}
        </a>
        <a href={contato.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={contato.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <Link className="sobre-btn" to="/sobre">
        Sobre mim
      </Link>

      <div className="works" aria-label="Projetos">
        {projetos.map((projeto, indice) => (
          <article
            className="pcard"
            key={projeto.slug}
            style={{ animationDelay: `${0.12 + indice * 0.08}s` }}
          >
            <img src={projeto.imagem} alt={projeto.alt} />
            <p className="idx">{projeto.numero}</p>
            <h2>{projeto.nome}</h2>
            <p>{projeto.resumo}</p>
            <Link className="go" to={`/${projeto.slug}`}>
              Ver página
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
