import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import API, { endpoints } from '../API';
import PayContext from '../context/PayContext';

import pageTitle2 from '../static/image/background/page-title-2.jpg'

function Booking1(props) {
    const history = useHistory()
    const payDetails = React.useContext(PayContext)

    const { tourId } = useParams()
    const [customerForms, setCustomerForms] = useState([{
        customer: {
            name: '',
            gender: '',
            date_of_birth: '',
            email: '',
            phone: '',
            address: '',
        }
    }])
    const [payer, setPayer] = useState([])

    const [count, setCount] = useState(1)

    const getTour = () => {
        API.get(`${endpoints['tours']}${tourId}/`).then(res => {
            console.info(res.data)
            payDetails.setTour(res.data)
            payDetails.setTotal(parseFloat(res.data.price_of_tour) * (parseInt(payDetails.adults) + parseInt(payDetails.childs)*(75/100)) 
            + parseFloat(res.data.price_of_room) * payDetails.rooms)
        })
    }

    useEffect(() => {
        getTour()
        payDetails.setTotal(parseFloat(payDetails.tour.price_of_tour) * (parseInt(payDetails.adults) + parseInt(payDetails.childs)*(75/100)) 
        + parseFloat(payDetails.tour.price_of_room) * payDetails.rooms)
    }, [count, payDetails.rooms])

    const numberValidate = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const handleChange = (idx, field, event) => {
        customerForms[idx].customer[field] = event.target.value
        setCustomerForms(customerForms => [...customerForms, { customer: customerForms[idx].customer }])
    }

    const handlePayerChange = (field, event) => {
        payer[field] = event.target.value
        setPayer(payer)
    }

    const addCustomer = (payerId) => {
        for(let i = 0; i < count; i++) {
            const formData = new FormData()

            for (let field in customerForms[i].customer)
                formData.append(field, customerForms[i].customer[field])
            
            API.post(`${endpoints['payers']}${payerId}/add-customer/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.info(res)
            }).catch(err => console.error(err))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let pId;
        const formPayer = new FormData()

        for (let field in payer)
            formPayer.append(field, payer[field])
        API.post(endpoints['payers'], formPayer, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.info(res)
            pId = res.data.id
            payDetails.setPayerId(pId)
            addCustomer(pId)
        }).catch(err => console.error(err))
        
        history.push(`/tour-detail/${tourId}/booking-2`)
    }
    
    useEffect(() => {
        if(count > 0)
            for (let i = 0; i < count; i++)
                setCustomerForms(customerForms => [...customerForms, {
                    customer: {
                        name: '',
                        gender: '',
                        date_of_birth: '',
                        email: '',
                        phone: '',
                        address: '',
                    }
                }])
    }, [count])

    useEffect(() => {
        if(payDetails.adults > -1 && payDetails.childs > -1)
            setCount(parseInt(payDetails.adults) + parseInt(payDetails.childs))
    }, [payDetails.adults, payDetails.childs])

    const createFields = (num) => {
        let forms = []
        for (let i = 0; i < num; i++) {
            forms.push(
                <>
                    <h3 style={{marginTop: '24px'}}>Khách Hàng #{i+1}</h3>
                        <div className="row clearfix">
                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Họ và tên" type="text" 
                                field={customerForms[i].customer.name} change={(event) =>handleChange(i, "name", event)}/>
                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Giới tính" type="text" 
                                field={customerForms[i].customer.gender} change={(event) =>handleChange(i, "gender", event)}/>
                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Email" type="text" 
                                field={customerForms[i].customer.email} change={(event) =>handleChange(i, "email", event)}/>
                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Điện thoại" type="text" 
                                field={customerForms[i].customer.phone} change={(event) =>handleChange(i, "phone", event)} keyPress={numberValidate}/>
                                <CustomeInput classname="col-lg-12 col-md-12 col-sm-12 column" label="Địa chỉ" type="text" 
                                field={customerForms[i].customer.address} change={(event) =>handleChange(i, "address", event)}/>
                        </div>
                </>
            )
        }
        return forms
    }

    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle2})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Thông Tin Khách Hàng</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>

            <section className="booking-section booking-process-1">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="booking-process-content mr-20">
                                <ul className="process-label clearfix">
                                    <li className="current">
                                        <span>1.</span>Nhập thông tin
                                    </li>
                                    <li>
                                        <span>2.</span>Thanh toán
                                    </li>
                                    <li>
                                        <span>3.</span>Xác nhận
                                    </li>
                                </ul>
                                <div className="inner-box">
                                    <form className="processing-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Số phòng</label>
                                                    <input id="room" type="text" value={payDetails.rooms} onKeyPress={numberValidate}
                                                    onChange={event => payDetails.setRooms(event.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Người lớn</label>
                                                    <input id="adult" type="text" value={payDetails.adults} onKeyPress={numberValidate} 
                                                    onChange={event => payDetails.setAdults(event.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Trẻ em</label>
                                                    <input id="children" type="text" value={payDetails.childs} onKeyPress={numberValidate} 
                                                    onChange={event => payDetails.setChilds(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    
                                    <form className="processing-form" onSubmit={handleSubmit}>
                                        <h3>Thông tin liên hệ</h3>
                                            <div className="row clearfix">
                                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Họ và tên" type="text" 
                                                field={payer.name} change={(event) =>handlePayerChange("name", event)}/>
                                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Email" type="text" 
                                                field={payer.email} change={(event) =>handlePayerChange("email", event)}/>
                                                <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Điện thoại" type="text" 
                                                field={payer.phone} change={(event) =>handlePayerChange("phone", event)} keyPress={numberValidate}/>
                                                <CustomeInput classname="col-lg-12 col-md-12 col-sm-12 column" label="Địa chỉ" type="text" 
                                                field={payer.address} change={(event) =>handlePayerChange("address", event)}/>
                                            </div>
                                        {createFields(count)}
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group message-btn text-right">
                                                <button type="submit" className="theme-btn">
                                                    Xác nhận
                                                    <i className="fas fa-angle-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    {/* <form onSubmit={handleSubmit} className="processing-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Message</label>
                                                    <textarea id="message" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                    </form> */}
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

export default Booking1;

class CustomeInput extends React.Component {
    render() {
        return (
            <>
                <div className={this.props.classname}>
                    <div className="form-group">
                        <label>{this.props.label}</label>
                        <input type={this.props.type} 
                        value={this.props.field}
                        onChange={this.props.change} 
                        onKeyPress={this.props.keyPress}/>
                    </div>
                </div>
            </>
        )
    }
}
