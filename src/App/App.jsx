import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Culture from '../components/Culture/Culture';

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <div>
        <Culture />
      <Routes>
        <Route path="/culture" element={<Culture />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;