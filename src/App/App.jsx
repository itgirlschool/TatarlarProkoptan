import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Culture from '../components/Culture/Culture';
import TatarCulture from '../components/Culture/TatarCulture/TatarCulture';
import Mosques from '../components/Culture/Mosques/Mosques';
import Traditions from '../components/Culture/Traditions/Traditions';
import Cuisine from '../components/Culture/Сuisine/Cuisine';
import Partners from '../components/Culture/Partners/Partners';

function App() {
  console.log('App component rendered');
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
