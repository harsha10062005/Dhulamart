import { Route, Routes } from "react-router-dom"
import { Items } from "../components/Items"
import Home from "../Pages/Home"
import { About } from "../Pages/about"
import { UserPage } from "../Pages/UserPage"
import { Details } from "../Pages/Details.jsx"
import Login from "../components/login.jsx"
import ProductDetails from "../Pages/ProductDetails.jsx"


export const Router = () => {
    return (
        <>

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/items"
                    element={<Items />}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
                <Route 
                    path="/user"
                    element ={<UserPage/>}
                />
                <Route 
                    path="/Details"
                    element ={<Details/>}
                />
                <Route 
                    path="/login"
                    element ={<Login />}
                />
                <Route 
                    path="/products/:id"
                    element ={<ProductDetails/>}
                />
                


            </Routes>
        </>
    )
}