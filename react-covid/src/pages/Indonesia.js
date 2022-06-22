import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import CovidCase from "../components/CovidCase/CovidCase";
import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import ENDPOINTS from "../utils/constants/endpoint";

function Indonesia() {
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getDataConfirmed();
    getDataRecovered();
    getDataDeaths();
  }, []);

  const getDataConfirmed = async () => {
    const response = await axios(ENDPOINTS.INDONESIA);
    setConfirmed(response.data.confirmed.value);
  }

  const getDataRecovered = async () => {
    const response = await axios(ENDPOINTS.INDONESIA);
    setRecovered(response.data.recovered.value);
  }

  const getDataDeaths = async () => {
    const response = await axios(ENDPOINTS.INDONESIA);
    setDeaths(response.data.deaths.value);
  }

  const summary = ENDPOINTS.INDONESIA_SUMMARY;
  return(
    <>
      <Container>
        <Hero />
      </Container>
      <CovidCase
        title="Indonesia"
        confirmed={(confirmed).toLocaleString()}
        recovered={(recovered).toLocaleString()}
        deaths={(deaths).toLocaleString()}
      />
      <Container>
        <Summary title="Indonesia" src={summary} />
      </Container>
    </>
  );
}

export default Indonesia;
