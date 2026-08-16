import "../css/Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export const Header = () => {
    const location = useLocation();

    const isUserActive = location.pathname === "/user" || location.pathname === "/login";

    return (
        <header className="floating-header">
            <nav className="dynamic-island">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    {({ isActive }) => (
                        <>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-slider-pill"
                                    className="nav-slider"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                />
                            )}
                            <span className="nav-label">Home</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/items"
                    className={({ isActive }) =>
                        isActive || location.pathname.startsWith("/products")
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    {({ isActive }) => {
                        const active = isActive || location.pathname.startsWith("/products");
                        return (
                            <>
                                {active && (
                                    <motion.div
                                        layoutId="nav-slider-pill"
                                        className="nav-slider"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32,
                                        }}
                                    />
                                )}
                                <span className="nav-label">Products</span>
                            </>
                        );
                    }}
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    {({ isActive }) => (
                        <>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-slider-pill"
                                    className="nav-slider"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                />
                            )}
                            <span className="nav-label">About</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/Details"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    {({ isActive }) => (
                        <>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-slider-pill"
                                    className="nav-slider"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 32,
                                    }}
                                />
                            )}
                            <span className="nav-label">Users</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/user"
                    className={({ isActive }) =>
                        isActive || isUserActive ? "nav-user active" : "nav-user"
                    }
                    aria-label="User Account"
                >
                    {({ isActive }) => {
                        const active = isActive || isUserActive;
                        return (
                            <>
                                {active && (
                                    <motion.div
                                        layoutId="nav-slider-pill"
                                        className="nav-slider"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32,
                                        }}
                                    />
                                )}
                                <span className="nav-icon"><FaUserCircle /></span>
                            </>
                        );
                    }}
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
