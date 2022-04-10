import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);

  const handleClick = () => {
    if (isMenuClicked === false) {
      setIsMenuClicked(true);
    }
    else {
      setIsMenuClicked(false);
    }
  }
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <ul className={isMenuClicked ? `${styles.navbar__listActive}` : `${styles.navbar__list}`}>
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Provinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        <div className={styles.navbar__menu} onClick={handleClick}>
          <i className={isMenuClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
