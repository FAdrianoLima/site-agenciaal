import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Blog.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import RodapeNewFly from "../components/rodape-newfly";
import Portifolio from "../components/portifolio";
import Link from "next/link";

export default function Blog03() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno}>
          <div className={styles.box}></div>

          <div className={styles.box2}>
            <img
              style={{ zIndex: "1234567" }}
              src="/static/images/a-newfly.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: "120px" }} className={styles.background}>
        <div className={styles.interno2}>
          <div className={styles.box} style={{ maxWidth: "60rem" }}>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "70px",
                color: "#29D66C",
                lineHeight: "74px",
                textAlign: "center",
              }}
            >
              Como utilizar o Linkedin para gerar mais contatos e negócios
            </h3>
            <p>
              <p className={styles.data} style={{ color: "#25b65d" }}>
                15 / 03 / 2022 &nbsp;&nbsp;&nbsp;&nbsp;
                <img src="/static/images/bolinha.png" />
                <a style={{ fontWeight: "400", color: "#393939" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp; por &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <b className={styles.quem}>
                  Fagner Perotto &nbsp;&nbsp;&nbsp;&nbsp;
                </b>
                <img src="/static/images/degrade.png" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  style={{ width: "100px" }}
                  src="/static/images/logo-cinza.png"
                />
              </p>
            </p>

            <span className={styles.span}>
              <p>
                Já são mais de 500 milhões de usuários no mundo e cerca de 30
                milhões apenas no Brasil, todos com objetivos relacionados à
                vida profissional. Ou seja, se a sua empresa ainda não está
                apostando no LinkedIn para negócios, existe uma grande chance de
                estar perdendo oportunidades para vendas, marketing e, é claro,
                recrutamento.
              </p>
              <p>
                Mas, se ainda existe um longo caminho a ser percorrido, não se
                preocupe! Neste artigo, vamos explorar a importância desta{" "}
                <Link
                  href="http://www.smartei.com.br/redes-sociais-na-empresa-sao-mesmo-vilas-da-produtividade/">
                  <b
                  style={{color:"#29D66C"}}
                  >rede social no ambiente corporativo</b>
                </Link>
                &nbsp;
                e também dar as dicas fundamentais para você começar a construir
                sua presença como empreendedor por lá. Confira!
              </p>

              <img
                style={{ width: "100%", maxWidth: "60rem", marginTop: "2rem" }}
                src="/static/images/blog/blog-linkedin-materia.jpg"
              />

              <p>Acompanhe novidades em nossas Redes Sociais:</p>

              <ul className={`${styles.social_media}`}>
                <li>
                  <Link href="https://www.facebook.com/newfly.digital">
                    <a target="_blank">
                      <img src="/facebook-verde.png"></img>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/newflydigital/">
                    <a target="_blank">
                      <img src="/Instagram-verde.png"></img>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/newflydigital/">
                    <a target="_blank">
                      <img src="/LinkedIn-verde.png"></img>
                    </a>
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "-100px" }} className={styles.background}>
        <div className={styles.interno}></div>
      </section>

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
