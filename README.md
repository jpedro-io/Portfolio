# Portfólio — João Pedro Campos Rocha

Esta pasta é o projeto inteiro. Dá para baixar, abrir no editor e alterar.

As páginas HTML antigas ficaram de fora, na pasta `portfolio`. Este aqui é o site em React, TypeScript e Vite.

## Abrir no computador

Na pasta do projeto:

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## O que editar

| Arquivo | Para quê |
| --- | --- |
| `src/data/conteudo.ts` | Nomes, textos, contatos e links |
| `src/pages/Inicio.tsx` | Capa |
| `src/pages/Sobre.tsx` | Página Sobre mim |
| `src/pages/Projeto.tsx` | Página de cada projeto |
| `src/components/Layout.tsx` | Menu e cabeçalho |
| `src/styles/global.css` | Animações |
| `src/styles/site.css` | Visual (cores, tipo, menu) |
| `public/img/` | Fotos dos projetos |

## Repositórios

Em `src/data/conteudo.ts`, cada projeto tem `repositorio: null`. Quando o link existir, troque o `null` pela URL. O botão **Repositório** passa a funcionar.
