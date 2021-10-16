import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cookies from "react-cookies";
import { useSelector, useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LoginIcon from '@mui/icons-material/Login';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

    let menuAccount = (
        <MenuItem>
            <ListItemIcon>
                <LoginIcon fontSize="small" />
            </ListItemIcon>
            <Link to="/register" style={{ color: 'black' }}>
                Đăng Ký
            </Link>
        </MenuItem>
    );

    let mobileMenuAccount = (
        <>
            <li>
                <Link to="/register">Đăng kí</Link>
            </li>
        </>
    );

    let infoAccount = (
        <MenuItem>
            <Avatar /> Khách
        </MenuItem>
    );

    if (user !== null && user !== undefined) {
        infoAccount = (
            <MenuItem>
                <Avatar 
                    alt="ImageComment"
                    src={user.avatar_url}
                    sx={{ width: 32, height: 32 }}
                /> 
                {user.username}
            </MenuItem>
        )

        menuAccount = (
            <MenuItem onClick={logout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Đăng Xuất
            </MenuItem>
        );

        mobileMenuAccount = (
            <>
                <li>
                    <Link to="/">{user.username}</Link>
                </li>
                <li>
                    <Link to="/" onClick={logout}>Đăng xuất</Link>
                </li>
            </>
        );
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    // add and remove class mobile-menu from <body></body>
    useEffect(() => {
        document.body.classList.toggle('mobile-menu-visible', isOpen);
    }, [isOpen])

    return (
        <>
            <header className="main-header style-three">
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
                            <div className="mobile-nav-toggler" onClick={() => {setIsOpen(!isOpen)}}>
                                <i className="icon-bar" />
                                <i className="icon-bar" />
                                <i className="icon-bar" />
                            </div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="dropdown"><Link to="/">Trang Chủ</Link></li>
                                        <li className="dropdown"><Link to="/tour-list">Tour</Link></li>
                                        <li className="dropdown"><Link to="/blogs">Tin Tức</Link></li>
                                        <li className="dropdown"><Link to="/about-us">Thông Tin</Link></li>
                                        <li className="dropdown"><Link to="/contact">Liên Lạc</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <ul className="menu-right-content pull-right clearfix">
                            <li className="search-box-outer">
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Tài Khoản">
                                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                            <Avatar sx={{ width: 56, height: 56 }}><i className="far fa-user" /></Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </li>

                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 26,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                {infoAccount}
                                <Divider/>
                                <MenuItem>
                                    <ListItemIcon>
                                        <LoginIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to="/login" style={{ color: 'black' }}>    
                                        Đăng Nhập
                                    </Link>
                                </MenuItem>
                                {menuAccount}
                            </Menu>
                        </ul>
                    </div>
                </div>

                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <a href="/home.html">
                                        <img src="./assets/image/logo.png" alt="ImageLogo" />
                                    </a>
                                </figure>
                            </div>
                            <div className="menu-area">
                                <nav className="main-menu clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li className="dropdown"><Link to="/">Trang Chủ</Link></li>
                                            <li className="dropdown"><Link to="/tour-list">Tour</Link></li>
                                            <li className="dropdown"><Link to="/blogs">Tin Tức</Link></li>
                                            <li className="dropdown"><Link to="/about-us">Thông Tin</Link></li>
                                            <li className="dropdown"><Link to="/contact">Liên Lạc</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <ul className="menu-right-content clearfix">
                                <li className="search-box-outer">
                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                        <Tooltip title="Tài Khoản">
                                            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                                <Avatar sx={{ width: 56, height: 56 }}><i className="far fa-user" /></Avatar>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={() => {setIsOpen(!isOpen)}}></div>

                <div className="nav__mobile-close close-btn" onClick={() => {setIsOpen(!isOpen)}}>
                    <i className="fas fa-times" />
                </div>

                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={logo2} alt="ImageLogo"/>
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="dropdown"><Link to="/">Trang Chủ</Link></li>
                                <li className="dropdown"><Link to="/tour-list">Tour</Link></li>
                                <li className="dropdown"><Link to="/blogs">Tin Tức</Link></li>
                                <li className="dropdown"><Link to="/about-us">Thông Tin</Link></li>
                                <li className="dropdown"><Link to="/contact">Liên Lạc</Link></li>
                                {mobileMenuAccount}
                            </ul>
                        </div>
                    </div>

                    <div className="contact-info">
                        <h4>Thông tin liên lạc</h4>
                        <ul>
                            <li>371 Nguyễn Kiệm, Gò Vấp, Hồ Chí Minh</li>
                            <li><Link to="tel:+0933603196">0933603196</Link></li>
                            <li><Link to="mailto:khoa.lta.30092000@gmail.com">khoa.lta.30092000@gmail.com</Link></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
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
