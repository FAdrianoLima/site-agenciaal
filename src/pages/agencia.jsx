import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Agencia.module.css";
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

      <section style={{ marginTop: "100px" }} className={styles.background}>
        <div className={styles.interno}>
          <div className={`${styles.box}`}>
            <p style={{ fontSize: "36 px" }}>
              <h3
                style={{ fontWeight: "600", fontSize: "48px" }}
                className={styles.titulo}
              >
                Quem é a{" "}
              </h3>
              newfly digital?
            </p>
          </div>

          <div className={`${styles.box}`} style={{ maxWidth: "40rem" }}>
            {/*<App />*/}
          </div>
        </div>
      </section>

      <section style={{ marginTop: "100px" }} className={styles.background}>
        <div style={{ alignItems: "flex-start" }} className={styles.interno2}>
          <p style={{ fontWeight: "600", fontSize: "22px", color: "#28B3C7" }}>
            Somos uma agência Completa
          </p>
          <p
            style={{
              fontSize: "18px",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          >
            Mais de 15 anos de experiência juntando nosso conhecimento e
            adequando às necessidades da sua marca, assim nos tornando
            desenvolvedores de soluções ousadas e eficientes, na áreas de
            design, planejamento e desenvolvimento, agregando valores às suas
            redes sociais, websites e vídeos. Toda essa evolução, tem o objetivo
            de destacar sua empresa no mercado.
          </p>
          <p style={{ fontSize: "18px" }}>
            Combinamos estratégia, design, comunicação e tecnologia em marketing
            para oferecer aos nossos clientes uma vantagem competitiva pela
            transformação digital da sua empresa, assim focando no resultado
            perante o mercado. Com vídeos pensados e ações online eficientes
            levamos ao mercado sua marca inovadora e competitiva.
          </p>
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno2}>
          <div className={`${styles.images2} `}>
            <img src="/static/images/quem-somos/newfly-01.png" alt="" />
            <img src="/static/images/quem-somos/newfly-03.png" alt="" />
            <img src="/static/images/quem-somos/newfly-02.png" alt="" />
            <img src="/static/images/quem-somos/newfly-04.png" alt="" />
          </div>
        </div>
      </section>

      <section style={{ marginTop: "50px" }} className={styles.background}>
        <div className={styles.interno}>
          <div className={`${styles.box}`}>
            <p style={{ fontSize: "36px" }}>
              <h3
                style={{ fontWeight: "600", fontSize: "48px" }}
                className={styles.titulo}
              >
                A nossa equipe
              </h3>
              de boludinhos
            </p>
          </div>

          <div className={`${styles.box}`} style={{ maxWidth: "40rem" }}>
            {/*<App />*/}
          </div>
        </div>
      </section>

      <section style={{ marginTop: "50px" }} className={styles.background}>
        <div className={styles.interno}></div>
      </section>

      <section style={{ marginTop: "50px" }} className={styles.background}>
        <div className={styles.interno}>
          <div className={`${styles.box}`}>
            <p style={{ fontSize: "36px" }}>
              <h3
                style={{ fontWeight: "600", fontSize: "48px" }}
                className={styles.titulo}
              >
                Marcas que comprovam
              </h3>
              os nossos resultados
            </p>
          </div>

          <div className={`${styles.box}`} style={{ maxWidth: "40rem" }}>
            {/*<App />*/}
          </div>
        </div>
      </section>

      <section style={{ marginTop: "0px" }} className={styles.background}>
        <div className={styles.interno2}>
          <div className={`${styles.images} `}>
            <img src="/static/images/parceiros/logo-apolo.png" alt="" />
            <img src="/static/images/parceiros/logo-bandesul.png" alt="" />
            <img src="/static/images/parceiros/logo-biocenter.png" alt="" />
            <img src="/static/images/parceiros/logo-casaforte.png" alt="" />
            <img src="/static/images/parceiros/logo-casanobre.png" alt="" />
            <img src="/static/images/parceiros/logo-cassol.png" alt="" />
            <img src="/static/images/parceiros/logo-citydata.png" alt="" />
            <img src="/static/images/parceiros/logo-copacabana.png" alt="" />
            <img src="/static/images/parceiros/logo-embrar.png" alt="" />
            <img src="/static/images/parceiros/logo-esteticloc.png" alt="" />
            <img src="/static/images/parceiros/logo-fermaqsul.png" alt="" />
            <img src="/static/images/parceiros/logo-flowsistem.png" alt="" />
            <img src="/static/images/parceiros/logo-gov.png" alt="" />
            <img src="/static/images/parceiros/logo-gruporbs.png" alt="" />
            <img src="/static/images/parceiros/logo-hanisch.png" alt="" />
            <img src="/static/images/parceiros/logo-hidrojet.png" alt="" />
            <img src="/static/images/parceiros/logo-hooa.png" alt="" />
            <img src="/static/images/parceiros/logo-jost.png" alt="" />
            <img src="/static/images/parceiros/logo-kezzo.png" alt="" />
            <img src="/static/images/parceiros/logo-losquiavo.png" alt="" />
            <img src="/static/images/parceiros/logo-mercatto.png" alt="" />
            <img src="/static/images/parceiros/logo-monster.png" alt="" />
            <img src="/static/images/parceiros/logo-multilight.png" alt="" />
            <img src="/static/images/parceiros/logo-perfilisa.png" alt="" />
            <img src="/static/images/parceiros/logo-randon.png" alt="" />
            <img src="/static/images/parceiros/logo-rpp.png" alt="" />
            <img src="/static/images/parceiros/logo-rsgaranti.png" alt="" />
            <img src="/static/images/parceiros/logo-sierra.png" alt="" />
            <img src="/static/images/parceiros/logo-teodo.png" alt="" />
            <img src="/static/images/parceiros/logo-utility.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.backgroundimg2}>
        <div
          style={{ color: "#FFFFFF", maxWidth: "70rem", textAlign: "center" }}
          className={styles.box}
        >
          <p style={{ fontSize: "32px", marginBottom:"3rem" }}>
            o que exatamente <b style={{ color: "#28B3C7" }}>nós fazemos</b>
          </p>
          <p style={{ fontSize: "46px", lineHeight: "48px" }}>
            Estudamos o seu negócio e posicionamos ele através de vários
            serviços e diversas ferramenta on e off, que irão
            <b> tranformar seus resultados digitais.</b>
          </p>
          <span className={styles.linha} />
          <p style={{ fontSize: "64px", fontWeight: "600", color: "#28B3C7" }}>
            digital 360
          </p>

          <p style={{ fontSize: "18px", marginTop:"4rem" }} >
            Com expertise digital, nós trabalhamos o formato 360º como principal
            fonte de geração de resultados, decorrente da centralização de
            demandas em todas as áreas estratégicas do digital em uma mesma
            equipe, integrando a comunicação de todas as áreas em prol do
            objetivo traçado com o cliente.
          </p>
        </div>
      </section>

      <Rodape />
      <RodapeAl />
    </>
  );
}
