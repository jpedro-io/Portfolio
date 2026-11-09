/**
 * Todo o texto do site fica neste arquivo.
 * Para mudar um nome, uma frase ou um link, edite aqui — não nas páginas.
 * Os comentários marcam o que cada campo faz.
 */

/** Contatos que aparecem na capa e no rodapé do menu. */
export const contato = {
  email: 'jprocha.tech@gmail.com',
  telefone: '(33) 99847-8236',
  whatsapp: 'https://wa.me/5533998478236',
  github: 'https://github.com/jpedro-io',
  githubRotulo: 'github.com/jpedro-io',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-c-rocha-98ab7b3b5',
} as const

/** Um parágrafo de um projeto. `destaque` vira o negrito do começo da frase. */
export type Bloco = {
  destaque?: string
  texto: string
}

/** Um projeto do portfólio. O `slug` vira o endereço da página, ex.: /oficina */
export type Projeto = {
  slug: string
  numero: string
  nome: string
  /** Frase curta do card na capa. */
  resumo: string
  imagem: string
  alt: string
  /** Linha em itálico, abaixo do título. */
  linha: string
  /** Contexto: disciplina, cidade, o que o site é. */
  contexto: string
  tags: string
  secoes: { titulo: string; blocos: Bloco[] }[]
  /** Site publicado. Abre em outra aba. */
  link: string
  /** Outros endereços do mesmo projeto (viram botões extras). Opcional. */
  links?: { rotulo: string; url: string }[]
  /** Fotos extras mostradas abaixo da principal. Opcional. */
  galeria?: { src: string; alt: string }[]
  /**
   * Repositório. Deixe `null` enquanto o link não existir.
   * Quando tiver o endereço, troque null pela URL, por exemplo:
   * repositorio: 'https://github.com/jpedro-io/Oficina-Luciano'
   */
  repositorio: string | null
}

export const projetos: Projeto[] = [
  {
    slug: 'gestaotech',
    numero: '01',
    nome: 'Gestão Tech — Portal de Certificados',
    resumo:
      'Certificados das oficinas do IFBA emitidos e validados por QR Code, em Django e PostgreSQL, no ar.',
    imagem: '/img/gestaotech.jpg',
    alt: 'Tela do portal de certificados Gestão Tech, com a validação por QR Code',
    linha: 'O certificado sai na hora, e qualquer pessoa confere se é verdadeiro.',
    contexto: 'Projeto Gestão Tech, Bacharelado em Sistemas de Informação, IFBA Campus Vitória da Conquista.',
    tags: 'Django 5 · PostgreSQL · Docker · GitHub Actions',
    secoes: [
      {
        titulo: 'O projeto',
        blocos: [
          {
            texto:
              'O projeto Gestão Tech reúne as oficinas oferecidas pelo curso de Sistemas de Informação do IFBA, em Vitória da Conquista. No fim de cada oficina, alguém precisava emitir os certificados: abrir o modelo, trocar nome, CPF, carga horária e data, exportar e enviar. Um por um.',
          },
          {
            texto:
              'O portal faz isso sozinho. O participante informa nome, CPF e de qual oficina participou. O sistema localiza o registro e entrega o PDF pronto para impressão, com código de validação e QR Code. Não precisa de conta, senha ou instalação, e funciona no celular.',
          },
          {
            texto:
              'A outra metade do problema é a confiança. Quem recebe um certificado pode digitar o código — ou ler o QR — e ver na hora se ele é válido, cancelado ou inexistente. A conferência é pública, mas nunca mostra CPF nem a lista de participantes.',
          },
        ],
      },
      {
        titulo: 'Como funciona',
        blocos: [
          {
            destaque: 'PDF gerado na hora.',
            texto:
              ' O modelo em DOCX recebe as tags de nome, CPF, oficina, código, data e URL de validação, é convertido pelo LibreOffice e volta como uma página A4 em paisagem. O arquivo não fica guardado em lugar nenhum: é montado no momento do download.',
          },
          {
            destaque: 'CPF que não fica no banco.',
            texto:
              ' O número completo não é gravado. Ficam só um hash SHA-256 com chave secreta do servidor, usado para localizar o certificado, e os seis dígitos do meio, para exibir ***.123.456-**. Quem precisa do CPF original não encontra nada no banco.',
          },
          {
            destaque: 'Link de download assinado.',
            texto:
              ' O endereço que entrega o arquivo vale por dez minutos. Fora desse prazo, expira. Assim um link compartilhado por engano não vira porta aberta.',
          },
          {
            destaque: 'Carga em lote, sem duplicar.',
            texto:
              ' Os participantes entram por CSV, e rodar a mesma planilha duas vezes atualiza o registro em vez de criar outro. Oficina ou pessoa nova aparece no site na hora, sem publicar versão nova do sistema.',
          },
        ],
      },
      {
        titulo: 'Tecnologias',
        blocos: [
          {
            texto:
              'No servidor, Python com Django 5 e PostgreSQL, servido por Gunicorn atrás do WhiteNoise para os arquivos estáticos. O ambiente é declarado em Docker, com LibreOffice e as fontes do certificado instaladas na imagem. O deploy roda no Fly.io por GitHub Actions, com as migrações aplicadas a cada publicação.',
          },
          {
            texto:
              'O projeto tem rate limiting na busca, para ninguém varrer CPFs, e separação entre o que é público (validação) e o que é restrito (o admin do Django, onde a equipe cadastra oficinas e participações).',
          },
        ],
      },
    ],
    link: 'https://gestao-tech.fly.dev/',
    repositorio: 'https://github.com/jpedro-io/gestaotech',
  },
  {
    slug: 'workspace-integrado',
    numero: '02',
    nome: 'Workspace Integrado — Inscrições e Materiais',
    resumo:
      'Formulário de inscrição com CPF único e banco de dados, mais o site de materiais da oficina, no ar.',
    imagem: '/img/oficina-materiais.jpg',
    alt: 'Site de materiais da oficina Workspace Integrado, com o card de divulgação e o menu Início, Blocos, Materiais e Avaliação',
    linha: 'Duas páginas que fizeram uma oficina funcionar sem planilha no meio.',
    contexto:
      'Oficina Workspace Integrado, da disciplina Organização, Sistemas e Métodos — estudantes de Sistemas de Informação do IFBA para estudantes da UESB, em Vitória da Conquista.',
    tags: 'TypeScript · PostgreSQL (Neon) · Serverless · HTML/CSS/JS',
    secoes: [
      {
        titulo: 'O projeto',
        blocos: [
          {
            texto:
              'A oficina "Workspace Integrado: Organizando Projetos e Alinhando Negócios com o Notion" ensina, na prática, como documentar processos, montar quadro de tarefas e dividir o mesmo workspace. É trabalho da disciplina Organização, Sistemas e Métodos, feito por alunos de Sistemas de Informação do IFBA para alunos da UESB.',
          },
          {
            texto:
              'O que precisava ser resolvido era o operacional: receber as inscrições sem depender de planilha compartilhada, e entregar o material sem mandar anexo por e-mail. Virou um par de páginas — uma que coleta e guarda as inscrições, outra que reúne o conteúdo da oficina.',
          },
        ],
      },
      {
        titulo: 'A inscrição',
        blocos: [
          {
            destaque: 'CPF conferido de verdade.',
            texto:
              ' O navegador valida o formato e a API valida outra vez, com o cálculo dos dois dígitos verificadores. Sequências como 111.111.111-11 são recusadas. Validar só no cliente deixaria a porta aberta para qualquer requisição direta.',
          },
          {
            destaque: 'Uma resposta por CPF.',
            texto:
              ' A restrição está no banco, não no JavaScript: coluna única e inserção com "on conflict do nothing". Se o CPF já existe, a resposta volta 409 e a pessoa lê que a inscrição já foi registrada, em vez de criar duplicata.',
          },
          {
            destaque: 'Limite de tentativas sem guardar IP.',
            texto:
              ' Cada tentativa entra numa tabela de janela de um minuto, indexada por um HMAC-SHA256 do endereço — o IP em si não é gravado. Passando do limite, a API responde 429. Uma rotina diária na Vercel limpa as janelas antigas.',
          },
          {
            destaque: 'Erro que não vaza o banco.',
            texto:
              ' Falha de validação tem mensagem própria; qualquer erro interno devolve texto genérico. Nenhum detalhe de SQL ou de conexão chega à tela — e nenhum dado do inscrito aparece na resposta.',
          },
        ],
      },
      {
        titulo: 'Os materiais',
        blocos: [
          {
            texto:
              'Página única, estática, com a mesma identidade do formulário. Os dez blocos da oficina aparecem como cartões que abrem no próprio site, com o resumo escrito a partir do Notion: o objetivo do bloco, o que acontece na sala e o que fica de entregável. As páginas internas do Notion não são expostas.',
          },
          {
            texto:
              'Tem barra de progresso de leitura, cabeçalho que muda ao rolar, entrada em sequência dos blocos e fundo em camadas desfocadas. Tudo respeita "prefers-reduced-motion": quem pediu menos animação no sistema recebe a página parada, sem prejuízo de leitura.',
          },
          {
            texto:
              'Os materiais da prática guiada ficam para download na própria página, e a avaliação da oficina aponta para um formulário externo. Nenhum arquivo depende de link que expira.',
          },
        ],
      },
      {
        titulo: 'Tecnologias',
        blocos: [
          {
            texto:
              'O site de materiais é HTML, CSS e JavaScript sem framework, com revelação por IntersectionObserver. O formulário é HTML e CSS com as rotas de API escritas em TypeScript, publicadas como funções serverless na Vercel, gravando em PostgreSQL no Neon pelo driver serverless.',
          },
          {
            texto:
              'As duas páginas saem com CSP restritiva, nosniff, Referrer-Policy e Permissions-Policy desligando câmera, microfone e geolocalização — cabeçalhos declarados no vercel.json, não em configuração de painel.',
          },
        ],
      },
    ],
    link: 'https://materiaisosm.vercel.app/',
    links: [
      { rotulo: 'Formulário de inscrição', url: 'https://forms-oficina.vercel.app/' },
    ],
    repositorio: 'https://github.com/jpedro-io/MateriaisOsm',
    galeria: [
      {
        src: '/img/oficina-form.jpg',
        alt: 'Formulário de inscrição da oficina Workspace Integrado, com os campos de nome, e-mail, CPF e celular',
      },
    ],
  },
  {
    slug: 'transporte',
    numero: '03',
    nome: 'Transporte Universitário - Divisa Alegre (MG)',
    resumo:
      'Portal da comissão de transporte para Vitória da Conquista. Clima, regras e o guia das universidades.',
    imagem: '/img/universitarios.jpg',
    alt: 'Tela do Transporte Universitário de Divisa Alegre',
    linha: 'Informação do transporte, no celular, antes de sair.',
    contexto: 'Comissão de Transporte de Divisa Alegre (MG) para Vitória da Conquista (BA).',
    tags: 'Projeto pessoal · HTML · CSS · JavaScript · Node.js · Open-Meteo',
    secoes: [
      {
        titulo: 'O projeto',
        blocos: [
          {
            texto:
              'Site oficial da Comissão de Transporte dos Universitários de Divisa Alegre (MG) para Vitória da Conquista (BA). O portal é leve e rápido de propósito: o estudante abre e encontra o essencial do transporte, sem depender de recado espalhado.',
          },
          {
            texto:
              'A página junta o que a rotina pede antes da saída. Clima no destino, ordem da lista, endereço da universidade e o manual ficam no mesmo lugar, com navegação direta.',
          },
        ],
      },
      {
        titulo: 'Funcionalidades',
        blocos: [
          {
            destaque: 'Previsão do tempo.',
            texto:
              ' Consulta em tempo real das condições em Vitória da Conquista. Os dados vêm do Open-Meteo, gratuito e sem chave.',
          },
          {
            destaque: 'Regras e critérios.',
            texto:
              ' A ordem de prioridade da lista e os horários de saída estão escritos na página. Quem vai embarcar lê a regra no mesmo lugar em que decide a viagem.',
          },
          {
            destaque: 'Guia de universidades.',
            texto:
              ' Endereços e detalhes das instituições atendidas, para quem sai de Divisa Alegre e precisa saber onde chega.',
          },
          {
            destaque: 'Manual dos universitários.',
            texto:
              ' Ferramentas de produtividade, plataformas de estudo com certificado e declarações úteis, reunidas para a rotina acadêmica.',
          },
        ],
      },
      {
        titulo: 'Tecnologias',
        blocos: [
          {
            texto:
              'O projeto prioriza desempenho e simplicidade, sem dependência externa pesada. No navegador, HTML5, CSS3 e JavaScript puro. No servidor, Node.js com node:http, sem um framework como o Express. O clima entra pela Open-Meteo. A hospedagem é na Vercel.',
          },
          {
            texto:
              'A escolha deixa o site fácil de abrir e fácil de manter. A informação da comissão aparece direto, sem uma camada a mais entre o estudante e o que ele veio consultar.',
          },
        ],
      },
    ],
    link: 'https://site-universitarios.vercel.app/',
    repositorio: 'https://github.com/jpedro-io/Site-Universitarios-DivisaAlegre',
  },
  {
    slug: 'oficina',
    numero: '04',
    nome: 'Oficina Luciano - Sistema de Gestão',
    resumo:
      'Gestão da oficina, do recebimento do veículo à entrega. Trabalho de Administração no IFBA.',
    imagem: '/img/oficina.jpg',
    alt: 'Tela de ordens de serviço da Oficina Luciano',
    linha: 'Do recebimento do veículo à entrega.',
    contexto: 'Administração, 2º semestre, Sistemas de Informação, IFBA Vitória da Conquista.',
    tags: 'React · Vite · TypeScript',
    secoes: [
      {
        titulo: 'O projeto',
        blocos: [
          {
            texto:
              'O sistema foi feito para a parte administrativa e o atendimento ao cliente da oficina mecânica. O fluxo começa no recebimento do veículo e segue até a entrega, com o registro no meio para a equipe não depender da memória do balcão.',
          },
          {
            texto:
              'O objetivo é organizar o serviço e ganhar agilidade no dia. É trabalho da disciplina de Administração, no 2º semestre de Sistemas de Informação do IFBA, campus Vitória da Conquista.',
          },
        ],
      },
      {
        titulo: 'Funcionalidades',
        blocos: [
          {
            destaque: 'Gestão de atendimento.',
            texto:
              ' Cada veículo que entra fica registrado, junto com o serviço pedido. A ordem não se perde entre o balcão e a oficina.',
          },
          {
            destaque: 'Histórico de manutenção.',
            texto:
              ' O que já foi feito em cada veículo permanece no sistema. Na visita seguinte, a equipe vê o caminho do carro, não só o pedido do dia.',
          },
          {
            destaque: 'Interface intuitiva.',
            texto:
              ' A tela foi pensada para quem usa no balcão. Menos passo e menos dúvida, para o tempo ir para o serviço.',
          },
        ],
      },
      {
        titulo: 'Tecnologias',
        blocos: [
          {
            texto:
              'A interface usa React com Vite, para abrir rápido e acompanhar a tela do computador da oficina e a do celular. O TypeScript entra para o código ficar mais seguro e mais fácil de manter quando o fluxo cresce.',
          },
        ],
      },
    ],
    link: 'https://oficina-luciano-w4au.vercel.app/',
    repositorio: 'https://github.com/jpedro-io/Oficina-Luciano',
  },
  {
    slug: 'cybernode',
    numero: '05',
    nome: 'CyberNode: Invasão de Rede',
    resumo: 'Jogo de invasão de rede. O jogador avança pelos nós e aplica Teoria dos Grafos.',
    imagem: '/img/cybernode.jpg',
    alt: 'Tela do jogo CyberNode: Invasão de Rede',
    linha: 'Só se avança para o nó vizinho.',
    contexto: 'Matemática Discreta II, Sistemas de Informação, Instituto Federal da Bahia.',
    tags: 'TypeScript · HTML · CSS',
    secoes: [
      {
        titulo: 'O jogo',
        blocos: [
          {
            texto:
              'O CyberNode é um jogo de estratégia na web, com tema de cyberpunk e de invasão. O jogador entra numa infraestrutura de rede simulada, caminha pelos nós e administra os recursos até quebrar as defesas do sistema.',
          },
          {
            texto:
              'A rede é o tabuleiro. Cada avanço é uma escolha de caminho, não um texto explicando o grafo ao lado da tela.',
          },
        ],
      },
      {
        titulo: 'Contexto acadêmico',
        blocos: [
          {
            texto:
              'O jogo é o trabalho prático de Matemática Discreta II, no curso de Sistemas de Informação do Instituto Federal da Bahia. A proposta é tirar a Teoria dos Grafos do quadro e colocar dentro de uma simulação que se joga.',
          },
        ],
      },
      {
        titulo: 'Aplicação dos conceitos',
        blocos: [
          {
            destaque: 'Vértices e arestas.',
            texto:
              ' A rede é um grafo. Cada servidor ou máquina é um vértice, um nó. Cada caminho entre eles, físico ou lógico, é uma aresta.',
          },
          {
            destaque: 'Caminhamento e adjacência.',
            texto:
              ' Para avançar, o jogador só se move para um nó vizinho, ligado ao atual. O resto do mapa existe, mas não se alcança daqui. É a propagação de uma invasão em sistemas interligados.',
          },
          {
            destaque: 'Algoritmos de busca.',
            texto:
              ' A geração e a validação dos caminhos usam busca e conectividade em grafos. O mapa precisa continuar desafiador e, ao mesmo tempo, solucionável. Um beco sem saída quebraria o jogo.',
          },
        ],
      },
    ],
    link: 'https://jpedro-io.github.io/CyberNodeGame/',
    repositorio: 'https://github.com/jpedro-io/CyberNodeGame',
  },
  {
    slug: 'newtech',
    numero: '06',
    nome: 'Site New Tech',
    resumo: 'Site da empresa para apresentar as soluções e as tecnologias da New Tech.',
    imagem: '/img/newtech.jpg',
    alt: 'Tela inicial do site New Tech',
    linha: 'As soluções da empresa, numa página.',
    contexto: 'Site feito para apresentar o ofício da New Tech, no computador e no celular.',
    tags: 'HTML5 · CSS3 · JavaScript',
    secoes: [
      {
        titulo: 'O site',
        blocos: [
          {
            texto:
              'O Site New Tech apresenta as soluções e as tecnologias da empresa. Quem chega entende o ofício e encontra o caminho do contato, sem precisar de uma segunda página para saber do que se trata.',
          },
        ],
      },
      {
        titulo: 'Funcionalidades',
        blocos: [
          {
            destaque: 'Desenho e uso.',
            texto:
              ' O visual é moderno e pensado em quem abre a página. A leitura vem primeiro. O caminho até o serviço não compete com o enfeite.',
          },
          {
            destaque: 'Responsivo.',
            texto:
              ' O mesmo site funciona no computador e no celular. Não há uma versão à parte: o layout acompanha a tela.',
          },
          {
            destaque: 'Código organizado.',
            texto:
              ' O projeto está versionado. Cada mudança fica registrada, e a página publicada acompanha esse histórico.',
          },
        ],
      },
      {
        titulo: 'Tecnologias',
        blocos: [
          {
            texto:
              'HTML5 dá a estrutura semântica. CSS3 cuida da estilização, do layout e do desenho que se adapta à tela. JavaScript entra na interatividade e nos efeitos de animação. Git e GitHub guardam o histórico e a hospedagem do site.',
          },
        ],
      },
    ],
    link: 'https://jpedro-io.github.io/Site-New-Tech/',
    repositorio: 'https://github.com/jpedro-io/Site-New-Tech',
  },
]

/** Acha o projeto pelo pedaço final do endereço. Usado na página do projeto. */
export function projetoPorSlug(slug: string | undefined): Projeto | undefined {
  return projetos.find((item) => item.slug === slug)
}

export type Experiencia = {
  cargo: string
  periodo: string
  lugar: string
  texto: string
}

/** Dados da página Sobre mim, na ordem em que aparecem. */
export const sobre = {
  local: 'Divisa Alegre, MG · IFBA, Campus Vitória da Conquista · 3º semestre',
  resumo:
    'Estudante do 3º semestre de Sistemas de Informação (IFBA), com 3+ anos de experiência prática em suporte técnico, manutenção de hardware/software e gestão de projetos. Possui base em desenvolvimento Web Full Stack (Java, Python, JavaScript, TypeScript, HTML/CSS) e histórico comprovado em resolução de problemas e atendimento ao cliente. Busca oportunidades de Estágio ou nível Júnior nas áreas de Desenvolvimento Web (Full Stack/Front-End/Back-End), Suporte Técnico N1/N2 ou Operações de TI.',

  formacao: [
    {
      curso: 'Bacharelado em Sistemas de Informação',
      estado: 'em curso',
      lugar: 'Instituto Federal da Bahia · 3º semestre',
    },
    {
      curso: 'Ensino médio',
      estado: 'concluído',
      lugar: 'Escola Estadual de Divisa Alegre',
    },
  ],

  habilidades: [
    ['Linguagens', 'Python, Java, JavaScript, TypeScript, SQL, HTML5, CSS3'],
    ['Back-end', 'Django 5, Node.js (HTTP nativo), PostgreSQL, APIs REST, POO, JavaFX'],
    ['Front-end', 'React, Tailwind, Vite, design responsivo, acessibilidade'],
    ['Infra e versão', 'Docker, GitHub Actions (CI/CD), Gunicorn, Vercel, Git/GitHub, Linux'],
    ['Suporte', 'Hardware, suporte N1, diagnóstico, redes básico'],
    ['Competências', 'Comunicação assertiva, equipe, autonomia, aprendizagem rápida, resiliência'],
  ],

  experiencias: [
    {
      cargo: 'Fundador e prestador de serviços técnicos',
      periodo: '03/2022 — atual',
      lugar: 'New Tech Serviços Tecnológicos · negócio próprio',
      texto: 'Suporte e manutenção de hardware e software para clientes da cidade: diagnóstico, atendimento consultivo e solução sob medida. Operação autônoma há mais de três anos — agenda, preço e relacionamento. Cerca de R$ 1.300 por mês.',
    },
    {
      cargo: 'Coordenador de comunicação digital',
      periodo: '08/2024 — 10/2024',
      lugar: 'Projeto de curta duração · contrato temporário',
      texto: 'Equipe e fluxo de comunicação digital em projeto de prazo fixo. Dez pessoas, redes sociais e cronograma curto.',
    },
    {
      cargo: 'Gestor de redes sociais',
      periodo: '10/2022 — 02/2023',
      lugar: 'Café Sítio Pedra Roxa',
      texto: 'Presença digital do café: conteúdo, calendário editorial e conversa direta com o cliente. Parcerias de revenda, inclusive no Rio de Janeiro.',
    },
    {
      cargo: 'Recepcionista',
      periodo: '02/2020 — 05/2020',
      lugar: 'Clínica de Cardiologia',
      texto: 'Rotina administrativa em clínica de alto volume. Dez a vinte pacientes por dia: triagem, agendamento e suporte direto.',
    },
  ] satisfies Experiencia[],

  idiomas: 'Português, nativo. Inglês intermediário: leitura técnica e conversação básica.',
}
