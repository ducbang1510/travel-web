import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import API, { endpoints } from '../API';
import PreLoader from '../components/PreLoader';
import PayContext from '../context/PayContext';

import pageTitle2 from '../static/image/background/page-title-2.jpg'

function Booking2(props) {
    const { tourId } = useParams()
    const payDetails = useContext(PayContext)
    const [tour, setTour] = useState([]);
    const [note, setNote] = useState("");
    const [payments, setPayments] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('total_amount', payDetails.total)
        formData.append('tour_id', tourId)
        formData.append('note', note)
        formData.append('payer_id', payDetails.payerId)
        let urlPayment = ""
        try {
            await API.post(`${endpoints['payers']}${payDetails.payerId}/add-invoice/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            
            let res = await API.post(endpoints['payment'], formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            urlPayment = res.data.payUrl
        } catch (error) {
            console.error(error);
        }
        if (urlPayment !== "")
            window.location.href = urlPayment;
    }

    useEffect(() => {
        let getTour = async () => {
            try {
                let res = await API.get(endpoints['tour-details'](tourId))
                setTour(res.data)
                console.log(res)
            } catch (error) {
                console.error(error);
            }
        }
        getTour()
    }, [tourId])

    if (tour.length ===  0) {
        return <PreLoader />
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
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Ghi chú</label>
                                                    <textarea id="message"
                                                    value={note} onChange={(event) => setNote(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-option">
                                            <h3>Hình thức thanh toán</h3>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <FormControl component="fieldset">
                                                    <RadioGroup
                                                        aria-label="payment"
                                                        name="radio-buttons-group"
                                                        value={payments}
                                                        onChange={(event) => setPayments(event.target.value)}
                                                    >
                                                        <FormControlLabel value="1" control={<Radio />} label="Momo" />
                                                        <FormControlLabel value="2" control={<Radio />} label="Tiền mặt" />
                                                    </RadioGroup>
                                                    </FormControl>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                    <div className="form-group message-btn clearfix">
                                                        <Link to={"/tour-detail/" + tourId + "/booking-1"} className="theme-btn">
                                                            <i className="fas fa-angle-left" />
                                                            Trở lại
                                                        </Link>
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

export default Booking2;