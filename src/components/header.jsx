import "../css/Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {

    const location = useLocation();

    const getSliderPosition = () => {

        if (location.pathname === "/") {
            return "translateX(0px)";
        }

        if (location.pathname === "/items") {
            return "translateX(86px)";
        }

        if (location.pathname === "/about") {
            return "translateX(172px)";
        }

        if (location.pathname === "/user") {
            return "translateX(258px)";
        }

        return "translateX(0px)";
    };


    return (
        <header className="floating-header">

            <nav className="dynamic-island">

                <div
                    className="nav-slider"
                    style={{
                        transform: getSliderPosition()
                    }}
                />

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    Home
                </NavLink>


                <NavLink
                    to="/items"
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    Products
                </NavLink>


                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    About
                </NavLink>


                <NavLink
                    to="/user"
                    className={({ isActive }) =>
                        isActive
                            ? "nav-user active"
                            : "nav-user"
                    }
                >
                    <FaUserCircle />
                </NavLink>

            </nav>

        </header>
    );
};

export default Header;