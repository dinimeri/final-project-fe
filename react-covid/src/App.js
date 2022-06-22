import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/provinsi" element={<Provinsi />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
