import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.menuContainer}>
        <Link legacyBehavior href="/">
          <img
            src="/static/images/Logo-Horizontal-branco.png"
            alt="AL"
            className={styles.logo}
          />
        </Link>

        <nav className={`${styles.nav} ${mobile ? styles.navMobileOpen : ""}`}>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
          <Link legacyBehavior href="/agencia">
            <a>Agência</a>
          </Link>
          <Link legacyBehavior href="/servicos">
            <a>Serviços</a>
          </Link>
          <Link legacyBehavior href="/cases">
            <a>Cases</a>
          </Link>
          <Link legacyBehavior href="/contato">
            <a>Contato</a>
          </Link>
        </nav>

        <Link href="/contato" className={styles.cta}>
          Diagnóstico
        </Link>

        <button
          className={styles.mobileButton}
          onClick={() => {
            console.log("clicou");
            setMobile(!mobile);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Menu;
