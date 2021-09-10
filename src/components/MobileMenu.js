import React from "react";

import logo2 from '../static/image/logo-2.png'
class MobileMenu extends React.Component {
  render() {
    return (
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fas fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="/home.html">
              <img src={logo2} alt="ImageLogo"/>
            </a>
          </div>
          <div className="menu-outer">
            {}
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>371 Nguyen Kiem, Go Vap, Ho Chi Minh</li>
              <li>
                <a href="tel:0933603196">0933603196</a>
              </li>
              <li>
                <a href="mailto:khoa.lta.30092000@gmail.com">
                  khoa.lta.30092000@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="/home.html">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/home.html">
                  <span className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="/home.html">
                  <span className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="/home.html">
                  <span className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="/home.html">
                  <span className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MobileMenu;
