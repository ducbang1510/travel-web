import React from 'react';

function Booking2(props) {
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: "url(./assets/image/background/page-title-2.jpg)" }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Booking Process Payment Info</h1>
                        <p>Discover your next great adventure</p>
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
                                        <span>1.</span>Personal Info
                                    </li>
                                    <li className="current">
                                        <span>2.</span>Payment Info
                                    </li>
                                    <li>
                                        <span>3.</span>Confirm
                                    </li>
                                </ul>
                                <div className="inner-box">
                                    <h3>Billing Address</h3>
                                    <form
                                        action="booking-3.html"
                                        method="post"
                                        className="processing-form"
                                    >
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" name="fname" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" name="lname" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Address 1</label>
                                                    <input type="text" name="address1" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Address 2</label>
                                                    <input type="text" name="address2" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input type="text" name="city" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Zip Code</label>
                                                    <input type="text" name="zip" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>State</label>
                                                    <input type="text" name="state" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Country</label>
                                                    <input type="text" name="country" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-option">
                                            <h3>Card Info</h3>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>Card Name</label>
                                                        <input type="text" name="card_name" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>Card Number</label>
                                                        <input type="text" name="card_number" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>CVV</label>
                                                        <input type="text" name="cvv" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>Pay With</label>
                                                        <ul className="card-list clearfix">
                                                            <li>
                                                                <a href="/">
                                                                    <img
                                                                        src="./assets/image/card/card-1.png"
                                                                        alt="ImageCard"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                    <img
                                                                        src="./assets/image/card/card-2.png"
                                                                        alt="ImageCard"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                    <img
                                                                        src="./assets/image/card/card-3.png"
                                                                        alt="ImageCard"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                    <img
                                                                        src="./assets/image/card/card-4.png"
                                                                        alt="ImageCard"
                                                                    />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>Expiration Date</label>
                                                        <input type="text" name="exp_date" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="form-group">
                                                        <label>Security Code</label>
                                                        <input type="text" name="code" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                    <div className="form-group message-btn clearfix">
                                                        <a href="/booking-1" className="theme-btn">
                                                            <i className="fas fa-angle-left" />
                                                            Back
                                                        </a>
                                                        <button type="submit" className="theme-btn">
                                                            <a href="/booking-3" style={{color: "#fff"}}>
                                                                Next
                                                                <i className="fas fa-angle-right" />
                                                            </a>
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
                                    <h3>Tour Summary</h3>
                                    <figure className="image-box">
                                        <img
                                            src="./assets/image/sidebar/sidebar-1.jpg"
                                            alt="ImageSidebar"
                                        />
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
                                            <i className="far fa-user-alt" />
                                            Guests: <span>2 Adults, 1 Child</span>
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

export default Booking2;