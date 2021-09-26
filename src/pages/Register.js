import React from 'react';
import API, { endpoints } from '../API';
import { Link } from 'react-router-dom'

import pageTitle5 from "../static/image/background/page-title-5.jpg"
import shape16 from "../static/image/shape/shape-16.png"
import shape17 from "../static/image/shape/shape-17.png"

export default class Register extends React.Component {
    constructor() {
        super();
        this.user = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'username': '',
            'password': '',
            'confirm_password': '',
        }
        this.avatar = React.createRef()

        this.state = {
            'user': this.user
        }
    }

    change = (field, event) => {
        this.user[field] = event.target.value
        this.setState({
            'user': this.user
        })
    }

    register = (event) => {
        if (this.state.user.password === this.state.user.confirm_password) {
            const formData = new FormData()
            for (let k in this.state.user)
                if (k !== 'confirm_password')
                    formData.append(k, this.state.user[k])

            formData.append('avatar', this.avatar.current.files[0])
            API.post(endpoints['users'], formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                alert('Đăng kí thành công. Hãy đăng nhập để sử dụng tài khoản')
            }).catch(err => console.error(err))
        }

        event.preventDefault()
    }

    render() {
        return (
            <>
                <section
                    className="page-title centred"
                    style={{
                    backgroundImage: `url(${pageTitle5})`
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
                            <div className="sec-title centred">
                                <p>Sign Up</p>
                                <h2>Connect with us for Better Tour</h2>
                            </div>
                            <div className="form-inner">
                                <h3>Sign Up with</h3>
                                <ul className="social-links clearfix">
                                    <li>
                                        <a href="/home.html">
                                            <span>Sign In with Facebook</span>
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/home.html">
                                            <span>Sign In with Google</span>
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/home.html">
                                            <span>Sign In with Twitter</span>
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="text">
                                    <span>or</span>
                                </div>
                                <form onSubmit={this.register} className="register-form">
                                    <div className="row clearfix">
                                        <RegisterForm class="col-lg-6 col-md-6 col-sm-12 column"
                                        id="firstname" label="First Name" type="text" field={this.state.user.first_name} change={this.change.bind(this, 'first_name')} />
                                        <RegisterForm class="col-lg-6 col-md-6 col-sm-12 column"
                                         id="lastname" label="Last Name" type="text" field={this.state.user.last_name} change={this.change.bind(this, 'last_name')} />
                                        <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                         id="email" label="Email" type="email" field={this.state.user.email} change={this.change.bind(this, 'email')} />
                                        <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                         id="username" label="Username" type="text" field={this.state.user.username} change={this.change.bind(this, 'username')} />
                                        <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                         id="password" label="Password" type="password" field={this.state.user.password} change={this.change.bind(this, 'password')} />
                                        <RegisterForm class="col-lg-12 col-md-12 col-sm-12 column"
                                         id="confirmPass" label="Confirm Password" type="password" field={this.state.user.confirm_password} change={this.change.bind(this, 'confirm_password')} />                                    
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group">
                                                <label>Avatar</label>
                                                <input type="file" id="avatar" ref={this.avatar} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="other-text">
                                    Already have an account? <Link to="/login">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

class RegisterForm extends React.Component {
    render() {
        return (
            <>
                <div className={this.props.class}>
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