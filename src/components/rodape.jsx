import * as React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/Rodape.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";
import Button from "@mui/material/Button";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#c4c4c4",
    },
    secondary: {
      main: "#c4c4c4",
    },
  },
};

const theme = createTheme(themeOptions);

function Rodape() {
  const [email, setEmail] = React.useState("");
  const [disableButton, setDisableButton] = React.useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);

  return (
    <footer id="rodape" className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.topo}>
          <div className={styles.esquerda}>
            <span className={styles.tag}>AL AGÊNCIA</span>

            <h2>
              Vamos construir uma marca
              <span> impossível de ignorar.</span>
            </h2>

            <p>
              Marketing, desenvolvimento e posicionamento para empresas que
              querem crescer de verdade.
            </p>

            <Link legacyBehavior href="/contato">
              <a className={styles.button}>Solicitar diagnóstico</a>
            </Link>
          </div>

          <div className={styles.direita}>
            <div className={styles.infoBox}>
              <span>Contato</span>

              <a href="mailto:contato@agenciaal.com.br">
                contato@agenciaal.com.br
              </a>

              <a href="tel:+5554981168850">+55 54 98116-8850</a>
            </div>

            <div className={styles.infoBox}>
              <span>Redes Sociais</span>

              <Link
                legacyBehavior
                href="https://www.instagram.com/al_agencia_de_marketing/"
              >
                <a target="_blank">Instagram</a>
              </Link>

              <Link
                legacyBehavior
                href="https://www.linkedin.com/company/al-ag%C3%AAncia-de-marketing/"
              >
                <a target="_blank">LinkedIn</a>
              </Link>
              <Link
                legacyBehavior
                href="https://www.facebook.com/profile.php?id=61557543758757"
              >
                <a target="_blank">Facebook</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <img
            src="/static/images/logo-Horizontal.png"
            alt="AL Agência"
            className={styles.logo}
          />

          <p>© 2026 AL Agência de Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
