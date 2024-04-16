import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Cases.module.css";
import { Paper, Button } from "@mui/material";
import Link from "next/link";
import RodapeAl from "../components/rodape-al";

export default function Allora() {
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
               ALLORA JÓIAS
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
            Loja Virtual
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
            Fotografias
          </p>
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno2}>
          <img src="/static/images/cases/allora-01.png" alt="" />

          <span style={{margin:"5rem 0rem"}}></span>

          <p style={{ display:"flex", alignItems:"flex-start"}}>
          <p style={{ color: "#28B3C7", fontWeight: "600", fontSize: "24px"}}>Logotipo</p>
          <img src="/static/images/cases/allora-02.png" alt="" />
          </p>

          <span style={{ margin: "5rem 0rem" }}></span>
          
          <div>
            <img src="/static/images/cases/allora-09.png" alt="" />
          </div>

          <span style={{ margin: "0rem 0rem" }}></span>

         

          <div className={styles.interno}>
            <div className={styles.box}>
 <img src="/static/images/cases/allora-04.png" alt="" />
            </div>
            <div className={styles.box} style={{marginTop:"10rem"}}>
              <p><b style={{fontSize:"24px"}}>Cliente</b>
                <h3 style={{color:"#28B3C7", fontSize:"36px", fontWeight:"600"}}>ALLORA JOIAS</h3>
             
              <p style={{marginTop:"2rem"}}>Criação de Identidade</p>
                <p>Desenvolvimento do Logo</p>
                <p>Loja Virtual</p>
                <p>Rede Sociais</p>
              </p>
              <div className={styles.box3}>
              <img src="/static/images/cases/allora-05.png" alt="" />
              </div>
            </div>
          </div>
          
          <div style={{marginBottom:"-25rem", zIndex:"12345"}}>
          <img src="/static/images/cases/allora-06.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.background} style={{backgroundColor:"#F2F4F5", paddingTop:"24rem", zIndex:"1234"}}>
        <div className={styles.interno2}>
          
         
             
          
            <img src="/static/images/cases/allora-07.png" alt="" />
          </div>
          
      </section>



      <Rodape />
      <RodapeAl />
    </>
  );
}
