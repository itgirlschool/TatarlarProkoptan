import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import TatarCulture from '../Pages/Culture/TatarCulture/TatarCulture';
import Mosques from '../Pages/Culture/Mosques/Mosques';
import Traditions from '../Pages/Culture/Traditions/Traditions';
import Cuisine from '../Pages/Culture/Cuisine/Cuisine';
import Partners from '../Pages/Culture/Partners/Partners';
import {
  HomePage,
  Charity,
  Culture,
  Events,
  Sabantui,
  WeAreTogether,
} from "../Pages";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx"
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/culture/tatar_culture" element={<TatarCulture />} />
          <Route path="/culture/mosques" element={<Mosques />} />
          <Route path="/culture/traditions" element={<Traditions />} />
          <Route path="/culture/cuisine" element={<Cuisine />} />
          <Route path="/culture/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sabantui" element={<Sabantui />} />
          <Route path="/we-are-together" element={<WeAreTogether />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
