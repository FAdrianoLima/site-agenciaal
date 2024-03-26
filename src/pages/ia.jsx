import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Servicos.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";
import Portifolio from "../components/portifolio";

export default function Ia() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno4}>
            <img src="/static/images/cases-01.png" alt="" />
        </div>
      </section>

      <section style={{ marginTop: "0px" }} className={styles.background}>
        <div style={{alignItems:"center"}} className={styles.interno2}>
          <div className={`${styles.box}`}>
            <p style={{ fontSize: "24px", fontWeight:"300", lineHeight:"40px" }}>
          
              <h3
                style={{ fontWeight: "600", fontSize: "48px", color:"#25B65D" }}
                className={styles.titulo}
              >
              Inteligência Artificial
              </h3>
            </p>
          </div>

          <div className={`${styles.box}`}
          style={{maxWidth:"80rem"}}
          >
            <p style={{ fontSize: "24px",  }}>
            Somos especializados em desenvolvimento de plataformas digitais personalizadas que incorporam tecnologias de inteligência artificial, incluindo a OpenAI. Nossa equipe de especialistas trabalha em conjunto para criar soluções escaláveis e seguras que impulsionam o crescimento e o sucesso dos negócios de nossos clientes. Com a utilização de tecnologias avançadas de aprendizado de máquina e análise de dados, oferecemos soluções inovadoras e eficientes que melhoram a eficiência dos processos internos e promovem a tomada de decisões baseadas em dados.
            </p>
          </div>
        </div>


        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/ia-01.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3>Integração com <a style={{ color: "#25B65D" }}> Chat GPT</a></h3>
              <p style={{marginTop:"2rem"}}>
              Utilizando a tecnologia de Processamento de Linguagem Natural (NLP), nossa equipe pode integrar Chatbots com GPT (Generative Pre-trained Transformer) para criar experiências excepcionais para os usuários. Os chatbots com GPT podem ser programados para responder perguntas e até mesmo criar conteúdo personalizado, o que melhora a eficiência dos processos internos e promove uma maior satisfação dos clientes.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero integração!
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/cases"> 
              <button className={styles.button2}>
              Conheça nossos Cases de Sucesso
              </button>
              </Link>
            </p>
          </div>
        </div>


        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <p>
              <h3>Soluções personalizadas de <a style={{ color: "#25B65D" }}> IA</a></h3>
              <p style={{marginTop:"2rem"}}>
              Além dos serviços acima, nossa agência pode criar soluções personalizadas de inteligência artificial que atendam às necessidades específicas de nossos clientes. Podemos trabalhar com você para desenvolver soluções personalizadas que ajudem a aumentar a eficiência, aprimorar o atendimento ao cliente e otimizar o desempenho geral do seu negócio.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero IA
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/cases"> 
              <button className={styles.button2}>
              Conheça nossos Cases de Sucesso
              </button>
              </Link>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/ia-02.png"
            />
          </div>
        </div>

        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/ia-03.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3><a style={{ color: "#25B65D" }}> Análise</a>  de Dados</h3>
              <p style={{marginTop:"2rem"}}>
              A inteligência artificial pode ser usada para analisar grandes conjuntos de dados, identificar tendências e gerar insights valiosos que podem ser usados para tomar decisões estratégicas. Nossa equipe de especialistas em inteligência artificial pode ajudá-lo a utilizar essas tecnologias para obter uma visão mais profunda dos seus dados e otimizar o seu desempenho.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero análise de dados
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/cases"> 
              <button className={styles.button2}>
              Conheça nossos Cases de Sucesso
              </button>
              </Link>
            </p>
          </div>
        </div>


        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <p>
              <h3>Integração de inteligência com <a style={{ color: "#25B65D" }}> BI, CRM, ERP </a> </h3>
              <p style={{marginTop:"2rem"}}>
              Integrar a inteligência artificial com outras tecnologias empresariais, como Business Intelligence (BI), Customer Relationship Management (CRM) e Enterprise Resource Planning (ERP), pode melhorar significativamente a eficiência dos processos internos e promover uma tomada de decisão mais precisa e embasada em dados. Nós podemos ajudar a integrar essas tecnologias para que trabalhem juntas de forma eficaz.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero IA
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/cases"> 
              <button className={styles.button2}>
              Conheça nossos Cases de Sucesso
              </button>
              </Link>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/ia-04.png"
            />
          </div>
        </div>


      </section>

    



      <Rodape />
      <RodapeNewFly />
    </>
  );
}
