import React from "react";
import { Routes, Route } from "react-router-dom";
//import style from "./Sabantui.module.scss";
import SabantuyPage from "./SabantuyPage/SabantuyPage.jsx";
import SabantuyCollection from "../Sabantui/SabantuyCollection/SabantuyCollection.jsx";
import SabantuyCurrentYear from "../Sabantui/SabantuyCurrentYear/SabantuyCurrentYear.jsx";

const Sabantui = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SabantuyPage />} />
        <Route path="/collection" element={<SabantuyCollection />} />
        <Route path="/current" element={<SabantuyCurrentYear />} />
      </Routes>
    </div>
  );
};

export default Sabantui;
