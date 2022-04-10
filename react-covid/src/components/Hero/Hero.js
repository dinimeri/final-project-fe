import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <h4 className={styles.hero__subtitle}>Monitoring Perkembangan Covid</h4>
          <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem suscipit ea expedita a odit dolore iste mollitia nulla nostrum laborum?</p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={require("../../assets/images/undraw_medical_research_qg4d.png")} alt="placeholder" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
