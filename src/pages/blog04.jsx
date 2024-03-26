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
              Sua empresa está preparada para investir em marketing?
            </h3>
            <p>
              <p className={styles.data} style={{ color: "#25b65d" }}>
                15 / 01 / 2020 &nbsp;&nbsp;&nbsp;&nbsp;
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
              <p>Vamos falar um pouco de marketing?</p>
              <img
                style={{ width: "100%", maxWidth: "60rem", marginTop: "2rem" }}
                src="/static/images/blog/blog-marketing-digital.jpg"
              />
              <p>
                e também dar as dicas fundamentais para você começar a construir
                sua presença como empreendedor por lá. Confira!
              </p>
              <p>
                Não se engane, &nbsp;<b>Marketing Digital</b>&nbsp; não é um
                NOVO Marketing Tradicional! Pensar desta forma pode ser muito
                desastroso para os seus negócios.
              </p>
              <p>
                O Marketing Digital está no Marketing Tradicional, assim como o
                Marketing Tradicional está no Marketing Digital. Contudo, a
                maneira como se aplica e utiliza o Marketing Digital é muito
                peculiar.
              </p>
              <p>
                Se a sua empresa pretende entrar neste mundo chamado de
                Marketing Digital, ou se ela já utiliza dos meios e ferramentas
                do Marketing Digital, mas de forma bem tímida, vale a pena
                conferir se sua empresa está preparada para adentrar
                verdadeiramente neste mundo.
              </p>
              <p>Quer aumentar consideravelmente as receitas da sua empresa?</p>
              <p>
                Então, continue lendo este artigo e conheça como avaliar se a
                sua empresa está preparada para investir em Marketing Digital.
              </p>
              <p>
                Desta forma, você já irá conhecer um pouco de como aumentar as
                vendas com Marketing Digital e verificar o quanto será
                necessário para adaptar o site da sua empresa para isso.
              </p>
              <p>
                <h3
                style={{lineHeight:"48px"}}>
                  Antes mesmo de iniciar, comece planejando o investimento
                </h3>
              </p>
              <p>
                Recomendamos um planejamento orçamentário para o Marketing
                Digital. O investimento inicial pode ser de R$ 100,00 até
                100.000,00.
              </p>
              <p>
                Sugerimos um valor mínimo inicial de R$ 1.000,00 para as mídias
                pagas.
              </p>
              <p>
                Claro, que é possível se aventurar pelo Marketing Digital
                sozinho, afinal há diversos tutoriais pela internet ensinando
                como trabalhar com o Marketing Digital.
              </p>
              <p>
                Contudo, fazer com que as engrenagens do Marketing Digital
                funcione de uma maneira que aumente as suas receitas, exige um
                mínimo de experiência, podendo em alguns casos se tornar uma
                experiência desastrosa, se nesta aventura você não tiver o
                mínimo de conhecimento necessário.
              </p>
              <p>
                Também recomendamos quando bem planejado o orçamento, a
                contratação de uma Agência de Marketing Digital.
              </p>
              <p>
                Assim, a sua empresa estará nas mãos de quem entende deste
                negócio.
              </p>
              <p>
                <h3>Como está a Identidade Visual do seu site?</h3>
              </p>
              <p>
                Esse detalhe é muito importante, pois o site da sua empresa será
                a cara dela e para muitos, a primeira impressão é a que fica.
              </p>
              <p>
                E aqui engloba tudo o que olhos vêem, desde o logo às cores e
                seus tons. Pode ser necessário refazer todos estes itens.{" "}
              </p>
              <p>
                Refazê-los de uma forma em que falem com o seu público, se há
                harmonia nos detalhes e principalmente se agrada a este público.
              </p>
              <p>
                Lembre-se que uma “campanha” de Marketing Digital irá expor a
                sua marca ainda mais, portanto é de vital importância que ela
                esteja adequada.
              </p>
              <p>
                Avalie com cuidado todos estes itens relacionados à Identidade
                Visual da sua empresa e principalmente do seu site e veja quais
                ações deverá tomar, se será necessário apenas alguns ajustes e
                retoques ou mesmo se terá que fazer tudo do zero.
              </p>
              <p>
                Entretanto, isso pode ter uma leve alteração do planejamento.
                Veja nesse outro artigo como e por que refazer o site da sua
                empresa.
              </p>
              <p>
                <h3 style={{ lineHeight: "48px" }}
                >Por trás das cortinas – A estrutura do seu Website</h3>
              </p>
              <p>
                Iremos abordar o que está por detrás desta aparência e a
                estrutura dos conteúdos.
              </p>
              <p>
                A palavra-chave aqui é SEO (Searching Engine Optimization), que
                em português significa “Otimização para Mecanismos de Busca”.
              </p>
              <p>
                A construção do seu site tem que ser toda baseada neste
                conceito, pois do contrário, dificilmente os seus conteúdos
                serão localizados pelos mecanismos de buscas, como o Google por
                exemplo.
              </p>
              <p>
                E quem não é achado, não é visto. E quem não é visto na
                internet, não vende!
              </p>
              <p>
                Há tantas técnicas que englobam o SEO que daria até atém mesmo
                para escrevermos uma apostila sobre o assunto.
              </p>
              <p>
                Portanto, não iremos abordar esses detalhes neste artigo, vamos
                desenvolver um conteúdo onde será tratado apenas esse tema.
              </p>
              <p>
                Estas técnicas ajudam seu site a aparecer de forma orgânica nas
                primeiras colocações do resultado de buscas do google.
              </p>
              <p>
                Uma pesquisa revela que 90% dos usuários que utilizam os
                buscadores não passam para a próxima página para procurar algo.
              </p>
              <p>
                O que torna fundamental estar pelo menos na primeira página.
              </p>
              <p>
                Em resumo, o SEO engloba tudo o que faz com que o seu site seja
                visível para quem busca seus produtos e serviços, por isso vale
                muito a pena estruturar seu site utilizando SEO.
              </p>
              <p>
                <h3
                 style={{lineHeight:"48px"}}
                >O Planejamento Estratégico da sua Empresa</h3>
              </p>
              <p>
                É através deste planejamento estratégico que todo trabalho de
                Marketing Digital se baseia.
              </p>
              <p>
                <ul>
                  <b>Os 4 P’s do Marketing</b> ainda se aplicam na hora de fazer
                  seu planejamento estratégico:
                  <li>Preço</li>
                  <li>Praça</li>
                  <li>Produto</li>
                  <li>Promoção</li>
                </ul>
              </p>
              <p>
                Qual o modelo de preço adotado pela sua empresa? Como está
                elaborada a estrutura de custos? Quais os nichos de mercado onde
                vocês pretendem atuar? E os canais de vendas? A estratégia
                competitiva? E o modelo de crescimento?
              </p>
              <p>
                Essas são algumas perguntas que precisam ser respondidas para se
                dar um norte ao planejamento do Marketing Digital.
              </p>
              <p>
                Entenda que por exemplo, dependendo do seu público alvo, pode
                ser necessário que você adapte os seus produtos ou a prestação
                de serviços.
              </p>
              <p>
                E caso isso não seja possível, ou seja, a adaptação da produção
                e do produto final ou prestação de serviço, então o público alvo
                terá que ser revisto e a estratégia para isso repensada para que
                se alcance quem de fato deseja o que você tem a oferecer.
              </p>
              <p>
                Este é apenas um exemplo da importância de ter um plano de
                negócios da sua empresa, que incluir o Digital.
              </p>
              <p>
                <h3 style={{lineHeight:"48px"}}>
                  Afinal, sua empresa está preparada para investir em Marketing
                  Digital?
                </h3>
              </p>
              <p>
                Nesse artigo, demos alguns subsídios para você decidir se este é
                seu momento investir em Marketing Digital.
              </p>

              <p>
                Resumindo, se você deseja que o seu site seja um eficiente e
                rentável canal de vendas eficiente, o Marketing Digital é tudo o
                que a sua empresa precisa!
              </p>
              <p>
                <Link href="https://sitebemfeito.com.br/blog/marketing-digital-sua-empresa-esta-preparada/">
                  https://sitebemfeito.com.br/blog/marketing-digital-sua-empresa-esta-preparada/
                </Link>
              </p>

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
