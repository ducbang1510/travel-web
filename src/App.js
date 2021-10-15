import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import TourList from './pages/TourList';
import TourDetail from './pages/TourDetail';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Booking1 from './pages/Booking1'
import Booking2 from './pages/Booking2'
import Booking3 from './pages/Booking3'
import About from './pages/About'
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { PayProvider } from './context/PayContext'
import ScrollTopLoad from './components/ScrollTopLoad';

export default function App(props) {
    return (
        <PayProvider>
            <div className="boxed_wrapper">
                <BrowserRouter>
                    <ScrollTopLoad>
                        <Header />
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/tour-list" component={TourList} />
                        <Route exact path="/tour-detail/:tourId" component={TourDetail} />
                        <Route exact path="/tour-detail/:tourId/gallery" component={Gallery} />
                        <Route exact path="/blogs" component={Blogs} />
                        <Route exact path="/blog-details/:blogId" component={BlogDetails} />
                        <Route exact path="/tour-detail/:tourId/booking-1" component={Booking1} />
                        <Route exact path="/tour-detail/:tourId/booking-2" component={Booking2} />
                        <Route exact path="/tour-detail/:tourId/booking-3/:invId/confirm" component={Booking3} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about-us" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        </Switch>
                        {/* <MessengerCustomerChat pageId="109975688121009" appId="165936822365195"/> */}
                        <Footer />
                        <ScrollTop />
                    </ScrollTopLoad>
                </BrowserRouter>
            </div>
        </PayProvider>
    );
}