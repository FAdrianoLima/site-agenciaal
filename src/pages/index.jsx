import Banner from "../components/banner";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeAl from "../components/rodape-al";
import styles from "../styles/Quemsomos.module.css";
import  "../styles/Quemsomos.module.css";
import React, { useState } from 'react';
import Link from "next/link";


export default function Home() {

  const [titulo, setTitulo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [hastag, setHastag] = React.useState("");
  const [hastag2, setHastag2] = React.useState("");

  const handleLinkClick1 = () => {
    if (titulo === "Redes Sociais") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Redes Sociais");
      setDescricao(
        "Administração de Redes Sociais | Criação de Publicações para Instagram e Facebook | Padronização de Artes"
      );
      setHastag("#Hashtag1");
      setHastag2("#Hashtag2");
    }
  };

  const handleLinkClick2 = () => {
    if (titulo === "Lojas Virtuais") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Lojas Virtuais");
      setDescricao(
        "Design e funcionalidades personalizadas para o seu negócio"
      );
      setHastag("#Hashtag1");
      setHastag2("#Hashtag2");
    }
  };

  const handleLinkClick3 = () => {
    if (titulo === "Render 3D") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Render 3D");
      setDescricao(
        "Modelamos espaços realistas, permitindo que os usuários se imaginem dentro do projeto. Utilizamos modelos e texturas de alta qualidade para obter os melhores resultados em menos tempo."
      );
      setHastag("#Hashtag1");
      setHastag2("#Hashtag2");
    }
  };

  const handleLinkClick4 = () => {
    if (titulo === "Perfomance") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Perfomance");
      setDescricao(
        "Nossas ações são com foco no agora, mas mirando lá na frente, até porque, tudo que entregamos hoje soluciona as dores do presente para construir negócios de sucesso para o futuro."
      );
      setHastag("#Hashtag1");
      setHastag2("#Hashtag2");
    }
  };

  const handleLinkClick5 = () => {
    if (titulo === "Apps") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Apps");
      setDescricao(
        "Desenvolvimento de aplicativos para Android, iOS, Sistemas Web e integração entre sistemas."
      );
      setHastag("#Hashtag1");
      setHastag2("#Hashtag2");
    }
  };

  const handleLinkClick6 = () => {
    if (titulo === "LabStartup") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("LabStartup");
      setDescricao("Daremos vida ao seu projeto.");
      setHastag("#Hashtag1");
      setHastag2("#Hashtag2");
    }
  };

  const handleLinkClick7 = () => {
    if (titulo === "Sites e Plataformas") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Sites e Plataformas");
      setDescricao(
        "Tem uma ideia de tecnologia e precisa tirar do papel. Vem conversar com nossa equipe."
      );
      setHastag("#inovacao");
      setHastag2("#tecnologia");
    }
  };

  const handleLinkClick8 = () => {
    if (titulo === "SEO e Conteúdo") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("SEO e Conteúdo");
      setDescricao(
        "Hoje estar no mercado e não posicionar sua marca de forma a trazer novos clientes é estar sem norte, nós te ajudamos com Tráfego e criação de conteúdo."
      );
      setHastag("#Hashtag1");
      setHastag2("Hashtag2");
    }
  };

  const handleLinkClick9 = () => {
    if (titulo === "Google Ads") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Google Ads");
      setDescricao(
        "Analistas qualificados que proporcionam as campanhas mais avançadas disponíveis, além de sugestões e dicas que visam seu sucesso!"
      );
      setHastag("#Hashtag1");
      setHastag2("Hashtag2");
    }
  };

  const handleLinkClick10 = () => {
    if (titulo === "Campanha") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Campanha");
      setDescricao(
        "Campanhas de alta performance para aumentar o seu volume de leads, reduzir CPC, CPV, CPL e CPA."
      );
      setHastag("#Hashtag1");
      setHastag2("Hashtag2");
    }
  };

  const handleLinkClick11 = () => {
    if (titulo === "Vídeos") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Vídeos");
      setDescricao(
        "Produção de videos institucionais, para redes sociais, stories, reels, podcasts, filmes publicitários, EAD, motion e vinhetas."
      );
      setHastag("#Hashtag1");
      setHastag2("Hashtag2");
    }
  };

  const handleLinkClick12 = () => {
    if (titulo === "Hospedagem") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Hospedagem");
      setDescricao("O primeiro passo da sua empresa na internet.");
      setHastag("#Hashtag1");
      setHastag2("Hashtag2");
    }
  };

  const handleLinkClick13 = () => {
    if (titulo === "Estudio Podcast") {
      setTitulo("");
      setDescricao("");
      setHastag("");
      setHastag2("");
    } else {
      setTitulo("Estudio Podcast");
      setDescricao("Produza um podcast profissional e impulsione seu negócio!");
      setHastag("#Hashtag1");
      setHastag2("Hashtag2");
    }
  };

  React.useEffect(() => {
    handleLinkClick1();
  }, []);


  
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButton = () => {
    setVideoPlaying(true);
  };

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
  
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
              Somos uma <spam style={{ color: "#29D66C" }}>agência 360º</spam> e{" "}
              <spam style={{ color: "#29D66C" }}>software house</spam>, com
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

          <div className={`${styles.box}`} style={{ maxWidth: '40rem', marginTop:"2rem" }}>
          <div className={styles.video}>
            {!isVideoPlaying && (
              <button className={styles.playButton} onClick={handlePlayButton}>
                <img src="/static/images/quem-somos/play.png" alt="Botão Play" />
              </button>
            )}
            {isVideoPlaying && (
              <iframe
                width="580px"
                height="360px"
                src="https://www.youtube.com/embed/VId7FAW5nl4?autoplay=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ borderRadius:"0px 25px 0px 0px" }}
              ></iframe>
            )}
          </div>
         </div>
          {/*
            <img src="/static/images/quem-somos/play.png" alt="Botão Play" />
          */}


        </div>
      </section>

      <section
        style={{marginTop: "5rem"  }}
        className={styles.background}
        id="servicos"
      >
        <div className={styles.interno}>
          <div className={`${styles.box}`}>
            <div className={styles.interno}>
              <div className={`${styles.box} `}>
                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick1("Redes Sociais")}
                >
                  Redes Sociais
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick2("Lojas Virtuais")}
                >
                  Lojas Virtuais
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick3("Render 3D")}
                >
                  {" "}
                  Render 3D
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick4("Perfomance")}
                >
                  {" "}
                  Perfomance
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick5("Apps")}
                >
                  {" "}
                  Apps
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick6("LabStartup")}
                >
                  {" "}
                  LabStartup
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick13("Estúdio Podcast")}
                >
                  {" "}
                  Estúdio Podcast
                </a>
              </div>
              <div className={`${styles.box} `}>
                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick7("Sites e Plataformas")}
                >
                  {" "}
                  Sites e Plataformas
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick8("SEO e Conteúdo")}
                >
                  {" "}
                  SEO e Conteúdo
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick9("Google Ads")}
                >
                  {" "}
                  Google Ads
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick10("Campanha")}
                >
                  {" "}
                  Campanhas
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick11("Vídeos")}
                >
                  {" "}
                  Vídeos
                </a>

                <a
                  className={`${styles.lista} `}
                  onClick={() => handleLinkClick12("Hospedagem")}
                >
                  {" "}
                  Hospedagem
                </a>
              </div>
            </div>
          </div>

          {titulo && descricao && (
            <div className={`${styles.box} ${styles.bloco2}`}>
              <h2>{titulo}</h2>
              <p>{descricao}</p>
              <p>
                <button className={styles.botao}>{hastag}</button>
                <button className={styles.botao}>{hastag2}</button>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno}>
          <div
            className={`${styles.box} ${styles.texto}`}
            style={{ marginLeft: "2rem" }}
          >
            <p>
              <h2>
                <spam style={{ color: "#29D66C" }}>Marcas que comprovam</spam>{" "}
              </h2>
              <h3 style={{ fontSize: "36px", marginTop: "10px" }}>
                os nossos resultados
              </h3>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno3}>

          <Link href="/tecnologia">
          <div className={styles.opcoes}>
            <div className={`${styles.caixa1} `}>
              <p className="ml-[4rem]">
              <p>Tecnologia</p>
              <span>aplicativos, websites e sistemas personalizados</span>
             </p>
            </div>
          
          </div>
          </Link>

          <Link  href="/design">
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
        
        <Link href="/inovacao">
          <div className={styles.opcoes}>
            <div className={`${styles.caixa3} `}>
              <p className="ml-[4rem]">
              <p>Inovação</p>
              <span>consultoria para a sua tranformação digital</span>
             </p>
              </div>
          </div>
          </Link>
            
          <Link href="/ia">
          <div className={styles.opcoes}>
            <div className={`${styles.caixa4} `}>
              <p className="ml-[4rem]">
              <p>Inteligência Artificial</p>
                <span>Somos especializados em desenvolvimento de plataformas digitais personalizadas que incorporam tecnologias de inteligência artificial, incluindo a OpenAI. 
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
