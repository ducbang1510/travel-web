import React, { useState } from 'react';
import API, { endpoints } from '../API';

function Booking1(props) {
    const cus = [{
        name: '',
        gender: '',
        date_of_birth: '',
        email: '',
        phone: '',
        address: '',
    }]
    const [customer, setCustomer] = useState(cus)
    const [adults, setAdults] = useState(1)
    const [childs, setChilds] = useState(0)

    const [custom, setCustom] = useState(cus)
    const [listCustomer, setListCustomer] = useState([])

    let count = parseInt(adults) + parseInt(childs)

    const numberValidate = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const handleChange = (field, event) => {
        cus[field] = event.target.value
        setCustomer(cus)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()

        for (let field in customer)
            formData.append(field, customer[field])

        API.post(endpoints['customers'], formData, {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.info(res)
        }).catch(err => console.error(err))
    }


    // TEST ADD ARRAY CUSTOMER
    const handleChange2 = (field, event) => {
        cus[field] = event.target.value
        setCustom(cus)
    }

    const addSingleCustomer = (event) => {
        event.preventDefault()
        const newCus = [...listCustomer, custom]
        setListCustomer(newCus)
        console.log(listCustomer)
    }

    let forms = []
    for (let i = 1; i < count; i++)
        forms.push(
            <CustomerForm count={i + 1} submit={addSingleCustomer} 
            valueName={custom.name} changeName={(event) => handleChange2('name', event)} 
            valueGender={custom.gender} changeGender={(event) => handleChange2('gender', event)}
            valueEmail={custom.email} changeEmail={(event) => handleChange2('email', event)}
            valuePhone={custom.phone} changePhone={(event) => handleChange2('phone', event)}
            valueAddress={custom.address} changeAddress={(event) => handleChange2('address', event)}/>
        )


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

                                    <CustomerForm count={1} submit={handleSubmit} 
                                    valueName={customer.name} changeName={(event) => handleChange('name', event)} 
                                    valueGender={customer.gender} changeGender={(event) => handleChange('gender', event)}
                                    valueEmail={customer.email} changeEmail={(event) => handleChange('email', event)}
                                    valuePhone={customer.phone} changePhone={(event) => handleChange('phone', event)}
                                    valueAddress={customer.address} changeAddress={(event) => handleChange('address', event)}/>

                                    {forms}

                                    {/* <form onSubmit={handleSubmit} className="processing-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <input type="text" id="name"
                                                        value={customer.name} onChange={(event) => handleChange('name', event)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Gender</label>
                                                    <input type="text" id="gender"
                                                        value={customer.gender} onChange={(event) => handleChange('gender', event)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" id="email"
                                                        value={customer.email} onChange={(event) => handleChange('email', event)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input id="phone" type="text" onKeyPress={numberValidate}
                                                        value={customer.phone} onChange={(event) => handleChange('phone', event)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" id="address"
                                                        value={customer.address} onChange={(event) => handleChange('address', event)} />
                                                </div>
                                            </div>

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

class CustomerForm extends React.Component {
    render() {
        return (
            <>
                <h3>Khách Hàng #{this.props.count}</h3>
                <form onSubmit={this.props.submit} className="processing-form">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input type="text" id={"name" + this.props.count} value={this.props.valueName}
                                    onChange={this.props.changeName} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="form-group">
                                <label>Giới Tính</label>
                                <input type="text" id={"gender" + this.props.count} value={this.props.valueGender}
                                    onChange={this.props.changeGender} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" id={"email" + this.props.count} value={this.props.valueEmail}
                                    onChange={this.props.changeEmail} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="form-group">
                                <label>Điện Thoại</label>
                                <input id={"phone" + this.props.count} type="text" value={this.props.valuePhone}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }} onChange={this.props.changePhone}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                            <div className="form-group">
                                <label>Địa Chỉ</label>
                                <input type="text" id={"address" + this.props.count} value={this.props.valueAddress} onChange={this.props.changeAddress} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                            <div className="form-group message-btn text-right">
                                <button type="submit" className="theme-btn">
                                    Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
// setSearches(searches => [...searches, query])