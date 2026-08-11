import "../css/Header.css";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        <NavLink to="/" className="logo-text">
          Dhula Mart
        </NavLink>
      </div>

      {/* Center Navigation */}
      <nav className="nav-menu">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/items"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Details"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Users
        </NavLink>


      </nav>

      {/* Right Side */}
      <div className="profile">
        <NavLink to="/user">
          <FaUserCircle className="user-icon" />
        </NavLink>
      </div>

    </header>
  );
};

export default Header;