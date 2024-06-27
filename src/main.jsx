import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./style/index.scss";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDF73xNPT2aSfJonH9_5l2G10LwTYEw1XQ",
  authDomain: "tatarlarprokoptan.firebaseapp.com",
  projectId: "tatarlarprokoptan",
  storageBucket: "tatarlarprokoptan.appspot.com",
  messagingSenderId: "306540351425",
  appId: "1:306540351425:web:7ae5c1d1cd40f1c6f36940",
  measurementId: "G-QMCGBW73CL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
