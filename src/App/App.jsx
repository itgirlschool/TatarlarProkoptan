import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
        {/*Links оставлены для теста*/}
        {/* <Link to="/about-us">About Us</Link>
        <Link to="/charity">Charity</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/events">Events</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/sabantui">Sabantui</Link>
        <Link to="/we-are-together">We Are Together</Link> */}
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
