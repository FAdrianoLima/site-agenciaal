import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Cases.module.css";

export default function PetlandDistribuicao() {
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
            src="/static/images/cases/petland-00.jpg"
            alt="Petland Distribuição"
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
              Presença para ser lembrada.
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 26px)",
                lineHeight: "1.4",
                marginTop: "25px",
                color: "#fff",
              }}
            >
              Comunicação e materiais para fortalecer a presença da Petland
              Distribuição no mercado pet.
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
              PETLAND
            </h3>

            <p
              style={{
                fontSize: "20px",
                marginTop: "0",
              }}
            >
              Distribuição
            </p>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
              }}
            >
              A Petland Distribuição atua na região de Curitiba atendendo
              clínicas veterinárias, pet shops e outros negócios do mercado pet,
              com um portfólio que reúne marcas reconhecidas como Royal Canin,
              Pet Passion, Pethy Group e Wanpy.
            </p>

            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              O trabalho de comunicação foi desenvolvido para manter a empresa
              presente e facilmente reconhecível por quem procura seus
              distribuidores, além de apoiar o relacionamento comercial com
              materiais digitais e impressos.
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
            &nbsp; Materiais para Campanhas
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Materiais Impressos
          </p>

          <p>
            <img src="/static/images/bolinha.png" alt="" />
            &nbsp; Materiais Comerciais
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
              Nem toda comunicação precisa vender.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Para uma distribuidora, estar presente também é estratégia. Quando
              um pet shop, clínica veterinária ou outro negócio procura pelo
              distribuidor de uma determinada marca, a Petland precisa estar
              ali, ser reconhecida e transmitir confiança.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
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
              Presença antes da conversão.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              A estratégia nas redes sociais não parte da venda direta. O
              objetivo é manter a Petland presente no mercado, fortalecer sua
              marca e facilitar o reconhecimento por profissionais que já
              procuram as marcas distribuídas pela empresa.
            </p>
          </div>
        </div>
      </section>

      {/* MATERIAIS IMPRESSOS */}
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
                fontSize: "38px",
                lineHeight: "1.2",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Comunicação que também acontece no ponto de contato.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Além das redes sociais, desenvolvemos materiais para campanhas
              obrigatórias dos distribuidores e peças utilizadas diariamente
              pela equipe comercial e pela empresa.
            </p>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              Cartões, flyers, crachás, planilhas de venda e outros materiais
              foram desenvolvidos para manter consistência visual e facilitar a
              comunicação em diferentes situações.
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
            src="/static/images/cases/petland-00.jpg"
            alt="Petland Distribuição - Projeto"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/petland-01.jpg"
            alt="Petland Distribuição - Social Media"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/petland-02.jpg"
            alt="Petland Distribuição - Campanhas"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/petland-03.jpg"
            alt="Petland Distribuição - Materiais Impressos"
          />

          <span style={{ margin: "2rem 0rem" }}></span>

          <img
            src="/static/images/cases/petland-04.jpg"
            alt="Petland Distribuição - Materiais Comerciais"
          />
        </div>
      </section>

      {/* FECHAMENTO */}
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
              Estar presente também é fazer parte da escolha.
            </h2>
          </div>

          <div className={styles.box}>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
              }}
            >
              Para a Petland Distribuição, construímos uma comunicação que
              acompanha a empresa onde ela está: nas redes, nas campanhas, nos
              materiais comerciais e nos contatos do dia a dia.
            </p>
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
