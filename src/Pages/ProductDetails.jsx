import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/productDetails.css";
import Loading from "../Loaders/loading";
import Header from "../components/header";
import { Footer } from "../components/footer";

export const ProductDetails = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function getProduct() {
            let response = await axios.get(
                `https://dummyjson.com/products/${id}`
            );

            setTimeout(() => {
                setProduct(response.data);
                setLoad(false);
            }, 2000);

        }
        getProduct();
    }, [id]);


    if (load) {
        return (
            <div className="product-details-page">
                <Loading />
            </div>
        );
    }


    return (

        <>
        <Header/>
            <div className="product-details-page">
            <div className="product-details-container">
                <div className="product-image">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                </div>

                <div className="product-content">

                    <p className="product-category">
                        {product.category}
                    </p>

                    <h1>
                        {product.title}
                    </h1>

                    <p className="product-description">
                        {product.description}
                    </p>

                    <div className="product-rating">
                        ★ {product.rating}
                    </div>

                    <h2 className="product-price">
                        ${product.price}
                    </h2>

                    <div className="product-info">

                        <p>
                            <span>Brand</span>
                            {product.brand}
                        </p>

                        <p>
                            <span>Stock</span>
                            {product.stock}
                        </p>

                        <p>
                            <span>Category</span>
                            {product.category}
                        </p>
                    </div>

                    <div className="product-buttons">

                        <button className="buy-btn">
                            Buy Now
                        </button>

                        <button className="cart-btn">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
    );
};

export default ProductDetails;