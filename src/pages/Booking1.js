import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import API, { endpoints } from '../API';
import { v4 as uuidv4 } from 'uuid';
import PayContext from '../context/PayContext';

import pageTitle2 from '../static/image/background/page-title-2.jpg'
import PreLoader from '../components/PreLoader';

function Booking1(props) {
    const history = useHistory()
    const payDetails = React.useContext(PayContext)
    const [tour, setTour] = useState([]);

    const { tourId } = useParams()
    const [customerForms, setCustomerForms] = useState([{
        id: uuidv4(),
        name: '',
        gender: '',
        date_of_birth: '',
        email: '',
        phone: '',
        address: '',
    }])
    const [payerName, setPayerName] = useState("")
    const [payerMail, setPayerMail] = useState("")
    const [payerPhone, setPayerPhone] = useState("")
    const [payerAddress, setPayerAddress] = useState("")

    const [count, setCount] = useState(1)

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
        payDetails.setTotal(parseFloat(tour.price_of_tour) * (parseInt(payDetails.adults) + parseInt(payDetails.childs) * (75 / 100))
            + parseFloat(tour.price_of_room) * payDetails.rooms)
    }, [payDetails, tour])

    const numberValidate = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const addCustomer = async (payerId) => {
        for (let i = 0; i < count; i++) {
            const formData = new FormData()
            for (let field in customerForms[i])
                if (field !== 'id')
                    formData.append(field, customerForms[i][field])

            try {
                let res = await API.post(`${endpoints['payers']}${payerId}/add-customer/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.info(res)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let pId;
        const formPayer = new FormData()
        formPayer.append("name", payerName)
        formPayer.append("email", payerMail)
        formPayer.append("phone", payerPhone)
        formPayer.append("address", payerAddress)

        try {
            let res = await API.post(endpoints['payers'], formPayer, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            pId = res.data.id
            payDetails.setPayerId(pId)
            addCustomer(pId)

            await API.post(endpoints['update-slots'](tourId), {
                "count": count
            })

            history.push(`/tour-detail/${tourId}/booking-2`)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (payDetails.adults > -1 && payDetails.childs > -1)
            setCount(parseInt(payDetails.adults) + parseInt(payDetails.childs))
    }, [payDetails.adults, payDetails.childs])

    useEffect(() => {
        if (Number(payDetails.adults) + Number(payDetails.childs) > Number(tour.slots)) {
            alert("Vượt quá số lượng còn lại. Hãy nhập lại")
            payDetails.setAdults("1")
            payDetails.setChilds("0")
        }
        else {
            let newInPut = []
            setCount(Number(payDetails.adults) + Number(payDetails.childs))

            if (count !== Number(payDetails.adults) + Number(payDetails.childs)) {
                for (let i = 0; i < (Number(payDetails.adults) + Number(payDetails.childs)); i++) {
                    newInPut = [...newInPut, { id: uuidv4(), name: '', gender: '', date_of_birth: '', email: '', phone: '', address: '' }]
                }

                let v = []
                if (newInPut.length) {
                    newInPut.forEach(n => {
                        v.push(n)
                    })
                    setCustomerForms(v)
                }
            }
        }
    }, [payDetails , count, tour.slots])

    const handleCustomerChange = (id, event) => {
        const newCustomerForms = customerForms.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setCustomerForms(newCustomerForms);
    }

    if (tour.length === 0) {
        return <PreLoader />
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
                                                        onChange={event => payDetails.setRooms(event.target.value)} required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Người lớn</label>
                                                    <input id="adult" type="text" value={payDetails.adults} onKeyPress={numberValidate}
                                                        onChange={event => payDetails.setAdults(event.target.value)} required/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Trẻ em</label>
                                                    <input id="children" type="text" value={payDetails.childs} onKeyPress={numberValidate}
                                                        onChange={event => payDetails.setChilds(event.target.value)} required/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <form className="processing-form" onSubmit={handleSubmit}>
                                        <h3>Thông tin liên hệ</h3>
                                        <div className="row clearfix">
                                            <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Họ và tên" type="text" name="name"
                                                field={payerName} change={(event) => setPayerName(event.target.value)} />
                                            <div className="col-lg-6 col-md-6 col-sm-12 column"></div>
                                            <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Email" type="text" name="email"
                                                field={payerMail} change={(event) => setPayerMail(event.target.value)} />
                                            <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Điện thoại" type="text" name="phone"
                                                field={payerPhone} change={(event) => setPayerPhone(event.target.value)} keyPress={numberValidate} />
                                            <CustomeInput classname="col-lg-12 col-md-12 col-sm-12 column" label="Địa chỉ" type="text" name="address"
                                                field={payerAddress} change={(event) => setPayerAddress(event.target.value)} />
                                        </div>

                                        {customerForms.map((customerForm, idx) => (
                                            <div key={customerForm.id}>
                                                <h3 style={{ marginTop: '24px' }}>Khách Hàng #{idx + 1}</h3>
                                                <div className="row clearfix">
                                                    <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Họ và tên" type="text" name="name"
                                                        field={customerForm.name} change={event => handleCustomerChange(customerForm.id, event)} />
                                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                        <div className="form-group">
                                                        <FormControl required sx={{ m:0, minWidth: 120 }}>
                                                            <label>Giới tính</label>
                                                            <Select
                                                                name="gender"
                                                                value={customerForm.gender}
                                                                onChange={event => handleCustomerChange(customerForm.id, event)}
                                                                displayEmpty
                                                                inputProps={{ 'aria-label': 'Without label' }}
                                                            >
                                                                <MenuItem value={"Nam"}>Nam</MenuItem>
                                                                <MenuItem value={"Nữ"}>Nữ</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        </div>
                                                    </div>
                                                    <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Email" type="text" name="email"
                                                        field={customerForm.email} change={event => handleCustomerChange(customerForm.id, event)} />
                                                    <CustomeInput classname="col-lg-6 col-md-6 col-sm-12 column" label="Điện thoại" type="text" name="phone"
                                                        field={customerForm.phone} change={event => handleCustomerChange(customerForm.id, event)} keyPress={numberValidate} />
                                                    <CustomeInput classname="col-lg-12 col-md-12 col-sm-12 column" label="Địa chỉ" type="text" name="address"
                                                        field={customerForm.address} change={event => handleCustomerChange(customerForm.id, event)} />
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group message-btn text-right">
                                                <button type="submit" className="theme-btn">
                                                    Xác nhận
                                                    <i className="fas fa-angle-right" />
                                                </button>
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
                                            <i className="fas fa-user-alt" />
                                            Chỗ còn lại: <span>{tour.slots}</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill" />
                                            Trẻ em: <span>{parseFloat(tour.price_of_tour) * (75 / 100)} đ</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill" />
                                            Người lớn: <span>{tour.price_of_tour} đ</span>
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

export default Booking1;

class CustomeInput extends React.Component {
    render() {
        return (
            <>
                <div className={this.props.classname}>
                    <div className="form-group">
                        <label>{this.props.label}</label>
                        <input type={this.props.type}
                            name={this.props.name}
                            value={this.props.field}
                            onChange={this.props.change}
                            onKeyPress={this.props.keyPress} required/>
                    </div>
                </div>
            </>
        )
    }
}
