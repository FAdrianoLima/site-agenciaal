import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Blog.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";
import Portifolio from "../components/portifolio";

export default function Blog02() {
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
        <div className={styles.box} style={{maxWidth:"60rem"}}>
            <h3
              style={{ fontWeight: "600", fontSize: "70px", color:"#29D66C", lineHeight:"74px", textAlign:"center"}}
            >
            O Ano de 2020 marca o maior consumo e vídeo na internet
            </h3>
            <p>
              <p className={styles.data} style={{ color: "#25b65d" }}>28 / 04 / 2022 &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                src="/static/images/bolinha.png"
                />
                <a style={{fontWeight:"400", color:"#393939"}}>&nbsp;&nbsp;&nbsp;&nbsp; por &nbsp;&nbsp;&nbsp;&nbsp;</a>
                <b className={styles.quem}>
                Fagner Perotto &nbsp;&nbsp;&nbsp;&nbsp;
                </b> 
                <img
                src="/static/images/degrade.png"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  style={{width:"100px"}}
                src="/static/images/logo-cinza.png"
                />
              </p>

            </p>


            <span className={styles.span}>

            <p>
            Segundo dados da CISCO, empresa especializada em analisar como as pessoas se conectam, e o Brasil é o segundo país do mundo com o maior número de visualizações em plataformas de vídeos, com mais de 11 bilhões de views mensais e cerca de 96% de usuários na web que consomem conteúdo em vídeo.


            </p>
            <p>Diante do crescimento do mercado, 29 profissionais da área de tecnologia e empreendedorismo, como Paula Bellizia (CEO da Microsoft), Luis Justo (CEO do Rock in Rio), Camilo Coutinho (Play de Prata), Arnon de Mello (VP da NBA Brasil) e Fátima Pissara (General Manager da VEVO Brasil), trazem suas previsões sobre o futuro do segmento de streaming no país e dão dicas para quem deseja investir no segmento.</p>
            <p>“Durante a edição anterior do material, atingimos mais de 20 mil downloads e, para esse ano, as perspectivas são ainda mais positivas. O setor nunca esteve tão aberto a novos negócios e é a hora de explorá-lo cada vez mais. Por isso, nos vemos como responsáveis por apontar as tendências do mercado, orientar os leitores por meio das experiências de grandes profissionais e mostrar que existem novas ferramentas capazes de disseminar o conteúdo e trazer um retorno financeiro. Queremos que mais pessoas tenham acesso a esse conteúdo e possam criar novas estratégias, tirar seus projetos do papel e investir em seu próprio negócio”, finaliza Gustavo Caetano, CEO da Samba Tech. (#Envolverde)


</p>
            
              <img
                style={{width:"100%", maxWidth:"60rem", marginTop:"2rem"}}
              src="/static/images/blog/youtube-ads.jpg"
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
        <div className={styles.interno}>
         
        </div>
      </section>



      <Rodape />
      <RodapeNewFly />
    </>
  );
}
