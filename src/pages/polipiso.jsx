import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Cases.module.css";

export default function PolipisoCaxias() {
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
            src="/static/images/cases/polipiso-00.jpg"
            alt="Polipiso Caxias"
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
              maxWidth: "700px",
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
              Uma marca que pisa forte.
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                lineHeight: "1.4",
                marginTop: "25px",
                color: "#fff",
              }}
            >
              Estratégia e presença digital para a Polipiso Caxias.
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
              POLIPISO CAXIAS
            </h3>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
              }}
            >
              Com experiência e especialização em pisos de concreto, a Polipiso
              Caxias precisava fortalecer sua presença digital e apresentar seus
              serviços de forma mais profissional e estratégica.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              O projeto integrou identidade, comunicação e presença digital para
              aproximar a marca de novos clientes e valorizar a qualidade dos
              serviços oferecidos.
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
            &nbsp; Desenvolvimento do Logo
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Website
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; E-mail Marketing
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Google Business
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
              Mais do que uma presença digital. Uma marca preparada para
              crescer.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              O trabalho foi pensado para criar uma comunicação mais clara,
              profissional e estratégica, conectando a Polipiso Caxias ao
              público que busca soluções em pisos e revestimentos.
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
            src="/static/images/cases/polipiso-00.jpg"
            alt="Polipiso Caxias - Projeto"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/polipiso-01.jpg"
            alt="Polipiso Caxias - Logo"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/polipiso-02.jpg"
            alt="Polipiso Caxias - Website"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/polipiso-03.jpg"
            alt="Polipiso Caxias - E-mail Marketing"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/polipiso-04.jpg"
            alt="Polipiso Caxias - Google Business"
          />
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
