import * as React from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Contato.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#28B3C7",
    },
  },
});

export default function Contato() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [setor, setSetor] = React.useState("");
  const [objetivo, setObjetivo] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);
  const [error, setError] = React.useState({});
  const [disableButton, setDisableButton] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newError = {};

    if (!nome) newError.nome = true;
    if (!telefone) newError.telefone = true;
    if (!email) newError.email = true;
    if (!objetivo) newError.objetivo = true;

    if (Object.keys(newError).length > 0) {
      setError(newError);
      setDisableButton(false);
      return;
    }

    SendContato({
      nome,
      telefone,
      email,
      objetivo,
      mensagem,
    })
      .then(() => {
        setShowAlertSuccess(true);
      })
      .catch((err) => {
        console.error(err);
        setShowAlertDanger(true);
      })
      .finally(() => {
        setNome("");
        setEmail("");
        setSetor("");
        setMensagem("");
        setDisableButton(false);
      });
  };

  async function SendContato({ nome, email, objetivo, mensagem, telefone }) {
    const response = await fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        objetivo,
        mensagem,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao enviar");
    }

    return data;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <section className={styles.background3}>
        <div className={styles.heroContent}>
          <span>CONTATO</span>

          <h1>Vamos conversar sobre seu projeto.</h1>

          <p>
            Conte para nós seus objetivos e nossa equipe retornará com a melhor
            estratégia para sua empresa.
          </p>
        </div>
      </section>

      <section className={`${styles.background} mt-[6rem]`}>
        <div className={styles.interno2}>
          <div className={styles.box2}>
            <img src="/static/images/telefone.png" />
            <h3>Quer falar por telefone?</h3>
            <p>+55 54 9.8116 8850</p>
          </div>
          <div className={styles.box2}>
            <img src="/static/images/email.png" />
            <h3>Nosso E-mail</h3>
            <p>contato@agenciaal.com.br</p>
          </div>
          <div className={styles.box2}>
            <img src="/static/images/mapa.png" />
            <h3>Te esperamos com café.</h3>
            <p>
              Rua Angelo Agostini, B. Pioneiro <br />
              CEP 95042-090 | Caxias do Sul
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.background} my-[6rem]`}>
        <div className={styles.interno}>
          <div
            className={styles.box_row}
            style={{ justifyContent: "flex-start" }}
          >
            <div className={styles.box}>
              <h2 className={styles.titulo}>
                Nossa equipe está pronta para ajudar você.
              </h2>
              <p>
                Atuamos unindo estratégia, design, tecnologia e comunicação para
                ajudar empresas a fortalecer sua presença digital, gerar
                autoridade e conquistar novos clientes.
              </p>
            </div>

            <div className={` ${styles.mobile}`}>
              <div
                className={` ${styles.box}`}
                style={{ alignItems: "flex-start" }}
              >
                <h3>Deixe um recado!</h3>
                <p className={styles.p} style={{ marginBottom: "2rem" }}>
                  Nossa equipe irá avalia seu recado e reponder o mais breve
                  possível
                </p>

                <div className={styles.formCard}>
                  <Box
                    component="form"
                    sx={{ width: "100%" }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                      <TextField
                        value={nome || ""}
                        type="text"
                        margin="normal"
                        required
                        fullWidth
                        id="nome"
                        label="Nome"
                        name="nome"
                        autoFocus
                        onChange={(event) => setNome(event.target.value)}
                        sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                        onFocus={() => {
                          const newError = { ...error };
                          newError.nome = false;
                          setError(newError);
                        }}
                        error={error.nome}
                        helperText={error.nome ? "campo obrigatório" : ""}
                      />
                      <TextField
                        value={telefone || ""}
                        type="tel"
                        margin="normal"
                        required
                        fullWidth
                        id="telefone"
                        label="WhatsApp"
                        name="telefone"
                        onChange={(event) => setTelefone(event.target.value)}
                        sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                        onFocus={() => {
                          const newError = { ...error };
                          newError.telefone = false;
                          setError(newError);
                        }}
                        error={error.telefone}
                        helperText={error.telefone ? "campo obrigatório" : ""}
                      />
                    </div>
                    <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center mb-5">
                      <TextField
                        value={email || ""}
                        type="text"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-Mail"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                        onFocus={() => {
                          const newError = { ...error };
                          newError.email = false;
                          setError(newError);
                        }}
                        error={error.email}
                        helperText={error.email ? "campo obrigatório" : ""}
                      />
                    </div>
                    <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                      <div
                        className="select-input w-full"
                        style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                      >
                        <FormControl fullWidth>
                          <InputLabel id="select-setor-label">
                            Qual seu principal objetivo? *
                          </InputLabel>
                          <Select
                            labelId="select-setor-label"
                            id="objetivo"
                            name="objetivo"
                            value={objetivo || ""}
                            label="Qual seu principal objetivo? *"
                            required
                            error={error.objetivo}
                            onChange={(event) =>
                              setObjetivo(event.target.value)
                            }
                            onFocus={() => {
                              const newError = { ...error };
                              newError.objetivo = false;
                              setError(newError);
                            }}
                          >
                            <MenuItem value="Conseguir mais clientes">
                              Conseguir mais clientes
                            </MenuItem>

                            <MenuItem value="Aumentar vendas">
                              Aumentar vendas
                            </MenuItem>

                            <MenuItem value="Melhorar presença digital">
                              Melhorar presença digital
                            </MenuItem>

                            <MenuItem value="Criar um site">
                              Criar um site
                            </MenuItem>

                            <MenuItem value="Fortalecer a marca">
                              Fortalecer a marca
                            </MenuItem>

                            <MenuItem value="Aparecer no Google">
                              Aparecer no Google
                            </MenuItem>

                            <MenuItem value="Automatizar processos">
                              Automatizar processos
                            </MenuItem>

                            <MenuItem value="Não sei qual a melhor solução">
                              Não sei qual a melhor solução
                            </MenuItem>
                          </Select>
                          {error.setor && (
                            <p className="select-error" id="setor-helper-text">
                              campo obrigatório
                            </p>
                          )}
                        </FormControl>
                      </div>
                    </div>
                    <div style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
                      <TextField
                        value={mensagem || ""}
                        type="text"
                        margin="normal"
                        fullWidth
                        id="mensagem"
                        label="Mensagem"
                        name="mensagem"
                        multiline
                        rows={4}
                        onChange={(event) => setMensagem(event.target.value)}
                      />
                    </div>
                    <div style={{ marginRight: ".5rem" }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="bg-[#28B3C7] hover:bg-[#1b7c8a] text-white mx-[.5rem] p-4 mt-2 font-bold border-0  cursor-pointer"
                        sx={{ marginLeft: 0, marginRight: 0 }}
                        disabled={disableButton}
                      >
                        ENVIAR AGORA
                      </Button>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Prefere falar diretamente pelo WhatsApp?</h2>

        <a
          href="https://wa.me/5554981168850"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar conversa
        </a>
      </section>

      <Rodape />
      <Snackbar
        open={showAlertSuccess}
        autoHideDuration={6000}
        onClose={() => setShowAlertSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setShowAlertSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Seu contato foi enviado com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showAlertDanger}
        autoHideDuration={6000}
        onClose={() => setShowAlertDanger(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setShowAlertDanger(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Não foi possível enviar o contato!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
