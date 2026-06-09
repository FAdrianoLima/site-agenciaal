import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import Whats from "../components/whats";
import styles from "../styles/Servicos.module.css";

export default function Servicos() {
  const servicos = [
    {
      numero: "01",
      titulo: "Marketing Estratégico",
      descricao:
        "Planejamento, posicionamento e definição das melhores ações para crescimento da sua empresa.",
      link: "#marketing",
    },
    {
      numero: "02",
      titulo: "Desenvolvimento Web",
      descricao:
        "Websites rápidos, modernos, responsivos e preparados para gerar resultados.",
      link: "#web",
    },
    {
      numero: "03",
      titulo: "Gestão de Redes Sociais",
      descricao:
        "Conteúdo estratégico para fortalecer a marca e gerar relacionamento.",
      link: "#social",
    },
    {
      numero: "04",
      titulo: "Google Ads",
      descricao:
        "Campanhas inteligentes para atrair clientes no momento certo.",
      link: "#googleads",
    },
    {
      numero: "05",
      titulo: "Meta Ads",
      descricao:
        "Anúncios para Instagram e Facebook focados em geração de oportunidades.",
      link: "#metaads",
    },
    {
      numero: "06",
      titulo: "Design Gráfico",
      descricao: "Materiais visuais que fortalecem a percepção da sua marca.",
      link: "#design",
    },
  ];

  return (
    <>
      <Menu />
      <div className={styles.quickNav}>
        <div className={styles.quickButton}>☰</div>

        <div className={styles.quickMenu}>
          <span className={styles.quickTitle}>Navegação</span>

          <a href="#marketing">01 Marketing</a>
          <a href="#web">02 Web</a>
          <a href="#social">03 Redes</a>
          <a href="#googleads">04 Google Ads</a>
          <a href="#metaads">05 Meta Ads</a>
          <a href="#design">06 Design</a>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <span>MARKETING</span>
          <span>WEB</span>
          <span>ADS</span>
          <span>DESIGN</span>
        </div>

        <div className={styles.interno}>
          <p className={styles.tag}>SERVIÇOS</p>

          <h1>
            Estratégia.
            <br />
            Tecnologia.
            <br />
            Resultado.
          </h1>

          <p className={styles.sub}>
            Soluções completas para posicionar sua empresa, atrair clientes e
            acelerar o crescimento.
          </p>
        </div>
      </section>

      <section className={styles.servicos}>
        <div className={styles.internoColumn}>
          <h2>Nossos serviços</h2>

          {servicos.map((item) => (
            <a
              href={item.link}
              className={styles.serviceItem}
              key={item.numero}
            >
              <span>{item.numero}</span>

              <div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="marketing" className={styles.marketing}>
        <div className={styles.interno}>
          <div className={styles.content}>
            <span>01</span>

            <h2>Marketing Estratégico</h2>

            <p>Crescimento não acontece por acaso.</p>

            <p>
              Antes de executar qualquer ação, analisamos seu mercado,
              concorrência, público-alvo e oportunidades para construir uma
              estratégia sólida e sustentável.
            </p>

            <p>
              Trabalhamos de forma integrada entre website, redes sociais,
              anúncios, SEO e materiais institucionais para que sua marca tenha
              presença consistente em todos os canais.
            </p>

            <ul>
              <li>Posicionamento de marca</li>
              <li>Planejamento estratégico</li>
              <li>Análise de concorrência</li>
              <li>Definição de canais</li>
              <li>Plano de crescimento</li>
            </ul>
          </div>

          <div
            className={styles.image}
            style={{
              backgroundImage: "url('/static/images/blog.png')",
            }}
          />
        </div>
      </section>

      <section id="web" className={styles.web}>
        <div className={styles.interno}>
          <div className={styles.imageLarge}>
            <img src="/static/images/blog.png" alt="mockup-web" />
          </div>

          <div className={styles.contentWhite}>
            <span>02</span>

            <h2>Desenvolvimento Web</h2>

            <p>
              Desenvolvemos soluções digitais completas para empresas que
              precisam mais do que apenas um website bonito.
            </p>

            <div className={styles.listaGrid}>
              <div>Landing Pages</div>
              <div>Sites Institucionais</div>
              <div>Blogs</div>
              <div>CMS Administrativo</div>
              <div>Integrações API</div>
              <div>Lojas Virtuais</div>
              <div>Sistemas Personalizados</div>
              <div>SEO Avançado</div>
            </div>

            <p>
              Todos os projetos são desenvolvidos pensando em velocidade,
              responsividade, posicionamento no Google e facilidade de gestão
              para o cliente.
            </p>
          </div>
        </div>
      </section>

      <section id="social" className={styles.social}>
        <div className={styles.overlay}>
          <div className={styles.internoColumn}>
            <span>03</span>

            <h2>Gestão de Redes Sociais</h2>

            <p>
              Criamos conteúdos que fortalecem marcas, geram autoridade e
              aproximam empresas do seu público.
            </p>

            <div className={styles.socialGrid}>
              <div>Planejamento</div>
              <div>Roteiros</div>
              <div>Captação</div>
              <div>Gravação</div>
              <div>Edição</div>
              <div>Publicação</div>
            </div>

            <p>
              Produzimos conteúdos focados tanto em posicionamento quanto em
              conversão, equilibrando branding e geração de oportunidades.
            </p>
          </div>
        </div>
      </section>

      <section id="googleads" className={styles.ads}>
        <div className={styles.interno}>
          <div className={styles.content}>
            <span>04</span>

            <h2>Google Ads</h2>

            <p>
              Sua empresa aparece exatamente quando um cliente procura pelos
              serviços que você oferece.
            </p>

            <ul>
              <li>Rede de Pesquisa</li>
              <li>Performance Max</li>
              <li>Display</li>
              <li>Remarketing</li>
              <li>YouTube Ads</li>
              <li>Google Maps</li>
            </ul>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>Dados</h3>
              <p>Decisões baseadas em métricas.</p>
            </div>

            <div>
              <h3>Otimização</h3>
              <p>Monitoramento contínuo.</p>
            </div>

            <div>
              <h3>Performance</h3>
              <p>Foco em resultados.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metaads" className={styles.meta}>
        <div className={styles.interno}>
          <div
            className={styles.image}
            style={{
              backgroundImage: "url('/static/images/blog.png')",
            }}
          />

          <div className={styles.content}>
            <span>05</span>

            <h2>Meta Ads</h2>

            <p>
              Campanhas inteligentes para Instagram e Facebook focadas em
              geração de demanda, reconhecimento e vendas.
            </p>

            <ul>
              <li>Captação de Leads</li>
              <li>WhatsApp</li>
              <li>Reconhecimento de Marca</li>
              <li>Remarketing</li>
              <li>Lançamentos</li>
              <li>Conversão</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="design" className={styles.design}>
        <div className={styles.internoColumn}>
          <span>06</span>

          <h2>Design Gráfico</h2>

          <p>
            A percepção de valor da sua empresa começa pela forma como ela se
            apresenta.
          </p>

          <div className={styles.designGrid}>
            <div>Catálogos</div>
            <div>Folders</div>
            <div>Flyers</div>
            <div>Fachadas</div>
            <div>Banners</div>
            <div>Adesivos</div>
            <div>Papelaria</div>
            <div>Apresentações</div>
          </div>

          <p>
            Desenvolvemos materiais digitais e impressos que fortalecem a
            identidade visual e aumentam a credibilidade da marca.
          </p>
        </div>
      </section>

      <section id="hospedagem" className={styles.hosting}>
        <div className={styles.interno}>
          <div className={styles.content}>
            <span>07</span>

            <h2>Hospedagem e E-mails</h2>

            <p>
              Além de desenvolver, cuidamos da infraestrutura responsável por
              manter sua empresa online.
            </p>

            <ul>
              <li>Hospedagem de Sites</li>
              <li>E-mails Profissionais</li>
              <li>Backups</li>
              <li>Monitoramento</li>
              <li>Suporte Técnico</li>
            </ul>

            <p>
              Sem intermediários. Sem burocracia. Suporte direto com quem
              desenvolveu seu projeto.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>
          Vamos construir uma estratégia
          <br />
          para sua empresa crescer?
        </h2>

        <a href="https://wa.me/5554981168850">Solicitar Diagnóstico</a>
      </section>

      <Rodape />
      <Whats />

      {/*
      OLD

      <section className={styles.diferenciais}>
        <div className={styles.internoColumn}>
          <h2>Por que escolher a AL?</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <span>01</span>
              <h3>Atendimento Humanizado</h3>
            </div>

            <div className={styles.card}>
              <span>02</span>
              <h3>Estratégias Personalizadas</h3>
            </div>

            <div className={styles.card}>
              <span>03</span>
              <h3>Servidor Próprio</h3>
            </div>

            <div className={styles.card}>
              <span>04</span>
              <h3>Foco em Resultados</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processo}>
        <div className={styles.internoColumn}>
          <h2>Como trabalhamos</h2>

          <div className={styles.timeline}>
            <div>01 Diagnóstico</div>
            <div>02 Planejamento</div>
            <div>03 Execução</div>
            <div>04 Otimização</div>
            <div>05 Crescimento</div>
          </div>
        </div>
      </section>

      <section className={styles.tech}>
        <div className={styles.internoColumn}>
          <h2>Tecnologias e ferramentas</h2>

          <div className={styles.techGrid}>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>SEO</span>
            <span>Google Ads</span>
            <span>Meta Ads</span>
            <span>Adobe</span>
            <span>Analytics</span>
          </div>
        </div>
      </section>
      
      */}
    </>
  );
}
