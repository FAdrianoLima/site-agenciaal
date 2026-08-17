import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Cases.module.css";

export default function Longhi() {
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
            src="/static/images/cases/longhi-00.jpg"
            alt="Longhi Equipamentos de Segurança"
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
              Comunicação que protege uma marca forte.
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                lineHeight: "1.4",
                marginTop: "25px",
                color: "#fff",
              }}
            >
              Estratégia, materiais e comunicação para a Longhi Equipamentos de
              Segurança.
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
              LONGHI
            </h3>

            <p
              style={{
                fontSize: "20px",
                marginTop: "0",
              }}
            >
              Equipamentos de Segurança
            </p>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
              }}
            >
              A Longhi precisava fortalecer sua comunicação e tornar sua marca
              ainda mais presente nos diferentes pontos de contato com seus
              clientes e parceiros.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              O projeto envolveu a criação de materiais impressos, campanhas de
              e-mail marketing e uma presença consistente nas redes sociais,
              construindo uma comunicação alinhada ao posicionamento da empresa
              e ao mercado de equipamentos de segurança.
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
            &nbsp; Materiais Impressos
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; E-mail Marketing
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Social Media
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
              Comunicação que vai além do digital.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Para a Longhi, a comunicação precisava estar presente onde as
              relações comerciais realmente acontecem. Por isso, os materiais
              impressos tiveram papel central no projeto, criando ferramentas
              para apresentar produtos, fortalecer a marca e apoiar o contato
              com clientes.
            </p>
          </div>
        </div>
      </section>

      {/* DESTAQUE IMPRESSOS */}
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
              Materiais pensados para representar a marca.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Catálogos, apresentações, materiais comerciais e diferentes peças
              impressas foram desenvolvidos para levar a identidade da Longhi
              para além das telas, com clareza, organização e consistência
              visual.
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
            src="/static/images/cases/longhi-00.jpg"
            alt="Longhi Equipamentos de Segurança - Projeto"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/longhi-01.jpg"
            alt="Longhi Equipamentos de Segurança - Materiais impressos"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/longhi-02.jpg"
            alt="Longhi Equipamentos de Segurança - Materiais comerciais"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/longhi-03.jpg"
            alt="Longhi Equipamentos de Segurança - E-mail Marketing"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/longhi-04.jpg"
            alt="Longhi Equipamentos de Segurança - Comunicação"
          />
        </div>
      </section>

      {/* SOCIAL MEDIA */}
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
              Presença para fortalecer a marca.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Nas redes sociais, o objetivo foi diferente de uma comunicação
              focada diretamente em conversão. O trabalho buscou fortalecer a
              presença da Longhi, reforçar sua autoridade e manter a marca
              próxima do seu público de forma constante e profissional.
            </p>
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
