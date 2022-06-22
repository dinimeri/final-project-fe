import CovidForm from "../components/CovidForm/CovidForm";
import Hero from "../components/Hero/Hero";
import ProvinceTable from "../components/ProvinceTable/ProvinceTable";
import Container from "../components/Container";

function Provinsi() {
  return(
    <>
      <Container>
        <Hero />
        <ProvinceTable />
        <CovidForm />
      </Container>
    </>
  );
}

export default Provinsi;
