import Link from "next/link";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <section className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.box}>
          <h2>
            A sua <span style={{ color: "#d82087" }}>agência</span>
          </h2>
          <h4>
            Somos{" "}
            <span style={{ color: "#d82087", fontWeight: "300" }}>
              a agência digital que vai acelerar
            </span>{" "}
            sua transformação digital.
          </h4>
          {/* risco
          <img
          src="/static/images/risco.png"
          />
          */}

          <Link legacyBehavior href="/">
            <a className={styles.botao} target="_blank">
              Fale conosco e tenha uma consultoria sem compromisso!
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
