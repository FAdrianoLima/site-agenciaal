import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Videos.module.css";

export default function Videos() {
  const videos = [
    {
      numero: "01",
      titulo: "Nosso trabalho",
      tipo: "Institucional",
      descricao:
        "Um pouco do nosso trabalho, dos projetos que desenvolvemos e das marcas que ajudamos a construir.",
      video: "/static/videos/Video-Institucional-Newfly.mp4",
      formato: "local",
    },
    {
      numero: "02",
      titulo: "Stepper",
      tipo: "Vídeo institucional",
      descricao:
        "Um projeto audiovisual desenvolvido para apresentar a marca, sua essência e o trabalho por trás dela.",
      video: "/static/videos/Institucional-Stepper.mp4",
      formato: "local",
    },
    {
      numero: "03",
      titulo: "Layout",
      tipo: "Vídeo institucional",
      descricao:
        "Uma produção pensada para mostrar a empresa de forma próxima, autêntica e alinhada à sua identidade.",
      video: "/static/videos/Institucional-Layout.mp4",
      formato: "local",
    },
    {
      numero: "04",
      titulo: "TKA",
      tipo: "Institucional · Português",
      descricao:
        "Vídeo institucional produzido para apresentar a TKA e sua atuação de forma clara e envolvente.",
      video: "https://www.youtube.com/embed/iZDT5phDg0Y?si=nGrvJk0IDnh6yfA4",
      formato: "youtube",
    },
    {
      numero: "05",
      titulo: "TKA",
      tipo: "Institucional · Español",
      descricao:
        "Versão em espanhol do vídeo institucional desenvolvido para a TKA.",
      video: "https://www.youtube.com/embed/RAn-Q6Trmc8?si=JPxqK7SoncWMvBAF",
      formato: "youtube",
    },
  ];

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <span>FILMES</span>
          <span>HISTÓRIAS</span>
          <span>MARCAS</span>
        </div>

        <div className={styles.interno}>
          <p className={styles.tag}>VÍDEOS INSTITUCIONAIS</p>

          <h1>
            Marcas.
            <br />
            Pessoas.
            <br />
            Histórias.
          </h1>

          <p className={styles.sub}>
            Algumas histórias precisam ser vistas, não apenas contadas.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.interno}>
          <div className={styles.introNumber}>01</div>

          <div className={styles.introContent}>
            <span className={styles.label}>O QUE FAZEMOS</span>

            <h2>
              Empresas também
              <br />
              têm histórias.
            </h2>

            <p>
              Por trás de cada marca existem pessoas, processos, ideias e
              histórias que merecem ser conhecidas.
            </p>

            <p>
              Nos vídeos institucionais, transformamos tudo isso em uma
              narrativa visual que aproxima a empresa de quem está do outro
              lado.
            </p>
          </div>
        </div>
      </section>

      {/* VÍDEO PRINCIPAL */}
      <section className={styles.destaque}>
        <div className={styles.interno}>
          <div className={styles.destaqueHeader}>
            <div>
              <span className={styles.numero}>01</span>
              <h2>Nosso trabalho</h2>
            </div>

            <p>
              Um vídeo para mostrar um pouco das marcas, projetos e histórias
              que fazem parte do nosso trabalho.
            </p>
          </div>

          <div className={styles.videoPrincipal}>
            <video controls preload="metadata">
              <source
                src="/static/videos/Video-Institucional-Newfly.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className={styles.projetos}>
        <div className={styles.interno}>
          <div className={styles.projetosHeader}>
            <span className={styles.label}>PROJETOS</span>

            <h2>
              Outras histórias
              <br />
              que ajudamos a contar.
            </h2>
          </div>

          <div className={styles.videoGrid}>
            {videos.slice(1).map((item) => (
              <article
                className={styles.videoCard}
                key={`${item.numero}-${item.titulo}-${item.tipo}`}
              >
                <div className={styles.videoWrapper}>
                  {item.formato === "youtube" ? (
                    <iframe
                      src={item.video}
                      title={`${item.titulo} — ${item.tipo}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video controls preload="metadata">
                      <source src={item.video} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  )}

                  <span className={styles.videoNumber}>{item.numero}</span>
                </div>

                <div className={styles.videoInfo}>
                  <span className={styles.videoType}>{item.tipo}</span>

                  <h3>{item.titulo}</h3>

                  <p>{item.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto}>
        <div className={styles.interno}>
          <span className={styles.label}>MAIS DO QUE UM VÍDEO</span>

          <h2>
            Mostrar o que
            <br />
            existe por trás.
          </h2>

          <p>
            Um vídeo institucional pode apresentar uma empresa, mas também pode
            mostrar sua personalidade, aproximar pessoas e fazer uma marca ser
            lembrada.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.interno}>
          <span>VAMOS CONVERSAR?</span>

          <h2>
            Sua empresa também
            <br />
            tem uma história para contar.
          </h2>

          <a
            href="https://wa.me/5554981168850"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a gente
          </a>
        </div>
      </section>

      <Rodape />
      <Whats />
    </>
  );
}
