import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import Whats from "../components/whats";
import styles from "../styles/Agencia.module.css";

export default function Agencia() {
  return (
    <>
      <Menu />

      <section className={styles.hero}>
        <div className={styles.interno}>
          <span>NOSSA AGÊNCIA</span>

          <h1>
            Não somos uma agência
            <br />
            de pacotes.
          </h1>

          <p>
            Criamos estratégias, websites e posicionamento para empresas que
            querem crescer de forma consistente.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.interno}>
          <div>
            <span className={styles.tag}>QUEM SOMOS</span>

            <h2>
              A AL nasceu para simplificar
              <br />o marketing das empresas.
            </h2>
          </div>

          <div className={styles.texto}>
            <p>
              Muitos empresários sabem que precisam crescer digitalmente, mas
              não sabem por onde começar.
            </p>

            <p>
              Foi para resolver esse problema que surgiu a AL. Unimos
              estratégia, design, tecnologia e comunicação para criar soluções
              personalizadas para cada negócio.
            </p>

            <p>
              Sem fórmulas prontas. Sem pacotes engessados. Sem promessas
              irreais.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valores}>
        <div className={styles.internoColumn}>
          <h2>Nossa forma de pensar</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <span>01</span>
              <h3>Transparência</h3>
            </div>

            <div className={styles.card}>
              <span>02</span>
              <h3>Resultado acima da aparência</h3>
            </div>

            <div className={styles.card}>
              <span>03</span>
              <h3>Tecnologia aplicada ao marketing</h3>
            </div>

            <div className={styles.card}>
              <span>04</span>
              <h3>Atendimento próximo</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processo}>
        <div className={styles.internoColumn}>
          <h2>Como trabalhamos</h2>

          <div className={styles.timeline}>
            <div>Diagnóstico</div>
            <div>Planejamento</div>
            <div>Execução</div>
            <div>Acompanhamento</div>
            <div>Crescimento</div>
          </div>
        </div>
      </section>

      <section className={styles.numeros}>
        <div className={styles.interno}>
          <div className={styles.numero}>
            <h2>+6</h2>
            <span>Anos de experiência</span>
          </div>

          <div className={styles.numero}>
            <h2>+100</h2>
            <span>Projetos realizados</span>
          </div>

          <div className={styles.numero}>
            <h2>+20</h2>
            <span>Segmentos atendidos</span>
          </div>

          <div className={styles.numero}>
            <h2>100%</h2>
            <span>Estratégias personalizadas</span>
          </div>
        </div>
      </section>

      <section className={styles.tech}>
        <div className={styles.internoColumn}>
          <h2>Tecnologia aplicada ao marketing</h2>

          <div className={styles.techGrid}>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>SEO</span>
            <span>Google Ads</span>
            <span>Meta Ads</span>
            <span>Adobe</span>
            <span>Servidor Próprio</span>
          </div>
        </div>
      </section>

      <section className={styles.galeria}>
        <div className={styles.internoColumn}>
          <h2>Por trás de cada projeto existe estratégia.</h2>

          <div className={styles.gridFotos}>
            <img src="/static/images/design.png" />
            <img src="/static/images/design.png" />
            <img src="/static/images/design.png" />
            <img src="/static/images/design.png" />
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={styles.internoColumn}>
          <h2>
            Não acreditamos em
            <span> fórmulas prontas.</span>
          </h2>

          <p>
            Cada empresa possui uma realidade, um orçamento, um mercado e
            objetivos diferentes. Por isso cada estratégia é construída de forma
            personalizada.
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>
          Sua empresa merece mais
          <br />
          do que apenas posts.
        </h2>

        <a href="https://wa.me/5554981168850">Solicitar Diagnóstico</a>
      </section>

      <Rodape />
      <Whats />
      <RodapeAl />
    </>
  );
}
