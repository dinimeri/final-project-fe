// Import useState
import { useState } from "react";
// Import data provinces
import data from "../utils/constants/provinces";
// Import Component
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Global from "../components/Global/Global";
import Province from "../components/Province/Province";
import Footer from "../components/Footer/Footer";
import CovidForm from "../components/CovidForm/CovidForm";

/**
 * Membuat Component Main
 * Menampung Hero, Global, Provinces, dan CovidForm
 */
function Main() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global />
      <Province provinces={provinces} setProvinces={setProvinces}/>
      <CovidForm provinces={provinces} setProvinces={setProvinces}/>
    </main>
  );
}

/**
 * Membuat Component Home
 * Menampilkan Halaman Home
 * Menampung Navbar, Main, dan Footer Component 
 */
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
