import Link from "next/link";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <section className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.box}>
          <h1>
            Uma agência em Caxias do Sul que vai &nbsp;
            <span style={{ color: "#d82087", fontWeight: "300" }}>
              acelerar sua transformação digital.
            </span>
          </h1>
          <h2>
            A sua <span style={{ color: "#d82087" }}>agência</span>
          </h2>
          {/* risco
          <img
          src="/static/images/risco.png"
          />
          */}

          <Link legacyBehavior href="/contato">
            <a className={styles.botao} target="_blank">
              Fale conosco e tire suas dúvidas!
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
