import React from 'react';
import { useParams } from 'react-router';
import API, { endpoints } from '../API';
import PayContext from '../context/PayContext';

import pageTitle2 from '../static/image/background/page-title-2.jpg'

function Booking2(props) {
    const { tourId } = useParams()
    const payDetails = React.useContext(PayContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('total_amount', payDetails.total)
        formData.append('tour_id', tourId)

        API.post(`${endpoints['payers']}${payDetails.payerId}/add-invoice/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.info(res)
        }).catch(err => console.error(err))
    }

    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle2})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Thanh Toán</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>

            <section className="booking-section booking-process-2">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="booking-process-content mr-20">
                            <ul className="process-label clearfix">
                                    <li>
                                        <span>1.</span>Nhập thông tin
                                    </li>
                                    <li className="current">
                                        <span>2.</span>Thanh toán
                                    </li>
                                    <li>
                                        <span>3.</span>Xác nhận
                                    </li>
                                </ul>
                                <div className="inner-box">
                                    <form onSubmit={handleSubmit} className="processing-form">
                                        <div className="row clearfix">
                                        </div>
                                        <div className="payment-option">
                                            <h3>Card Info</h3>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>Hình thức thanh toán</label>
                                                        <div class="checkout-button">
                                                            <input type="radio"/>
                                                            <div class="content">
                                                                <div class="checkout-title">
                                                                Thanh toán bằng <b>Ví MoMo</b>   
                                                                </div>    
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                    <div className="form-group message-btn clearfix">
                                                        <a href={"/tour-detail/" + tourId + "/booking-1"} className="theme-btn">
                                                            <i className="fas fa-angle-left" />
                                                            Trở lại
                                                        </a>
                                                        <button type="submit" className="theme-btn">
                                                            Xác nhận
                                                            <i className="fas fa-angle-right" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="process-sidebar ml-20">
                                <div className="content-box">
                                    <h3>Thông Tin</h3>
                                    <figure className="image-box">
                                        <img src={payDetails.tour.image} alt="ImageSidebar" />
                                    </figure>
                                    <h4>{payDetails.tour.tour_name}</h4>
                                    <ul className="info clearfix">
                                        <li>
                                            <i className="far fa-calendar-alt" />
                                            From: <span>{payDetails.tour.depart_date}</span>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar-alt" />
                                            To: <span>Đang cập nhật</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-user-alt" />
                                            Guests: <span>{payDetails.adults} Adults, {payDetails.childs} Child</span>
                                        </li>
                                    </ul>
                                    <div className="price">
                                        <h4>Total: {payDetails.total}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Booking2;