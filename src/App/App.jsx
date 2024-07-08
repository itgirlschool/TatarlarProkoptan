import React, {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import {Route, Routes, Link} from "react-router-dom";
import {
  HomePage,
  Charity,
  Culture,
  Events,
  Partners,
  Sabantui,
  WeAreTogether,
  AuthorizationPage,
  RegistrationPage,
} from "../Pages";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

import style from "./App.module.scss";
import Loader from "../Components/Loader/Loader.jsx";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sabantui" element={<Sabantui />} />
          <Route path="/we-are-together" element={<WeAreTogether />} />
          <Route path="/authorizationpage" element={<AuthorizationPage/>} />
          <Route path="/registrationpage" element={<RegistrationPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
