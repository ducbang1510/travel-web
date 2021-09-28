import React from "react";
import { Link } from "react-router-dom";
import cookies from 'react-cookies'
import { useSelector, useDispatch } from 'react-redux';
import logo from "../static/image/logo-3.png"

export default function Header(props) {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const logout = (event) => {
        event.preventDefault()
        cookies.remove("user")
        cookies.remove("access_token")
        dispatch({
            "type": "USER_LOGIN",
            "payload": null
        })
    }

    let r = <>
        <li><Link to="/register">Đăng kí</Link></li>
    </>

    if (user !== null && user !== undefined) {
        r = <>
            <li><Link to="/">{user.username}</Link></li>
            <li><Link onClick={logout}>Đăng xuất</Link></li>
        </>
    }

    const sticky_header = {
        backgroundColor: '#fff',
        position: 'fixed',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 10px'
    }

    return (
      <header style={sticky_header} className="main-header style-three">
        {}
        <div className="header-lower">
          <div className="outer-box clearfix">
            <div className="menu-area pull-left clearfix">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/">
                    <img src={logo} alt="ImageLogo" />
                  </Link>
                </figure>
              </div>
              {}
              <div className="mobile-nav-toggler">
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
                    <li className="dropdown">
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
    );
}
