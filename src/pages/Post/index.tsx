import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { PostInfo } from './components/PostInfo'

import { PostContainer, PostContentContainer } from './styles'

const markdown =
  '**As principais lições e dicas compiladas para quem está começando na programação ou migrando para a área.**\r\n\r\n*Texto por Camila Coelho\r\n\r\nHoje devs são peças fundamentais de todo negócio, estão nas startups e nas pequenas e médias empresas que buscam soluções tecnológicas para seus produtos e serviços.\r\n\r\nEm uma busca rápida, é possível encontrar centenas de notícias e pesquisas que apontam a falta de mão de obra qualificada na área. A conclusão das matérias é a mesma: sobram vagas no Brasil e chovem oportunidades internacionais.\r\n\r\nQuem se destaca pode nadar de braçada nesse oceano de possibilidades. Nesse artigo estão reunidos todos os ensinamentos para você iniciar sua carreira em programação com o pé direito.\r\n\r\n### Defina sua jornada\r\nAntes de tudo, você precisa saber para onde está indo. Iniciantes na programação costumam se perder em meio a tanta informação. Você precisa ter objetivos bem definidos para traçar a melhor rota de evolução na carreira.\r\n\r\nCertifique-se de ter uma base sólida nos fundamentos da programação. Só depois de conhecer o básico, você saberá para onde seguir. [Esse curso gratuito](https://www.rocketseat.com.br/discover) ensina programação desde o marco zero, para quem nunca teve contato com tecnologia e ajuda a consolidar conhecimentos padrões.\r\n\r\n### Escolha uma linguagem\r\nConhecer uma única tecnologia profundamente vai te ajudar mais que saber várias superficialmente. Isso não significa que você nunca poderá aprender outras no futuro, apenas que vai direcionar seu foco para um objetivo de aprendizagem.\r\n\r\nDominando uma linguagem você se aproxima de empresas que costumam buscar por pessoas que cumpram papéis específicos em um time de tecnologia.\r\nAcompanhando a evolução das ferramentas que usa, você não deixa que suas aplicações fiquem ultrapassadas e continua relevante para o mercado.\r\n\r\n## Organize seus estudos\r\nTenha em mente que a tecnologia está em constante evolução, devs precisam continuar estudando mesmo depois de ingressar no mercado. Ter o hábito de se dedicar aos estudos irá fazer toda a diferença no seu crescimento de carreira.\r\n\r\n### Crie um cronograma de estudos\r\nDefina um plano de estudos que faça parte da sua rotina da melhor forma possível. Dicas para construir seu cronograma de estudos:\r\n\r\n- **Entenda sua rotina.** Faça um planejamento realista. Liste suas tarefas, refeições, obrigações e reserve um tempo de foco profundo para se dedicar ao código.\r\n- **Organize seu cronograma conforme pequenos objetivos.** Separe seu tempo para absorver conteúdos, praticar, testar e revisar o que aprendeu nos últimos dias.\r\n- **Use ferramentas de organização.** Plataformas como o Notion são ótimas opções  para planificar sua agenda e para documentar seus materiais de estudo, links úteis e ideias de projetos.\r\n- **Aplique a técnica Pomodoro.** Esse método te ajuda a aproveitar tempos de estudo sem nenhuma interrupção, intercalando com momentos de descanso. Cronometre 25 minutos de estudos, quando o tempo terminar, faça uma pausa de 5 minutos e retome os estudos por mais 25 minutos.\r\n\r\n### Tenha constância nos estudos\r\nTer frequência nos estudos é mais relevante para o seu aprendizado que focar por grandes períodos de tempo.\r\n\r\nEstudar todos os dias o ajudará a fixar conhecimentos ao manter-se em contato recorrente com o que precisa aprender. É preferível que você estude por um período de tempo menor por dias recorrentes, que por muitas horas em um único dia da semana.\r\n\r\n### Pratique e Pratique\r\nNão tem jeito, programação é uma disciplina prática. Apenas codando que você vai conseguir desenvolver suas habilidades técnicas. A teoria virá a partir da prática, não ao contrário. Praticar também vai te ajudar a desenvolver o pensamento crítico necessário para resolver problemas e priorizar tarefas.\r\n\r\n## Conte com a comunidade\r\nSe envolver em comunidades será um divisor de águas para sua carreira. Ajudar outras pessoas desenvolvedoras vai fazer com que você fixe melhor seu aprendizado. A comunidade vai te dar suporte frente a problemas desafiadores para você.\r\n\r\nEvoluir em comunidade também é uma ótima oportunidade para você se preparar para trabalhar em um ambiente de Pair Programming.\r\n\r\nPair Programming é uma técnica de desenvolvimento ágil em que devs trabalham em pares, em uma única estação de trabalho. Em algum momento da sua carreira você vai ter contato com o trabalho em par, use a comunidade para sair na frente e se preparar para ele.\r\n\r\nDica: abra em nova aba ou favorite esse [guia prático de como contribuir para o ecossistema de tecnologia](https://blog.rocketseat.com.br/comunidade-guia-pratico-de-como-contribuir-para-o-ecossistema-de-tecnologia/). Ele tem dicas super úteis para você que está começando a programar.\r\n\r\n### Networking é tudo!\r\nEm toda e qualquer carreira, fazer Networking é uma das principais estratégias de visibilidade para profissionais. Em desenvolvimento não seria diferente.\r\n\r\nAo passo que ganha relevância na comunidade, melhores oportunidades chegarão até você. Ou talvez, você possa encontrar aquela pessoa que vai criar sociedade com você para empreender conforme seus objetivos, e se conectar com profissionais que você conhece as competências.\r\n\r\n### Desenvolva suas soft skills\r\nSoft Skills são as habilidades comportamentais, aquelas que vão além dos seus conhecimentos técnicos. Não negligencie suas habilidades de comunicação, atitude, pensamento crítico, criatividade e outras que não podem ser substituídas pelo domínio da programação.\r\n\r\nParece complicado para quem se acostumou a lidar apenas com a sua própria tela, a boa notícia é que você verá o desenvolvimento dessas habilidades fluir sempre que você estiver presente em comunidade, compartilhando conhecimento.\r\n\r\n## Impulsione sua carreira\r\nPense na sua carreira profissional como uma marca. Sua marca precisa ser sólida, ter credibilidade e ser divulgada. Para se destacar no início da sua carreira ou em qualquer outra etapa dela, avance por alguns atalhos como Eventos de Tecnologia, Hackathons e Projetos Pessoais.\r\n\r\n**Eventos de tecnologia** - Basta acompanhar as comunidades para ficar por dentro dos principais eventos de tecnologia. Desde workshops, para você aprender praticando, a empreendedorismo e conversas, para você acompanhar o avanço da tecnologia. O Networking é outro ponto positivo de fazer parte dos eventos sempre que possível.\r\n\r\n**Hackathons** - Esses são eventos que podem ser definidos como uma disputa prática para profissionais de tecnologia. Os Hackathons te ajudam a ganhar experiência no desenvolvimento de soluções em grupo, indo da ideação ao produto final.\r\n\r\n**Projetos pessoais** - Os projetos pessoais são uma forma de você desenvolver suas habilidades técnicas, criatividade e pensamento crítico. Tudo que você construir se torna bagagem para seu currículo e casos reais para o seu portfólio.\r\n\r\nImportante, adicione tudo que você fizer ao Github e [escreva um bom README](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/).\r\n\r\nTodos seus projetos contam como experiência para seu portfólio, independentemente da complexidade. Como toda sua evolução, a construção do seu portfólio também começa com um primeiro passo e vai avançando de nível.\r\n\r\nMesmo que você acredite que não tem por onde começar, comece. Com o tempo seu conhecimento e projetos vão ganhando forma.\r\n\r\nTá sem ideia de projetos e já quer começar a se desafiar? [Entre no Discover](https://www.rocketseat.com.br/discover), você terá acesso a dezenas de desafios com instruções de como realizá-los.\r\n\r\n![Maratona Explorer](https://user-images.githubusercontent.com/39345247/182924207-e2786154-bafa-407c-93d0-fca2207b6df8.png)\r\n'

export function Post() {
  const params = useParams()

  return (
    <PostContainer>
      <PostInfo />
      <PostContentContainer>
        <Markdown
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={dark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdown}
        </Markdown>
      </PostContentContainer>
    </PostContainer>
  )
}
