// Import nanoid
import { nanoid } from "nanoid";
// Import useState
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./CovidForm.module.css";

/**
 * Membuat fungsi CovidForm
 * Menangkap props
 * Menampilkan Form Covid
 */
function CovidForm(props) {
  // Destructing props: state provinces
  const { provinces, setProvinces } = props;

  // Membuat state city, status dan total
  const [ city, setCity ] = useState("");
  const [ status, setStatus ] = useState("");
  const [ total, setTotal ] = useState("");

  // Membuat state: isCityError, isStatusError, isTotalError
  const [isCityError, setIsCityError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isTotalError, setIsTotalError] = useState(false);

  const handleCity = (e) => {
    setCity(e.target.value);
  }

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleTotal = (e) => {
    setTotal(e.target.value);
  }

  /**
   * Membuat fungsi handleSubmit
   * Mengsubmit data yang telah diinput 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "") {
      setIsCityError(true);
    } else if (status === "") {
      setIsStatusError(true);
    } else if (total === "") {
      setIsTotalError(true);
    } 
    // Jika tidak ada error
    else {
      if (status === "positif") {
        const newProvinces = provinces.map(p => p.kota === city ? {...p, kasus: total } : p);
        setProvinces(newProvinces);
      } else if (status === "sembuh") {
        const newProvinces = provinces.map(p => p.kota === city ? {...p, sembuh: total } : p);
        setProvinces(newProvinces);
      } else if (status === "dirawat") {
        const newProvinces = provinces.map(p => p.kota === city ? {...p, dirawat: total } : p);
        setProvinces(newProvinces);
      } else if (status === "meninggal") {
        const newProvinces = provinces.map(p => p.kota === city ? {...p, meninggal: total } : p);
        setProvinces(newProvinces);
      }
      setIsCityError(false);
      setIsStatusError(false);
      setIsTotalError(false);
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={require("../../assets/images/undraw_Forming_ideas_re_2afc.png")} alt="formpic" />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Form Covid</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="province">Provinsi</label>
              <select className={styles.form__input} value={city} onChange={handleCity} name="province" id="province">
                <option value="">-- Pilih Provinsi --</option>
                {
                  provinces.map((province) => {
                    return (<option value={province.kota} key={nanoid(6)}>{province.kota}</option>)
                  })
                }
              </select>
              {isCityError && <Alert>Provinsi Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="status">Status</label>
              <select className={styles.form__input} value={status} onChange={handleStatus} name="" id="">
                <option value="">-- Pilih Status --</option>
                <option value="positif">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>Status Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="total">Jumlah</label>
              <input className={styles.form__input} type="number" min="1" value={total} onChange={handleTotal} name="" id="" />
              {isTotalError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CovidForm;