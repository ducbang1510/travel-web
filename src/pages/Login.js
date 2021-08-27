import PageTitle from '../components/PageTitle'
import MobileMenu from '../components/MobileMenu'
import React, { useState } from 'react';
import API, { endpoints } from '../API';
import cookies from 'react-cookies'
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setLogged] = useState(false)
    const dispatch = useDispatch()

    const login = async (event) => {
        event.preventDefault();
        let res = await API.post(endpoints['login'], {
            'client_id': 'YloDZhhf9vdFi88YR77lOwgBNeN72j4tWjBjViFc',
            'client_secret': 'ydSvpn6DPJNW6vCF9jNf6Y9vyuHYzYTGpga9dIMZmBcxJRxzmrMZWwBkgjOAeSecZiIeBAqEvyZPFPHPgCs3CCW26qVmX9cX76wstvhknsdhcPlFz3y4kjj7mPzwjFpb',
            'username': username,
            'password': password,
            'grant_type': 'password'
        });
        console.log(res.data);

        cookies.save("access_token", res.data.access_token);

        let user = await API.get(endpoints['current-user'], {
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        })
        console.info(user.data);
        cookies.save("user", user.data)

        dispatch({
            "type": "login",
            "payload": user.data
        })

        setLogged(true)
    }

    if (isLogged)
        return <Redirect to="/" />
    else
        return (
            <>
                <MobileMenu />
                <PageTitle />
                <section className="register-section sec-pad">
                    <div className="anim-icon">
                        <div
                            className="icon anim-icon-1"
                            style={{
                                backgroundImage: "url(./assets/image/shape/shape-16.png)"
                            }}
                        />
                        <div
                            className="icon anim-icon-2"
                            style={{
                                backgroundImage: "url(./assets/image/shape/shape-17.png)"
                            }}
                        />
                    </div>
                    <div className="auto-container">
                        <div className="inner-box">
                            <div className="sec-title centred">
                                <p>Sign in</p>
                                <h2>Connect with us for Better Tour</h2>
                            </div>
                            <div className="form-inner">
                                <h3>Sign In with</h3>
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
                                <form onSubmit={login} className="register-form">
                                    <div className="row clearfix">
                                        <LoginForm
                                            id="username"
                                            label="Username"
                                            field={username}
                                            change={event => setUsername(event.target.value)}
                                            type="text"
                                            placeholder="Enter Username"
                                        />
                                        <LoginForm
                                            id="password"
                                            label="Password"
                                            field={password}
                                            change={event => setPassword(event.target.value)}
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group">
                                                <div className="forgor-password text-right">
                                                    <a href="/signup.html">Forget Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn">
                                                    Sign In
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="other-text">
                                    Already have an account? <Link to="/register">Register Now</Link>
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