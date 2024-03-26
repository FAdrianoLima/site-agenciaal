import * as React from "react";
import styles from "../styles/Frame06.module.css";

const reveal = () => {
  const reveals = document.querySelectorAll(
    `.${styles["left-right"]}, .${styles["right-left"]}`
  );

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(styles.active);
    }
  }
};

function Frame06() {
  React.useEffect(() => {
    document.addEventListener("scroll", reveal);
  }, []);

  return (
    <section className={styles.background}>
      <div className={styles.interno} style={{ paddingTop: "2.5rem" }}>
        <div className={styles.box}>
          <img
            src="/static/images/frame6.png"
            className={`${styles.modelo} ${styles["left-right"]}`}
            alt="modelo"
          />
        </div>
        <div className={`${styles.box} ${styles["right-left"]}`}>
          <h3>
          João Agliardi
          </h3>
          <h4>Mestre em Gestão de Negócios e <br/>
          + de 10 anos de atuação em gestão.</h4>
          
          <p>
          João Agliardi, além de fundador e diretor da Agliardi Consultoria Executiva, atua como consultor executivo para rede postos, empresas de logística e varejistas. É mestre em Gestão de Negócios: estratégia e competitividade, pós graduado em Logística e Supply Chain Management e graduado em Relações Internacionais e Diplomacia e em Administração de empresas.
          </p>
          <p>
          Em sua atuação profissional, são mais de 10 anos de experiência em gestão administrativa comercial, operacional e logística. Concepção e execução de projetos em empresas de grande porte, além de desenvolvimento de equipes de alta performance.
          </p>
          <p>
          João é um otimista, bem humorado, obstinado e inovador. Acredita que o destino depende de cada um, busca incansavelmente melhorias no ambiente e se realiza ao promover mudanças em processos, culturas e pessoas.
          </p>
          
          
        </div>
      </div>
      <div className={styles.bg_img} />
    </section>
  );
}

export default Frame06;
