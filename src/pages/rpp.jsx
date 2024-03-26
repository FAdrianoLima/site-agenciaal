import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Cases.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";
import RodapeAl from "../components/rodape-al"; 

export default function Rpp() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno4}>
            <img src="/static/images/cases-01.png" alt="" />
        </div>
      </section>

      <section style={{ marginTop: "100px" }} className={styles.background}>
        <div style={{alignItems:"center"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <p style={{ fontSize: "24px", fontWeight:"300", lineHeight:"40px" }}>
            Cliente
              <h3
                style={{ fontWeight: "600", fontSize: "48px" }}
                className={styles.titulo}
              >
               RPP CONSTRUTORA
              </h3>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <p style={{ fontSize: "24px",  }}>
            Combinamos estratégia, design, comunicação e tecnologia em marketing para oferecer aos nossos clientes uma vantagem competitiva pela transformação digital da sua empresa, assim focando no resultado perante o mercado. Com vídeos, apps, sites, materiais impressos pensados em ações online eficientes levamos ao mercado sua marca de forma diferenciada.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "100px" }} className={styles.background}>
        <div style={{ alignItems: "flex-start" }} className={styles.interno}>
          <p>
            <img
              src="/static/images/bolinha.png"
            />&nbsp;
            Criação de Identidade 
          </p>

          <p>
            <img
              src="/static/images/bolinha.png"
            />&nbsp;
           Desenvolvimento do Logo
          </p>

          <p>
            <img
              src="/static/images/bolinha.png"
            />&nbsp;
            Web Site
          </p>

          <p>
            <img
              src="/static/images/bolinha.png" 
            />&nbsp;
            Rede Sociais
          </p>

          <p>
            <img
              src="/static/images/bolinha.png"
            />&nbsp;
            Vídeos
          </p>
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno2}>
          <img src="/static/images/cases/rpp-01.png" alt="" />

          <span style={{margin:"2rem 0rem"}}></span>

        
          <img src="/static/images/cases/rpp-02.png" alt="" />
         

          <span style={{ margin: "2rem 0rem" }}></span>
          
      
          <img src="/static/images/cases/rpp-03.png" alt="" />
          
          <span style={{ margin: "2rem 0rem" }}></span>
          
      
            <img src="/static/images/cases/rpp-04.png" alt="" />
       
            <span style={{ margin: "2rem 0rem" }}></span>
          
      
          <img
            style={{marginBottom:"-24rem", zIndex:"12345"}}
            src="/static/images/cases/rpp-05.png" alt="" />
          
        </div>
      </section>

      <section className={styles.background} style={{backgroundColor:"#F2F4F5", paddingTop:"24rem", zIndex:"1234"}}>
        <img src="/static/images/cases/rpp-06.png" alt="" />
        <img
           style={{margin:"0rem 1.5rem"}}
          src="/static/images/cases/rpp-07.png" alt="" />
        <img src="/static/images/cases/rpp-08.png" alt="" />         
      </section>

      <section className={styles.background} style={{backgroundColor:"#F2F4F5", paddingTop:"0rem", zIndex:"1234"}}>
      <img src="/static/images/cases/rpp-09.png" alt="" />
        <img
        style={{margin:"0rem 1.5rem"}}
          src="/static/images/cases/rpp-10.png" alt="" />
        <img src="/static/images/cases/rpp-11.png" alt="" />     
      </section>

      
      


      <Rodape />
      <RodapeAl />
    </>
  );
}
