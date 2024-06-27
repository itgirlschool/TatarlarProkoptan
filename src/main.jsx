import React from "react";
import ReactDOM from "react-dom/client";
import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from "../firebaseConfig.js";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import  {store} from "./store/index.js";
import App from "./App/App";
import './style/index.scss';

initializeApp(firebaseConfig);
export const dbFB = firebase.initializeApp(firebaseConfig).database()


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
