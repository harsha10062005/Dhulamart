import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ShoppingBag,
  Package,
  Search,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Header } from "../components/header";
import "../css/Home.css";
import { Footer } from "../components/footer";
import heroVideo from "../assets/hero-video.mp4";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = (delay = 0.09) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.05,
    },
  },
});

const viewportOnce = {
  once: true,
  amount: 0.25,
};

function LandingPage() {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroFade = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <>
      <Header />

      <main className="home">

        <section className="hero" ref={heroRef}>

          <motion.div
            className="hero-image"
            style={{
              y: heroImageY,
            }}
          />

          <div className="hero-overlay">

            <motion.div
              className="hero-content"
              initial="hidden"
              animate="show"
              variants={stagger(0.12)}
              style={{
                opacity: heroFade,
              }}
            >

              <motion.span
                className="hero-tag"
                variants={fadeUp}
              >
                <span className="hero-tag-dot" />
                Everything you need, all in one place
              </motion.span>

              <motion.h1 variants={fadeUp}>
                Shopping that feels
                <br />
                like <span>NexaMart</span>
              </motion.h1>

              <motion.p variants={fadeUp}>
                A simpler, more thoughtful way to shop — browse
                categories, discover things you'll actually use, and
                check out without the noise.
              </motion.p>

              <motion.div
                className="hero-buttons"
                variants={fadeUp}
              >

                <motion.button
                  className="shop-btn"
                  onClick={() => navigate("/items")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Shop now
                  <span className="btn-arrow">
                    <ArrowRight size={17} strokeWidth={2} />
                  </span>
                </motion.button>

                <motion.button
                  className="learn-btn"
                  onClick={() => navigate("/items")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore categories
                </motion.button>

              </motion.div>

            </motion.div>

            <motion.div
              className="hero-scroll-cue"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
            >
              <span />
              Scroll to explore
            </motion.div>

          </div>
        </section>


        <motion.section
          className="trust-strip"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.08)}
        >

          {[
            ["50K+", "happy customers"],
            ["4.8/5", "average rating"],
            ["120+", "cities delivered to"],
            ["24/7", "support, always"],
          ].map(([stat, label]) => (

            <motion.div
              className="trust-item"
              key={label}
              variants={fadeUp}
            >
              <strong>{stat}</strong>
              <span>{label}</span>
            </motion.div>

          ))}

        </motion.section>


        <section className="features-section">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            <motion.span variants={fadeUp}>
              Why NexaMart
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Shopping made <strong>simple</strong>
            </motion.h2>

            <motion.p variants={fadeUp}>
              We focus on making your shopping experience simple,
              convenient and reliable — every single time.
            </motion.p>

          </motion.div>


          <motion.div
            className="features"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            {[
              {
                icon: <Truck />,
                title: "Free delivery",
                copy: "Free shipping on every order above ₹999.",
              },
              {
                icon: <ShieldCheck />,
                title: "Secure payment",
                copy: "Safe, encrypted transactions on every purchase.",
              },
              {
                icon: <Sparkles />,
                title: "Quality products",
                copy: "Carefully selected picks for your everyday needs.",
              },
              {
                icon: <MessageCircle />,
                title: "24/7 support",
                copy: "Real people, ready to help whenever you need us.",
              },
            ].map(({ icon, title, copy }) => (

              <motion.div
                className="feature-card"
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                }}
              >

                <div className="feature-icon">
                  {icon}
                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {copy}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </section>


        <section className="categories">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            <motion.span variants={fadeUp}>
              Explore NexaMart
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Shop by <strong>category</strong>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Explore different categories and find what you're
              looking for.
            </motion.p>

          </motion.div>


          <motion.div
            className="category-grid"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.1)}
          >

            {[
              [
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
                "Electronics",
                "Explore technology and gadgets",
              ],
              [
                "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
                "Fashion",
                "Discover styles for every occasion",
              ],
              [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
                "Accessories",
                "Complete your everyday style",
              ],
              [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
                "Home & Living",
                "Make your home more comfortable",
              ],
            ].map(([img, title, copy]) => (

              <motion.div
                className="category"
                key={title}
                variants={fadeUp}
                whileHover="hover"
                onClick={() => navigate("/items")}
              >

                <div className="category-image">

                  <motion.img
                    src={img}
                    alt={title}
                    variants={{
                      hover: {
                        scale: 1.08,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                  />

                  <motion.div
                    className="category-arrow"
                    variants={{
                      hover: {
                        x: 4,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>

                </div>

                <div className="category-content">

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {copy}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </section>


        <section className="about-preview">

          <motion.div
            className="about-preview-content"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            <motion.span variants={fadeUp}>
              About NexaMart
            </motion.span>

            <motion.h2 variants={fadeUp}>
              One place.
              <strong>
                {" "}Many possibilities.
              </strong>
            </motion.h2>

            <motion.p variants={fadeUp}>
              NexaMart brings different shopping categories together
              in one convenient place. Whether you're after everyday
              essentials, technology, fashion or accessories, our goal
              is to make discovering what you need easier.
            </motion.p>

            <motion.button
              className="outline-btn"
              onClick={() => navigate("/about")}
              variants={fadeUp}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Learn more →
            </motion.button>

          </motion.div>


          <motion.div
            className="about-preview-shapes"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.15)}
          >

            <motion.div
              className="floating-circle circle-one"
              variants={fadeUp}
              animate={{
                y: [
                  0,
                  -10,
                  0,
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ShoppingBag size={27} strokeWidth={1.7} />
            </motion.div>


            <motion.div
              className="floating-circle circle-two"
              variants={fadeUp}
              animate={{
                y: [
                  0,
                  10,
                  0,
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <Package size={27} strokeWidth={1.7} />
            </motion.div>


            <motion.div
              className="floating-circle circle-three"
              variants={fadeUp}
              animate={{
                y: [
                  0,
                  -8,
                  0,
                ],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <Sparkles size={25} strokeWidth={1.7} />
            </motion.div>


            <motion.div
              className="about-center-icon"
              variants={fadeUp}
            >
              <ShoppingBag
                size={42}
                strokeWidth={1.5}
              />
            </motion.div>

          </motion.div>

        </section>


        <section className="why-section">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            <motion.span variants={fadeUp}>
              The NexaMart experience
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Why choose <strong>NexaMart?</strong>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Everything is designed around a simple idea — making
              everyday shopping easier.
            </motion.p>

          </motion.div>


          <motion.div
            className="why-grid"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            {[
              {
                icon: <ShoppingBag />,
                title: "Everything in one place",
                copy: "Explore different shopping categories without having to move between multiple platforms.",
              },
              {
                icon: <Search />,
                title: "Easy to explore",
                copy: "Find and discover products through a clean and simple shopping experience.",
              },
              {
                icon: <Heart />,
                title: "Customer focused",
                copy: "We aim to make every interaction simple, convenient and enjoyable.",
              },
            ].map(({ icon, title, copy }, i) => (

              <motion.div
                className="why-card"
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                }}
              >

                <div className="why-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="why-icon">
                  {icon}
                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {copy}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </section>


        <section className="how-section">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger()}
          >

            <motion.span variants={fadeUp}>
              Simple shopping
            </motion.span>

            <motion.h2 variants={fadeUp}>
              How it <strong>works</strong>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Shopping with NexaMart is designed to be simple,
              start to finish.
            </motion.p>

          </motion.div>


          <motion.div
            className="steps"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger(0.15)}
          >

            <motion.div
              className="step-track"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 1.1,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            />

            {[
              {
                icon: <Search />,
                title: "Explore",
                copy: "Browse through different categories.",
              },
              {
                icon: <ShoppingBag />,
                title: "Choose",
                copy: "Discover something you like.",
              },
              {
                icon: <ShoppingBag />,
                title: "Shop",
                copy: "Add what you need to your cart.",
              },
              {
                icon: <Package />,
                title: "Enjoy",
                copy: "Complete your shopping with ease.",
              },
            ].map(({ icon, title, copy }, i) => (

              <motion.div
                className="step"
                key={title}
                variants={fadeUp}
              >

                <div className="step-number">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="step-icon">
                  {icon}
                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {copy}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </section>


        <motion.section
          className="cta"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger()}
        >

          <video
            className="cta-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src={heroVideo}
              type="video/mp4"
            />
          </video>

          <div className="cta-video-overlay" />

          <div className="cta-content">

            <motion.span variants={fadeUp}>
              Start exploring
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Your shopping journey
              <strong>
                {" "}starts here.
              </strong>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Explore NexaMart and discover a simpler way to find
              everything you need.
            </motion.p>

            <motion.button
              className="cta-btn"
              onClick={() => navigate("/items")}
              variants={fadeUp}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Browse products →
            </motion.button>

          </div>

        </motion.section>

      </main>

      <Footer />
    </>
  );
}

export default LandingPage;