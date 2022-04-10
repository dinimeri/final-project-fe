import styles from "./Global.module.css";
import Cases from "../Cases/Cases";
import data from "../../utils/constants/indonesia";

function Global() {
  const indonesia = data.indonesia;
  return (
    <div className={styles.container}>
      <section className={styles.global}>
        <h1 className={styles.global__title}>Indonesia</h1>
        <h4 className={styles.global__subtitle}>Data Covid Berdasarkan Negara</h4>
        <div className={styles.global__container}>
        {
          indonesia.map((cases, index) => {
            return (<Cases key={index} cases={cases} />);
          })
        }
        </div>
      </section>
    </div>
  );
}

export default Global;