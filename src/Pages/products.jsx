import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCards } from "./productsCard";
import "../css/products.css";

export const Products = () => {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [load, setLoad] = useState(true);

    const productsPerPage = 10;

    useEffect(() => {
        async function getProducts() {
            let response = await axios.get(
                "https://dummyjson.com/products?limit=100"
            );

            setProducts(response.data.products);
            setLoad(false);
        }

        async function getCategories() {
            let response = await axios.get(
                "https://dummyjson.com/products/categories"
            );

            setCategories(response.data);
        }

        getProducts();
        getCategories();
    }, []);

    function scrollToProducts() {
        setTimeout(() => {
            document.getElementById("products-list")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    }

    async function searchProduct() {
        if (search.trim() === "") {
            getAllProducts();
            return;
        }

        let response = await axios.get(
            `https://dummyjson.com/products/search?q=${search}`
        );

        setProducts(response.data.products);
        setPage(1);
        setActiveCategory("");
        scrollToProducts();
    }

    async function categoryProduct(category) {
        let response = await axios.get(
            `https://dummyjson.com/products/category/${category}`
        );

        setProducts(response.data.products);
        setPage(1);
        setSearch("");
        setActiveCategory(category);
        scrollToProducts();
    }

    async function getAllProducts() {
        let response = await axios.get(
            "https://dummyjson.com/products?limit=100"
        );

        setProducts(response.data.products);
        setSearch("");
        setPage(1);
        setActiveCategory("all");
        scrollToProducts();
    }

    const totalPages = Math.ceil(
        products.length / productsPerPage
    );

    const currentProducts = products.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

    return (
        <>
            <div className="product-tools">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchProduct();
                            }
                        }}
                    />

                    <button onClick={searchProduct}>
                        Search
                    </button>
                </div>

                <div className="categories">
                    <button
                        className={
                            activeCategory === "all"
                                ? "active"
                                : ""
                        }
                        onClick={getAllProducts}
                    >
                        All
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category.slug}
                            className={
                                activeCategory === category.slug
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                categoryProduct(category.slug)
                            }
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div id="products-list">
                <ProductsCards
                    products={currentProducts}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    load={load}
                />
            </div>
        </>
    );
};

export default Products;