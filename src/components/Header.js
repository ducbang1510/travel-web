import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cookies from "react-cookies";
import { useSelector, useDispatch } from "react-redux";

import logo from "../static/image/logo-3.png";
import logo2 from '../static/image/logo-2.png'

export default function Header(props) {
    const [isOpen, setIsOpen] = React.useState(false)

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const logout = (event) => {
        event.preventDefault();
        cookies.remove("user");
        cookies.remove("access_token");
        dispatch({
          type: "USER_LOGIN",
          payload: null,
        });
    };

    let r = (
        <>
            <li>
                <Link to="/register">Đăng kí</Link>
            </li>
        </>
    );

    if (user !== null && user !== undefined) {
        r = (
            <>
                <li>
                    <Link to="/">{user.username}</Link>
                </li>
                <li>
                    <Link onClick={logout}>Đăng xuất</Link>
                </li>
            </>
        );
    }

    const sticky_header = {
        backgroundColor: "#fff",
        position: "fixed",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px",
    };
    
    // add and remove class mobile-menu from <body></body>
    useEffect(() => {
        document.body.classList.toggle('mobile-menu-visible', isOpen);
    }, [isOpen])

    return (
        <>
            <header style={sticky_header} className="main-header style-three">
                {}
                <div className="header-lower">
                    <div className="outer-box clearfix">
                        <div div className="nav menu-area pull-left clearfix">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="ImageLogo" />
                                    </Link>
                                </figure>
                            </div>
                          {}

                          <div className="mobile-nav-toggler" onClick={() => {setIsOpen(!isOpen)}}>
                              <i className="icon-bar" />
                              <i className="icon-bar" />
                              <i className="icon-bar" />
                          </div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="dropdown">
                                            <Link to="/">Trang Chủ</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/tour-list">Tour</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/blogs">Tin Tức</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">Thông Tin</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/contact">Liên Lạc</Link>
                                        </li>
                                        {r}
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <ul className="menu-right-content pull-right clearfix">
                            <li className="user-link">
                                <Link to="/login">
                                    <i className="far fa-user" />
                                </Link>
                            </li>
                            <li className="btn-box">
                                <Link to="/tour-list" className="theme-btn">
                                    Đặt Tour
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className="mobile-menu">
                <div class="menu-backdrop" onClick={() => {setIsOpen(!isOpen)}}></div>

                <div className="nav__mobile-close close-btn" onClick={() => {setIsOpen(!isOpen)}}>
                    <i className="fas fa-times" />
                </div>

                <nav class="menu-box">
                    <div class="nav-logo">
                        <a href="/">
                            <img src={logo2} alt="ImageLogo"/>
                        </a>
                    </div>
                    <div class="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                              <li className="dropdown">
                                <Link to="/">Trang Chủ</Link>
                              </li>
                              <li className="dropdown">
                                <Link to="/tour-list">Tour</Link>
                              </li>
                              <li className="dropdown">
                                <Link to="/blogs">Tin Tức</Link>
                              </li>
                              <li>
                                <Link to="/about-us">Thông Tin</Link>
                              </li>
                              <li className="dropdown">
                                <Link to="/contact">Liên Lạc</Link>
                              </li>
                              {r}
                            </ul>
                        </div>
                    </div>

                    <div class="contact-info">
                        <h4>Thông tin liên lạc</h4>
                        <ul>
                            <li>371 Nguyễn Kiệm, Gò Vấp, Hồ Chí Minh</li>
                            <li><Link to="tel:+0933603196">0933603196</Link></li>
                            <li><Link to="mailto:khoa.lta.30092000@gmail.com">khoa.lta.30092000@gmail.com</Link></li>
                        </ul>
                    </div>
                    <div class="social-links">
                        <ul class="clearfix">
                            <li><Link to="/"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link to="/"><span className="fab fa-facebook-square"></span></Link></li>
                            <li><Link to="/"><span className="fab fa-pinterest-p"></span></Link></li>
                            <li><Link to="/"><span className="fab fa-instagram"></span></Link></li>
                            <li><Link to="/"><span className="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
