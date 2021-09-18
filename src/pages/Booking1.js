import React, { useEffect, useState } from 'react';
import API, { endpoints } from '../API';

function Booking1() {
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

    const [adults, setAdults] = useState(1)
    const [childs, setChilds] = useState(0)
    const [count, setCount] = useState(1)

    const numberValidate = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const handleChange = (idx, field, event) => {
        customerForms[idx].customer[field] = event.target.value
        setCustomerForms(customerForms => [...customerForms, { customer: customerForms[idx].customer }])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        for(let i = 0; i < count; i++) {
            const formData = new FormData()

            for (let field in customerForms[i].customer)
                formData.append(field, customerForms[i].customer[field])
            
            API.post(endpoints['customers'], formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.info(res)
            }).catch(err => console.error(err))
        }
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
        if(adults > -1 && childs > -1)
            setCount(parseInt(adults) + parseInt(childs))
    }, [adults, childs])

    const createFields = (num) => {
        let forms = []
        for (let i = 0; i < num; i++) {
            forms.push(
                <>
                    <h3>Khách Hàng #{i+1}</h3>
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
            <section className="page-title centred" style={{ backgroundImage: "url(./assets/image/background/page-title-2.jpg)" }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Booking Process Personal Info</h1>
                        <p>Discover your next great adventure</p>
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
                                                    <input id="room" type="text" onKeyPress={numberValidate} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Người lớn</label>
                                                    <input id="adult" type="text" value={adults} onKeyPress={numberValidate} 
                                                    onChange={event => setAdults(event.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Trẻ em</label>
                                                    <input id="children" type="text" value={childs} onKeyPress={numberValidate} 
                                                    onChange={event => setChilds(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    
                                    <form className="processing-form" onSubmit={handleSubmit}>
                                        {createFields(count)}
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group message-btn text-right">
                                                <button type="submit" className="theme-btn">
                                                    Xác nhận
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
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group message-btn text-right">
                                                    <button type="submit" className="theme-btn">
                                                        <a href="/booking-2" style={{color: "#fff"}}>
                                                            Next
                                                            <i className="fas fa-angle-right" />
                                                        </a>
                                                        Next
                                                    </button>
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
                                    <h3>Tour Summary</h3>
                                    <figure className="image-box">
                                        <img src="./assets/image/sidebar/sidebar-1.jpg" alt="ImageSidebar" />
                                    </figure>
                                    <h4>Mascow Red City Land</h4>
                                    <ul className="info clearfix">
                                        <li>
                                            <i className="far fa-calendar-alt" />
                                            From: <span>25 Oct, 2020</span>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar-alt" />
                                            To: <span>29 Oct, 2020</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-user-alt" />
                                            Guests: <span>{adults} Adults, {childs} Child</span>
                                        </li>
                                    </ul>
                                    <div className="price">
                                        <h4>Total: $170.00</h4>
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
// setSearches(searches => [...searches, query])