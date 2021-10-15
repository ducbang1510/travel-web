import React, { useEffect, useState } from 'react';
import API, { endpoints } from '../API';
import cookies from 'react-cookies'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WOW from 'wowjs';

import pageTitle5 from "../static/image/background/page-title-5.jpg"
import shape16 from "../static/image/shape/shape-16.png"
import shape17 from "../static/image/shape/shape-17.png"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        new WOW.WOW({live: false}).init();
    }, [])
    
    const login = async (event) => {
        event.preventDefault();

        try {
            let oAuthInfo = await API.get(endpoints['oAuthInfo'])
            let res = await API.post(endpoints['login'], {
                'client_id': oAuthInfo.data.client_id,
                'client_secret': oAuthInfo.data.client_secret,
                'username': username,
                'password': password,
                'grant_type': 'password'
            });

            cookies.save("access_token", res.data.access_token);

            let user = await API.get(endpoints['current-user'], {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })
            cookies.save("user", user.data)

            dispatch({
                "type": "USER_LOGIN",
                "payload": user.data
            })

            history.goBack()

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <section className="page-title centred"style={{ backgroundImage: `url(${pageTitle5})` }}>
                <div className="auto-container">
                    <div className="content-box wow fadeInDown animated animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <h1>Đăng Nhập</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>
            <section className="register-section sec-pad">
                <div className="anim-icon">
                    <div
                        className="icon anim-icon-1"
                        style={{
                            backgroundImage: `url(${shape16})`
                        }}
                    />
                    <div
                        className="icon anim-icon-2"
                        style={{
                            backgroundImage: `url(${shape17})`
                        }}
                    />
                </div>
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="sec-title centred">
                            <p>Đăng Nhập</p>
                            <h2>Connect with us for Better Tour</h2>
                        </div>
                        <div className="form-inner">
                            <h3>Đăng Nhập với</h3>
                            <ul className="social-links clearfix">
                                <li>
                                    <Link to="/">
                                        <span>Đăng Nhập với Facebook _</span>
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <span>Đăng Nhập với Google _</span>
                                        <i className="fab fa-google-plus-g" />
                                    </Link>
                                </li>
                            </ul>
                            <div className="text">
                                <span>hoặc</span>
                            </div>
                            <form onSubmit={login} className="register-form">
                                <div className="row clearfix">
                                    <LoginForm
                                        id="username"
                                        label="Tên đăng nhập"
                                        field={username}
                                        change={event => setUsername(event.target.value)}
                                        type="text"
                                        placeholder="Nhập Tên Đăng Nhập"
                                    />
                                    <LoginForm
                                        id="password"
                                        label="Mật khẩu"
                                        field={password}
                                        change={event => setPassword(event.target.value)}
                                        type="password"
                                        placeholder="Nhập Mật Khẩu"
                                    />
                                    <div className="col-lg-12 col-md-12 col-sm-12 column">
                                        <div className="form-group">
                                            <div className="forgor-password text-right">
                                                <Link to="/">Quên mật khẩu?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 column">
                                        <div className="form-group message-btn">
                                            <button type="submit" className="theme-btn">
                                                Đăng Nhập
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="other-text">
                                Chưa có tài khoản? <Link to="/register">Đăng Ký Ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

class LoginForm extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                        <label>{this.props.label}</label>
                        <input
                            value={this.props.field}
                            type={this.props.type}
                            id={this.props.id}
                            onChange={this.props.change}
                            required />
                    </div>
                </div>
            </>
        )
    }
}