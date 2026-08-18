import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Items } from "../components/Items";
import { About } from "../Pages/about";
import { UserPage } from "../Pages/UserPage";
import Login from "../components/login";
import Details from "../Pages/Details";
import ProductDetails from "../Pages/ProductDetails";
import Deals from "../Pages/Deals";
import logo from "../assets/logo.png";
import "./Router.css";

const Home = React.lazy(() => import("../Pages/Home"));

const LoadingScreen = () => {
    return (
        <div className="nexa-loader">
            <div className="nexa-loader-content">
                <div className="nexa-logo-box">
                    <img
                        src={logo}
                        alt="NexaMart"
                        className="nexa-loader-logo"
                    />
                </div>

                <div className="nexa-loader-brand">
                    <h1>NexaMart</h1>
                    <span>EVERYTHING IN ONE PLACE</span>
                </div>

                <div className="nexa-loader-line">
                    <span></span>
                </div>
            </div>
        </div>
    );
};

const Router = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    if (showLoader) {
        return <LoadingScreen />;
    }

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Items />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details" element={<Details />} />
                <Route
                    path="/products/:id"
                    element={<ProductDetails />}
                />
            </Routes>
        </Suspense>
    );
};

export default Router;
export { Router };