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
      </section>

      <section className={styles.cases}>
        <div className={styles.internoColumn}>
          <div className={styles.gridCases}>
            <Link legacyBehavior href="/allora">
              <a className={styles.caseCard}>
                <img src="/static/images/cases/Allora.png" />
                <div className={styles.overlay}>
                  <span>Website • Branding</span>
                  <h3>Allora Jóias</h3>
                </div>
              </a>
            </Link>

            <Link legacyBehavior href="/hanisch">
              <a className={styles.caseCard}>
                <img src="/static/images/cases/Hanisch.png" />
                <div className={styles.overlay}>
                  <span>Website</span>
                  <h3>Hanisch Medical</h3>
                </div>
              </a>
            </Link>

            <Link legacyBehavior href="/mercatto">
              <a className={styles.caseCard}>
                <img src="/static/images/cases/Mercatto.png" />
                <div className={styles.overlay}>
                  <span>Marketing</span>
                  <h3>Mercatto</h3>
                </div>
              </a>
            </Link>

            <Link legacyBehavior href="/rpp">
              <a className={styles.caseCard}>
                <img src="/static/images/cases/RPP.png" />
                <div className={styles.overlay}>
                  <span>Institucional</span>
                  <h3>RPP Construtora</h3>
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
