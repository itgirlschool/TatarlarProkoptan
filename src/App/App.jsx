import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import {
  HomePage,
  Charity,
  Culture,
  Events,
  Partners,
  Sabantui,
  WeAreTogether,
} from "../Pages";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import style from "./App.module.scss";
import SabantuyCollection from "../Pages/Sabantui/SabantuyCollection/SabantuyCollection";
import SabantuyCurrentYear from "../Pages/Sabantui/SabantuyCurrentYear/SabantuyCurrentYear";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sabantui/*" element={<Sabantui />} />
          <Route path="/collection" element={<SabantuyCollection />} />
          <Route path="/current" element={<SabantuyCurrentYear />} />
          <Route path="/we-are-together" element={<WeAreTogether />} />
        </Routes>{" "}
      </main>
      <Footer />
    </div>
  );
}

export default App;
