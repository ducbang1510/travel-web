import React, { useRef, useState } from 'react';
import API, { endpoints } from '../API';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";

import pageTitle9 from "../static/image/background/page-title-9.jpg"
import shape16 from "../static/image/shape/shape-16.png"
import shape17 from "../static/image/shape/shape-17.png"

export default function Register(props) {
    const history = useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const avatar = useRef();

    const register = (event) => {
        event.preventDefault()

        let registerUser = async () => {
            const formData = new FormData()
            formData.append("first_name", firstName);
            formData.append("last_name", lastName);
            formData.append("email", email);
            formData.append("username", username);
            formData.append("password", password);
            formData.append("avatar", avatar.current.files[0]);

            try {
                await API.post(endpoints['users'], formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                alert('Đăng kí thành công. Hãy đăng nhập để sử dụng tài khoản')
                history.push("/")
            } catch (error) {
                console.error(error)
            }
        }

        if (password === confirmPassword) {
            registerUser()
        }
    }

    
    return (
        <>
            <section
                className="page-title centred"
                style={{
                backgroundImage: `url(${pageTitle9})`
                }}
            >
                <div className="auto-container">
                <div className="content-box">
                    <h1>Đăng Kí</h1>
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
                        <div className="sec-title centred wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <p>Đăng Ký</p>
                            <h2>Connect with us for Better Tour</h2>
                        </div>
                        <div className="form-inner">
                            <h3>Đăng ký với</h3>
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
                            <form onSubmit={register} className="register-form">
                                <div className="row clearfix">
                                    <RegisterForm class="col-lg-6 col-md-6 col-sm-12 column"
                                    id="firstname" label="Họ và tên đệm" type="text" value={firstName} change={(event) => setFirstName(event.target.value)}/>
                                    <RegisterForm class="col-lg-6 col-md-6 col-sm-12 column"
                                        id="lastname" label="Tên" type="text" value={lastName} change={(event) => setLastName(event.target.value)}/>
                                    <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                        id="email" label="Email" type="email" value={email} change={(event) => setEmail(event.target.value)}/>
                                    <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                        id="username" label="Tên đăng nhập" type="text" value={username} change={(event) => setUsername(event.target.value)}/>
                                    <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                        id="password" label="Mật khẩu" type="password" value={password} change={(event) => setPassword(event.target.value)}/>
                                    <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                        id="confirmPass" label="Xác nhận mật khẩu" type="password" value={confirmPassword} change={(event) => setConfirmPassword(event.target.value)}/>                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12 column">
                                        <div className="form-group">
                                            <label>Avatar</label>
                                            <input type="file" id="avatar" ref={avatar} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 column">
                                        <div className="form-group message-btn">
                                            <button type="submit" className="theme-btn">
                                                Đăng kí
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="other-text">
                                Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

class RegisterForm extends React.Component {
    render() {
        return (
            <>
                <div className={this.props.class}>
                    <div className="form-group">
                        <label>{this.props.label}</label>
                        <input
                            value={this.props.value}
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