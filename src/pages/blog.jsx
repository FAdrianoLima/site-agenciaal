import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import RodapeAl from "../components/rodape-al";

export default function Blog() {
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

      <section style={{ marginTop: "0px" }} className={styles.background}>
        <div className={styles.interno}>
          <p style={{ fontSize: "36 px" }}>
            <h3
              style={{ fontWeight: "600", fontSize: "64px", color:"#29D66C", lineHeight:"84px"}}
            >
              Fique por dentro
            </h3>
            <p>É importante sabermos o que acontece no mercado <br />para podermos tomar as melhores decisões e dar o <br />direcionamento correto nas nossas ações de marketing.</p>
          </p>
        </div>
      </section>

      <section style={{ marginTop: "-130px" }} className={styles.background}>
      <Link legacyBehavior  href="/blog05">
        <div className={styles.interno2}>
         
            <img
            src="/static/images/blog/blog-05.png"
            />

 <p style={{marginLeft:"2rem", cursor:"pointer"}}>       
<h4>14 / Maio / 2023</h4>
              <h2 style={{color:"#393939"}}>Inteligência Artificial aplicada ao marketing digital</h2>
              <p>Sistemas de IA e modelos de linguagem aplicados às suas práticas, como o ChatGPT, já auxiliam e vão colaborar ainda mais com as estratégias das empresas.</p></p>
          </div>
          </Link>
      </section>


      <section style={{ marginTop: "-100px" }} className={styles.background}>
        <div className={styles.interno}>
          <Link legacyBehavior  href="/blog02">
          <div className={styles.blog}>
            <img
            src="/static/images/blog/blog-02.png"
            />
            <span>
              <h4>Vídeos/Animações</h4>
              <h2>XXXXXXXXXXXXX</h2>
              <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </span>
          </div>
          </Link>

          <Link legacyBehavior  href="/blog05">
          <div className={styles.blog}>
            <img
            src="/static/images/blog/blog-05.png"
            />
            <span>
              <h4>Conhecimento</h4>
              <h2>Como sua empresa pode fazer campanhas de sucesso no Google Ads</h2>
              <p>Sistemas de IA e modelos de linguagem aplicados às suas práticas, como o ChatGPT, já auxiliam e vão colaborar ainda mais com as estratégias das empresas.</p>
          </span>
          </div>
          </Link>

          <Link legacyBehavior  href="/blog01">
          <div className={styles.blog}>
            <img
            src="/static/images/blog/blog-01.png"
            />
            <span>
              <h4>Conhecimento</h4>
              <h2>Inteligência Artificial aplicada ao marketing digital</h2>
              <p>Sistemas de IA e modelos de linguagem aplicados às suas práticas, já auxiliam e vão colaborar ainda mais com as estratégias das empresas.</p>
          </span>
          </div>
          </Link>
        </div>
      </section>
                          {/*
                            Matéria antigas do Blog
                          */}
      <section style={{ marginTop: "-100px" }} className={styles.background}>
        <div className={styles.interno}>
          <Link legacyBehavior  href="/blog02">
          <div className={styles.blog}>
            <img
            src="/static/images/blog/blog-02.png"
            />
            <span>
              <h4>Vídeos/Animações</h4>
              <h2>O ano de 2022 marca o maior consumo de vídeo na internet</h2>
              <p>Segundo dados da CISCO, o Brasil é o segundo país do mundo com o maior número de visualizações em plataformas de vídeos</p>
          </span>
          </div>
          </Link>

          <Link legacyBehavior  href="/blog03">
          <div className={styles.blog}>
            <img
            src="/static/images/blog/blog-03.png"
            />
            <span>
              <h4>Redes Sociais</h4>
              <h2>Como utilizar o Linkedin para gerar mais contatos e negócios</h2>
              <p>Se a sua empresa ainda não está apostando no LinkedIn, existe uma grande chance de estar perdendo oportunidades...</p>
          </span>
          </div>
          </Link>

          <Link legacyBehavior  href="/blog04">
          <div className={styles.blog}>
            <img
            src="/static/images/blog/blog-04.png"
            />
            <span>
              <h4>Conhecimento</h4>
              <h2>Sua empresa está preparada para investir em Marketing?</h2>
              <p>Descubra como nossas ações de mídia paga e Inbound Marketing ajudaram a aumentar os leads</p>
          </span>
          </div>
          </Link>
        </div>
      </section>



      <Rodape />
      <RodapeAl />
    </>
  );
}
