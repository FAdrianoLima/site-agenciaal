import Link from "next/link";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <section className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.box}>
          <h2>Ative o <spam style={{color:"#00E7AA"}}>novo</spam></h2>
          <h4>Somos <spam style={{ color: "#00E7AA", fontWeight: "300" }}>a agência digital que vai <br />acelerar</spam> sua transformação digital.</h4>
          <div className={styles.partner}>
          <img
              src="/static/images/linkedin-partner.png" alt="" />
           <img
              src="/static/images/fb-partner.png" alt="" />
             <img
              src="/static/images/google-partner.png" alt="" />
            <img
              src="/static/images/apple-dev.png" alt="" />
            <img
              src="/static/images/android-dev.png" alt="" />
            <img
            src="/static/images/logo.png" alt="" />
          </div>
        </div>

         <div className={styles.box2}>
          <img
            src="/static/images/linhas.png" alt="" />
        </div>
          </div>
    </section>
  );
}

export default Banner;
