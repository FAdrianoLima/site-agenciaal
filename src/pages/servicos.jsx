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
    },
    {
      numero: "02",
      titulo: "Desenvolvimento Web",
      descricao:
        "Websites rápidos, modernos, responsivos e preparados para gerar resultados.",
    },
    {
      numero: "03",
      titulo: "Gestão de Redes Sociais",
      descricao:
        "Conteúdo estratégico para fortalecer a marca e gerar relacionamento.",
    },
    {
      numero: "04",
      titulo: "Google Ads",
      descricao:
        "Campanhas inteligentes para atrair clientes no momento certo.",
    },
    {
      numero: "05",
      titulo: "Meta Ads",
      descricao:
        "Anúncios para Instagram e Facebook focados em geração de oportunidades.",
    },
    {
      numero: "06",
      titulo: "Design Gráfico",
      descricao: "Materiais visuais que fortalecem a percepção da sua marca.",
    },
  ];

  return (
    <>
      <Menu />

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
            <div className={styles.serviceItem} key={item.numero}>
              <span>{item.numero}</span>

              <div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
    </>
  );
}
