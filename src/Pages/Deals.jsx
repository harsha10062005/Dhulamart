import axios from "axios";
import {motion,AnimatePresence} from "framer-motion";
import {useEffect,useMemo,useState} from "react";
import {Link} from "react-router-dom";
import {FaArrowRight,FaBolt,FaHeart,FaRegHeart,FaSearch,FaStar,FaGift,FaCopy,FaCheck} from "react-icons/fa";
import "../css/Deals.css";
import Header from "../components/header";
import {Footer} from "../components/footer";

const Deals=()=>{
    const [products,setProducts]=useState([]);
    const [visibleCount,setVisibleCount]=useState(15);
    const [category,setCategory]=useState("all");
    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("discount");
    const [minDiscount,setMinDiscount]=useState(0);
    const [wishlist,setWishlist]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    const [toast,setToast]=useState("");
    const [showIntro,setShowIntro]=useState(true);
    const [copiedCoupon,setCopiedCoupon]=useState("");
    const [mouse,setMouse]=useState({x:50,y:50});
    const [time,setTime]=useState({hours:8,minutes:42,seconds:19});

    useEffect(()=>{
        const timer=setTimeout(()=>setShowIntro(false),1100);
        return()=>clearTimeout(timer);
    },[]);

    useEffect(()=>{
        const getProducts=async()=>{
            try{
                setLoading(true);
                const response=await axios.get("https://dummyjson.com/products?limit=100");
                setProducts(response.data.products||[]);
            }catch(err){
                console.error(err);
                setError("Unable to load today's deals.");
            }finally{
                setLoading(false);
            }
        };
        getProducts();
    },[]);

    useEffect(()=>{
        try{
            const saved=JSON.parse(localStorage.getItem("nexamart-wishlist")||"[]");
            setWishlist(saved);
        }catch{
            setWishlist([]);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("nexamart-wishlist",JSON.stringify(wishlist));
    },[wishlist]);

    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(current=>{
                let{hours,minutes,seconds}=current;

                if(seconds>0)seconds--;
                else{
                    seconds=59;
                    if(minutes>0)minutes--;
                    else{
                        minutes=59;
                        if(hours>0)hours--;
                        else hours=23;
                    }
                }

                return{hours,minutes,seconds};
            });
        },1000);

        return()=>clearInterval(timer);
    },[]);

    useEffect(()=>{
        if(!toast)return;

        const timer=setTimeout(()=>setToast(""),2200);
        return()=>clearTimeout(timer);
    },[toast]);

    useEffect(()=>{
        const handleMouse=e=>{
            setMouse({
                x:e.clientX/window.innerWidth*100,
                y:e.clientY/window.innerHeight*100
            });
        };

        window.addEventListener("mousemove",handleMouse);
        return()=>window.removeEventListener("mousemove",handleMouse);
    },[]);

    const categories=useMemo(()=>{
        const unique=[...new Set(products.map(product=>product.category))];
        return["all",...unique];
    },[products]);

    const filteredDeals=useMemo(()=>{
        let result=[...products];

        if(category!=="all"){
            result=result.filter(product=>product.category===category);
        }

        if(search.trim()){
            const query=search.toLowerCase();

            result=result.filter(product=>
                `${product.title} ${product.description} ${product.category} ${product.brand||""}`
                .toLowerCase()
                .includes(query)
            );
        }

        result=result.filter(product=>
            Number(product.discountPercentage||0)>=minDiscount
        );

        if(sort==="discount"){
            result.sort((a,b)=>
                Number(b.discountPercentage||0)-Number(a.discountPercentage||0)
            );
        }

        if(sort==="price-low"){
            result.sort((a,b)=>
                Number(a.price||0)-Number(b.price||0)
            );
        }

        if(sort==="price-high"){
            result.sort((a,b)=>
                Number(b.price||0)-Number(a.price||0)
            );
        }

        if(sort==="rating"){
            result.sort((a,b)=>
                Number(b.rating||0)-Number(a.rating||0)
            );
        }

        return result;
    },[products,category,search,minDiscount,sort]);

    useEffect(()=>{
        setVisibleCount(15);
    },[category,search,minDiscount,sort]);

    const visibleProducts=useMemo(()=>{
        return filteredDeals.slice(0,visibleCount);
    },[filteredDeals,visibleCount]);

    const featuredDeal=useMemo(()=>{
        if(!products.length)return null;

        return[...products].sort((a,b)=>
            Number(b.discountPercentage||0)-Number(a.discountPercentage||0)
        )[0];
    },[products]);

    const maxDiscount=useMemo(()=>{
        if(!products.length)return 0;

        return Math.round(
            Math.max(
                ...products.map(product=>
                    Number(product.discountPercentage||0)
                )
            )
        );
    },[products]);

    const toggleWishlist=id=>{
        setWishlist(current=>{
            if(current.includes(id)){
                setToast("Removed from wishlist");
                return current.filter(item=>item!==id);
            }

            setToast("Added to wishlist ❤️");
            return[...current,id];
        });
    };

    const copyCoupon=async code=>{
        try{
            await navigator.clipboard.writeText(code);
            setCopiedCoupon(code);
            setToast(`${code} copied successfully`);
            setTimeout(()=>setCopiedCoupon(""),1800);
        }catch{
            setToast(`Use code ${code}`);
        }
    };

    const formatPrice=price=>
        Number(price||0).toLocaleString("en-IN",{maximumFractionDigits:2});

    const getOriginalPrice=product=>{
        const discount=Number(product.discountPercentage||0);
        const price=Number(product.price||0);

        if(!discount)return price;

        return price/(1-discount/100);
    };

    const clearFilters=()=>{
        setCategory("all");
        setSearch("");
        setMinDiscount(0);
        setSort("discount");
    };

    const brands=[
        {
            name:"SAMSUNG",
            eyebrow:"TECHNOLOGY",
            offer:"15% OFF",
            detail:"Selected electronics",
            code:"NEXA15",
            className:"brand-samsung-card"
        },
        {
            name:"NIKE",
            eyebrow:"SPORTSWEAR",
            offer:"₹500 BACK",
            detail:"Selected footwear",
            code:"NEXA500",
            className:"brand-nike-card"
        },
        {
            name:"adidas",
            eyebrow:"LIFESTYLE",
            offer:"20% OFF",
            detail:"Selected collections",
            code:"NEXA20",
            className:"brand-adidas-card"
        },
        {
            name:"PUMA",
            eyebrow:"ACTIVEWEAR",
            offer:"25% OFF",
            detail:"Selected products",
            code:"NEXA25",
            className:"brand-puma-card"
        }
    ];

    return(
        <>
            <AnimatePresence>
                {showIntro&&(
                    <motion.div
                        className="deals-page-transition"
                        initial={{clipPath:"inset(0 0 0 0)"}}
                        animate={{clipPath:"inset(0 0 100% 0)"}}
                        transition={{duration:1,ease:[.76,0,.24,1]}}
                    >
                        <div className="deals-transition-fiber"></div>

                        <motion.div
                            className="deals-transition-content"
                            initial={{opacity:0,y:25}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:.5}}
                        >
                            <span>NEXAMART</span>
                            <h2>Deals</h2>
                            <div className="transition-line"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Header/>

            <main
                className="deals-page"
                style={{
                    "--mouse-x":`${mouse.x}%`,
                    "--mouse-y":`${mouse.y}%`
                }}
            >
                <section className="deals-hero">
                    <div className="deals-hero-pattern"></div>
                    <div className="deals-mouse-light"></div>
                    <div className="deals-hero-glow glow-one"></div>
                    <div className="deals-hero-glow glow-two"></div>
                    <div className="hero-orbit orbit-one"></div>
                    <div className="hero-orbit orbit-two"></div>

                    <motion.div
                        className="deals-hero-content"
                        initial={{opacity:0,x:-35}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:.35,duration:.8,ease:[.16,1,.3,1]}}
                    >
                        <span className="deals-eyebrow">
                            <span className="live-dot"></span>
                            <FaBolt/>
                            LIMITED TIME COLLECTION
                        </span>

                        <h1>
                            Good things.
                            <br/>
                            <em>Better prices.</em>
                        </h1>

                        <p>
                            Discover handpicked products,
                            exclusive discounts and prices
                            worth catching before they disappear.
                        </p>

                        <div className="deals-hero-actions">
                            <a href="#deal-products" className="deals-primary-btn">
                                Explore deals
                                <FaArrowRight/>
                            </a>

                            <div className="deal-save-badge">
                                <span>UP TO</span>
                                <strong>{maxDiscount}%</strong>
                                <small>OFF</small>
                            </div>
                        </div>
                    </motion.div>

                    {featuredDeal&&(
                        <motion.div
                            className="featured-deal-preview"
                            initial={{opacity:0,x:100,rotate:8}}
                            animate={{opacity:1,x:0,rotate:3}}
                            transition={{delay:.5,duration:1,ease:[.16,1,.3,1]}}
                            whileHover={{rotate:0,y:-10,scale:1.02}}
                        >
                            <div className="featured-ring"></div>
                            <div className="featured-label">BEST DEAL</div>

                            <Link to={`/products/${featuredDeal.id}`}>
                                <img src={featuredDeal.thumbnail} alt={featuredDeal.title}/>
                            </Link>

                            <div className="featured-info">
                                <span>-{Math.round(featuredDeal.discountPercentage)}%</span>
                                <h3>{featuredDeal.title}</h3>
                                <strong>₹{formatPrice(featuredDeal.price)}</strong>
                            </div>

                            <div className="floating-stamp">
                                <span>SAVE</span>
                                <strong>{Math.round(featuredDeal.discountPercentage)}%</strong>
                                <small>DEAL</small>
                            </div>
                        </motion.div>
                    )}
                </section>

                <div className="deal-ticker">
                    <div className="deal-ticker-track">
                        <span>✦ LIMITED DROPS</span>
                        <span>✦ MEMBER PRICES</span>
                        <span>✦ FAST DELIVERY</span>
                        <span>✦ NEW DEALS</span>
                        <span>✦ LIMITED DROPS</span>
                        <span>✦ MEMBER PRICES</span>
                        <span>✦ FAST DELIVERY</span>
                        <span>✦ NEW DEALS</span>
                    </div>
                </div>

                <section className="brand-vault">
                    <div className="brand-vault-light"></div>

                    <div className="brand-vault-heading">
                        <div>
                            <span>
                                <FaGift/>
                                MEMBER PRIVILEGES
                            </span>
                            <h2>
                                More reasons to <em>shop.</em>
                            </h2>
                        </div>

                        <p>
                            Unlock exclusive savings from
                            brands you already love.
                        </p>
                    </div>

                    <div className="brand-vault-grid">
                        {brands.map((brand,index)=>(
                            <motion.div
                                key={brand.code}
                                className={`brand-vault-card ${brand.className}`}
                                initial={{opacity:0,y:30}}
                                whileInView={{opacity:1,y:0}}
                                viewport={{once:true,amount:.25}}
                                transition={{
                                    duration:.6,
                                    delay:index*.08,
                                    ease:[.16,1,.3,1]
                                }}
                                whileHover={{
                                    y:-8,
                                    transition:{
                                        type:"spring",
                                        stiffness:300,
                                        damping:22
                                    }
                                }}
                            >
                                <div className="brand-card-glow"></div>

                                <div className="brand-card-top">
                                    <span>{brand.eyebrow}</span>
                                    <i>01/{index+1}</i>
                                </div>

                                <div className="brand-name">
                                    {brand.name}
                                </div>

                                <div className="brand-card-line"></div>

                                <div className="brand-offer">
                                    <small>EXCLUSIVE OFFER</small>
                                    <strong>{brand.offer}</strong>
                                    <span>{brand.detail}</span>
                                </div>

                                <div className="brand-card-bottom">
                                    <div className="brand-code">
                                        <small>CODE</small>
                                        <strong>{brand.code}</strong>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={()=>copyCoupon(brand.code)}
                                    >
                                        {copiedCoupon===brand.code
                                            ?<><FaCheck/> COPIED</>
                                            :<><FaCopy/> COPY</>
                                        }
                                    </button>
                                </div>

                                <div className="brand-arrow">
                                    <FaArrowRight/>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="deal-countdown">
                    <div className="countdown-copy">
                        <span><FaBolt/> FLASH DEAL</span>
                        <h2>Today's picks won't wait.</h2>
                        <p>Grab the best prices before this collection disappears.</p>
                    </div>

                    <div className="countdown-boxes">
                        <div className="countdown-box">
                            <strong>{String(time.hours).padStart(2,"0")}</strong>
                            <span>HOURS</span>
                        </div>
                        <i>:</i>
                        <div className="countdown-box">
                            <strong>{String(time.minutes).padStart(2,"0")}</strong>
                            <span>MINUTES</span>
                        </div>
                        <i>:</i>
                        <div className="countdown-box">
                            <strong>{String(time.seconds).padStart(2,"0")}</strong>
                            <span>SECONDS</span>
                        </div>
                    </div>
                </section>

                <section className="deal-products" id="deal-products">
                    <div className="deal-section-heading">
                        <div>
                            <span>SHOP THE DROP</span>
                            <h2>Deals worth <em>catching.</em></h2>
                        </div>
                        <p>Showing the best offers from our product collection.</p>
                    </div>

                    <div className="deal-toolbar">
                        <div className="deal-search">
                            <FaSearch/>
                            <input
                                type="text"
                                placeholder="Search deals..."
                                value={search}
                                onChange={e=>setSearch(e.target.value)}
                            />
                            {search&&(
                                <button type="button" onClick={()=>setSearch("")}>×</button>
                            )}
                        </div>

                        <select
                            value={category}
                            onChange={e=>setCategory(e.target.value)}
                            className="category-select"
                        >
                            <option value="all">All Categories</option>
                            {categories.filter(item=>item!=="all").map(item=>(
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>

                        <select value={sort} onChange={e=>setSort(e.target.value)}>
                            <option value="discount">Biggest discount</option>
                            <option value="rating">Highest rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="deal-filter-row">
                        <div className="deal-filters">
                            <button
                                type="button"
                                className={category==="all"?"active":""}
                                onClick={()=>setCategory("all")}
                            >
                                All
                            </button>

                            {categories.filter(item=>item!=="all").slice(0,6).map(item=>(
                                <button
                                    key={item}
                                    type="button"
                                    className={category===item?"active":""}
                                    onClick={()=>setCategory(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <div className="discount-filters">
                            <span>Discount</span>

                            {[0,20,30,40].map(value=>(
                                <button
                                    key={value}
                                    type="button"
                                    className={minDiscount===value?"active":""}
                                    onClick={()=>setMinDiscount(value)}
                                >
                                    {value===0?"All":`${value}%+`}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="deal-results-info">
                        <span>
                            Showing <strong>{visibleProducts.length}</strong> of{" "}
                            <strong>{filteredDeals.length}</strong> deals
                        </span>

                        {wishlist.length>0&&(
                            <span className="wishlist-count">
                                <FaHeart/> {wishlist.length} saved
                            </span>
                        )}
                    </div>

                    {loading&&(
                        <div className="deals-loading">
                            <div className="deal-loading-orbit">
                                <span></span>
                            </div>
                            <p>Finding the best deals...</p>
                        </div>
                    )}

                    {!loading&&!error&&visibleProducts.length>0&&(
                        <>
                            <div className="deal-grid">
                                {visibleProducts.map((product,index)=>{
                                    const discount=Math.round(Number(product.discountPercentage||0));
                                    const price=Number(product.price||0);
                                    const originalPrice=getOriginalPrice(product);
                                    const stock=Number(product.stock||0);
                                    const isSaved=wishlist.includes(product.id);

                                    return(
                                        <motion.article
                                            className="deal-product-card"
                                            key={product.id}
                                            initial={{opacity:0,y:30}}
                                            animate={{opacity:1,y:0}}
                                            transition={{
                                                duration:.5,
                                                delay:Math.min(index*.04,.5),
                                                ease:[.16,1,.3,1]
                                            }}
                                            whileHover={{y:-9}}
                                        >
                                            <div className="deal-image-wrap">
                                                <Link to={`/products/${product.id}`}>
                                                    <img src={product.thumbnail} alt={product.title}/>
                                                </Link>

                                                <div className="deal-card-top">
                                                    <span className="discount-badge">-{discount}%</span>

                                                    <button
                                                        type="button"
                                                        className={isSaved?"wishlist-btn saved":"wishlist-btn"}
                                                        onClick={()=>toggleWishlist(product.id)}
                                                    >
                                                        {isSaved?<FaHeart/>:<FaRegHeart/>}
                                                    </button>
                                                </div>

                                                <span className="deal-category">{product.category}</span>
                                            </div>

                                            <div className="deal-product-content">
                                                <div className="deal-rating">
                                                    <FaStar/>
                                                    <strong>{Number(product.rating||0).toFixed(1)}</strong>
                                                    <span>· {product.brand||"NexaMart"}</span>
                                                </div>

                                                <h3>{product.title}</h3>

                                                <p className="deal-description">
                                                    {product.description}
                                                </p>

                                                <div className="deal-price">
                                                    <strong>₹{formatPrice(price)}</strong>

                                                    {discount>0&&(
                                                        <del>
                                                            ₹{Math.round(originalPrice).toLocaleString("en-IN")}
                                                        </del>
                                                    )}

                                                    <span>
                                                        Save ₹{Math.max(0,Math.round(originalPrice-price)).toLocaleString("en-IN")}
                                                    </span>
                                                </div>

                                                <div className="stock-info">
                                                    <div className="stock-row">
                                                        <span>{stock<=10?"Selling fast":"Available now"}</span>
                                                        <b>{stock} left</b>
                                                    </div>

                                                    <div className="stock-bar">
                                                        <motion.span
                                                            initial={{width:0}}
                                                            animate={{width:`${Math.min(Math.max(stock,8),100)}%`}}
                                                            transition={{duration:1}}
                                                        />
                                                    </div>
                                                </div>

                                                <Link
                                                    to={`/products/${product.id}`}
                                                    className="deal-buy-btn"
                                                >
                                                    View deal
                                                    <FaArrowRight/>
                                                </Link>
                                            </div>
                                        </motion.article>
                                    );
                                })}
                            </div>

                            {visibleCount<filteredDeals.length&&(
                                <div className="show-more-wrap">
                                    <button
                                        type="button"
                                        className="show-more-btn"
                                        onClick={()=>setVisibleCount(current=>current+15)}
                                    >
                                        Show more deals
                                        <span>+15</span>
                                        <FaArrowRight/>
                                    </button>

                                    <p>
                                        Showing {visibleProducts.length} of {filteredDeals.length} products
                                    </p>
                                </div>
                            )}
                        </>
                    )}

                    {!loading&&!error&&visibleProducts.length===0&&(
                        <div className="no-deals">
                            <div><FaSearch/></div>
                            <h3>No deals found</h3>
                            <p>Try another category, search or discount filter.</p>
                            <button type="button" onClick={clearFilters}>
                                Clear filters
                            </button>
                        </div>
                    )}
                </section>

                <motion.section
                    className="deal-bottom-banner"
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:.7}}
                >
                    <div>
                        <span>ONE MORE THING</span>
                        <h2>
                            The best deals
                            <br/>
                            are <em>waiting.</em>
                        </h2>
                    </div>

                    <Link to="/items">
                        Browse everything
                        <FaArrowRight/>
                    </Link>
                </motion.section>
            </main>

            <AnimatePresence>
                {toast&&(
                    <motion.div
                        className="deal-toast"
                        initial={{opacity:0,y:30,scale:.9}}
                        animate={{opacity:1,y:0,scale:1}}
                        exit={{opacity:0,y:20,scale:.9}}
                    >
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer/>
        </>
    );
};

export default Deals;