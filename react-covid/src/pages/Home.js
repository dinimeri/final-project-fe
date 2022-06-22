import Hero from "../components/Hero/Hero";
import CovidCase from "../components/CovidCase/CovidCase";
import Summary from "../components/Summary/Summary";
import Container from "../components/Container";
import ENDPOINTS from "../utils/constants/endpoint";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Membuat Component Home
 * Menampilkan Halaman Home
 * Menampung Navbar, Main, dan Footer Component 
 */
function Home() {
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getDataConfirmed();
    getDataRecovered();
    getDataDeaths();
  }, []);

  const getDataConfirmed = async () => {
    const response = await axios(ENDPOINTS.GLOBAL);
    setConfirmed(response.data.confirmed.value);
  }

  const getDataRecovered = async () => {
    const response = await axios(ENDPOINTS.GLOBAL);
    setRecovered(response.data.recovered.value);
  }

  const getDataDeaths = async () => {
    const response = await axios(ENDPOINTS.GLOBAL);
    setDeaths(response.data.deaths.value);
  }

  const summary = ENDPOINTS.GLOBAL_SUMMARY;
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <CovidCase
        title="Global"
        confirmed={(confirmed).toLocaleString()}
        recovered={(recovered).toLocaleString()}
        deaths={(deaths).toLocaleString()}
      />
      <Container>
        <Summary title="Global" src={summary} />
      </Container>
    </>
  );
}

export default Home;
