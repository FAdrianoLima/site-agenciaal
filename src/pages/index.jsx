import Banner from "../components/banner";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Index.module.css";
import "../styles/Index.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Home() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButton = () => {
    setVideoPlaying(true);
  };

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicar os filhos automaticamente
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }, []);

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
      <section className={`${styles.bgcarroussel} `}>
        <div className={styles.carrossel}>
          <div className={styles.track} ref={trackRef}>
            <img src="/static/images/parceiros/angelo-wan-mentorr.png" alt="" />
            <img src="/static/images/parceiros/ckf.png" alt="" />
            <img
              src="/static/images/parceiros/Inovar-climatizacaoo.png"
              alt=""
            />
            <img
              src="/static/images/parceiros/Integrity-buildingg.png"
              alt=""
            />
            <img src="/static/images/parceiros/longhi-episs.png" alt="" />
            <img
              src="/static/images/parceiros/petland-distribuicao.png"
              alt=""
            />
            <img src="/static/images/parceiros/Polipisoo.png" alt="" />
            <img src="/static/images/parceiros/maxxi-consultoriaa.png" alt="" />
          </div>
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
              Somos uma <spam style={{ color: "#28B3C7" }}>agência 360º</spam>{" "}
              com experiência para fazer o seu negócio ter o{" "}
            </h3>
            <div className={styles.bloco}>Sucesso que você quer!</div>
            <p>
              Transformar o seu negócio em um projeto lucrativo é um desafio que
              a atual geração digital busca incansavelmente. Saber administrar
              influência digital com transparência e autoridade é o nosso
              principal objetivo!
            </p>
          </div>

          <div
            className={`${styles.box}`}
            style={{ maxWidth: "40rem", marginTop: "2rem" }}
          >
            <img src="/static/images/blog.png" alt="" />
          </div>
        </div>
      </section>

      <section
        id="servicos"
         className={styles.background3}>
        <div className={styles.interno3}>
          <h2 className={styles.titulo}>
            Trazemos soluções para quaisquer<br/>estratégias <span>offline</span> ou{" "}
            <span>online</span><a>*</a>
          </h2>
        </div>
        <div className={styles.interno3}>
          <Link legacyBehavior href="/tecnologia">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa1} `}>
                <spam className="ml-[4rem]">
                  <h4>Tecnologia</h4>
                  <span>aplicativos, websites e sistemas personalizados</span>
                </spam>
              </div>
            </div>
          </Link>

          <Link legacyBehavior href="/design">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa2} `}>
                <spam className="ml-[4rem]">
                  <h4>Design e Criação</h4>
                  <span>criatividade e arquitetura para négocios digitais</span>
                </spam>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.interno3}>
          <Link legacyBehavior href="/inovacao">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa3} `}>
                <spam className="ml-[4rem]">
                  <h4>Posicionamento Digital</h4>
                  <span>
                    comportamento, leitura e expressão no meio digital
                  </span>
                </spam>
              </div>
            </div>
          </Link>

          <Link legacyBehavior href="/ia">
            <div className={styles.opcoes}>
              <div className={`${styles.caixa4} `}>
                <spam className="ml-[4rem]">
                  <h4>Redação</h4>
                  <span>
                    escrita e planejamento de conteúdos para todos os usos
                  </span>
                </spam>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className={styles.background2}>
        <div className={styles.interno1}>
          <h2 className={styles.blogtexto}>
            O que
            <br />
            estamos
            <br />
            falando?
          </h2>

          <div className="w-full max-w-[70rem] flex row justify-between items-center">
            <div className={styles.blog}>
              <h4>
                <img src="/static/images/al-agencia-data.png" /> 01 / 08 /24
              </h4>
              <h2>
                “5 dicas para fortalecer a amizade no Dia do Amigo – Marketing
                de Conteúdo”
              </h2>
              <span>
                <p>Leia mais&nbsp;&nbsp;</p>
                <img
                  className="mt-[5px]"
                  src="/static/images/flecha-rosa.png"
                />
              </span>
            </div>

            <div className={styles.blog}>
              <h4>
                <img src="/static/images/al-agencia-data.png" /> 01 / 08 /24
              </h4>
              <h2>
                “5 dicas para fortalecer a amizade no Dia do Amigo – Marketing
                de Conteúdo”
              </h2>
              <span>
                <p>Leia mais&nbsp;&nbsp;</p>
                <img
                  className="mt-[5px]"
                  src="/static/images/flecha-rosa.png"
                />
              </span>
            </div>

            <div className={styles.blog}>
              <h4>
                <img src="/static/images/al-agencia-data.png" /> 01 / 08 /24
              </h4>
              <h2>
                “5 dicas para fortalecer a amizade no Dia do Amigo – Marketing
                de Conteúdo”
              </h2>
              <span>
                <p>Leia mais&nbsp;&nbsp;</p>
                <img
                  className="mt-[5px]"
                  src="/static/images/flecha-rosa.png"
                />
              </span>
            </div>

            <Link href="/blog">
              <button className={styles.LerBlog}>Ver mais...</button>
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
