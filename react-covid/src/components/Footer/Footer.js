import styles from "./Footer.module.css";

function Footer() {
  return(
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h1 className={styles.footer__title}>Covid ID</h1>
          <h4 className={styles.footer__author}>©2022 Dini Meriawati</h4>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Home</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;