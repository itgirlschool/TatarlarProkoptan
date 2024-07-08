import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import {
    HomePage,
    Charity,
    CharityModal,
    Culture,
    Events,
    Partners,
    Sabantui,
    WeAreTogether,
} from "../Pages";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

import style from "./App.module.scss";
import Loader from "../Components/Loader/Loader.jsx";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'SUBSCRIBE_TO_AUTONOMY_USERS' })
        dispatch({ type: 'SUBSCRIBE_TO_CHARITY_USERS' })
        dispatch({ type: 'SUBSCRIBE_TO_USERS' })
    }, [dispatch])

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className={style.loaderContainer}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={style.app}>
            <Header />
            <main className={style.main}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/charity" element={<Charity />} />
                    <Route path="/modal" element={
                        <CharityModal
                            openModal={true}
                            closeModal={() => { }}
                            updateCounter={() => { }} />} />
                    <Route path="/culture" element={<Culture />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/sabantui" element={<Sabantui />} />
                    <Route path="/we-are-together" element={<WeAreTogether />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
