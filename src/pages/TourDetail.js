import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API, { endpoints } from "../API";
import cookies from 'react-cookies'
import { useSelector } from "react-redux";

import pageTitle3 from "../static/image/background/page-title-3.jpg"
import advice1 from "../static/image/advice/advice-1.jpg"
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";


export default function TourDetail() {
    const [tour, setTour] = useState([])
    const [services, setServices] = useState([])

    const [rating, setRating] = useState(0)

    const [comment, setComment] = useState("")

    const { tourId } = useParams()

    let user = useSelector(state => state.user.user)

    useEffect(() => {
        let getTour = async() => {
            try {
                let res = await API.get(endpoints['tour-details'](tourId), {
                    headers: {
                        'Authorization': `Bearer ${cookies.load('access_token')}`
                    }
                })
                setServices(res.data.service)
                setTour(res.data)
                setRating(res.data.rate)
            } catch (error) {
                console.error(error)
            }
        }
        getTour()
    }, [tourId])

    /* Handle Comment Function */
    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const addRating = async (event, newValue) => {
        if (user !== null) {
            if (window.confirm("Bạn xác nhận đánh giá tour này ?") === true) {
                try {
                    let res = await API.post(endpoints['rating'](tourId), {
                        "rating": newValue
                    }, {
                        headers: {
                            'Authorization': `Bearer ${cookies.load('access_token')}`
                        }
                    })
                    if (res.status === 200 || res.status === 201)
                        alert("Cảm ơn đã đánh giá tour")
                } catch (error) {
                    console.error(error)
                }
            }
        }else {
            alert("Hãy đăng nhập để có thể đánh giá")
        }
        setRating(newValue);
    }
    

    const addComment = async (event) => {
        event.preventDefault()
        if (user != null) {
            try {
                let res = await API.post(endpoints['add-comment-tour'](tourId), {
                    "content": comment
                }, {
                    headers: {
                        'Authorization': `Bearer ${cookies.load('access_token')}`
                    }
                })
                if (res.status === 201)
                    alert("Cảm ơn đã để lại bình luận về tour")
            } catch (error) {
                console.error(error)
            }
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
                                        <Rating name="simple-controlled"
                                        size="large"
                                        value={rating}
                                        onChange={addRating}
                                        />
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
                                                <Link to="/destination-details.html">Travel Direction
                                                    <i className="fas fa-download"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/destination-details.html">Documetation
                                                    <i className="fas fa-download"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/destination-details.html">Logo & Assets
                                                    <i className="fas fa-download"></i>
                                                </Link>
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
                                    <Link to={"/tour-detail/" + tourId + "/booking-1"} style={{ color: "#fff" }}>
                                        <button type="submit" className="theme-btn">Nhấn vào đây</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}