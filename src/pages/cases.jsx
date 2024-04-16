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
      <section className={styles.backgroundimg}>
        <div className={styles.interno}>
          <div className={styles.box}></div>

          <div className={styles.box2}>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "200px" }} className={styles.background}>
        <div className={styles.interno}>
          <p style={{ fontSize: "36 px" }}>
            <h3
              style={{ fontWeight: "600", fontSize: "64px" }}
              className={styles.titulo}
            >
              Cases
            </h3>
          </p>
        </div>
      </section>
{/* TENTATIVA ;-;

      <section className={styles.background} style={{ marginBottom: "10rem" }}>
        <div className={styles.interno} style={{ maxWidth: "100rem" }}>
          <div className={`${styles.images} `}>
            <Link legacyBehavior  href="/allora">
              <a className={styles.img}>
                <div className={styles.bg}>
                  <p>asdasdsa</p>
                  <img src="static/images/cases/Allora.png" alt="" />
                  <div className={styles.verdin}>
                    &nbsp; <br />
                  </div>
                </div>
              </a>
            </Link>

            <Link legacyBehavior  href="/hanisch">
              <a className={styles.img}>
                <div className={styles.bg}>
                  <p>asdasdsa</p>
                  <img src="static/images/cases/Hanisch.png" alt="" />
                  <div className={styles.verdin}>
                    &nbsp; <br />
                  </div>
                </div>
              </a>
            </Link>
            <Link legacyBehavior  href="/rpp">
              <a className={styles.img}>
                <div className={styles.bg}>
                  <p>asdasdsa</p>
                  <img src="static/images/cases/RPP.png" alt="" />
                  <div className={styles.verdin}>
                    &nbsp; <br />
                  </div>
                </div>
              </a>
            </Link>
            <Link legacyBehavior  href="/mercatto">
              <a className={styles.img}>
                <div className={styles.bg}>
                  <p>asdasdsa</p>
                  <img src="static/images/cases/Mercatto.png" alt="" />
                  <div className={styles.verdin}>
                    &nbsp; <br />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
*/}

      <section className="w-full flex justify-center items-center mt-[1rem]">
        <div className={styles.blococonteudo}>
        <Link legacyBehavior  href="/allora">
          <div className={styles.box}>
          <p>Allora Jóias</p>
            <div className={styles.boxcontent}
            style={{backgroundImage:"url(/static/images/cases/Allora.png)"}}
            ></div>
          </div>
          </Link>
          <Link legacyBehavior  href="/hanisch">
          <div className={styles.box}>
          <p>Hanisch Medical</p>
            <div className={styles.boxcontent}
            style={{backgroundImage:"url(/static/images/cases/Hanisch.png)"}}
            ></div>
          </div>
          </Link>
          <Link legacyBehavior  href="/mercatto">
          <div className={styles.box}>
          <p>Mercatto</p>
            <div className={styles.boxcontent}
            style={{backgroundImage:"url(/static/images/cases/Mercatto.png)"}}
            ></div>
          </div>
          </Link>
          <Link legacyBehavior  href="/rpp">
          <div className={styles.box}>
          <p>RPP Construtora</p>
            <div className={styles.boxcontent}
            style={{backgroundImage:"url(/static/images/cases/RPP.png)"}}
            ></div>
          </div>
          </Link>
          <Link legacyBehavior  href="/mercatto">
          <div className={styles.box}>
          <p>Mercatto</p>
            <div className={styles.boxcontent}
            style={{backgroundImage:"url(/static/images/cases/Mercatto.png)"}}
            ></div>
          </div>
          </Link>
          <Link legacyBehavior  href="/mercatto">
          <div className={styles.box}>
          <p>Mercato</p>
            <div className={styles.boxcontent}
            style={{backgroundImage:"url(/static/images/cases/Mercatto.png)"}}
            ></div>
          </div>
          </Link>
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
