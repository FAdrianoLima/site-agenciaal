import * as React from "react";
import styles from "../styles/Parceiros.module.css";
import Carousel from "react-material-ui-carousel";

const lista = [
  
  "adelostore.png",
  "ambev.png",
  "anupana.png",
  "becco.png",
  "bellaver.png",
  "benner.png",
  "bioncook.png",
  "boticario.png",
  "capizze.png",
  "caxias.png",
  "cbmm.png",
  "charlie.png",
  "citibank.png",
  "claudiasusin.png",
  "colombo.png",
  "criardente.png",
  "croasonho.png",
  "csu.png",
  "docedoce.png",
  "e.png",
  "eccel.png",
  "fast.png",
  "fiat.png",
  "garcia.png",
  "haux.png",
  "horno.png",
  "itau.png",
  "kalinca.png",
  "lebes.png",
];

const divs = (index, maxItems) => {
  const last = lista.length - 1;
  let newDivs = [];
  let countZero = 0;

  for (let i = 0; i < lista.length; i++) {
    let newIndex = i + index;
    let e = "";

    if (newIndex <= last) {
      e = lista[newIndex];
    } else {
      e = lista[countZero];
      countZero++;
    }

    newDivs.push(
      <div>
        <img
          src={`/static/images/parceiros/${e}`}
          className={styles["logo-parceiros"]}
          alt={e}
        />
      </div>
    );
  }

  newDivs = newDivs.slice(0, maxItems);

  return <div className={styles.items}>{newDivs}</div>;
};

export default function Parceiros() {
  const [nrIcons, setNrIcons] = React.useState(5);

  const changeNrIcons = () => {
    if (window.screen.width > 600) {
      setNrIcons(5);
    } else {
      setNrIcons(2);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => changeNrIcons(), true);
    changeNrIcons();
  }, []);

  return (
    <div className={styles.root}>
      <span className={styles.titulo}>
      <span>
          <b>  Clientes atendidos&nbsp;</b>
        </span>
        individualmente ou em grupo:
      </span>

      <div className={styles.hr} />
      <Carousel
        indicators={false}
        fullHeightHover={true}
        navButtonsAlwaysInvisible={true}
        className={styles.carousel}
        NextIcon="&#8250;"
        PrevIcon="&#8249;"
      >
        {(() => {
          const retorno = [];

          for (let i = 0; i < lista.length; i++) {
            retorno.push(divs(i, nrIcons));
          }

          return retorno;
        })()}
      </Carousel>

    </div>
  );
}
