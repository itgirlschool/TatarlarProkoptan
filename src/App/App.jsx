import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import TatarCulture from "../Pages/Culture/TatarCulture/TatarCulture";
import Mosques from "../Pages/Culture/Mosques/Mosques";
import Traditions from "../Pages/Culture/Traditions/Traditions";
import Cuisine from "../Pages/Culture/Cuisine/Cuisine";
import Partners from "../Pages/Culture/Partners/Partners";
import SabantuyCollection from "../Pages/Sabantui/SabantuyCollection/SabantuyCollection";
import SabantuyCurrentYear from "../Pages/Sabantui/SabantuyCurrentYear/SabantuyCurrentYear";
import {
  HomePage,
  Charity,
  CharityModal,
  Culture,
  Events,
  Sabantui,
  WeAreTogether,
  AuthorizationPage,
  RegistrationPage,
  RestorePassword,
  ModalFormAutonomyMobile,
} from "../Pages";
import HomePageMobile from "../Pages/HomePage/HomePageMobile.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import style from "./App.module.scss";
import Loader from "../Components/Loader/Loader.jsx";
import ChildrenMobile from "../Pages/WeAreTogether/Mobile/ChildrenMobile";
import HelpMobile from "../Pages/WeAreTogether/Mobile/HelpMobile";
import GalleryMobile from "../Pages/WeAreTogether/Mobile/GalleryMobile";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SUBSCRIBE_TO_AUTONOMY_USERS" });
    dispatch({ type: "SUBSCRIBE_TO_CHARITY_USERS" });
    dispatch({ type: "SUBSCRIBE_TO_USERS" });
  }, [dispatch]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className={style.loaderContainer}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/modal" element={<CharityModal />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/culture/tatar_culture" element={<TatarCulture />} />
          <Route path="/culture/mosques" element={<Mosques />} />
          <Route path="/culture/traditions" element={<Traditions />} />
          <Route path="/culture/cuisine" element={<Cuisine />} />
          <Route path="/culture/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sabantui" element={<Sabantui />} />
          <Route path="/we-are-together" element={<WeAreTogether />} />
          <Route path="/autonomy" element={<ModalFormAutonomyMobile />} />
          <Route path="/homePageMobile" element={<HomePageMobile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
