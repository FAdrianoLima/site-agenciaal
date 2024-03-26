import * as React from "react";
import styles from "../styles/Parceiros.module.css";
import Carousel from "react-material-ui-carousel";


export default function Casas() {
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
    <div className={styles.root3}>
      <span className={styles.titulo2}>
        <span style={{fontWeight:"600"}}>PORTFÓLIO DE OBRAS</span>
        CONSTRUÍMOS PARA SUPERAR EXPECTATIVAS EM CADA DETALHE
        <div className={styles.hr} />
      </span>

      
      <Carousel
        indicators={false}
        fullHeightHover={true}
        navButtonsAlwaysInvisible={true}
        className={styles.carousel}
        NextIcon="&#8250;"
        PrevIcon="&#8249;"
      >
      <div className={styles.items}>
          <div>
          <img
              src={`/static/images/casas/casa-01.png`}
              className={styles["logo-parceiros2"]}
              style={{ zIndex: "100"}}
        />
            <div className={styles.bloco}>
              <span className={styles.texto}>
                <h4>Casa Térrea 255</h4>
                <p>Possui 255m² de área privativa e possibilidade de personalização. Ótima posição solar, conta com 3 amplas suítes, sendo uma master com closet, voltadas para o norte.</p>
                </span>
            </div>
          </div>
          <div>
          <img
              src={`/static/images/casas/casa-01.png`}
              className={styles["logo-parceiros2"]}
              style={{ zIndex: "100"}}
        />
            <div className={styles.bloco}>
              <span className={styles.texto}>
                <h4>Casa Térrea 255</h4>
                <p>Possui 255m² de área privativa e possibilidade de personalização. Ótima posição solar, conta com 3 amplas suítes, sendo uma master com closet, voltadas para o norte.</p>
                </span>
            </div>
          </div>
          <div>
          <img
              src={`/static/images/casas/casa-01.png`}
              className={styles["logo-parceiros2"]}
              style={{ zIndex: "100"}}
        />
            <div className={styles.bloco}>
              <span className={styles.texto}>
                <h4>Casa Térrea 255</h4>
                <p>Possui 255m² de área privativa e possibilidade de personalização. Ótima posição solar, conta com 3 amplas suítes, sendo uma master com closet, voltadas para o norte.</p>
                </span>
            </div>
         </div> 
        </div>
        
        <div className={styles.items}>
          <div>
          <img
              src={`/static/images/casas/casa-01.png`}
              className={styles["logo-parceiros2"]}
              style={{ zIndex: "100"}}
        />
            <div className={styles.bloco}>
              <span className={styles.texto}>
                <h4>Casa Térrea 255</h4>
                <p>Possui 255m² de área privativa e possibilidade de personalização. Ótima posição solar, conta com 3 amplas suítes, sendo uma master com closet, voltadas para o norte.</p>
                </span>
            </div>
          </div>
          <div>
          <img
              src={`/static/images/casas/casa-01.png`}
              className={styles["logo-parceiros2"]}
              style={{ zIndex: "100"}}
        />
            <div className={styles.bloco}>
              <span className={styles.texto}>
                <h4>Casa Térrea 255</h4>
                <p>Possui 255m² de área privativa e possibilidade de personalização. Ótima posição solar, conta com 3 amplas suítes, sendo uma master com closet, voltadas para o norte.</p>
                </span>
            </div>
          </div>
          <div>
          <img
              src={`/static/images/casas/casa-01.png`}
              className={styles["logo-parceiros2"]}
              style={{ zIndex: "100"}}
        />
            <div className={styles.bloco}>
              <span className={styles.texto}>
                <h4>Casa Térrea 255</h4>
                <p>Possui 255m² de área privativa e possibilidade de personalização. Ótima posição solar, conta com 3 amplas suítes, sendo uma master com closet, voltadas para o norte.</p>
                </span>
            </div>
         </div> 
        </div>
        
      </Carousel>

    </div>
  );
}
