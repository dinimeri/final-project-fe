import styles from "./ProvinceTable.module.css"

function ProvinceTable(props) {
  const { province, index } = props;
  return (
    <tbody>
      <tr>
        <td className={styles.table__data}>{index}</td>
        <td className={styles.table__data}>{province.kota}</td>
        <td className={styles.table__data}>{province.kasus}</td>
        <td className={styles.table__data}>{province.sembuh}</td>
        <td className={styles.table__data}>{province.dirawat}</td>
        <td className={styles.table__data}>{province.meninggal}</td>
      </tr>
    </tbody>
  );
}

export default ProvinceTable;