import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Servicos.module.css";
import Link from "next/link";
import RodapeAl from "../components/rodape-al";

export default function Design() {
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
              Design
              </h3>
            </p>
          </div>

          <div className={`${styles.box}`}
          style={{maxWidth:"80rem"}}
          >
            <p style={{ fontSize: "24px",  }}>
            Com o Design de Software, você pode criar uma aplicação personalizada que inclua uma interface agradável e uma arquitetura funcional. Isso ajuda a impulsionar o seu negócio e garantir que o seu produto se destaque no mercado. Com a nossa expertise em Design de Software, podemos ajudá-lo a criar um produto que atenda às necessidades específicas do seu negócio e aumente a satisfação dos clientes.
            </p>
          </div>
        </div>


        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/design-01.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3> Design de Interface de <a style={{ color: "#25B65D" }}>Usuário (UI) </a></h3>
              <p style={{marginTop:"2rem"}}>
              O Design de Interface de Usuário (UI) envolve a criação de interfaces visuais atraentes e fáceis de usar para os usuários finais. Nossa equipe pode ajudá-lo a projetar uma interface de usuário que se adapte às necessidades do seu público-alvo e melhore a experiência do usuário em geral.
              </p>
              <Link legacyBehavior  href="/contato">
              <button className={styles.button1}>
                Quero!
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link legacyBehavior  href="/cases"> 
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
              <h3> Design de Experiência do <a style={{ color: "#25B65D" }}>Usuário (UX) </a></h3>
              <p style={{marginTop:"2rem"}}>
              O Design de Experiência do Usuário (UX) é uma abordagem centrada no usuário que envolve a criação de experiências de usuário que sejam intuitivas e agradáveis. Nossa equipe pode ajudá-lo a projetar uma experiência do usuário que se adapte às necessidades do seu público-alvo e promova a interação com a sua aplicação.
              </p>
              <Link legacyBehavior  href="/contato">
              <button className={styles.button1}>
                Quero um UX!
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link legacyBehavior  href="/cases"> 
              <button className={styles.button2}>
              Conheça nossos Cases de Sucesso
              </button>
              </Link>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/design-02.png"
            />
          </div>
        </div>

        <div style={{marginTop:"5rem"}} className={styles.interno}>
          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/design-03.png"
            />
          </div>

          <div className={`${styles.box}`}>
            <p>
              <h3>Design de <a style={{ color: "#25B65D" }}>Arquitetura</a>  de Software</h3>
              <p style={{marginTop:"2rem"}}>
              A Arquitetura de Software é a estrutura subjacente que suporta uma aplicação. O Design de Arquitetura de Software envolve a criação de uma estrutura sólida e escalável que possa lidar com as demandas do seu negócio. Nossa equipe de especialistas pode ajudá-lo a projetar uma arquitetura de software que se adapte às necessidades do seu negócio e promova um desempenho consistente.
              </p>
              <Link legacyBehavior  href="/contato">
              <button className={styles.button1}>
                Quero!
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link legacyBehavior  href="/cases"> 
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
              <h3>Design de Software <a style={{ color: "#25B65D" }}> Personalizado </a> </h3>
              <p style={{marginTop:"2rem"}}>
              Oferecemos serviços personalizados de Design de Software que atendam às necessidades específicas do seu negócio. Podemos trabalhar com você para projetar uma solução personalizada que atenda às suas necessidades exclusivas e promova o crescimento do seu negócio. Nossa equipe de especialistas em Design de Software pode ajudá-lo a criar uma solução que seja única e atenda às suas necessidades comerciais.
              </p>
              <Link legacyBehavior  href="/contato">
              <button className={styles.button1}>
                Quero um app
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link legacyBehavior  href="/cases"> 
              <button className={styles.button2}>
              Conheça nossos Cases de Sucesso
              </button>
              </Link>
            </p>
          </div>

          <div className={`${styles.box}`}>
            <img
            src="/static/images/servicos/design-04.png"
            />
          </div>
        </div>


      </section>

    



      <Rodape />
      <RodapeAl />
    </>
  );
}
