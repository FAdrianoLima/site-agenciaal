import * as React from "react";
import styles from "../styles/Parceiros.module.css";
import Carousel from "react-material-ui-carousel";

const lista = [
  "mastercard.png",
  "mime.png",
  "nevoeiro.png",
  "nuova.png",
  "oca.png",
  "oilfit.png",
  "olitecnica.png",
  "orbitall.png",
  "ordeo.png",
  "ost.png",
  "oxxy.png",
  "panex.png",
  "pantasticas.png",
  "polen.png",
  "postosrota.png",
  "prana.png",
  "prattica.png",
  "puerto.png",
  "redeenergia.png",
  "sander.png",
  "santoaugusto.png",
  "shelter.png",
  "sicredi.png",
  "sim.png",
  "ticket.png",
  "tocadabruxa.png",
  "tradicao.png",
  "tranquilo.png",
  "tropino.png",
  "ursobrownie.png",
  "vale.png",
  "walmart.png",
  "waltdisney.png",
  "yoga.png", 
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

export default function Parceiros2() {
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
    <div className={styles.root2}>
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
