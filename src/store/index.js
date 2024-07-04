import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slice/UserAuthSlice.js";
import autonomyReducer from "./slice/AutonomySlice.js";
import charityReducer from './slice/CharitySlice.js';



export const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        autonomy: autonomyReducer,
        charity: charityReducer
    },
})
