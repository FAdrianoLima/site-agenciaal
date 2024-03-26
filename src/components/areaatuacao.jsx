import * as React from "react";
import Modal from "./modal";
import styles from "../styles/Areaatuacao.module.css";

function AreaAtuacao() {
  const [texto, setTexto] = React.useState("");
  const [titulo, setTitulo] = React.useState("");
  const [icone, setIcone] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const showModal = (areaAtuacao) => {
    switch (areaAtuacao) {
      case "gestao":
        setTexto(`Lorem ipsum dolor sit amet. Non dolorem error sit repellendus explicabo in asperiores laudantium ad necessitatibus nobis..`);
        setTitulo("Consultoria em Gestão");
        setIcone("static/images/gestao.png");
        break;
      case "logistica":
        setTexto(`Lorem ipsum dolor sit amet. Non dolorem error sit repellendus explicabo in asperiores laudantium ad necessitatibus nobis..`);
        setTitulo("Consultoria em Logística");
        setIcone("static/images/logistica.png");
        break;
        case "treinamento":
          setTexto(`Lorem ipsum dolor sit amet. Non dolorem error sit repellendus explicabo in asperiores laudantium ad necessitatibus nobis..`);
          setTitulo("Treinamento de Lideranças");
          setIcone("static/images/treinamento.png");
          break;
    }

    toggleModal();
  };

  return (
    <section className={styles.background}>
      <div className={styles.interno}>
       {/*
        <div className={styles.titulo}>
          <div>
            <h2 style={{ margin: "0px", lineHeight: "1.5rem" }}>Serviços</h2>
            <h2 style={{ paddingBottom: "2.5rem", fontWeight: "normal" }}>
              Prestados
            </h2>
          </div>
        </div>
       */}

        <div className={styles.content}>
          <div
            className={styles.box}
          >
            <img className={styles.img1} src="/static/images/logistica.png" alt="Icone" />
            <img className={styles.img2} src="/static/images/logistica-cinza.png" alt="Icone" />
            <h4>TRABALHO TRANSPARENTE. <br />
              CASAS ENCANTADORAS. </h4>
              <p>
              Como uma construtora de Passo Fundo, com 35 anos de atuação, entendemos os desejos dos clientes e os interpretamos em forma de projetos de casas de alto padrão, que se transformam em lares aconchegantes e cheios de estilo.
              </p>
            <button className={styles["saiba-mais"]}>Construa a sua Casa</button>
         
          </div>
          <div
            className={styles.box}
          >
            <img className={styles.img1} src="/static/images/logistica.png" alt="Icone" />
            <img className={styles.img2} src="/static/images/logistica-cinza.png" alt="Icone" />
            <h4>TRABALHO EFICAZ. <br />
            EMPRESAS SATISFEITAS. </h4>
              <p>
              Para uma empresa alcançar o sucesso, uma estrutura eficiente é essencial. Nós projetamos espaços de acordo com a necessidade de cada indústria ou corporação.
              </p>
            <button className={styles["saiba-mais"]}>Construa sua Empresa</button>
         
          </div>
          <div
            className={styles.box}
          >
            <img className={styles.img1} src="/static/images/logistica.png" alt="Icone" />
            <img className={styles.img2} src="/static/images/logistica-cinza.png" alt="Icone" />
            <h4>TRABALHO TRANSPARENTE. <br />
              CASAS ENCANTADORAS. </h4>
              <p>
              Como uma construtora de Passo Fundo, com 35 anos de atuação, entendemos os desejos dos clientes e os interpretamos em forma de projetos de casas de alto padrão, que se transformam em lares aconchegantes e cheios de estilo.
              </p>
            <button className={styles["saiba-mais"]}>Construa a sua Casa</button>
         
          </div>

       
         
        </div>
      </div>
      <Modal
        open={open}
        toggleModal={toggleModal}
        texto={texto}
        titulo={titulo}
        icone={icone}
      />
    </section>
  );
}

export default AreaAtuacao;
