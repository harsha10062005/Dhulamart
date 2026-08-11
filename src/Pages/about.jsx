import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import "../css/About.css";

export const About = () => {
  return (
    <>
      <Header />

      <main className="about-page">

        {/* ================= ABOUT HERO ================= */}
        <section className="about-hero">

          <div className="about-hero-content">

            <span>GET TO KNOW US</span>

            <h1>
              About <strong>Dhula Mart</strong>
            </h1>

            <p>
              Everything you need, all in one place. Dhula Mart is
              designed to make discovering and shopping for everyday
              products simple, convenient and enjoyable.
            </p>

          </div>

          <div className="about-hero-decoration">

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>

            <div className="hero-shopping-icon">
              🛒
            </div>

          </div>

        </section>


        {/* ================= OUR STORY ================= */}
        <section className="about-story">

          <div className="story-image">

            <div className="story-image-main">
              🛍️
            </div>

            <div className="story-floating-card">
              <span>DHULA MART</span>
              <strong>Everything in one place.</strong>
            </div>

          </div>


          <div className="story-content">

            <span className="about-label">
              OUR STORY
            </span>

            <h2>
              Built Around A
              <strong> Simple Idea.</strong>
            </h2>

            <p>
              Shopping should not feel complicated. Dhula Mart is
              created around the idea of bringing different shopping
              categories together in one convenient place.
            </p>

            <p>
              From everyday essentials to technology, fashion,
              accessories and more, our goal is to create a simple
              environment where you can explore what you need without
              unnecessary complexity.
            </p>

            <div className="story-highlight">

              <div>
                <span>01</span>
                <strong>Explore</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Discover</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Shop</strong>
              </div>

            </div>

          </div>

        </section>


        {/* ================= MISSION ================= */}
        <section className="mission-section">

          <div className="mission-content">

            <span>OUR MISSION</span>

            <h2>
              Making Shopping
              <strong> Simple & Convenient.</strong>
            </h2>

            <p>
              Our mission is to create a shopping experience that
              focuses on convenience, quality, accessibility and
              customer satisfaction.
            </p>

            <p>
              We want Dhula Mart to be a place where people can
              discover different products and categories through a
              clean and easy-to-use experience.
            </p>

          </div>

          <div className="mission-icon">
            ✨
          </div>

        </section>


        {/* ================= WHAT WE OFFER ================= */}
        <section className="offer-section">

          <div className="section-heading">

            <span>WHAT WE OFFER</span>

            <h2>
              Explore Different
              <strong> Categories</strong>
            </h2>

            <p>
              Dhula Mart brings different shopping interests together
              in one place.
            </p>

          </div>


          <div className="offer-grid">

            <div className="offer-card">
              <div>📱</div>
              <h3>Electronics</h3>
              <p>
                Explore technology, gadgets and everyday electronics.
              </p>
            </div>

            <div className="offer-card">
              <div>👕</div>
              <h3>Fashion</h3>
              <p>
                Discover clothing and styles for different occasions.
              </p>
            </div>

            <div className="offer-card">
              <div>🏠</div>
              <h3>Home & Living</h3>
              <p>
                Find products designed to make your home comfortable.
              </p>
            </div>

            <div className="offer-card">
              <div>🛒</div>
              <h3>Everyday Essentials</h3>
              <p>
                Explore products for your everyday shopping needs.
              </p>
            </div>

            <div className="offer-card">
              <div>💎</div>
              <h3>Accessories</h3>
              <p>
                Discover accessories that complete your everyday style.
              </p>
            </div>

            <div className="offer-card">
              <div>✨</div>
              <h3>More To Explore</h3>
              <p>
                Discover more categories as Dhula Mart continues to grow.
              </p>
            </div>

          </div>

        </section>


        {/* ================= VALUES ================= */}
        <section className="values-section">

          <div className="section-heading">

            <span>WHAT MATTERS TO US</span>

            <h2>
              Our Core
              <strong> Values</strong>
            </h2>

          </div>


          <div className="values-grid">

            <div className="value-card">

              <span className="value-number">
                01
              </span>

              <div className="value-icon">
                ❤️
              </div>

              <h3>Customer First</h3>

              <p>
                We believe a good shopping experience starts with
                understanding the customer.
              </p>

            </div>


            <div className="value-card">

              <span className="value-number">
                02
              </span>

              <div className="value-icon">
                ⭐
              </div>

              <h3>Quality</h3>

              <p>
                We aim to provide a shopping environment focused on
                quality and value.
              </p>

            </div>


            <div className="value-card">

              <span className="value-number">
                03
              </span>

              <div className="value-icon">
                🔍
              </div>

              <h3>Transparency</h3>

              <p>
                Clear information and a straightforward experience
                should always be part of shopping.
              </p>

            </div>


            <div className="value-card">

              <span className="value-number">
                04
              </span>

              <div className="value-icon">
                💡
              </div>

              <h3>Innovation</h3>

              <p>
                We continuously look for better ways to improve the
                shopping experience.
              </p>

            </div>

          </div>

        </section>


        {/* ================= HOW WE WORK ================= */}
        <section className="about-process">

          <div className="section-heading">

            <span>OUR APPROACH</span>

            <h2>
              Shopping Should Feel
              <strong> Simple.</strong>
            </h2>

          </div>


          <div className="process-grid">

            <div className="process-card">

              <span>01</span>

              <div>
                🔎
              </div>

              <h3>Discover</h3>

              <p>
                Explore categories and discover products that interest
                you.
              </p>

            </div>


            <div className="process-card">

              <span>02</span>

              <div>
                🛍️
              </div>

              <h3>Choose</h3>

              <p>
                Find what you need through a simple shopping interface.
              </p>

            </div>


            <div className="process-card">

              <span>03</span>

              <div>
                🛒
              </div>

              <h3>Shop</h3>

              <p>
                Enjoy a convenient experience while shopping for your
                selected products.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="about-cta">

          <div>

            <span>WELCOME TO DHULA MART</span>

            <h2>
              Everything You Need.
              <strong> All In One Place.</strong>
            </h2>

            <p>
              Explore Dhula Mart and discover a simpler way to shop.
            </p>

            <button>
              Start Exploring →
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};