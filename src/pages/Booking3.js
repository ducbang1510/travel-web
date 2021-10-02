import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import API, { endpoints } from '../API';
import PreLoader from '../components/PreLoader';
import PayContext from '../context/PayContext';

import pageTitle2 from '../static/image/background/page-title-2.jpg'

function Booking3(props) {
    const { tourId } = useParams()
    const [tour, setTour] = useState([])
    const [resultCode, setResultCode] = useState(-1)
    const payDetails = React.useContext(PayContext)

    const location = useLocation()

    useEffect(() => {
        let getTour = async () => {
            try {
                let res = await API.get(endpoints['tour-details'](tourId))
                setTour(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        getTour()
    }, [tourId])

    useEffect(() => {
        console.log(location.search)
        let getConfirm = async () => {
            try {
                let res = await API.get(`${endpoints['confirm-payment']}${location.search}`)
                console.log(res)
                setResultCode(res.data.rCode)
            } catch (error) {
                console.log(error)
            }
        }
        getConfirm()
    }, [location.search])

    let notification = <></>
    if (resultCode === 0) {
        notification = <>
            <div className="confirm-box">
                <h3>Thanh toán thành công</h3>
                <div className="inner-box centred">
                    <div className="icon-box">
                        <i className="far fa-check-circle" />
                    </div>
                    <h3>Cảm ơn đã đặt tour</h3>
                    <p>
                        Bạn sẽ nhận được email xác nhận trong thời gian ngắn
                        <br />
                        <a href="mailto:1851050006bang@ou.edu.vn">
                            1851050006bang@ou.edu.vn - khoa.lta.30092000@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </>
    } else {
        notification = <>
            <div className="confirm-box">
                <h3>Thanh toán thất bại</h3>
                <div className="inner-box centred">
                    <div className="icon-box">
                        <i style={{ color: 'red' }} className="far fa-times-circle" />
                    </div>
                    <h3>Vui lòng thử lại</h3>
                    <p>
                        Vui lòng đảm bảo tài khoản thanh toán có đủ số tiền
                        <br />
                        <a href="mailto:1851050006bang@ou.edu.vn">
                            1851050006bang@ou.edu.vn - khoa.lta.30092000@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </>
    }

    if (tour.length ===  0 || resultCode === -1) {
        return <PreLoader />
    }

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
                                {notification}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="process-sidebar ml-20">
                            <div className="content-box">
                                    <h3>Thông Tin</h3>
                                    <figure className="image-box">
                                        <img src={tour.image} alt="ImageSidebar" />
                                    </figure>
                                    <h4>{tour.tour_name}</h4>
                                    <ul className="info clearfix">
                                        <li>
                                            <i className="far fa-calendar-alt" />
                                            Từ: <span>{tour.depart_date}</span>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar-alt" />
                                            Tới: <span>Đang cập nhật</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-user-alt" />
                                            Khách: <span>{payDetails.adults} người lớn, {payDetails.childs} trẻ em</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill" />
                                            Trẻ em: <span>Đang cập nhật</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill" />
                                            Người lớn: <span>{tour.price_of_tour}</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill" />
                                            Tiền phòng: <span>{tour.price_of_room} đ</span>
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