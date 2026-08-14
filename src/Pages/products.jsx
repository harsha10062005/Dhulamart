import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCards } from "./productsCard";
import "../css/Products.css";
import { motion, AnimatePresence } from "framer-motion";

export const Products = () => {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [load, setLoad] = useState(true);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const productsPerPage = 10;

    useEffect(() => {
        async function getProducts() {
            let response = await axios.get("https://dummyjson.com/products?limit=100");
            setProducts(response.data.products);
            setLoad(false);
        }

        async function getCategories() {
            let response = await axios.get("https://dummyjson.com/products/categories");
            setCategories(response.data);
        }

        getProducts();
        getCategories();
    }, []);

    useEffect(() => {
        if (products.length < 4) return;

        const interval = setInterval(() => {
            setCarouselIndex((current) => current >= 3 ? 0 : current + 1);
        }, 5500);

        return () => clearInterval(interval);
    }, [products.length]);

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

        let response = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
        setProducts(response.data.products);
        setPage(1);
        setActiveCategory("");
        scrollToProducts();
    }

    async function categoryProduct(category) {
        let response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        setProducts(response.data.products);
        setPage(1);
        setSearch("");
        setActiveCategory(category);
        scrollToProducts();
    }

    async function getAllProducts() {
        let response = await axios.get("https://dummyjson.com/products?limit=100");
        setProducts(response.data.products);
        setSearch("");
        setPage(1);
        setActiveCategory("all");
        scrollToProducts();
    }

    const totalPages = Math.ceil(products.length / productsPerPage);

    const currentProducts = products.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

    const carouselProducts = products.slice(0, 4);

    const carouselContent = [
        {
            tag: "YOUR EVERYDAY MART",
            title: "One place.",
            highlight: "Many possibilities.",
            description: "From beauty and technology to lifestyle essentials, discover more with Dhula Mart.",
            button: "Shop Now"
        },
        {
            tag: "DISCOVER SOMETHING NEW",
            title: "Find things",
            highlight: "you'll actually use.",
            description: "Explore useful products selected to make your everyday shopping experience simpler.",
            button: "Explore Products"
        },
        {
            tag: "SHOP WITHOUT THE NOISE",
            title: "Simple shopping.",
            highlight: "Better choices.",
            description: "Browse different categories through a clean and thoughtful shopping experience.",
            button: "Start Exploring"
        },
        {
            tag: "DHULA MART COLLECTION",
            title: "Everything you need.",
            highlight: "All in one place.",
            description: "Discover products across different categories and find something that fits your everyday life.",
            button: "View Collection"
        }
    ];

    function nextSlide() {
        setCarouselIndex((current) =>
            current >= carouselProducts.length - 1 ? 0 : current + 1
        );
    }

    function previousSlide() {
        setCarouselIndex((current) =>
            current === 0 ? carouselProducts.length - 1 : current - 1
        );
    }

    function goToSlide(index) {
        setCarouselIndex(index);
    }

    const activeProduct = carouselProducts[carouselIndex];
    const activeContent = carouselContent[carouselIndex];

    return (
        <main className="products-page">
            <div className="product-tools">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") searchProduct();
                        }}
                    />
                    <button onClick={searchProduct}>Search</button>
                </div>
                <div className="category-dropdown">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={activeCategory}
                        onChange={(e) => {
                            const value = e.target.value;
                            value === "all"
                                ? getAllProducts()
                                : categoryProduct(value);
                        }}
                    >
                        <option value="all">All Products</option>
                        {categories.map((category) => (
                            <option key={category.slug} value={category.slug}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {!load && carouselProducts.length >= 4 && (
                <section className="products-carousel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={carouselIndex}
                            className="carousel-slide"
                            initial={{ opacity: 0, x: 35 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -35 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <div className="carousel-content">
                                <motion.span
                                    className="carousel-tag"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.5 }}
                                >
                                    <span />
                                    {activeContent.tag}
                                </motion.span>

                                <motion.h1
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.6 }}
                                >
                                    {activeContent.title}
                                    <strong>{activeContent.highlight}</strong>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35, duration: 0.6 }}
                                >
                                    {activeContent.description}
                                </motion.p>

                                <motion.button
                                    className="carousel-button"
                                    onClick={scrollToProducts}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45, duration: 0.6 }}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    {activeContent.button}
                                    <span>→</span>
                                </motion.button>
                            </div>

                            <div className="carousel-product-area">
                                <div className="product-glow" />

                                <motion.div
                                    className="floating-product"
                                    initial={{ opacity: 0, scale: 0.75, y: 40 }}
                                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5 },
                                        scale: { duration: 0.7, ease: "easeOut" },
                                        y: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <img
                                        src={activeProduct.thumbnail}
                                        alt={activeProduct.title}
                                    />
                                </motion.div>

                                <div className="product-name-card">
                                    <span>FEATURED PRODUCT</span>
                                    <strong>{activeProduct.title}</strong>
                                    <small>${activeProduct.price}</small>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        className="carousel-arrow carousel-prev"
                        onClick={previousSlide}
                        aria-label="Previous slide"
                    >
                        ←
                    </button>

                    <button
                        className="carousel-arrow carousel-next"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        →
                    </button>

                    <div className="carousel-bottom">
                        <div className="carousel-counter">
                            <strong>0{carouselIndex + 1}</strong>
                            <span>/</span>
                            <span>0{carouselProducts.length}</span>
                        </div>

                        <div className="carousel-dots">
                            {carouselProducts.map((_, index) => (
                                <button
                                    key={index}
                                    className={carouselIndex === index ? "active" : ""}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="products-heading" id="products-list">
                <div>
                    <span>DHULA MART COLLECTION</span>
                    <h2>Explore Products</h2>
                </div>
                <p>Discover something you'll love.</p>
            </section>

            <ProductsCards
                products={currentProducts}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                load={load}
            />
        </main>
    );
};

export default Products;