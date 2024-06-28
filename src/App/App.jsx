import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Culture from '../Pages/Culture/Culture';
import TatarCulture from '../Pages/Culture/TatarCulture/TatarCulture';
import Mosques from '../Pages/Culture/Mosques/Mosques';
import Traditions from '../Pages/Culture/Traditions/Traditions';
import Cuisine from '../Pages/Culture/Cuisine/Cuisine';
import Partners from '../Pages/Culture/Partners/Partners';
import Footer from "../Components/Footer/Footer";

function App() {
  return (
  <Router>
  <Routes>
    <Route path="/" element={<Culture />} />
    <Route path="/tatar_culture" element={<TatarCulture />} />
    <Route path="/mosques" element={<Mosques />} />
    <Route path="/traditions" element={<Traditions />} />
    <Route path="/cuisine" element={<Cuisine />} />
    <Route path="/partners" element={<Partners />} />
  </Routes>
</Router>
  );
}

export default App;
