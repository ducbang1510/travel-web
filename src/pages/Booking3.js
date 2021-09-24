import React from 'react';
import PayContext from '../context/PayContext';

import pageTitle2 from '../static/image/background/page-title-2.jpg'

function Booking3(props) {
    const payDetails = React.useContext(PayContext)
    
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle2})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Xác Nhận</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>

            <section className="booking-section booking-process-3">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="booking-process-content mr-20">
                                <ul className="process-label clearfix">
                                <li>
                                        <span>1.</span>Nhập thông tin
                                    </li>
                                    <li>
                                        <span>2.</span>Thanh toán
                                    </li>
                                    <li className="current">
                                        <span>3.</span>Xác nhận
                                    </li>
                                </ul>
                                <div className="confirm-box">
                                    <h3>Confirmation</h3>
                                    <div className="inner-box centred">
                                        <div className="icon-box">
                                            <i className="far fa-check-circle" />
                                        </div>
                                        <h3>Thanks for your booking!</h3>
                                        <p>
                                            You'll receive an email confirmation shortly at
                                            <br />
                                            <a href="mailto:1851050006bang@ou.edu.vn">
                                                1851050006bang@ou.edu.vn - khoa.lta.30092000@gmail.com
                                            </a>
                                        </p>
                                    </div>
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

export default Booking3;