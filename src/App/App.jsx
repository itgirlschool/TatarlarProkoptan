import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage.jsx";
import AboutUs from "../Pages/AboutUs/AboutUs.jsx";
import Charity from "../Pages/Charity/Charity.jsx";
import Culture from "../Pages/Culture/Culture.jsx";
import Events from "../Pages/Events/Events.jsx";
import Partners from "../Pages/Partners/Partners.jsx";
import Sabantui from "../Pages/Sabantui/Sabantui.jsx";
import WeAreTogether from "../Pages/WeAreTogether/WeAreTogether.jsx";

import style from "./App.module.scss";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sabantui" element={<Sabantui />} />
          <Route path="/we-are-together" element={<WeAreTogether />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
