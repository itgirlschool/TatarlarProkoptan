import React from "react";
import ReactDOM from "react-dom/client";
import 'firebase/compat/database';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import App from "./App/App";
import './style/index.scss';



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
