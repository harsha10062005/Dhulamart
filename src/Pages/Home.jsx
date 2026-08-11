import { Header } from "../components/Header";
import "../css/Home.css";

import mart from "../assets/Dhulamart.png";
import { Footer } from "../components/footer";

function Home() {
  return (
    <>
      <Header />

      <main className="home">

        {/* ================= HERO ================= */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${mart})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">

              <span className="hero-tag">
                EVERYTHING YOU NEED • ALL IN ONE PLACE
              </span>

              <h1>
                Welcome to <span>Dhula Mart</span>
              </h1>

              <p>
                Discover a simple and convenient way to shop for
                everything you need. Explore different categories,
                discover new products and enjoy a better shopping
                experience.
              </p>

              <div className="hero-buttons">
                <button className="shop-btn">
                  Shop Now →
                </button>

                <button className="learn-btn">
                  Explore Categories
                </button>
              </div>

            </div>
          </div>
        </section>


        {/* ================= FEATURES ================= */}
        <section className="features-section">

          <div className="section-heading">
            <span>WHY DHULA MART?</span>

            <h2>
              Shopping Made <strong>Simple</strong>
            </h2>

            <p>
              We focus on making your shopping experience simple,
              convenient and reliable.
            </p>
          </div>

          <div className="features">

            <div className="feature-card">
              <div className="feature-icon">
                🚚
              </div>

              <h3>Free Delivery</h3>

              <p>
                Free shipping on orders above ₹999.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                🔒
              </div>

              <h3>Secure Payment</h3>

              <p>
                Safe and secure transactions for your purchases.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                ⭐
              </div>

              <h3>Quality Products</h3>

              <p>
                Carefully selected products for your everyday needs.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                💬
              </div>

              <h3>24/7 Support</h3>

              <p>
                We're always here when you need assistance.
              </p>
            </div>

          </div>

        </section>


        {/* ================= CATEGORIES ================= */}
        <section className="categories">

          <div className="section-heading">
            <span>EXPLORE DHULA MART</span>

            <h2>
              Shop By <strong>Category</strong>
            </h2>

            <p>
              Explore different categories and find what you're
              looking for.
            </p>
          </div>


          <div className="category-grid">

            <div className="category">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
                  alt="Electronics"
                />

                <div className="category-arrow">
                  →
                </div>
              </div>

              <div className="category-content">
                <h3>Electronics</h3>
                <p>Explore technology and gadgets</p>
              </div>
            </div>


            <div className="category">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
                  alt="Fashion"
                />

                <div className="category-arrow">
                  →
                </div>
              </div>

              <div className="category-content">
                <h3>Fashion</h3>
                <p>Discover styles for every occasion</p>
              </div>
            </div>


            <div className="category">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
                  alt="Accessories"
                />

                <div className="category-arrow">
                  →
                </div>
              </div>

              <div className="category-content">
                <h3>Accessories</h3>
                <p>Complete your everyday style</p>
              </div>
            </div>


            <div className="category">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600"
                  alt="Home"
                />

                <div className="category-arrow">
                  →
                </div>
              </div>

              <div className="category-content">
                <h3>Home & Living</h3>
                <p>Make your home more comfortable</p>
              </div>
            </div>

          </div>

        </section>


        {/* ================= ABOUT PREVIEW ================= */}
        <section className="about-preview">

          <div className="about-preview-content">

            <span>ABOUT DHULA MART</span>

            <h2>
              One Place.
              <strong> Many Possibilities.</strong>
            </h2>

            <p>
              Dhula Mart is designed to bring different shopping
              categories together in one convenient place. Whether
              you're looking for everyday essentials, technology,
              fashion or accessories, our goal is to make discovering
              what you need easier.
            </p>

            <button className="outline-btn">
              Learn More →
            </button>

          </div>


          <div className="about-preview-shapes">

            <div className="floating-circle circle-one">
              🛍️
            </div>

            <div className="floating-circle circle-two">
              📦
            </div>

            <div className="floating-circle circle-three">
              ✨
            </div>

            <div className="about-center-icon">
              🛒
            </div>

          </div>

        </section>


        {/* ================= WHY CHOOSE US ================= */}
        <section className="why-section">

          <div className="section-heading">
            <span>THE DHULA MART EXPERIENCE</span>

            <h2>
              Why Choose <strong>Dhula Mart?</strong>
            </h2>

            <p>
              Everything is designed around a simple idea — making
              everyday shopping easier.
            </p>
          </div>


          <div className="why-grid">

            <div className="why-card">
              <div className="why-number">
                01
              </div>

              <div className="why-icon">
                🛍️
              </div>

              <h3>Everything In One Place</h3>

              <p>
                Explore different shopping categories without
                having to move between multiple platforms.
              </p>
            </div>


            <div className="why-card">
              <div className="why-number">
                02
              </div>

              <div className="why-icon">
                🔎
              </div>

              <h3>Easy To Explore</h3>

              <p>
                Find and discover products through a clean and
                simple shopping experience.
              </p>
            </div>


            <div className="why-card">
              <div className="why-number">
                03
              </div>

              <div className="why-icon">
                💙
              </div>

              <h3>Customer Focused</h3>

              <p>
                We aim to make every interaction simple,
                convenient and enjoyable.
              </p>
            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}
        <section className="how-section">

          <div className="section-heading">
            <span>SIMPLE SHOPPING</span>

            <h2>
              How It <strong>Works</strong>
            </h2>

            <p>
              Shopping with Dhula Mart is designed to be simple.
            </p>
          </div>


          <div className="steps">

            <div className="step">
              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                🔎
              </div>

              <h3>Explore</h3>

              <p>
                Browse through different categories.
              </p>
            </div>


            <div className="step-line"></div>


            <div className="step">
              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                🛍️
              </div>

              <h3>Choose</h3>

              <p>
                Discover something you like.
              </p>
            </div>


            <div className="step-line"></div>


            <div className="step">
              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                🛒
              </div>

              <h3>Shop</h3>

              <p>
                Add what you need to your shopping experience.
              </p>
            </div>


            <div className="step-line"></div>


            <div className="step">
              <div className="step-number">
                04
              </div>

              <div className="step-icon">
                📦
              </div>

              <h3>Enjoy</h3>

              <p>
                Complete your shopping with ease.
              </p>
            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta">

          <div className="cta-content">

            <span>START EXPLORING</span>

            <h2>
              Your Shopping Journey
              <strong> Starts Here.</strong>
            </h2>

            <p>
              Explore Dhula Mart and discover a simpler way to
              find everything you need.
            </p>

            <button className="cta-btn">
              Browse Products →
            </button>

          </div>

        </section>

      </main>

      <Footer/>
    </>
  );
}

export default Home;