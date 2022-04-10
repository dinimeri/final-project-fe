import styles from "./Cases.module.css";

function Cases(props) {
  const { cases } = props;

  return (
    <div className={styles.cases}>
      <h2 className={styles.cases__status}>{cases.status}</h2>
      <h1 className={cases.status}>{cases.value.toLocaleString()}</h1>
    </div>
  );
}

export default Cases;