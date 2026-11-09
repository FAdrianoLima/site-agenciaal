import Banner from "../components/banner";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Index.module.css";
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
            <img
              src="/static/images/parceiros/angelo-wan-mentorr.png"
              alt="Logo Angelo Wan Mentor Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/petland-distribuicao.png"
              alt="Logo Petland Distribuição Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/Integrity-buildingg.png"
              alt="Logo Integrity Building Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/DV-Adv.png"
              alt="Logo DV Adv Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/Personal-Sabrina.png"
              alt="Logo Personal Sabrina Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/Marcon.png"
              alt="Logo Marcon Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/longhi-episs.png"
              alt="Logo Longhi Episs Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/Polipisoo.png"
              alt="Logo Polipisoo Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/ckf.png"
              alt="Logo CKF Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/maxxi-consultoriaa.png"
              alt="Logo Maxxi Consultoria Cliente da Agência AL"
            />
            <img
              src="/static/images/parceiros/Inovar-climatizacaoo.png"
              alt="Logo Inovar Climatização Cliente da Agência AL"
            />
          </div>
        </div>
      </section>

      <section className={styles.backgroundAbout}>
        <div className={styles.interno}>
          <div className={styles.aboutTitle}>
            <span>QUEM SOMOS</span>
          </div>

          <div className={styles.aboutContent}>
            <h2>Marketing, tecnologia e comunicação em Caxias do Sul.</h2>

            <p>
              Atuamos desde o posicionamento da marca até o desenvolvimento de
              websites, campanhas, conteúdo e materiais de comunicação.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.backgroundDark}>
        <div className={styles.interno}>
          <h2>Nossos diferenciais</h2>

          <div className={styles.gridDif}>
            <div className={styles.cardDif}>
              <span>01</span>
              <h3>Atendimento Consultivo</h3>
            </div>

            <div className={styles.cardDif}>
              <span>02</span>
              <h3>Estratégias Personalizadas</h3>
            </div>

            <div className={styles.cardDif}>
              <span>03</span>
              <h3>Servidor Próprio</h3>
            </div>

            <div className={styles.cardDif}>
              <span>04</span>
              <h3>Foco em Resultados</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.backgroundCases}>
        <div className={styles.interno}>
          <h2>Projetos em destaque</h2>

          <div className={styles.caseGrid}>
            {/* DV ADVOCACIA */}
            <Link legacyBehavior href="/dvadvocacia">
              <a className={styles.case}>
                <img
                  src="/static/images/cases/adv-00.jpg"
                  alt="DV Advocacia - Identidade Visual e Website"
                />

                <h3>DV Advocacia</h3>
                <p>Identidade Visual + Website</p>
              </a>
            </Link>

            {/* LONGHI */}
            <Link legacyBehavior href="/longhi">
              <a className={styles.case}>
                <img
                  src="/static/images/cases/longhi-00.jpg"
                  alt="Longhi Equipamentos de Segurança"
                />

                <h3>Longhi</h3>
                <p>Impressos + E-mail Marketing</p>
              </a>
            </Link>

            {/* ANGELO WAN */}
            <Link legacyBehavior href="/angelowan">
              <a className={styles.case}>
                <img
                  src="/static/images/cases/angelo-00.jpg"
                  alt="Angelo Wan Mentor"
                />

                <h3>Angelo Wan</h3>
                <p>Social Media + Conteúdo</p>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.backgroundServices}>
        <div className={styles.interno}>
          <h2>O que fazemos</h2>

          <div className={styles.serviceList}>
            <div className={styles.serviceItem}>
              <span>01</span>
              <h3>Marketing Estratégico</h3>
            </div>

            <div className={styles.serviceItem}>
              <span>02</span>
              <h3>Desenvolvimento Web</h3>
            </div>

            <div className={styles.serviceItem}>
              <span>03</span>
              <h3>Gestão de Redes Sociais</h3>
            </div>

            <div className={styles.serviceItem}>
              <span>04</span>
              <h3>Foto e Vídeo</h3>
            </div>

            <div className={styles.serviceItem}>
              <span>05</span>
              <h3>Design Gráfico</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.backgroundProcess}>
        <div className={styles.internoTimeline}>
          <h2>Como trabalhamos</h2>

          <div className={styles.timeline}>
            <div>
              <h3>01 Diagnóstico</h3>
            </div>

            <div>
              <h3>02 Planejamento</h3>
            </div>

            <div>
              <h3>03 Execução</h3>
            </div>

            <div>
              <h3>04 Acompanhamento</h3>
            </div>

            <div>
              <h3>05 Crescimento</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.backgroundTech}>
        <div className={styles.interno}>
          <h2>Tecnologia aplicada ao marketing</h2>

          <div className={styles.techGrid}>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>PHP</span>
            <span>SEO</span>
            <span>Meta Ads</span>
            <span>Google Ads</span>
            <span>Adobe</span>
          </div>
        </div>
      </section>
      <section className={styles.backgroundNumbers}>
        <div className={styles.interno}>
          <div className={styles.numberCard}>
            <h2>+7</h2>
            <span>Anos de experiência</span>
          </div>

          <div className={styles.numberCard}>
            <h2>+300</h2>
            <span>Projetos realizados</span>
          </div>

          <div className={styles.numberCard}>
            <h2>+30</h2>
            <span>Segmentos atendidos</span>
          </div>
        </div>
      </section>
      <section className={styles.backgroundManifesto}>
        <div className={styles.interno}>
          <h2>
            Marketing para <span>aparecer</span>
            <br />e ser lembrado.
          </h2>

          <p>
            Não acreditamos em fórmulas prontas, pacotes engessados ou promessas
            irreais. Construímos estratégias personalizadas, alinhadas à
            realidade de cada empresa.
          </p>
        </div>
      </section>
      <section className={styles.ctaFinal}>
        <h2>Vamos conversar sobre o crescimento da sua empresa?</h2>

        <a
          href="https://wa.me/5554981168850"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar Diagnóstico Gratuito
        </a>
      </section>

      <Rodape />
      <Whats />
    </>
  );
}
