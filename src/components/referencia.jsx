
import React, { useEffect } from "react";
//import Carousel from "react-elastic-carousel";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
//import App from "./carousel";
import Link from "next/link";
import styles from "../styles/Referencia.module.css";

const CardImage = ({ imagem = "" }) => {
  return (
    <div className={styles.card}>
      <img src={`/Quem-somos/${imagem}`} alt={imagem} />
    </div>
  );
};

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

function Referencia() {
  useEffect(() => {
    document.addEventListener("scroll", reveal);
  }, []);

  return (
    <section className={styles.background} >
      <div className={styles.interno}>
        <div className={`${styles.box} `} style={{ maxWidth: "80rem" }}>
          {/*<App />*/}

          <Carousel
            className={`${styles["carousel-root"]} ${styles["left-right"]}`}
            fullHeightHover={true}
            navButtonsAlwaysVisible
          >
            <CardImage imagem="../static/images/Carrossel-01.png" />
            <CardImage imagem="../static/images/Carrossel-01.png" />
            <CardImage imagem="../static/images/Carrossel-01.png" />
          </Carousel>
        </div>
      </div>
    
        
        
    </section>
  );
}

export default Referencia;
