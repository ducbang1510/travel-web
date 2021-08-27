import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer bg-color-2">
        <div className="footer-top pt-130">
          <div
            className="vector-bg"
            style={{
              backgroundImage: "url(./assets/image/shape/shape-11.png)"
            }}
          />
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <a href="/home.html">
                      <img
                        src="./assets/image/footer-logo.png"
                        alt="ImageLogo"
                      />
                    </a>
                  </figure>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor amet consetetur adi pisicing elit sed
                      eiusm tempor in cididunt ut labore dolore magna aliqua
                      enim.
                    </p>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="/home.html">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/home.html">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/home.html">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/home.html">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                    <li>
                      <a href="/home.html">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Services</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="/about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="/tour.html">Listing</a>
                      </li>
                      <li>
                        <a href="/tour.html">How It Works</a>
                      </li>
                      <li>
                        <a href="/tour.html">Our Services</a>
                      </li>
                      <li>
                        <a href="/home.html">Our Blog</a>
                      </li>
                      <li>
                        <a href="/contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Gallery</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image-box">
                          <a href="/">
                            <img
                              src="./assets/image/footer-gallery/footer-gallery-1.jpg"
                              alt="ImageFooter"
                            />
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <a href="/">
                            <img
                              src="./assets/image/footer-gallery/footer-gallery-2.jpg"
                              alt="ImageFooter"
                            />
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <a href="/">
                            <img
                              src="./assets/image/footer-gallery/footer-gallery-3.jpg"
                              alt="ImageFooter"
                            />
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <a href="/">
                            <img
                              src="./assets/image/footer-gallery/footer-gallery-4.jpg"
                              alt="ImageFooter"
                            />
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <a href="/">
                            <img
                              src="./assets/image/footer-gallery/footer-gallery-5.jpg"
                              alt="ImageFooter"
                            />
                          </a>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <a href="/">
                            <img
                              src="./assets/image/footer-gallery/footer-gallery-6.jpg"
                              alt="ImageFooter"
                            />
                          </a>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contacts</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        371, Nguyen Kiem Street, Go Vap District, Ho Chi Minh
                        City
                      </li>
                      <li>
                        <i className="fas fa-microphone" />
                        <a href="tel:0977477916">0977477916</a>
                      </li>
                      <li>
                        <i className="fas fa-envelope" />
                        <a href="mailto:1851050006bang@ou.edu.vn">
                          1851050006bang@ou.edu.vn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  <a href="/home.html">Travio</a> © 2021 All Right Reserved
                </p>
              </div>
              <ul className="footer-nav pull-right">
                <li>
                  <a href="/home.html">Terms of Service</a>
                </li>
                <li>
                  <a href="/home.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
