import React, { useEffect, useState } from "react";
import API, { endpoints } from '../API'
import { Link } from "react-router-dom";
import cookies from 'react-cookies'
import { useStore } from 'react-redux';
import logo from "../static/image/logo-3.png"

export default function Header(props) {
  const [categories, setCategories] = useState([])

  const store = useStore()
  const auth = store.getState()

  // Load API Categories
  useEffect(() => {
    API.get(endpoints['categories']).then(res => {
      setCategories(res.data)
    })
  }, [])

  // Load user
  let user = auth // user redux
  if (cookies.load("user") != null) {
    user = cookies.load("user")
  }

  let r = <>
        <li><a href="/register">Đăng kí</a></li>
    </>

  if (user != null) {
      r = <>
          <li><a href="/">{user.username}</a></li>
          <li><a href="/logout">Đăng xuất</a></li>
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
                <a href="/">
                  <img src={logo} alt="ImageLogo" />
                </a>
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
                    <a href="/">Home</a>
                  </li>
                  <li className="dropdown">
                    <a href="/destination.html">Categories</a>
                    <ul>
                      {categories.map(c => <li key={c.id}><a href="/">{c.name}</a></li>)}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/tour-list">Tours</a>
                  </li>
                  <li className="dropdown">
                    <a href="/blogs">Blog</a>
                  </li>
                  <li className="dropdown">
                    <a href="/about-us.html">About Us</a>
                  </li>
                  {r}
                </ul>
              </div>
            </nav>
          </div>
          <ul className="menu-right-content pull-right clearfix">
            {/* <li className="search-box-outer">
              <div className="dropdown">
                <button
                  className="search-box-btn"
                  type="button"
                  id="dropdownMenu3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search" />
                </button>
                <div
                  className="dropdown-menu search-panel"
                  aria-labelledby="dropdownMenu3"
                >
                  <div className="form-container">
                    <form onSubmit={searchTour}>
                      <div className="form-group">
                        <input
                          type="search"
                          placeholder="Search...."
                          value={searchTerm}
                          onChange={event => setSearchTerm(event.target.value)}
                        />
                        <button type="submit" className="search-btn">
                          <span className="fas fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li> */}
            <li className="user-link">
              <Link to="/login">
                <i className="far fa-user" />
              </Link>
            </li>
            <li className="btn-box">
              <a href="/tour-list" className="theme-btn">
                Book A Tour
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
