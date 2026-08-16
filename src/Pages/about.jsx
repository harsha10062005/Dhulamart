import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../css/About.css";
import { motion } from "framer-motion";
import {
    ShoppingBag,
    Smartphone,
    Shirt,
    Gem,
    Search,
    Sparkles,
    Home,
    Heart,
    ShieldCheck,
    Lightbulb,
    Users,
    ArrowRight,
    Check,
} from "lucide-react";

export const About = () => {

    const reveal = {
        hidden: {
            opacity: 0,
            y: 60
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const categories = [
        {
            icon: <Smartphone />,
            title: "Electronics",
            description: "Technology & gadgets"
        },
        {
            icon: <Shirt />,
            title: "Fashion",
            description: "Styles for everyday"
        },
        {
            icon: <Home />,
            title: "Home & Living",
            description: "Make your space better"
        },
        {
            icon: <Gem />,
            title: "Accessories",
            description: "Complete your style"
        }
    ];

    return (
        <>
            <Header />

            <main className="about-page">

                <section className="about-hero">

                    <div className="hero-noise"></div>

                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >

                        <motion.span
                            className="eyebrow"
                            variants={reveal}
                        >
                            WELCOME TO NEXAMART
                        </motion.span>

                        <motion.h1 variants={reveal}>
                            Shopping
                            <br />

                            <span>
                                without
                            </span>

                            <br />

                            <strong>
                                the noise.
                            </strong>
                        </motion.h1>

                        <motion.p variants={reveal}>
                            A simpler way to discover products,
                            explore categories and find the things
                            you actually need.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            variants={reveal}
                        >

                            <Link to="/items">
                                Explore Products
                                <span>
                                    <ArrowRight size={17} />
                                </span>
                            </Link>

                            <div className="hero-status">
                                <span></span>
                                Everything in one place
                            </div>

                        </motion.div>

                    </motion.div>


                    <motion.div
                        className="hero-stage"
                        initial={{
                            opacity: 0,
                            scale: 0.7
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut"
                        }}
                    >

                        <div className="hero-orbit orbit-a"></div>
                        <div className="hero-orbit orbit-b"></div>
                        <div className="hero-orbit orbit-c"></div>

                        <motion.div
                            className="hero-core"
                            animate={{
                                y: [0, -14, 0],
                                rotate: [-3, 2, -3]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ShoppingBag
                                size={54}
                                strokeWidth={1.5}
                            />
                        </motion.div>


                        <motion.div
                            className="floating-object object-a"
                            animate={{
                                y: [0, -18, 0],
                                rotate: [0, 8, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Smartphone
                                size={30}
                                strokeWidth={1.5}
                            />
                        </motion.div>


                        <motion.div
                            className="floating-object object-b"
                            animate={{
                                y: [0, 14, 0],
                                rotate: [0, -8, 0]
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Shirt
                                size={30}
                                strokeWidth={1.5}
                            />
                        </motion.div>


                        <motion.div
                            className="floating-object object-c"
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 6, 0]
                            }}
                            transition={{
                                duration: 3.8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Gem
                                size={30}
                                strokeWidth={1.5}
                            />
                        </motion.div>


                        <div className="hero-card">

                            <span>
                                NEXAMART
                            </span>

                            <strong>
                                Everything.
                                <br />
                                In one place.
                            </strong>

                            <small>
                                DISCOVER MORE →
                            </small>

                        </div>

                    </motion.div>

                </section>


                <motion.section
                    className="story-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                    variants={stagger}
                >

                    <motion.div
                        className="story-visual"
                        variants={reveal}
                    >

                        <div className="story-number">
                            01
                        </div>

                        <motion.div
                            className="story-panel"
                            whileHover={{
                                rotate: 0,
                                scale: 1.03
                            }}
                        >

                            <span>
                                THE IDEA
                            </span>

                            <h3>
                                Less noise.
                                <br />
                                More discovery.
                            </h3>

                            <div className="story-symbol">
                                <Sparkles size={30} />
                            </div>

                        </motion.div>


                        <motion.div
                            className="story-badge badge-one"
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity
                            }}
                        >
                            SIMPLE
                        </motion.div>


                        <motion.div
                            className="story-badge badge-two"
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity
                            }}
                        >
                            CONVENIENT
                        </motion.div>

                    </motion.div>


                    <motion.div
                        className="story-content"
                        variants={reveal}
                    >

                        <span className="eyebrow">
                            OUR STORY
                        </span>

                        <h2>
                            We wanted shopping
                            <strong>
                                to feel lighter.
                            </strong>
                        </h2>

                        <p>
                            NexaMart started with a simple thought:
                            shopping doesn't need to feel complicated.
                        </p>

                        <p>
                            Instead of overwhelming users with endless
                            choices and unnecessary steps, we want to
                            create a clean space where products are easy
                            to explore and decisions feel natural.
                        </p>

                        <div className="story-flow">

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
                                <strong>Choose</strong>
                            </div>

                        </div>

                    </motion.div>

                </motion.section>


                <section className="interactive-section">

                    <motion.div
                        className="section-heading"
                        initial={{
                            opacity: 0,
                            y: 40
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                    >

                        <span className="eyebrow">
                            THE EXPERIENCE
                        </span>

                        <h2>
                            Three steps.
                            <strong>
                                That's it.
                            </strong>
                        </h2>

                    </motion.div>


                    <div className="interactive-process">

                        <motion.div
                            className="process-card"
                            whileHover={{
                                y: -12
                            }}
                        >

                            <span className="process-index">
                                01
                            </span>

                            <div className="process-icon">
                                <Search />
                            </div>

                            <h3>
                                Explore
                            </h3>

                            <p>
                                Browse categories and discover
                                something interesting.
                            </p>

                            <b>
                                <ArrowRight />
                            </b>

                        </motion.div>


                        <motion.div
                            className="process-card featured"
                            whileHover={{
                                y: -12
                            }}
                        >

                            <span className="process-index">
                                02
                            </span>

                            <div className="process-icon">
                                <Sparkles />
                            </div>

                            <h3>
                                Discover
                            </h3>

                            <p>
                                Find useful products through a
                                simple interface.
                            </p>

                            <b>
                                <ArrowRight />
                            </b>

                        </motion.div>


                        <motion.div
                            className="process-card"
                            whileHover={{
                                y: -12
                            }}
                        >

                            <span className="process-index">
                                03
                            </span>

                            <div className="process-icon">
                                <ShoppingBag />
                            </div>

                            <h3>
                                Shop
                            </h3>

                            <p>
                                Choose what you need and enjoy
                                the experience.
                            </p>

                            <b>
                                <ArrowRight />
                            </b>

                        </motion.div>

                    </div>

                </section>


                <motion.section
                    className="mission-section"
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                >

                    <div className="mission-content">

                        <span className="eyebrow">
                            OUR MISSION
                        </span>

                        <h2>
                            Make every
                            <strong>
                                click count.
                            </strong>
                        </h2>

                        <p>
                            We're building a shopping experience
                            around simplicity, usefulness and
                            discovery.
                        </p>

                        <div className="mission-pills">

                            <span>
                                <Check size={14} />
                                Simple
                            </span>

                            <span>
                                <Check size={14} />
                                Useful
                            </span>

                            <span>
                                <Check size={14} />
                                Comfortable
                            </span>

                        </div>

                    </div>


                    <div className="mission-visual">

                        <motion.div
                            className="mission-orbit"
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <span>DISCOVER</span>
                        </motion.div>

                        <motion.div
                            className="mission-center"
                            animate={{
                                scale: [1, 1.08, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity
                            }}
                        >
                            <Sparkles
                                size={40}
                                strokeWidth={1.5}
                            />
                        </motion.div>

                    </div>

                </motion.section>


                <section className="categories-section">

                    <motion.div
                        className="section-heading"
                        initial={{
                            opacity: 0,
                            y: 40
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                    >

                        <span className="eyebrow">
                            EXPLORE
                        </span>

                        <h2>
                            Different needs.
                            <strong>
                                One destination.
                            </strong>
                        </h2>

                    </motion.div>


                    <motion.div
                        className="category-cards"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15
                        }}
                    >

                        {categories.map((item, index) => (

                            <motion.div
                                className="category-card"
                                key={item.title}
                                variants={reveal}
                                whileHover={{
                                    y: -10
                                }}
                            >

                                <span>
                                    0{index + 1}
                                </span>

                                <div className="category-icon">
                                    {item.icon}
                                </div>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                                <b>
                                    Explore
                                    <ArrowRight size={15} />
                                </b>

                            </motion.div>

                        ))}

                    </motion.div>

                </section>


                <section className="values-section">

                    <div className="values-heading">

                        <span className="eyebrow">
                            WHAT MATTERS
                        </span>

                        <h2>
                            Built on
                            <strong>
                                good principles.
                            </strong>
                        </h2>

                    </div>


                    <div className="values-list">

                        {[
                            [
                                "01",
                                "Customer First",
                                "The experience starts with understanding people."
                            ],
                            [
                                "02",
                                "Quality",
                                "Useful products should provide meaningful value."
                            ],
                            [
                                "03",
                                "Transparency",
                                "Clear information creates better decisions."
                            ],
                            [
                                "04",
                                "Innovation",
                                "We keep searching for better ways to improve."
                            ]
                        ].map((item) => (

                            <motion.div
                                className="value-row"
                                key={item[0]}
                                whileHover={{
                                    x: 10
                                }}
                            >

                                <span>
                                    {item[0]}
                                </span>

                                <h3>
                                    {item[1]}
                                </h3>

                                <p>
                                    {item[2]}
                                </p>

                                <b>
                                    <ArrowRight size={18} />
                                </b>

                            </motion.div>

                        ))}

                    </div>

                </section>


                <section className="about-cta">

                    <div className="cta-glow"></div>

                    <motion.div
                        className="cta-content"
                        initial={{
                            opacity: 0,
                            scale: .9
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: .7
                        }}
                    >

                        <span className="eyebrow">
                            READY?
                        </span>

                        <h2>
                            Your next
                            <strong>
                                discovery awaits.
                            </strong>
                        </h2>

                        <p>
                            Explore NexaMart and see what's waiting
                            for you.
                        </p>

                        <Link to="/items">
                            Start Exploring
                            <span>
                                <ArrowRight size={18} />
                            </span>
                        </Link>

                    </motion.div>

                </section>

            </main>

            <Footer />
        </>
    );
};

export default About;