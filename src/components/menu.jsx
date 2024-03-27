import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);
  }, []);

  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);

    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const menu = document.getElementById(styles.menuheader);

      if (winScroll > 0) {
        menu.classList.add(styles["menu-alternative"]);
      } else {
        menu.classList.remove(styles["menu-alternative"]);
      }
    });
  }, []);


  function toggleMenu() {
    const nav = document.getElementById(`${styles.nav}`);
    nav.classList.toggle(styles.active);
  }

  
  return (
    <div id={styles.menuheader} className={styles.header}>
      <div className={`${styles.interno}`}>
        <img src="/static/images/Logo-Horizontal-branco.png" alt="Logo horizontal" className={styles.logo} />

        <button id={`${styles.btn_mobile}`}>
          <span id={`${styles.hamburguer}`}></span>
        </button>

        <ul
          id={`${styles.nav}`}
          className={`${styles.menu} ${styles.navbar} ${styles.a2} `}
        >
          <li>
            <Link href="/">
              <a> Home</a>
            </Link>
          </li>
          <li>
            <Link href="/agencia">
              <a  >A Newfly</a>
            </Link>
          </li>

          <li>
            <Link href="/#servicos">
              <a  >Serviços</a>
            </Link>
          </li>


          <li >
            <Link href="/cases">
              <a>Cases</a>
            </Link>
          </li>



          <li>
            <Link href="/blog">
              <a  >Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a  >Contato</a>
            </Link>
          </li>
          
          
        </ul>
      
     <ul className={`${styles.social_media}`}>
          <li>
            <Link href="https://www.facebook.com/newfly.digital">
              <a target="_blank">
                <img src="/facebook.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/al_agencia_de_marketing/">
              <a target="_blank">
                <img src="/Instagram.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/al-agência-de-marketing/">
              <a target="_blank">
                <img src="/LinkedIn.png"></img>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
