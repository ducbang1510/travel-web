import React, { useEffect, useState } from 'react';
import API, { endpoints } from '../API';
import { Link } from 'react-router-dom'
import { useHistory, useParams } from "react-router";
import WOW from 'wowjs';

import pageTitle9 from "../static/image/background/page-title-9.jpg"
import shape16 from "../static/image/shape/shape-16.png"
import shape17 from "../static/image/shape/shape-17.png"

export default function ResetPassword(props) {
    const history = useHistory()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token }= useParams()
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        new WOW.WOW({live: false}).init();
    }, [])

    const resetPassword = async (event) => {
        event.preventDefault()

        if (password === confirmPassword) {
            const formData = new FormData()
            formData.append("token", token);
            formData.append("password", password);

            try {
                let res = await API.post(endpoints['reset-password'], formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(res)
                if (res.status === 200) {
                    alert('Đặt lại mật khẩu thành công. Hãy đăng nhập để sử dụng tài khoản')
                    history.push("/")
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            alert('Mật khẩu xác nhận không chính xác')
        }
    }

    useEffect(() => {
        let verifyToken = async () => {
            try {
                let res = await API.post(endpoints['verify-token'], {
                    'token': token
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log(res)
                if (res.status === 200) {
                    setIsValid(true)
                }
            } catch (error) {
                console.error(error)
            }
        }
        verifyToken()
    }, [token])

    let resetForm = <></>
    if (isValid) {
        resetForm = <>
            <form onSubmit={resetPassword} className="register-form">
                <div className="row clearfix">
                    <ResetPassForm class="col-lg-12 col-md-12 col-sm-12 column"
                        id="password" label="Mật khẩu" type="password" value={password} change={(event) => setPassword(event.target.value)}/>
                    <ResetPassForm class="col-lg-12 col-md-12 col-sm-12 column"
                        id="confirmPass" label="Xác nhận mật khẩu" type="password" value={confirmPassword} change={(event) => setConfirmPassword(event.target.value)}/>
                    <div className="col-lg-12 col-md-12 col-sm-12 column">
                        <div className="form-group message-btn">
                            <button type="submit" className="theme-btn">
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    } else {
        resetForm = <>
            <h3>Token không hợp lệ</h3>
        </>
    }
    
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle9})` }}>
                <div className="auto-container">
                <div className="content-box wow fadeInDown animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <h1>Đặt Lại Mật Khẩu</h1>
                    <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                </div>
                </div>
            </section>
            <section className="register-section sec-pad">
                <div className="anim-icon">
                    <div className="icon anim-icon-1" style={{ backgroundImage: `url(${shape16})` }}/>
                    <div className="icon anim-icon-2" style={{ backgroundImage: `url(${shape17})` }}/>
                </div>
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="sec-title centred wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <p>Đặt Lại Mật Khẩu</p>
                            <h2>Connect with us for Better Tour</h2>
                        </div>
                        <div className="form-inner">
                            <h3>Đăng nhập với</h3>
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
                            {resetForm}
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

class ResetPassForm extends React.Component {
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