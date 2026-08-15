import { Link } from "react-router-dom";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <footer className="dhula-footer">

      {/* ================= TOP FOOTER ================= */}
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🛒</span>

            <div>
              <h2>Dhula Mart</h2>
              <span>EVERYTHING IN ONE PLACE</span>
            </div>
          </div>

          <p>
            Discover a simple and convenient way to shop for the things
            you need. Explore different categories and enjoy a better
            shopping experience with Dhula Mart.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">◇</a>
          </div>
        </div>


        {/* ================= CATEGORIES ================= */}
        <div className="footer-column">
          <h3>Categories</h3>
          <Link to="/items">Electronics</Link>
          <Link to="/items">Fashion</Link>
          <Link to="/items">Accessories</Link>
          <Link to="/items">Home & Living</Link>
          <Link to="/items">Groceries</Link>
        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/items">All Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/user">Sign In / Register</Link>
          <Link to="/details">Community Members</Link>
        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-column footer-contact">

          <h3>Get In Touch</h3>

          <div className="contact-item">
            <span>📍</span>

            <p>
              Hyderabad, Telangana
              <br />
              India
            </p>
          </div>


          <div className="contact-item">
            <span>✉</span>

            <p>
              support@dhulamart.com
            </p>
          </div>


          <div className="contact-item">
            <span>☎</span>

            <p>
              +91 98765 43210
            </p>
          </div>


          <div className="contact-item">
            <span>◷</span>

            <p>
              Mon - Sat
              <br />
              9:00 AM - 8:00 PM
            </p>
          </div>

        </div>

      </div>


      {/* ================= FOOTER MIDDLE ================= */}
      <div className="footer-middle">

        <div>
          <strong>🚚 Fast Delivery</strong>
          <span>Reliable delivery experience</span>
        </div>

        <div>
          <strong>🔒 Secure Shopping</strong>
          <span>Your shopping experience matters</span>
        </div>

        <div>
          <strong>⭐ Quality</strong>
          <span>Products selected with care</span>
        </div>

        <div>
          <strong>💬 Support</strong>
          <span>We're here when you need us</span>
        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()}{" "}
          <strong>Dhula Mart</strong>. All Rights Reserved.
        </p>

        <div>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>

      </div>

    </footer>
  );
};