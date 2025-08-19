import Link from "next/link";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <section className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.box}>
          <h2>A sua <spam style={{color:"#d82087"}}>agência</spam></h2>
          <h4>Somos <spam style={{ color: "#d82087", fontWeight: "300" }}>a agência digital que vai acelerar</spam> sua transformação digital.</h4>
          <img
          src="/static/images/risco.png"
          />
          
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
