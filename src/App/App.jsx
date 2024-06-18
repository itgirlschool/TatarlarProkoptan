import React from "react";
import style from "./App.module.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>{/* Здесь будут маршруты в будущем */}</Routes>
      </div>
    </Router>
  );
}

export default App;
