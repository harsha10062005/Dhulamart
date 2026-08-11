export const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-secondary">
          <div className="me-5 d-none d-lg-block">
            <span>Connect with us on social media</span>
          </div>

          <div>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="#" className="me-4 text-white">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="#" className="me-4 text-white">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#" className="me-4 text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="#" className="me-4 text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Main Footer */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row">

              {/* Company */}
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h5 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-store me-2"></i>
                  MyStore
                </h5>

                <p>
                  MyStore is your one-stop destination for quality products at
                  affordable prices. We provide the latest electronics,
                  fashion, accessories, and much more with fast delivery and
                  secure shopping.
                </p>
              </div>

              {/* Categories */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Categories
                </h6>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Electronics
                  </a>
                </p>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Fashion
                  </a>
                </p>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Accessories
                  </a>
                </p>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Home Appliances
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Quick Links
                </h6>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Home
                  </a>
                </p>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    About Us
                  </a>
                </p>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Contact
                  </a>
                </p>

                <p>
                  <a href="#" className="text-reset text-decoration-none">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>

                <p>
                  <i className="fas fa-home me-3"></i>
                  Hyderabad, Telangana, India
                </p>

                <p>
                  <i className="fas fa-envelope me-3"></i>
                  support@mystore.com
                </p>

                <p>
                  <i className="fas fa-phone me-3"></i>
                  +91 98765 43210
                </p>

                <p>
                  <i className="fas fa-clock me-3"></i>
                  Mon - Sat : 9:00 AM - 8:00 PM
                </p>
              </div>

            </div>
          </div>
        </section>

        <div
          className="text-center p-3 mt-4"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          © {new Date().getFullYear()}{" "}
          <strong>MyStore</strong>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};