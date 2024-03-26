import Link from "next/link";
import styles from "../styles/RodapeNewfly.module.css";

export default function RodapeNewFly() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span style={{ display: "flex", flexDirection: "row" }}>
          Direitos Reservados 2022 |&nbsp;
          <Link href="/docs/politica privacidade.pdf">
            <a target="_blank">Políticas de Privacidade</a>
          </Link>
          &nbsp;| &nbsp;
          <Link href="/docs/termo uso.pdf">
            <a target="_blank">Termos de Uso</a>
          </Link>
          &nbsp; |&nbsp;
          <Link href="/docs/politica-de-cookies.pdf">
            <a target="_blank">Política de Cookies</a>
          </Link>
          &nbsp;|&nbsp;Desenvolvido por
        </span>
        <Link href="https://newfly.digital/">
          <a target="_blank">
            <img src="/newfly.png" alt="NewFly" />
          </a>
        </Link>
      </div>
    </div>
  );
}
