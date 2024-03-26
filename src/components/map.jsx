import styles from "../styles/GoogleMap.module.css";

function GoogleMap() {
  return (
    <section
      className={styles.background}
      style={{
        WebkitFilter: "grayscale(100%)",
        filter: "grayscale(100%)",
      }}
    >
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13939.032749635624!2d-51.204688!3d-29.142322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea394b4433ee9%3A0x97580ce9cd033202!2snewfly.digital!5e0!3m2!1spt-BR!2sbr!4v1684525536062!5m2!1spt-BR!2sbr"
        
        scrolling="no"
        allowFullScreen
        width="100%"
        className={styles.mapa}
      ></iframe>
    </section>
  );
}

export default GoogleMap;