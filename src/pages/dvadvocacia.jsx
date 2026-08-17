import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Cases.module.css";

export default function DvAdvocacia() {
  return (
    <>
      <Menu />

      {/* CAPA */}
      <section
        className={`${styles.background} ${styles.bannerCase}`}
        style={{
          paddingTop: "0",
          paddingBottom: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src="/static/images/cases/adv-00.jpg"
            alt="DV Advocacia"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "8%",
              bottom: "10%",
              zIndex: 2,
              maxWidth: "600px",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                lineHeight: "1",
                fontWeight: "600",
                margin: 0,
                color: "#fff",
              }}
            >
              Direito com identidade.
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                lineHeight: "1.4",
                marginTop: "25px",
                color: "#fff",
              }}
            >
              A construção de uma marca forte para a DV Advocacia.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTE */}
      <section
        style={{
          marginTop: "100px",
        }}
        className={styles.background}
      >
        <div
          style={{
            alignItems: "center",
          }}
          className={styles.interno}
        >
          <div className={styles.box}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "40px",
                margin: 0,
              }}
            >
              Cliente
            </p>

            <h3
              style={{
                fontWeight: "600",
                fontSize: "48px",
                marginTop: "10px",
              }}
              className={styles.titulo}
            >
              DV ADVOCACIA
            </h3>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
              }}
            >
              A DV Advocacia buscava construir uma presença de marca mais
              sólida, profissional e coerente com sua atuação no mercado
              jurídico.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              O projeto foi desenvolvido para unir estratégia, identidade e
              presença digital, criando uma comunicação capaz de transmitir
              credibilidade, segurança e profissionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        style={{
          marginTop: "70px",
        }}
        className={styles.background}
      >
        <div
          style={{
            alignItems: "flex-start",
          }}
          className={styles.interno}
        >
          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Identidade Visual
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Desenvolvimento do Logo
          </p>
          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Papelaria Institucional
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Website
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section
        className={styles.background}
        style={{
          marginTop: "70px",
        }}
      >
        <div
          className={styles.interno}
          style={{
            alignItems: "center",
          }}
        >
          <div className={styles.box}>
            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.15",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Uma marca construída para transmitir confiança.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Do conceito às aplicações, cada elemento foi pensado para criar
              uma identidade visual consistente e uma presença digital alinhada
              ao posicionamento da DV Advocacia.
            </p>
          </div>
        </div>
      </section>

      {/* CASE — IMAGENS */}
      <section
        className={styles.background}
        style={{
          paddingTop: "40px",
          paddingBottom: "80px",
        }}
      >
        <div className={styles.interno2}>
          <img
            src="/static/images/cases/adv-00.jpg"
            alt="DV Advocacia - Identidade Visual"
          />
          <img
            src="/static/images/cases/adv-01.jpg"
            alt="DV Advocacia - Identidade Visual"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/adv-02.jpg"
            alt="DV Advocacia - Logo"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/adv-03.jpg"
            alt="DV Advocacia - Papelaria"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/adv-04.jpg"
            alt="DV Advocacia - Website"
          />
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
