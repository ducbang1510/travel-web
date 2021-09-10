import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API, { endpoints } from "../API";

import pageTitle3 from "../static/image/background/page-title-3.jpg"
import des4 from "../static/image/destination/destination-4.jpg"
import des5 from "../static/image/destination/destination-5.jpg"
import des6 from "../static/image/destination/destination-6.jpg"
import des7 from "../static/image/destination/destination-7.jpg"
import des8 from "../static/image/destination/destination-8.jpg"
import advice1 from "../static/image/advice/advice-1.jpg"


export default function TourDetail() {
    const [tour, setTour] = useState([])

    const { tourId } = useParams()

    const getTour = () => {
        API.get(`${endpoints['tours']}${tourId}/`).then(res => {
            console.info(res.data)
            setTour(res.data)
        })
    }

    useEffect(() => {
        getTour()
    }, [])

    let services = tour.service

    return (
        <>
            <section className="page-title style-three" style={{ backgroundImage: `url(${pageTitle3})` }}>
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="rating"><span><i className="fas fa-star"></i>{tour.rating}</span></div>
                        <h2 style={{ width: "750px" }}>{tour.tour_name}</h2>
                        <h3>{tour.price_of_tour}đ<span> / 1 người</span></h3>
                    </div>
                </div>
            </section>

            <section className="tour-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="tour-details-content">
                                <div className="inner-box">
                                    <div className="text">
                                        <h2>Mô tả</h2>
                                        <p dangerouslySetInnerHTML={{__html: `${tour.description}`}} />
                                        <ul className="info-list clearfix">
                                            <li><i className="far fa-clock"></i>{tour.duration}</li>
                                            <li><i className="far fa-user"></i>Age 15+</li>
                                            <li><i className="far fa-map"></i>Đang cập nhật</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="overview-inner">
                                    <ul className="overview-list clearfix">
                                        <li><span>Điểm đến:</span>Đang cập nhật</li>
                                        <li><span>Điểm khởi hành:</span>{tour.departure}</li>
                                        <li><span>Thời gian khởi hành:</span>{tour.depart_date}</li>
                                        <li className="clearfix"><span>Bao gồm:</span>
                                            <ul className="included-list clearfix">
                                                {services.map(s => <li key={s.id}>{s.name}</li>)}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tour-plan">
                                    <div className="text">
                                        <h2>Kế hoạch tour</h2>
                                        <p dangerouslySetInnerHTML={{__html: `${tour.tour_plan}`}} />
                                    </div>
                                    {/* <div className="content-box">
                                        <div className="single-box">
                                            <span>01</span>
                                            <h4>8:00 am to 10:00 am</h4>
                                            <h3>Day 1: Arrive South Africa Forest</h3>
                                            <p>Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list clearfix">
                                                <li>Air fares</li>
                                                <li>4 Nights Hotel Accomodation</li>
                                                <li>Entrance Fees</li>
                                            </ul>
                                        </div>
                                        <div className="single-box">
                                            <span>02</span>
                                            <h4>8:00 am to 10:00 am</h4>
                                            <h3>Day 2: Arrive South Africa Forest</h3>
                                            <p>Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list clearfix">
                                                <li>Air fares</li>
                                                <li>4 Nights Hotel Accomodation</li>
                                                <li>Entrance Fees</li>
                                            </ul>
                                        </div>
                                        <div className="single-box">
                                            <span>03</span>
                                            <h4>8:00 am to 10:00 am</h4>
                                            <h3>Day 3: Arrive South Africa Forest</h3>
                                            <p>Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <ul className="list clearfix">
                                                <li>Air fares</li>
                                                <li>4 Nights Hotel Accomodation</li>
                                                <li>Entrance Fees</li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="location-map">
                                    <div className="text">
                                        <h2>View On Map</h2>
                                        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex commodo consequat duis aute irure dolor.</p>
                                    </div>
                                    <div className="map-inner">
                                        <div className="google-map" id="contact-google-map" data-map-lat="40.712776"
                                            data-map-lng="-74.005974" data-icon-path="assets/images/icons/map-marker.png"
                                            data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom="12"
                                            data-markers='{
                                                    "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                                                }'>
                                        </div>
                                    </div>
                                </div>
                                <div className="photo-gallery">
                                    <div className="text">
                                        <h2>Photo Gallery</h2>
                                        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <div className="image-box clearfix">
                                        <figure className="image">
                                            <img src={des4} alt="ImageDetail" />
                                            <a href={des4}
                                                className="view-btn lightbox-image" data-fancybox="gallery">
                                                <i className="far fa-plus-square"></i>
                                            </a>
                                        </figure>
                                        <figure className="image">
                                            <img src={des5} alt="ImageDetail" />
                                            <a href={des5}
                                                className="view-btn lightbox-image" data-fancybox="gallery">
                                                <i className="far fa-plus-square"></i>
                                            </a>
                                        </figure>
                                        <figure className="image">
                                            <img src={des6} alt="ImageDetail" />
                                            <a href={des6}
                                                className="view-btn lightbox-image" data-fancybox="gallery">
                                                <i className="far fa-plus-square"></i>
                                            </a>
                                        </figure>
                                        <figure className="image">
                                            <img src={des7} alt="ImageDetail" />
                                            <a href={des7}
                                                className="view-btn lightbox-image" data-fancybox="gallery">
                                                <i className="far fa-plus-square"></i>
                                            </a>
                                        </figure>
                                        <figure className="image">
                                            <img src={des8} alt="ImageDetail" />
                                            <a href={des8}
                                                className="view-btn lightbox-image" data-fancybox="gallery">
                                                <i className="far fa-plus-square"></i>
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="review-box">
                                    <div className="text">
                                        <div className="total-rating">
                                            <h2>4.8</h2>
                                            <span>Superb</span>
                                        </div>
                                    </div>
                                    <div className="progress-content">
                                        <div className="progress-box">
                                            <p>Accommodation</p>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="70%"></div>
                                                <div className="count-text">70%</div>
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <p>Transport</p>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="80%"></div>
                                                <div className="count-text">80%</div>
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <p>Comfort</p>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="100%"></div>
                                                <div className="count-text">100%</div>
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <p>Hospitality</p>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="70%"></div>
                                                <div className="count-text">70%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-box">
                                    <div className="text">
                                        <h2>Leave Your Comments</h2>
                                        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex commodo consequat duis aute irure dolor.</p>
                                        <ul className="list clearfix">
                                            <li>
                                                <h5>Accommodation:</h5>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </li>
                                            <li>
                                                <h5>Transport:</h5>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </li>
                                            <li>
                                                <h5>Comfort:</h5>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </li>
                                            <li>
                                                <h5>Food:</h5>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </li>
                                            <li>
                                                <h5>Hospitality:</h5>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <form action="tour-details.html" method="post" className="comment-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="review" placeholder="Review Title" required />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Write Message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button type="submit" className="theme-btn">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="default-sidebar tour-sidebar ml-20">
                                <div className="sidebar-widget downloads-widget">
                                    <div className="widget-title">
                                        <h3>Downloads</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="download-links clearfix">
                                            <li>
                                                <a href="/destination-details.html">Travel Direction
                                                    <i className="fas fa-download"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/destination-details.html">Documetation
                                                    <i className="fas fa-download"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/destination-details.html">Logo & Assets
                                                    <i className="fas fa-download"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="advice-widget">
                                    <div className="inner-box"
                                        style={{ backgroundImage: `url(${advice1})` }}>
                                        <div className="text">
                                            <h2>Get <br />25% Off <br />On New York Tours</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-widget">
                                    <div className="widget-title">
                                        <h3>Đặt Tour</h3>
                                    </div>
                                    <a href="/booking-1.html" style={{ color: "#fff" }}>
                                        <button type="submit" className="theme-btn">Nhấn vào đây</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}