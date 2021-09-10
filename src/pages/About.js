import React from 'react';

import pageTitle1 from "../static/image/background/page-title.jpg"
import shape2 from "../static/image/shape/shape-2.png"
import shape3 from "../static/image/shape/shape-3.png"
import shape12 from "../static/image/shape/shape-12.png"
import shape13 from "../static/image/shape/shape-13.png"
import shape18 from "../static/image/shape/shape-18.png"
import place6 from "../static/image/place/place-6.jpg"
import place7 from "../static/image/place/place-7.jpg"
import place8 from "../static/image/place/place-8.jpg"
import testimonial1 from "../static/image/testimonial/testimonial-1.png"
import testimonial2 from "../static/image/testimonial/testimonial-2.png"
import testimonial3 from "../static/image/testimonial/testimonial-3.png"
import team1 from "../static/image/team/team-1.jpg"
import team2 from "../static/image/team/team-2.jpg"
import team3 from "../static/image/team/team-3.jpg"
import video1 from "../static/image/background/video-1.jpg"
import about3 from "../static/image/about/about-3.jpg"
import quote1 from "../static/image/icon/quote-1.png"

export default function About(props) {
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle1})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Contact</h1>
                        <p>Discover your next great adventure</p>
                    </div>
                </div>
            </section>
            <AboutStyleTwoSection/>
            <AboutPlaceThreeSection/>
            <AboutVideoSection/>
            <AboutTestimonialSection/>
            <AboutTeamSection/>
        </>
    );
}

class AboutStyleTwoSection extends React.Component {
    render() {
        return (
            <section className="about-style-two">
                <div
                    className="pattern-layer"
                    style={{
                        backgroundImage: `url(${shape2})`
                    }}
                />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_1">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <p>About Travio</p>
                                        <h2>World Best Travel Agency Company Since 2008.</h2>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiu smod tempor incididunt ut labore eiu dolore magna
                                            aliqua.Quis ipsum suspen disse ultrices gravida Risus
                                            commodo.
                                        </p>
                                    </div>
                                    <div className="btn-box">
                                        <a href="/destination.html" className="theme-btn">
                                            Find Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_2">
                                <div className="image-box">
                                    <div className="shape">
                                        <div
                                            className="shape-1"
                                            style={{
                                                backgroundImage: `url(${shape13})`
                                            }}
                                        />
                                        <div
                                            className="shape-2"
                                            style={{
                                                backgroundImage: `url(${shape12})`
                                            }}
                                        />
                                        <div
                                            className="shape-3"
                                            style={{
                                                backgroundImage: `url(${shape12})`
                                            }}
                                        />
                                    </div>
                                    <figure className="image">
                                        <img src={about3} alt="ImageAbout"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class AboutPlaceThreeSection extends React.Component {
    render() {
        return (
            <section className="place-style-three bg-color-1 sec-pad">
                <div className="anim-icon">
                    <div
                        className="icon anim-icon-1"
                        style={{
                            backgroundImage: `url(${shape18})`
                        }}
                    />
                    <div
                        className="icon anim-icon-2"
                        style={{
                            backgroundImage: `url(${shape18})`
                        }}
                    />
                </div>
                <div className="auto-container">
                    <div className="sec-title centred">
                        <p>Choose Your place</p>
                        <h2>Popular Destinations</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place6} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>New York City</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place7} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>Mont Blanc</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place8} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>Norway Lake</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place6} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>New York City</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place7} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>Mont Blanc</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place8} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>Norway Lake</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place6} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>New York City</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place7} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>Mont Blanc</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="place-block-two">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={place8} alt="ImagePlace"/>
                                    </figure>
                                    <div className="text">
                                        <h3>Norway Lake</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class AboutVideoSection extends React.Component {
    render() {
        return (
            <section
                className="video-section centred"
                style={{
                    backgroundImage: `url(${video1})`
                }}
            >
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>Explore Your Travel</h2>
                        <p>Your New Traveling Idea</p>
                        <div className="video-btn">
                            <a
                                href="https://www.youtube.com/watch?v=3M0TmN2TsK4&t=28s"
                                className="lightbox-image"
                                data-caption
                            >
                                <i className="fas fa-play" />
                                <span className="border-animation border-1" />
                                <span className="border-animation border-2" />
                                <span className="border-animation border-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class AboutTestimonialSection extends React.Component {
    render() {
        return (
            <section className="testimonial-section sec-pad centred">
                <div className="auto-container">
                <div className="sec-title centred">
                    <p>Review & Testimonials</p>
                    <h2>Top Reviews for Travio</h2>
                </div>
                <div className="three-item-carousel owl-carousel owl-theme owl-nav-none">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Mike Hardson</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial1}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Amy Johnson</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial2}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Luaka Smith</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial3}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Mike Hardson</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial1}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Amy Johnson</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial2}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Luaka Smith</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial3}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Mike Hardson</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial1}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Amy Johnson</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial2}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <ul className="rating-box clearfix">
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                                <li>
                                    <i className="fas fa-star" />
                                </li>
                            </ul>
                            <div className="text">
                                <div
                                    className="icon"
                                    style={{
                                        backgroundImage: `url(${quote1})`
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                                    disse ultrices gravida Risus
                                </p>
                            </div>
                            <div className="author-box">
                                <h4>Luaka Smith</h4>
                                <span className="designation">Traveler</span>
                                <figure className="thumb-box">
                                    <img
                                        src={testimonial3}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class AboutTeamSection extends React.Component {
    render() {
        return (
            <section className="team-section sec-pad bg-color-1 centred">
                <div className="anim-icon">
                    <div
                        className="icon anim-icon-1"
                        style={{
                            backgroundImage: `url(${shape3})`
                        }}
                    />
                    <div
                        className="icon anim-icon-2"
                        style={{
                            backgroundImage: `url(${shape3})`
                        }}
                    />
                </div>
                <div className="auto-container">
                    <div className="sec-title">
                        <p>Tour Guide</p>
                        <h2>Expert Tour Guides</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated animated"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={team1} alt="ImageTeam" />
                                    </figure>
                                    <div className="lower-content">
                                        <h3>
                                            <a href="/">Merrie Lewis</a>
                                        </h3>
                                        <span className="designation">Tour Guide</span>
                                        <ul className="social-links clearfix">
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated animated"
                                data-wow-delay="300ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={team2} alt="ImageTeam" />
                                    </figure>
                                    <div className="lower-content">
                                        <h3>
                                            <a href="/">Parks Missie</a>
                                        </h3>
                                        <span className="designation">Tour Guide</span>
                                        <ul className="social-links clearfix">
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div
                                className="team-block-one wow fadeInUp animated animated"
                                data-wow-delay="600ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={team3} alt="ImageTeam" />
                                    </figure>
                                    <div className="lower-content">
                                        <h3>
                                            <a href="/">Mariana Buenos</a>
                                        </h3>
                                        <span className="designation">Tour Guide</span>
                                        <ul className="social-links clearfix">
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/home.html">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}