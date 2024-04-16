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
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [disableButton, setDisableButton] = React.useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);

  return (
    <footer id="rodape" className={styles.background}>
      <div className={styles.interno}>
        <div
          className={styles.box_row}
          style={{ justifyContent: "flex-end" }}
        >
            
          
          <div className={styles.box2}>
            <div
              className={` ${styles.box_row} ${styles.textoverde}`}
            >
              Torne seu <br />
              negócio Online
            </div>
          
            <div
              className={` ${styles.box_row} ${styles.textobranco}`}
            >
              Vamos criar algo<br />
              incrível juntos?
            </div>

            <div
              className={` ${styles.box_row} ${styles.textobranco}`}
            >
              <Link legacyBehavior  href="/contato">
              <button className={styles.button}>
               <img src="/static/images/seta.png" /> &nbsp; Entre em Contato
                </button>
              </Link>
            </div>
            
            <div
              className={` ${styles.box_row} ${styles.textobranco2}`}
            >
             Acompanhe nossas<br />
             novidades, deixe seu e-mail
            </div>
         
          
            
            <div
              className={` ${styles.box_row}`}
            >
              <TextField
                value={email || ""}
                type="text"
                margin="normal"
                required
                width="8rem"
                id="email"
                label="E-Mail"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
              >
             </TextField>
            </div>


          </div>

          <div className={styles.box}>
            <span>
               <div
              className={` ${styles.box_row} ${styles.footericon} ${styles.texto}`}
            >
              <RoomIcon className={` ${styles.icon} `} />
              <p>
              Rua Sinimbú, 134 - Caxias do Sul - RS
              </p>
            </div>
            <div className={` ${styles.box_row} ${styles.footericon}`}>
              <EmailIcon className={` ${styles.icon}`} />
              contato@newflydigital.com
            </div>
            <div className={` ${styles.box_row} ${styles.footericon}`}>
              <PhoneIcon className={` ${styles.icon}`} />
              +55 54 3221-0909
            </div>
         </span>
           
            <div className={styles.box} >
              <ul className={styles.social_media}>
                <li>
                  <Link legacyBehavior  href="https://www.facebook.com/newfly.digital">
                    <a>
                      <img src="/facebook.png"></img>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior  href="https://www.instagram.com/newflydigital/">
                    <a>
                      <img src="/Instagram.png"></img>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior  href="https://www.linkedin.com/company/newflydigital/about/">
                    <a>
                      <img src="/LinkedIn.png"></img>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior  href="https://api.whatsapp.com/send?phone=5554999715856">
                    <a target="_blank">
                      
                    </a>
                  </Link>
                </li>
              </ul>
                <img
              src="/static/images/logo-Horizontal.png"
              alt="Logo Branca"
              className={styles.logo}
              />
            </div>
          </div>
          

        


        </div>
      </div>
    
    </footer>
  );
}

export default Rodape;
