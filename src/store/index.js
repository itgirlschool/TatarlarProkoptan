import  {configureStore} from "@reduxjs/toolkit";
import userAuthReducer from "./slice/UserAuthSlice.js";
import autonomyReducer from "./slice/AutonomySlice.js";


export const store = configureStore({
    reducer:{
        userAuth: userAuthReducer,
        autonomy: autonomyReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(),
});

store.dispatch({type:'app/start'});

export default store;
