import React from 'react';

function Booking3(props) {
    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: "url(./assets/image/background/page-title-2.jpg)" }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Booking Process Confirm</h1>
                        <p>Discover your next great adventure</p>
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
                                        <span>1.</span>Personal Info
                                    </li>
                                    <li>
                                        <span>2.</span>Payment Info
                                    </li>
                                    <li className="current">
                                        <span>3.</span>Confirm
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

export default Booking3;