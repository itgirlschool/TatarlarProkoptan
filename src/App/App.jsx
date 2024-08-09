import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../store/slice/UserAuthSlice.js";
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
import OurActivists from "../Pages/OurActivists/OurActivists.jsx";

function App() {
  const [loading, setLoading] = useState(true);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SUBSCRIBE_TO_AUTONOMY_USERS" });
    dispatch({ type: "SUBSCRIBE_TO_CHARITY_USERS" });
    dispatch({ type: "SUBSCRIBE_TO_USERS" });
  }, [dispatch]);




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
          <Route path="/our-activists" element={<OurActivists />} />
          <Route path="/registrationpage" element={<RegistrationPage />} />
          <Route path="/authorizationpage" element={<AuthorizationPage />} />
          <Route path="/restorepassword" element={<RestorePassword />} />
          <Route path="/autonomy" element={<ModalFormAutonomyMobile />} />
          <Route path="/homePageMobile" element={<HomePageMobile />} />
          <Route path="/news" element={<News/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
