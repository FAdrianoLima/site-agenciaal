import Banner from "../components/banner";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Index.module.css";
import "../styles/Index.module.css";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButton = () => {
    setVideoPlaying(true);
  };

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
      <section className={`${styles.background2} `}>
        <div className={styles.carrossel}>
          <img src="/static/images/parceiros/logo-apolo.png" />
          <img src="/static/images/parceiros/logo-bandesul.png" />
          <img src="/static/images/parceiros/logo-biocenter.png" />
          <img src="/static/images/parceiros/logo-casaforte.png" />
          <img src="/static/images/parceiros/logo-casanobre.png" />
          <img src="/static/images/parceiros/logo-citydata.png" />
          <img src="/static/images/parceiros/logo-copacabana.png" />
          <img src="/static/images/parceiros/logo-embrar.png" />
          <img src="/static/images/parceiros/logo-esteticloc.png" />
          <img src="/static/images/parceiros/logo-fermaqsul.png" />
          <img src="/static/images/parceiros/logo-flowsistem.png" />
          <img src="/static/images/parceiros/logo-gov.png" />

          <img src="/static/images/parceiros/logo-apolo.png" />
          <img src="/static/images/parceiros/logo-bandesul.png" />
          <img src="/static/images/parceiros/logo-biocenter.png" />
          <img src="/static/images/parceiros/logo-casaforte.png" />
          <img src="/static/images/parceiros/logo-casanobre.png" />
          <img src="/static/images/parceiros/logo-citydata.png" />
          <img src="/static/images/parceiros/logo-copacabana.png" />
          <img src="/static/images/parceiros/logo-embrar.png" />
          <img src="/static/images/parceiros/logo-esteticloc.png" />
          <img src="/static/images/parceiros/logo-fermaqsul.png" />
          <img src="/static/images/parceiros/logo-flowsistem.png" />
          <img src="/static/images/parceiros/logo-gov.png" />

          <img src="/static/images/parceiros/logo-apolo.png" />
          <img src="/static/images/parceiros/logo-bandesul.png" />
          <img src="/static/images/parceiros/logo-biocenter.png" />
          <img src="/static/images/parceiros/logo-casaforte.png" />
          <img src="/static/images/parceiros/logo-casanobre.png" />
          <img src="/static/images/parceiros/logo-citydata.png" />
          <img src="/static/images/parceiros/logo-copacabana.png" />
          <img src="/static/images/parceiros/logo-embrar.png" />
          <img src="/static/images/parceiros/logo-esteticloc.png" />
          <img src="/static/images/parceiros/logo-fermaqsul.png" />
          <img src="/static/images/parceiros/logo-flowsistem.png" />
          <img src="/static/images/parceiros/logo-gov.png" />

          <img src="/static/images/parceiros/logo-apolo.png" />
          <img src="/static/images/parceiros/logo-bandesul.png" />
          <img src="/static/images/parceiros/logo-biocenter.png" />
          <img src="/static/images/parceiros/logo-casaforte.png" />
          <img src="/static/images/parceiros/logo-casanobre.png" />
          <img src="/static/images/parceiros/logo-citydata.png" />
          <img src="/static/images/parceiros/logo-copacabana.png" />
          <img src="/static/images/parceiros/logo-embrar.png" />
          <img src="/static/images/parceiros/logo-esteticloc.png" />
          <img src="/static/images/parceiros/logo-fermaqsul.png" />
          <img src="/static/images/parceiros/logo-flowsistem.png" />
          <img src="/static/images/parceiros/logo-gov.png" />

          <img src="/static/images/parceiros/logo-apolo.png" />
          <img src="/static/images/parceiros/logo-bandesul.png" />
          <img src="/static/images/parceiros/logo-biocenter.png" />
          <img src="/static/images/parceiros/logo-casaforte.png" />
          <img src="/static/images/parceiros/logo-casanobre.png" />
          <img src="/static/images/parceiros/logo-citydata.png" />
          <img src="/static/images/parceiros/logo-copacabana.png" />
          <img src="/static/images/parceiros/logo-embrar.png" />
          <img src="/static/images/parceiros/logo-esteticloc.png" />
          <img src="/static/images/parceiros/logo-fermaqsul.png" />
          <img src="/static/images/parceiros/logo-flowsistem.png" />
          <img src="/static/images/parceiros/logo-gov.png" />

          <img src="/static/images/parceiros/logo-apolo.png" />
          <img src="/static/images/parceiros/logo-bandesul.png" />
          <img src="/static/images/parceiros/logo-biocenter.png" />
          <img src="/static/images/parceiros/logo-casaforte.png" />
          <img src="/static/images/parceiros/logo-casanobre.png" />
          <img src="/static/images/parceiros/logo-citydata.png" />
          <img src="/static/images/parceiros/logo-copacabana.png" />
          <img src="/static/images/parceiros/logo-embrar.png" />
          <img src="/static/images/parceiros/logo-esteticloc.png" />
          <img src="/static/images/parceiros/logo-fermaqsul.png" />
          <img src="/static/images/parceiros/logo-flowsistem.png" />
          <img src="/static/images/parceiros/logo-gov.png" />
        </div>
      </section>

      <section
        id="quemSomos"
        style={{ paddingBottom: "0px", paddingTop: "100px" }}
        className={styles.background}
      >
        <div className={styles.interno}>
          <div
            className={`${styles.box} ${styles.texto}`}
            style={{ marginLeft: "2rem" }}
          >
            <h3>
              Somos uma <spam style={{ color: "#28B3C7" }}>agência 360º</spam> e{" "}
              <spam style={{ color: "#28B3C7" }}>software house</spam>, com
              experiência para fazer o seu negócio ter{" "}
            </h3>
            <div className={styles.bloco}>muito mais resultados.</div>
            <p>
              Combinamos estratégia, design, comunicação e tecnologia em
              marketing para oferecer aos nossos clientes uma vantagem
              competitiva pela transformação digital da sua empresa, assim
              focando no resultado perante o mercado. Com vídeos, apps, sites,
              materiais impressos pensados em ações online eficientes levamos ao
              mercado sua marca de forma diferenciada.
            </p>
          </div>

          <div
            className={`${styles.box}`}
            style={{ maxWidth: "40rem", marginTop: "2rem" }}
          >
            <div className={styles.video}>
              <iframe
                width="580px"
                height="360px"
                src="https://www.youtube.com/embed/VId7FAW5nl4?autoplay=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ borderRadius: "0px 25px 0px 0px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno}>
          <div
            className={`${styles.box} ${styles.texto}`}
            style={{ marginLeft: "2rem" }}
          >
            
              <spam style={{ color: "#28B3C7" }}>Marcas que comprovam</spam>{" "}
              <h3 style={{ fontSize: "36px", marginTop: "10px" }}>
                os nossos resultados
              </h3>
            
          </div>
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno3}>
          <Link legacyBehavior href="/tecnologia">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa1} `}>
                <p className="ml-[4rem]">
                  <p>Tecnologia</p>
                  <span>aplicativos, websites e sistemas personalizados</span>
                </p>
              </div>
            </div>
          </Link>

          <Link legacyBehavior href="/design">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa2} `}>
                <p className="ml-[4rem]">
                  <p>Design e Criação</p>
                  <span>criatividade e arquitetura para négocios digitais</span>
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.interno3}>
          <Link legacyBehavior href="/inovacao">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa3} `}>
                <p className="ml-[4rem]">
                  <p>Inovação</p>
                  <span>consultoria para a sua tranformação digital</span>
                </p>
              </div>
            </div>
          </Link>

          <Link legacyBehavior href="/ia">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa4} `}>
                <p className="ml-[4rem]">
                  <p>Inteligência Artificial</p>
                  <span>
                    Somos especializados em desenvolvimento de plataformas
                    digitais personalizadas que incorporam tecnologias de
                    inteligência artificial, incluindo a OpenAI.
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Rodape />
      <Whats />
      <RodapeAl />
    </>
  );
}
