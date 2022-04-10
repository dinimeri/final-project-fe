import styles from "./Alert.module.css";

function Alert(props) {
  return (
    <div>
      <span className={styles.alert__message}>{props.children}</span>
    </div>
  );
}

export default Alert;