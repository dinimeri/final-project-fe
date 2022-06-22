// Import useState
import { useState } from "react";
import Alert from "../Alert/Alert";
import formImage from "../../assets/images/undraw_Forming_ideas_re_2afc.png"
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import FormLabel from "../ui/FormLabel";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import StyledCovidForm from "./CovidForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { updateProvinces } from "../../features/provincesSlice";

/**
 * Membuat fungsi CovidForm
 * Menangkap props
 * Menampilkan Form Covid
 */
function CovidForm() {
  const provinces = useSelector((store) => store.provinces.provinces);
  const dispatch = useDispatch();

  // Membuat state object
  const [formData, setFormData] = useState({
    city: "",
    status: "",
    total: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const [ isError, setIsError ] = useState({
    isCityError: false,
    isStatusError: false,
    isTotalError: false,
  });

  const { city, status, total } = formData;

  const { isCityError, isStatusError, isTotalError } = isError;

  const validate = () => {
    if (city === "") {
      setIsError({
        ...isError,
        isCityError: true,
      });
      return false;
    } else if (status === "") {
      setIsError({
        ...isError,
        isStatusError: true,
        isCityError: false,
      });
      return false;
    } else if (total === "") {
      setIsError({
        ...isError,
        isTotalError: true,
        isStatusError: false,
      });
      return false;
    }
    else {
      setIsError({
        ...isError,
        isCityError: false,
        isStatusError: false,
        isTotalError: false,
      });
      return true;
    }
  }

  const submitProvince = () => {
    if (status === "positif") {
      const province = provinces.map(
        province => province.kota === city ? {...province, kasus: Number(total) } : province
      );
      dispatch(updateProvinces(province));
    }
    if (status === "sembuh") {
      const province = provinces.map(
        province => province.kota === city ? {...province, sembuh: Number(total) } : province
      );
      dispatch(updateProvinces(province));
    }
    if (status === "dirawat") {
      const province = provinces.map(
        province => province.kota === city ? {...province, dirawat: Number(total) } : province
      );
      dispatch(updateProvinces(province));
    }
    if (status === "meninggal") {
      const province = provinces.map(
        province => province.kota === city ? {...province, meninggal: Number(total) } : province
      );
      dispatch(updateProvinces(province));
    }
  }

  /**
   * Membuat fungsi handleSubmit
   * Mengsubmit data yang telah diinput 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && submitProvince();
  }
  return (
    <>
      <StyledCovidForm>
        <div className="form__left">
          <Image src={formImage} alt="undraw forming illustration" />
        </div>
        <div className="form__right">
          <Heading>Form Covid</Heading>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <FormLabel htmlFor="city">Provinsi</FormLabel>
              <FormInput value={city} onChange={handleChange} name="city" id="city">
                <option value="">-- Pilih Provinsi --</option>
                {
                  provinces.map((province, index) => {
                    return (<option value={province.kota} key={index+1}>{province.kota}</option>)
                  })
                }
              </FormInput>
              {isCityError && <Alert>Provinsi Wajib Diisi</Alert>}
            </div>
            <div className="form__group">
              <FormLabel htmlFor="status">Status</FormLabel>
              <FormInput value={status} onChange={handleChange} name="status" id="status">
                <option value="">-- Pilih Status --</option>
                <option value="positif">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </FormInput>
              {isStatusError && <Alert>Status Wajib Diisi</Alert>}
            </div>
            <div className="form__group">
              <FormLabel htmlFor="total">Jumlah</FormLabel>
              <FormInput as="input" type="number" min="1" value={total} onChange={handleChange} name="total" id="total" />
              {isTotalError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>
            <div>
              <Button full>Submit</Button>
            </div>
          </form>
        </div>
      </StyledCovidForm>
    </>
  );
}

export default CovidForm;