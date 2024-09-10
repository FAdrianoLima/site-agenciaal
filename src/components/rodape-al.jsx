import Link from "next/link";
import styles from "../styles/RodapeAL.module.css";

export default function RodapeNewFly() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <span style={{ display: "flex", flexDirection: "row" }}>
        Copyright 2024       
          &nbsp;|&nbsp;&nbsp;Website Designed by &nbsp;
        </span>
        <Link legacyBehavior  href="https://www.instagram.com/al_agencia_de_marketing">
          <a target="_blank">
          <img
          className="w-full max-w-[5rem]"
          src="/static/images/Logo-Horizontal.png"
          alt="AL Agência de Marketing"
          />
          </a>
        </Link>
      </div>
    </div>
  );
}
