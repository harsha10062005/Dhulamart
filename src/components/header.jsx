import "../css/Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const Header = () => {
    const location = useLocation();
    const [isCompact, setIsCompact] = useState(false);
    const currentPath = location.pathname;

    const page = useMemo(() => {
        const isHome = currentPath === "/";
        const isProducts = currentPath === "/items" || currentPath.startsWith("/products");
        const isDeals = currentPath === "/deals";
        const isAbout = currentPath === "/about";
        const isUsers = currentPath === "/details";
        const isUser = currentPath === "/user" || currentPath === "/login";

        let currentPage = "NexaMart";

        if (isHome) currentPage = "Home";
        else if (isProducts) currentPage = "Products";
        else if (isDeals) currentPage = "Deals";
        else if (isAbout) currentPage = "About";
        else if (isUsers) currentPage = "Users";
        else if (isUser) currentPage = "Account";

        return {
            isHome,
            isProducts,
            isDeals,
            isAbout,
            isUsers,
            isUser,
            currentPage
        };
    }, [currentPath]);

    useEffect(() => {
        const handleScroll = () => {
            setIsCompact(window.scrollY > 80);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerClassName = [
        "floating-header",
        page.isDeals ? "header-theme-deals" : "header-theme-default",
        isCompact ? "header-compact" : ""
    ].filter(Boolean).join(" ");

    const navigationItems = [
        {
            label: "Home",
            to: "/",
            active: page.isHome
        },
        {
            label: "Products",
            to: "/items",
            active: page.isProducts
        },
        {
            label: "Deals",
            to: "/deals",
            active: page.isDeals
        },
        {
            label: "About",
            to: "/about",
            active: page.isAbout
        },
        {
            label: "Users",
            to: "/details",
            active: page.isUsers
        }
    ];

    return (
        <header className={headerClassName}>
            <nav
                className="dynamic-island"
                aria-label="Main navigation"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {!isCompact ? (
                        <motion.div
                            key="expanded-navigation"
                            className="expanded-navigation"
                            initial={{
                                opacity: 0,
                                scale: 0.98
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.98
                            }}
                            transition={{
                                duration: 0.18,
                                ease: "easeOut"
                            }}
                        >
                            {navigationItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={`nav-item ${item.active ? "active" : ""}`}
                                    aria-current={item.active ? "page" : undefined}
                                >
                                    {item.active && (
                                        <motion.div
                                            layoutId="nav-slider-pill"
                                            className="nav-slider"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 32
                                            }}
                                        />
                                    )}

                                    <span className="nav-label">
                                        {item.label}
                                    </span>
                                </NavLink>
                            ))}

                            <NavLink
                                to="/user"
                                className={`nav-user ${page.isUser ? "active" : ""}`}
                                aria-label="User Account"
                                aria-current={page.isUser ? "page" : undefined}
                            >
                                {page.isUser && (
                                    <motion.div
                                        layoutId="nav-slider-pill"
                                        className="nav-slider"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32
                                        }}
                                    />
                                )}

                                <span className="nav-icon">
                                    <FaUserCircle />
                                </span>
                            </NavLink>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="compact-navigation"
                            className="compact-island"
                            initial={{
                                opacity: 0,
                                scale: 0.96
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96
                            }}
                            transition={{
                                duration: 0.18,
                                ease: "easeOut"
                            }}
                        >
                            <span
                                className="compact-status"
                                aria-hidden="true"
                            />

                            <span className="compact-page">
                                {page.currentPage}
                            </span>

                            <span
                                className="compact-arrow"
                                aria-hidden="true"
                            >
                                ↓
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;