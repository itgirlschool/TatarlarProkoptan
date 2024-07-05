import { configureStore } from "@reduxjs/toolkit";
import middlewareListenersAutonomyUsers from "./middleware/middleWareAutonomy.js"
import middlewareListenersUsers from "./middleware/middleWareUsers.js";
import middlewareListenersCharityUsers from "./middleware/middleWareCharity.js";
import userAuthReducer from "./slice/UserAuthSlice.js";
import autonomyReducer from "./slice/AutonomySlice.js";
import charityReducer from "./slice/CharitySlice.js";
import usersReducer from "./slice/UsersSlice.js";
import firebase from 'firebase/compat/app';
import firebaseConfig from "../../firebaseConfig.js";
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);
export const database = firebase.initializeApp(firebaseConfig).database()
const listenerMiddlewareAutonomy = middlewareListenersAutonomyUsers(database);
const listenerMiddlewareCharity = middlewareListenersCharityUsers(database);
const listenerMiddlewareUsers = middlewareListenersUsers(database);


export const store = configureStore({
        reducer: {
                userAuth: userAuthReducer,
                users: usersReducer,
                autonomy: autonomyReducer,
                charity: charityReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddlewareAutonomy, listenerMiddlewareCharity, listenerMiddlewareUsers),
})
