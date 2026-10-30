import * as React from "react";
import { useRouter } from "next/router";

import { doc, getDoc } from "firebase/firestore";

import { Alert, CircularProgress } from "@mui/material";

import Admin from "../../../components/admin";
import EditorArtigo from "../../../components/EditorArtigo";
import { db } from "../../../../firebase-config";

import styles from "../../../styles/admin/EditorArtigo.module.css";

function ConteudoEdicao() {
  const router = useRouter();
  const { id } = router.query;

  const [artigo, setArtigo] = React.useState(null);
  const [carregando, setCarregando] = React.useState(true);
  const [erro, setErro] = React.useState("");

  React.useEffect(() => {
    if (!router.isReady || !id) return;

    let ativo = true;

    const buscarArtigo = async () => {
      try {
        setCarregando(true);

        const referencia = doc(db, "artigos", id);
        const resultado = await getDoc(referencia);

        if (!resultado.exists()) {
          if (ativo) setErro("O artigo solicitado não foi encontrado.");
          return;
        }

        if (ativo) {
          setArtigo({
            id: resultado.id,
            ...resultado.data(),
          });
        }
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);

        if (ativo) {
          setErro("Não foi possível carregar este artigo.");
        }
      } finally {
        if (ativo) setCarregando(false);
      }
    };

    buscarArtigo();

    return () => {
      ativo = false;
    };
  }, [router.isReady, id]);

  if (carregando) {
    return (
      <div className={styles.carregandoEditor}>
        <CircularProgress />
        <p>Carregando artigo...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className={styles.erroEdicao}>
        <Alert severity="error">{erro}</Alert>
        <button type="button" onClick={() => router.push("/admin/artigos")}>
          Voltar para artigos
        </button>
      </div>
    );
  }

  if (!artigo) return null;

  return <EditorArtigo artigoId={id} initialData={artigo} />;
}

export default function EditarArtigo() {
  return (
    <Admin>
      <ConteudoEdicao />
    </Admin>
  );
}
