import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Servicos.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";
import Portifolio from "../components/portifolio";

export default function Tecnologia() {
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
              Tecnologia
              </h3>
            </p>
          </div>

          <div className={`${styles.box}`}
            style={{ maxWidth: "80rem" }}
          >
            <p style={{ fontSize: "24px",  }}>
            Todas as empresas podem aproveitar as inovações tecnológicas para otimizar seus resultados. Diversas ferramentas e tecnologias emergentes estão transformando a maneira como criamos e comercializamos produtos e serviços. Confira algumas dessas soluções:
            </p>
          </div>
        </div>


        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/tecnologia-01.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3><a style={{ color: "#25B65D" }}> Website</a> - Presença digital com autoridade</h3>
              <p style={{marginTop:"2rem"}}>
              Plataformas com design inovador e com tecnologia própria, para garantir a segurança das dados e informações, totalmente personalizado e responsivo para o sucesso do seu negócio. Possui sistema gerenciável que lhe dá autonomia na administração do conteúdo, sem intervenção da agência. Elaboramos um planejamento com estudo do público alvo, aplicações das mais modernas técnicas de UX (experiência do usuário) e UI (interface do usuário). Os projetos também contemplam o uso de regras de SEO avançado que asseguram desempenho e melhor indexação nos mecanismos de busca. Fornecemos toda a orientação necessária quanto à arquitetura do site e auxiliamos no desenvolvimento do conteúdo estratégico e otimizado. Nossa preocupação é a performance e presença digital da sua empresa. Torne sua marca ativa no ambiente digital. 
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero um site
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
              <h3><a style={{ color: "#25B65D" }}> Sistemas</a> - Soluções inteligentes</h3>
              <p style={{marginTop:"2rem"}}>
              Plataformas com design inovador e com tecnologia própria, para garantir a segurança das dados e informações, totalmente personalizado e responsivo para o sucesso do seu negócio. Possui sistema gerenciável que lhe dá autonomia na administração do conteúdo, sem intervenção da agência. Elaboramos um planejamento com estudo do público alvo, aplicações das mais modernas técnicas de UX (experiência do usuário) e UI (interface do usuário). Os projetos também contemplam o uso de regras de SEO avançado que asseguram desempenho e melhor indexação nos mecanismos de busca. Fornecemos toda a orientação necessária quanto à arquitetura do site e auxiliamos no desenvolvimento do conteúdo estratégico e otimizado. Nossa preocupação é a performance e presença digital da sua empresa. Torne sua marca ativa no ambiente digital. 
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero um sistema
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
            src="/static/images/servicos/tecnologia-02.png"
            />
          </div>
        </div>

        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/tecnologia-03.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3><a style={{ color: "#25B65D" }}> Loja Virtual</a> - O futuro do consumo</h3>
              <p style={{marginTop:"2rem"}}>
              Nossas plataformas de ecommerce, com navegação simplificada e design inteligente, são desenvolvidas através de tecnologia que permite segurança total dos dados e informações, tanto da empresa, quanto do usuário. Planejadas para vendas otimizadas e conversões, também oferece  a compra num clique (one step check out). O sistema é totalmente integrado com os principais meios de pagamentos e logísticas de mercado. A inserção de cadastro ilimitado de departamento e itens é um dos variados diferenciais, além de já possuir a lógica de promoções e campanhas  como cupom de desconto, frete grátis e outras. A loja perfeita para alavancar o seu negócio e faturar ainda mais.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero uma loja
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
              <h3><a style={{ color: "#25B65D" }}> Aplicativos </a> - Esteja sempre próximo do seu cliente</h3>
              <p style={{marginTop:"2rem"}}>
              Sendo o mobile atualmente a primeira tela dos usuários, torna o uso de aplicativos uma possibilidade ainda maior de interação, relacionamento, vendas e base de dados para as empresas. As nossas equipes de planejamento, design e desenvolvimento trabalham em conjunto para oferecer a melhor experiência ao usuário, avaliando com criticidade a arquitetura, design e funcionalidades. Trazendo para a plataforma o melhor desempenho e tecnologia e também a facilidade de atualizações para um mundo que se encontra em constante transformação.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero um app
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
            src="/static/images/servicos/pc.png"
            />
          </div>
        </div>

        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/pc.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3>Tendências em <a style={{ color: "#25B65D" }}> Tecnologia</a>  e Novas Mídias </h3>
              <p style={{marginTop:"2rem"}}>
              Nossas plataformas de ecommerce, com navegação simplificada e design inteligente, são desenvolvidas através de tecnologia que permite segurança total dos dados e informações, tanto da empresa, quanto do usuário. Planejadas para vendas otimizadas e conversões, também oferece  a compra num clique (one step check out). O sistema é totalmente integrado com os principais meios de pagamentos e logísticas de mercado. A inserção de cadastro ilimitado de departamento e itens é um dos variados diferenciais, além de já possuir a lógica de promoções e campanhas  como cupom de desconto, frete grátis e outras. A loja perfeita para alavancar o seu negócio e faturar ainda mais.
              </p>
              <Link href="/contato">
              <button className={styles.button1}>
                Quero novas mídias
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



      </section>

    



      <Rodape />
      <RodapeNewFly />
    </>
  );
}
