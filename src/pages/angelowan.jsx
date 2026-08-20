import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Cases.module.css";

export default function AngeloWan() {
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
            src="/static/images/cases/angelo-capa.jpg"
            alt="Angelo Wan Mentor"
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
              maxWidth: "750px",
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
              Conhecimento que vira conteúdo.
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                lineHeight: "1.4",
                marginTop: "25px",
                color: "#fff",
              }}
            >
              Estratégia e produção de conteúdo para fortalecer a presença
              digital de Angelo Wan.
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
              ANGELO WAN
            </h3>

            <p
              style={{
                fontSize: "20px",
                marginTop: "0",
              }}
            >
              Mentor
            </p>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
              }}
            >
              O trabalho com Angelo Wan nasceu da necessidade de transformar
              conhecimento, experiências e reflexões em uma presença digital
              constante, relevante e conectada ao seu público.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              A partir de uma estratégia de conteúdo contínua, cuidamos da
              produção para diferentes plataformas, aproveitando cada gravação,
              evento e momento relevante para gerar novos conteúdos.
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
            &nbsp; Social Media
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Edição de Cortes
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Conteúdo para Instagram e TikTok
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Conteúdo para YouTube
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Cobertura de Eventos
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
              Uma ideia pode render muito mais do que um conteúdo.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              O trabalho parte de uma lógica simples: aproveitar melhor cada
              conteúdo produzido. Uma palestra, uma entrevista ou uma gravação
              pode se transformar em diversos formatos, adaptados ao
              comportamento de cada plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* CORTES */}
      <section
        className={styles.background}
        style={{
          marginTop: "30px",
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
                fontSize: "38px",
                lineHeight: "1.2",
                fontWeight: "600",
                margin: 0,
              }}
            >
              De uma gravação para várias plataformas.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              A produção de cortes permite identificar os melhores momentos de
              cada gravação e transformá-los em conteúdos rápidos, relevantes e
              adaptados para Instagram, TikTok e YouTube.
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
            src="/static/images/cases/Angelo-00.jpg"
            alt="Angelo Wan - Social Media"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/Angelo-01.jpg"
            alt="Angelo Wan - Conteúdo"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/Angelo-02.jpg"
            alt="Angelo Wan - Cortes para redes sociais"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/Angelo-03.jpg"
            alt="Angelo Wan - Instagram e TikTok"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/Angelo-04.jpg"
            alt="Angelo Wan - YouTube e eventos"
          />
        </div>
      </section>

      {/* EVENTOS */}
      <section
        className={styles.background}
        style={{
          marginTop: "30px",
          paddingBottom: "100px",
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
                fontSize: "38px",
                lineHeight: "1.2",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Conteúdo também acontece fora do estúdio.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              O acompanhamento de eventos também fez parte do projeto,
              registrando momentos importantes e transformando experiências
              presenciais em conteúdo para as redes.
            </p>
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
