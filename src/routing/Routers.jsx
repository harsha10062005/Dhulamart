import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Items } from "../components/Items";
import { About } from "../Pages/about";
import { UserPage } from "../Pages/UserPage";
import Login from "../components/login";
import Details from "../Pages/Details";
import ProductDetails from "../Pages/ProductDetails";

const Home = React.lazy(() => import("../Pages/Home"));

export const Router = () => {
    return (
        <Suspense fallback={<center style={{ padding: "40px" }}>Loading...</center>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Items />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details" element={<Details />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
        </Suspense>
    );
};