import { nanoid } from "nanoid";
import ProvinceTable from "../ProvinceTable/ProvinceTable";
import styles from "./Province.module.css";

function Province(props) {
  const { provinces } = props;
  return(
    <div className={styles.container}>
      <section className={styles.province}>
        <h1 className={styles.province__title}>Provinsi</h1>
        <h4 className={styles.province__subtitle}>Data Covid Berdasarkan Provinsi</h4>
        <div className={styles.province__table}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.table__head}>No</th>
                <th className={styles.table__head}>Provinsi</th>
                <th className={styles.table__head}>Positif</th>
                <th className={styles.table__head}>Sembuh</th>
                <th className={styles.table__head}>Dirawat</th>
                <th className={styles.table__head}>Meninggal</th>
              </tr>
            </thead>
            {
              provinces.map((province, index) => {
                return (<ProvinceTable key={nanoid(6)} province={province} index={index+1}/>)
              })
            }
          </table>
        </div>
      </section>
    </div>
  );
}

export default Province;