import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import TatarCulture from "../Pages/Culture/TatarCulture/TatarCulture";
import Mosques from "../Pages/Culture/Mosques/Mosques";
import Traditions from "../Pages/Culture/Traditions/Traditions";
import Cuisine from "../Pages/Culture/Cuisine/Cuisine";
import Partners from "../Pages/Culture/Partners/Partners";
import SabantuyCollection from "../Pages/Sabantui/SabantuyCollection/SabantuyCollection";
import SabantuyCurrentYear from "../Pages/Sabantui/SabantuyCurrentYear/SabantuyCurrentYear";
import {
  News,
  HomePage,
  Charity,
  CharityModal,
  CharityAdminPage,
  Culture,
  Events,
  Sabantui,
  WeAreTogether,
  AuthorizationPage,
  RegistrationPage,
  RestorePassword,
  ModalFormAutonomyMobile,
  Contacts,
} from "../Pages";
import AdminPage from "../Pages/AdminPage/AdminPage.jsx";
import ChildrenMobile from "../Pages/WeAreTogether/Mobile/ChildrenMobile.jsx";
import HelpMobile from "../Pages/WeAreTogether/Mobile/HelpMobile.jsx";
import HomePageMobile from "../Pages/HomePage/HomePageMobile.jsx";
import GalleryMobile from "../Pages/WeAreTogether/Mobile/GalleryMobile.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import style from "./App.module.scss";
import OurActivists from "../Pages/OurActivists/OurActivists.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SUBSCRIBE_TO_AUTONOMY_USERS" });
    dispatch({ type: "SUBSCRIBE_TO_CHARITY_USERS" });
    dispatch({ type: "SUBSCRIBE_TO_USERS" });
  }, [dispatch]);

  const isAdminPage = location.pathname === "/auth";

  return (
    <div className={style.app}>
      {!isAdminPage && <Header />}
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/modal" element={<CharityModal />} />
          <Route path="/charity_admin" element={<CharityAdminPage />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/culture/tatar_culture" element={<TatarCulture />} />
          <Route path="/culture/mosques" element={<Mosques />} />
          <Route path="/culture/traditions" element={<Traditions />} />
          <Route path="/culture/cuisine" element={<Cuisine />} />
          <Route path="/culture/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sabantui" element={<Sabantui />} />
          <Route path="/collection" element={<SabantuyCollection />} />
          <Route path="/current" element={<SabantuyCurrentYear />} />
          <Route path="/we-are-together" element={<WeAreTogether />} />
          <Route path="/our-activists" element={<OurActivists />} />
          <Route path="/registrationpage" element={<RegistrationPage />} />
          <Route path="/authorizationpage" element={<AuthorizationPage />} />
          <Route path="/restorepassword" element={<RestorePassword />} />
          <Route path="/autonomy" element={<ModalFormAutonomyMobile />} />
          <Route path="/homePageMobile" element={<HomePageMobile />} />
          <Route path="/childrenMobile" element={<ChildrenMobile />} />
          <Route path="/news" element={<News />} />
          <Route path="/helpMobile" element={<HelpMobile />} />
          <Route path="/galleryMobile" element={<GalleryMobile />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/auth" element={<AdminPage />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
