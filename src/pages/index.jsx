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
      <section className={`${styles.bgcarroussel} `}>
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
        style={{ paddingBottom: "100px", paddingTop: "100px" }}
        className={styles.background}
      >
        <div className={styles.interno}>
          <div
            className={`${styles.box} ${styles.texto}`}
            style={{ marginLeft: "2rem" }}
          >
            <h3>
              Somos uma <spam style={{ color: "#28B3C7" }}>agência 360º</spam> com
              experiência para fazer o seu negócio ter o{" "}
            </h3>
            <div className={styles.bloco}>Sucesso que você quer!</div>
            <p>
              Transformar o seu negócio em um projeto lucrativo é um desafio que a
              atual geração digital busca incansavelmente. Saber administrar
              influência digital com transparência e autoridade é o nosso
              principal objetivo!
            </p>
          </div>

          <div
            className={`${styles.box}`}
            style={{ maxWidth: "40rem", marginTop: "2rem" }}
          >
              <img
              src="/static/images/blog.png"
              alt=""
              />
            </div>
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno3}>
          <Link legacyBehavior href="/tecnologia">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa1} `}>
                <p className="ml-[4rem]">
                  <h4>Tecnologia</h4>
                  <span>aplicativos, websites e sistemas personalizados</span>
                </p>
              </div>
            </div>
          </Link>

          <Link legacyBehavior href="/design">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa2} `}>
                <p className="ml-[4rem]">
                  <h4>Design e Criação</h4>
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
                  <h4>Posicionamento Digital</h4>
                  <span>comportamento, leitura e expressão no meio digital</span>
                </p>
              </div>
            </div>
          </Link>

          <Link legacyBehavior href="/ia">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa4} `}>
                <p className="ml-[4rem]">
                  <h4>Redação</h4>
                  <span>
                    escrita e planejamento de conteúdos para todos os usos
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className={styles.background2}>
        <div className={styles.interno1}>
          <h2 className={styles.blogtexto}>O QUE<br />ESTAMOS<br />FALANDO?</h2>

        <div className="w-full max-w-[70rem] flex row justify-between items-center">
        <div className={styles.blog}>
              <h4><img src="/static/images/al-agencia-data.png" /> 01 / 08 /24</h4>
              <h2>
              “5 dicas para fortalecer a amizade no Dia do Amigo – Marketing de Conteúdo”
              </h2>
              <span>
              <p>Leia mais&nbsp;&nbsp;</p>
              <img className="mt-[5px]" src="/static/images/flecha-rosa.png" />
              </span>
          </div>

          <div className={styles.blog}>
              <h4><img src="/static/images/al-agencia-data.png" /> 01 / 08 /24</h4>
              <h2>
              “5 dicas para fortalecer a amizade no Dia do Amigo – Marketing de Conteúdo”
              </h2>
              <span>
              <p>Leia mais&nbsp;&nbsp;</p>
              <img className="mt-[5px]" src="/static/images/flecha-rosa.png" />
              </span>
          </div>

          <div className={styles.blog}>
              <h4><img src="/static/images/al-agencia-data.png" /> 01 / 08 /24</h4>
              <h2>
              “5 dicas para fortalecer a amizade no Dia do Amigo – Marketing de Conteúdo”
              </h2>
              <span>
              <p>Leia mais&nbsp;&nbsp;</p>
              <img className="mt-[5px]" src="/static/images/flecha-rosa.png" />
              </span>
          </div>

          <Link href="/blog">
          <button className={styles.LerBlog}>
            <a>
            Ver mais...
            </a>
          </button>
          </Link>
        </div>

        </div>
      </section>
    
      <Rodape />
      <Whats />
      <RodapeAl />
    </>
  );
}
