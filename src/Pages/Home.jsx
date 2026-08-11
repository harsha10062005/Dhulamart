import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../css/Home.css";

import mart from '../assets/Dhulamart.png'

function Home() {
  return (
    <>
      <Header />

      <main className="home">

        {/* Hero Section */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${mart})` }}
        >
        </section>

        {/* Features */}
        <section className="features">

          <div className="feature-card">
            <h2>🚚</h2>
            <h3>Free Delivery</h3>
            <p>Free shipping on orders above ₹999.</p>
          </div>

          <div className="feature-card">
            <h2>🔒</h2>
            <h3>Secure Payment</h3>
            <p>100% encrypted and secure transactions.</p>
          </div>

          <div className="feature-card">
            <h2>⭐</h2>
            <h3>Premium Quality</h3>
            <p>Carefully selected products from top brands.</p>
          </div>

          <div className="feature-card">
            <h2>💬</h2>
            <h3>24/7 Support</h3>
            <p>Always ready to help whenever you need us.</p>
          </div>

        </section>

        {/* Categories */}
        <section className="categories">

          <h2>Shop By Category</h2>

          <div className="category-grid">

            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
                alt="Electronics"
              />
              <h3>Electronics</h3>
            </div>

            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600"
                alt="Fashion"
              />
              <h3>Fashion</h3>
            </div>

            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
                alt="Accessories"
              />
              <h3>Accessories</h3>
            </div>

            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600"
                alt="Home"
              />
              <h3>Home</h3>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="cta">

          <h2>Ready to Start Shopping?</h2>

          <p>
            Join thousands of happy customers and enjoy the best shopping
            experience with exclusive deals and offers.
          </p>

          <button>Browse Products</button>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;