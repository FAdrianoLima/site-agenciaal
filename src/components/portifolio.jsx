import * as React from "react";
import styles from "../styles/Cursos.module.css";
import Link from "next/link";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#033c5a",
    color: "#fff",
    with: "100%",
    maxWidth: "30rem",
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
    padding: "1rem",
    borderRadius: ".5rem",
  },
}));

export default function Portifolio() {
  return (
    <>

      <section
        className={styles.background}
        style={{ paddingBottom: "2.5rem", paddingTop:"0rem" }}
      >
        <div className={styles.interno}>
          
          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/fagner.png"
            />
          </div>
          <h3>Fagner Perotto</h3>
            <p>Diretor de Operações</p>
          </div>
          
          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/everon.png"
            />
          </div>
          <h3>Everon borges</h3>
            <p>Desenvolvedor Senior</p>
          </div>

          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/erick.png"
            />
          </div>
          <h3>Erick Rech</h3>
            <p>Edição de Vídeo/Criação</p>
          </div>

          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/fagner.png"
            />
          </div>
          <h3>Fagner Perotto</h3>
            <p>Diretor de Operações</p>
          </div>

          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/mariana.png"
            />
          </div>
          <h3>Mariana Gonçalves</h3>
            <p>Social Media/Planejamento</p>
          </div>

          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/adriano.png"
            />
          </div>
          <h3>Adriano de Lima</h3>
            <p>Criação</p>
          </div>

          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/jope.png"
            />
          </div>
          <h3>José Luis Alles</h3>
            <p>Design Gráfico</p>
          </div>

          <div className={styles.box}>
          <div className={styles.img}>
          <img
          src="/static/images/quemsomos/mariana.png"
            />
          </div>
          <h3>Mariana Gonçalves</h3>
            <p>Social Media/Planejamento</p>
          </div>
        

        </div>
      </section>
    </>
  );
}
