import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API, { endpoints } from "../API";
import StarRating from "../components/StarRating";
import cookies from 'react-cookies'
import { useSelector } from "react-redux";

import pageTitle3 from "../static/image/background/page-title-3.jpg"
import advice1 from "../static/image/advice/advice-1.jpg"


export default function TourDetail() {
    const [tour, setTour] = useState([])
    const [services, setServices] = useState([])

    const [rating, setRating] = useState(0)
    const [isRate, setIsRate] = useState(false)

    const [comment, setComment] = useState("")

    const { tourId } = useParams()

    let user = useSelector(state => state.user.user)

    useEffect(() => {
        let getTour = async() => {
            try {
                let res = await API.get(endpoints['tour-details'](tourId))
                setServices(res.data.service)
                setTour(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getTour()
    }, [tourId])

    const handleRatingChange = (value) => {
        setRating(value)
        setIsRate(true)
    }

    /* Handle Comment Function */
    const handleChange = (event) => {
        setComment(event.target.value)
    }
    
    useEffect(() => {
        let addRating = async() => {
            if (user !== null) {
                const formRate = new FormData()
                formRate.append("rating", rating)
                try {
                    let res = await API.post(endpoints['tours'](tourId), formRate, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${cookies.load('access_token')}`
                        }
                    })
                    console.info(res)
                } catch (error) {
                    console.error(error)
                }
            }else {
                alert("Hãy đăng nhập để có thể đánh giá")
            }
        }
        if(rating > 0 && isRate)
            addRating()
    }, [rating, isRate, tourId, user])
    

    const addComment = (event) => {
        event.preventDefault()
        if (user !== null) {
            const formData = new FormData()

            formData.append("content", comment)

            API.post(`${endpoints['tours']}${tourId}/add-comment/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            }).then((res) => {
                console.info(res)
            }).catch(err => console.error(err))
        }
        else {
            alert("Hãy đăng nhập để có thể bình luận")
        }
    }
    /* End Comment Function */

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
                                <div>
                                    <h2>Rating</h2>
                                    <StarRating 
                                    count={5}
                                    size={20}
                                    value={rating}
                                    activeColor ={'gold'}
                                    inactiveColor={'#ddd'}
                                    disabled={isRate}
                                    onChange={handleRatingChange}  />
                                </div>
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
                                    </div> */}
                                </div>
                                <div className="photo-gallery">
                                    <div className="text">
                                        <a style={{color: "black", fontSize: "30px", fontWeight: "600"}} href={"/tour-detail/" + tourId + "/gallery"}>
                                            Bộ sưu tập ảnh <span> </span>
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="comment-box">
                                    <div className="text">
                                        <h2>Đánh giá</h2>
                                        <ul className="list clearfix">
                                            {/* <li>
                                                <h5>Rating:</h5>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <form onSubmit={addComment} className="comment-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea placeholder="Nội dung" value={comment} 
                                                    onChange={(event) => handleChange(event)}/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button type="submit" className="theme-btn">Gửi</button>
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
                                    <a href={"/tour-detail/" + tourId + "/booking-1"} style={{ color: "#fff" }}>
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