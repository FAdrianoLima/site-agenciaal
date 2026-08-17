import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Cases2.module.css";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import RodapeAl from "../components/rodape-al";

export default function anewfly() {
  return (
    <>
      <Menu />
      <section className={styles.hero}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <span>PORTFÓLIO</span>

            <h1>
              Projetos que
              <br />
              geraram resultado.
            </h1>

            <p>
              Websites, branding, campanhas e estratégias desenvolvidas para
              empresas que decidiram crescer de forma profissional.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cases}>
        <div className={styles.internoColumn}>
          <div className={styles.gridCases}>
            {/* DV ADVOCACIA */}
            <Link legacyBehavior href="/dvadvocacia">
              <a className={styles.caseCard}>
                <img src="/static/images/cases/adv-00.jpg" alt="DV Advocacia" />

                <div className={styles.overlay}>
                  <span>Identidade Visual • Website</span>
                  <h3>DV Advocacia</h3>
                </div>
              </a>
            </Link>

            {/* POLIPISO CAXIAS */}
            <Link legacyBehavior href="/polipiso">
              <a className={styles.caseCard}>
                <img
                  src="/static/images/cases/polipiso-02.jpg"
                  alt="Polipiso Caxias"
                />

                <div className={styles.overlay}>
                  <span>Website • E-mail Marketing</span>
                  <h3>Polipiso Caxias</h3>
                </div>
              </a>
            </Link>

            {/* LONGHI */}
            <Link legacyBehavior href="/longhi">
              <a className={styles.caseCard}>
                <img
                  src="/static/images/cases/longhi-00.jpg"
                  alt="Longhi Equipamentos de Segurança"
                />

                <div className={styles.overlay}>
                  <span>Impressos • E-mail Marketing</span>
                  <h3>Longhi Equipamentos de Segurança</h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.numeros}>
        <div className={styles.interno}>
          <div className={styles.numero}>
            <h2>+100</h2>
            <span>Projetos realizados</span>
          </div>

          <div className={styles.numero}>
            <h2>+20</h2>
            <span>Segmentos atendidos</span>
          </div>

          <div className={styles.numero}>
            <h2>+6</h2>
            <span>Anos de experiência</span>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>
          O próximo case
          <br />
          pode ser o seu.
        </h2>

        <Link legacyBehavior href="https://wa.me/5554981168850">
          <a target="_blank" rel="noopener noreferrer">
            Solicitar Diagnóstico
          </a>
        </Link>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
