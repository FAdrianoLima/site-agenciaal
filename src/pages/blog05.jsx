import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Blog.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import RodapeNewFly from "../components/rodape-newfly";
import Portifolio from "../components/portifolio";
import Link from "next/link";

export default function Blog04() {
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
              Como sua empresa pode fazer campanhas de sucesso no Google Ads
            </h3>
            <p>
              <p className={styles.data} style={{ color: "#25b65d" }}>
                14 / 08 / 2023 &nbsp;&nbsp;&nbsp;&nbsp;
                <img src="/static/images/bolinha.png" />
                <a style={{ fontWeight: "400", color: "#393939" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp; por &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <b className={styles.quem}>
                  Adriano Lima  &nbsp;&nbsp;&nbsp;&nbsp;
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
              <p>Presença digital, atrair leads e, claro, aumentar as vendas: Descubra aqui como campanhas no Google Ads podem te levar ao sucesso e ao aumento de tráfego.</p>
              <img
                style={{ width: "100%", maxWidth: "60rem", marginTop: "2rem" }}
                src="/static/images/blog/blog-google-ads.jpg"
              />
              <p>
              O Google Ads para empresas é uma forma inovadora de anunciar a sua marca. Alinhada diretamente com as melhores práticas de marketing digital (como o SEO e Inbound), a plataforma, se usada de maneira correta, pode impactar diretamente o sucesso do seu público-alvo.
              </p>
              <p>
              E, consequentemente, valorizar cada centavo aplicado nesse tipo de campanha.
              </p>
              <p>
              Por isso, para saber exatamente como ter lucro com campanhas no GoogleAds, siga com esta leitura e aprenda conosco as melhores dicas para inspirar as suas futuras ações!
              </p>
             <p>
             <h4>
             <b>
             O que é Google Ads para empresas?
             </b>
              </h4>
             </p>

             <p>Hoje conhecida como Google Ads (antigo Google AdWords), a rede de anúncios é uma versátil ferramenta que permite a criação de distintas estratégias de atração de clientes para o seu negócio.</p>
             <p>Mais que isso: ela serve também para monitorar o desempenho de suas campanhas e para consultar especialistas da área a fim de garantir o alinhamento entre os seus projetos e os objetivos estipulados no planejamento.</p>
             <p><h4>
             <b>
             Como funciona o Google Ads?
             </b>
              </h4></p>
             <p>Basicamente, o serviço é adaptável as suas metas, atuando como um serviço pré-pago: você define o orçamento e aponta o quanto cada clique no seu anúncio vai custar — o que aumenta proporcionalmente o alcance de seu negócio a possíveis leads.</p>
             <p>Ao realizar o procedimento, sua página ou organização vai aparecer entre as primeiras pesquisas do Google quando o usuário buscar por um assunto relacionado a sua companhia.</p>
             <p>Depois, o Google envia o valor total a ser pago. Ele pode ser quitado via cartão de crédito ou boleto bancário.</p>
             <p><h4><b>Por que investir neste serviço?</b></h4></p>
             <p>Assim como funciona com as ações de marketing digital, o Google Ads se diferencia porque tem a capacidade de impactar a pessoa certa para a sua empresa.</p>
             <p>Ou seja: diferentemente dos anúncios em mídias tradicionais (como jornal, rádio ou TV) que alcançam milhões, mas impactam bem menos indivíduos, o Google Ads equilibra o jogo para a organização.</p>
             <p>Ela atinge menos usuários, é verdade, mas a taxa de potenciais clientes é muito superior. Porque seu negócio vai aparecer para pessoas interessadas no serviço.</p>
             <p>Por isso, é uma excelente forma de agregar um bom retorno do seu investimento (ROI) por meio de ações direcionadas de publicidade.</p>
             <p><h4><b>Dicas antes de criar suas campanhas</b></h4></p>
             <p>Agora que você já sabe sobre o procedimento, pode surgir a dúvida: Por onde começar a utilizar o Google Ads? Para te ajudar nisso, selecionamos algumas dicas práticas para tirar suas ideias do papel! Confira agora!</p>
             <p><b>Defina os objetivos e crie um planejamento</b></p>
             <p>Não deixe nada ao acaso. Planeje, defina e estabeleça limites (em orçamento e prazo) para que você possa analisar o desempenho, posteriormente, e ajustar continuamente.</p>
             <p>Esse é o caminho mais prático para que suas campanhas sejam sempre mais assertivas. Foque no que dá certo e teste novas criações!</p>
             <p><b>Escolha as melhores métricas para verificar o desempenho</b></p>
             <p>Por falar em monitorar a performance, você deve identificar quais são os indicadores e métricas de maior interesse para quantificar (e qualificar) o sucesso de seus anúncios no Google Ads para empresas.</p>
             <p><b>Use o tagueamento</b></p>
             <p>O Tag Manager é um recurso que insere tags específicas para diferentes objetivos, como a conversão de leads ou o remarketing.</p>
             <p>É mais uma maneira de saber qual é o  potencial de clientes dos seus anúncios e concentrar o orçamento e tempo nessa alternativa.</p>
             <p><b>Invista em anúncios diferentes para cada etapa do funil</b></p>
             <p>Você deve saber que a jornada de compra demanda abordagens distintas e que cada usuário encontra-se em um momento diferente dessa etapa.</p>
             <p>Por isso, use o Google Ads para ser estrategicamente assertivo ao alcançar e impactar esses indivíduos até então anônimos.</p>
             <p>Ao produzir conteúdos para etapas diferentes do funil de vendas, você agrega em precisão ao oferecer soluções para quem:</p>
             <p><ul>
              <li><i>Não reconhece que tem um problema (Topo);</i></li>
              <li><i>Sabe de sua dor, mas ainda não conhece o seu produto (Meio);</i></li>
              <li><i>Precisa de um direcionamento sobre o seu negócio (Fundo).</i></li>
              </ul></p>
             <p><h4><b>Dicas para a criação das suas campanhas</b></h4></p>
             <p>Agora, ao criar as suas campanhas no Google Ads para empresas, lembre-se dessas práticas que listamos abaixo!</p>
             <p><h4>Não use palavras-chave duplicadas</h4></p>
             <p>As palavras-chave têm peso significativo no encontro com o seu público-alvo e em aumentar sua presença digital e capacidade de atrair leads e convertê-los em vendas.</p>
             <p>Mas, alguns cuidados devem ser tomados para que a estratégia surta o efeito esperado e não seja disparada contra você. Um grande equívoco nesse sentido é o uso de Keywords duplicadas. Elas dificultam a precisão da sua estratégia, dificultando a mensuração dos resultados.</p>
             <p><h4><b>Indique as palavras-chave negativas</b></h4></p>
             <p>As palavras negativas também são relevantes porque ajudam a filtrar aquilo que você não deseja que seja pesquisado e leve o usuário a encontrar o seu site.</p>
             <p><h4><b>Configure as buscas para usuários móveis</b></h4></p>
             <p>Lembre-se que quase 60% da população brasileira acessa a internet pelo celular. Com isso, você deve focar também em campanhas do Google Ads que considerem a adaptação para esse tipo de dispositivo.</p>
             <p>Você pode fazer isso adaptando seu site e criando conteúdos omnichannels para melhor conforto de seus usuários.</p>
             <p><h4><b>Direcione seus anúncios para a página certa e certifique-se da qualidade da landing page</b></h4></p>
             <p>Uma vez fisgado o consumidor, certifique-se de que ele vai ser direcionado para a página certa, pois esse pode ser o ponto-chave para novos leads para sua empresa.</p>
             <p><h4><b>Objetivos de campanhas no Google Ads</b></h4></p>
             <p>Vamos falar, agora, dos principais objetivos que você pode direcionar ao planejar suas campanhas no Google Ads!</p>
             <p><h4><b>Pesquisa e reconhecimento de marca</b></h4></p>
             <p>O procedimento se resume em apresentar a sua marca para os usuários com o perfil considerado ideal para seu negócio. Assim, ele pode vir a se tornar um cliente.</p>
             <p><h4><b>Campanha de Remarketing</b></h4></p>
             <p>Aqui, a ideia consiste no envio de anúncios que lembrem o indivíduo que já visitou o seu site a regressar à sua página. Dessa forma, ele pode se informar mais a respeito da sua solução ou mesmo concluir a compra.</p>
             <p><h4><b>Geração de leads</b></h4></p>
             <p>Geração de leads é uma das principais estratégias do Google Ads. Seu poder de segmentação faz com que pessoas verdadeiramente interessadas na sua solução cliquem no anúncio. Com isso, você deve trabalhar para que esse indivíduo se torne, gradativamente, em cliente.</p>
             <p><h4><b>Vendas</b></h4></p>
             <p>Sim, esse é o objetivo de todas as empresas, mas também tem aplicação específica com o Google Ads. É um bom desdobramento de quem tem uma possibilidade de conversão direta dentro do seu site.</p>
         
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
