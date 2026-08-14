import "../css/products.css";
import { Loader } from "../Loaders/loader";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const ProductsCards = ({
    products,
    page,
    setPage,
    totalPages,
    load,
    category = "",
    search = ""
}) => {
    const navigate = useNavigate();

    const gridVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.25 }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 45,
            scale: 0.96
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.65,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: 25,
            scale: 0.96,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return (
        <>
            {load ? (
                <Loader />
            ) : (
                <>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${category}-${search}-${page}`}
                            className="products-container"
                            variants={gridVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                        >
                            <div className="products-grid">
                                {products.map((item) => (
                                    <motion.div
                                        className="product-card-wrapper"
                                        key={item.id}
                                        variants={cardVariants}
                                    >
                                        <article className="product-card">
                                            <div className="product-image-box">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                />
                                            </div>

                                            <div className="product-card-body">
                                                <h3>{item.title}</h3>

                                                <p>{item.description}</p>

                                                <div className="product-card-bottom">
                                                    <strong>
                                                        ${item.price}
                                                    </strong>

                                                    <button
                                                        onClick={() =>
                                                            navigate(
                                                                `/products/${item.id}`
                                                            )
                                                        }
                                                    >
                                                        View Product
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="pagination">
                        {Array.from(
                            { length: totalPages },
                            (_, index) => (
                                <button
                                    key={index + 1}
                                    className={
                                        page === index + 1
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                       { setPage(index + 1),
                                        window.scrollTo({
                                          top:700,
                                          behavior:'smooth',
                                        })
                                       }
                                    }
                                >
                                    {index + 1}
                                </button>
                            )
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default ProductsCards;