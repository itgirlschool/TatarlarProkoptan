import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import firebaseConfig from  "../firebaseConfig.js";
import {BrowserRouter} from "react-router-dom";
import App from "./App/App";
import './style/index.scss';


initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
     </BrowserRouter>
  </React.StrictMode>
);
