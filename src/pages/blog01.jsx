import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Blog.module.css";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import RodapeAl from "../components/rodape-al";

export default function Blog01() {
  return (
    <>
      <Menu />
      <section className={styles.backgroundimg}>
        <div className={styles.interno}>
          <div className={styles.box}></div>

          <div className={styles.box2}>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "200px" }} className={styles.background}>
        <div className={styles.interno2}>
        <div className={styles.box} style={{maxWidth:"60rem"}}>
            <h3
              style={{ fontWeight: "600", fontSize: "70px", color:"#29D66C", lineHeight:"74px", textAlign:"center"}}
            >
              Inteligência Artificial aplicada ao marketing digital
            </h3>
            <p>
              <p className={styles.data} style={{ color: "#25b65d" }}>31 / 05 / 2023 &nbsp;&nbsp;&nbsp;&nbsp;
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
                src="/static/images/Logo-Horizontal.png"
                />
              </p>

            </p>


            <span className={styles.span}>

            <p>
            Nunca mais fomos os mesmos desde que a tecnologia foi apresentada a nós. Prova disso são as diversas ferramentas voltadas à comunicação e informação, por exemplo, que facilitam muitas de nossas atividades no dia a dia.
            </p>
            <p>A Inteligência Artificial é uma das soluções que está cada vez mais presente no cotidiano. Ela veio para ficar e certamente revolucionará de forma ainda maior a rotina de muitos setores.</p>
            <p>O marketing digital é um deles! Sistemas de IA e modelos de linguagem aplicados às suas práticas, como o ChatGPT, já auxiliam e vão colaborar ainda mais com as estratégias das empresas.
</p>
            <p>Vamos falar mais sobre isso?</p>
            <p><b>O que é a Inteligência Artificial?</b></p>
            <p>A Inteligência Artificial é uma área que busca reproduzir comportamentos tipicamente humanos por meio de softwares. Na prática, ela possibilita que computadores e outros dispositivos móveis realizem atividades que normalmente são feitas por pessoas.</p>
            <p>Sem intervenção de usuários, as ferramentas de IA são capazes de executar muitas tarefas de forma automática, seguindo padrões previamente estabelecidos. Isso contribui com uma série de funções nos ambientes organizacionais, permitindo que os colaboradores dediquem seu tempo e esforço de maneira mais eficiente a outras atividades.</p>
            <p>Uma das principais ramificações da IA é o Aprendizado de Máquina (Machine Learning, em inglês). Nesse caso, as máquinas aprendem a partir de decisões tomadas, adquirindo a capacidade de prever comportamentos de forma automática.</p>
            <p>Seus algoritmos são capazes de analisar grandes quantidades de dados com excelência, permitindo a realização de análises preditivas, ou seja, previsões.</p>
            <p><b>Como a Inteligência Artificial pode contribuir com o marketing digital?</b></p>
            <p>Aliada à expertise humana, a Inteligência Artificial pode facilitar uma série de estratégias relacionadas ao marketing digital. Entre as principais, estão: </p>
            <p><b>Comunicação com o cliente</b></p>
            <p>O relacionamento com o público pode ganhar mais rapidez e eficiência por meio dos chatbots. Essas janelas de conversa funcionam com o auxílio da IA, que utiliza processamento de linguagem natural e dados do atendimento ao cliente para responder a uma grande quantidade de questionamentos.</p>
            <p><b>Mídia paga</b></p>
            <p>A Inteligência Artificial também contribui para a criação de anúncios personalizados, desenvolvidos até mesmo para um usuário específico. Isso mesmo! Com base nos dados fornecidos pelo time de criação, o Machine Learning interpreta quais combinações são relevantes para determinados perfis de consumidores, utilizando as informações fornecidas por eles.</p>
            <p><b>Produção de conteúdo</b></p>
            <p>Lançado recentemente e palco de muitas discussões, o ChatGPT também desempenha um papel fundamental nas estratégias de produção de conteúdo nos últimos meses. Esse modelo, treinado com um grande banco de dados, gera respostas automáticas. Essas respostas podem ser excelentes opções de referência para redatores, profissionais de mídia social e muitos outros profissionais de marketing e comunicação.</p>
            <p><b>Viu só como a Inteligência Artificial pode ser uma excelente aliada do marketing digital?</b></p>
              <p>Acompanhe novidades em nossas Redes Sociais:</p>

              <ul className={`${styles.social_media}`}>
          <li>
            <Link legacyBehavior  href="https://www.facebook.com/newfly.digital">
              <a target="_blank">
                <img src="/facebook-verde.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior  href="https://www.instagram.com/newflydigital/">
              <a target="_blank">
                <img src="/Instagram-verde.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior  href="https://www.linkedin.com/company/newflydigital/">
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
      <RodapeAl />
    </>
  );
}
