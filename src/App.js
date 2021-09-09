import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logout from './Logout'
import Header from './components/Header'
import Footer from './components/Footer'
import PreLoader from './components/PreLoader';
import ScrollTop from './components/ScrollTop'
import MobileMenu from './components/MobileMenu';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import TourList from './pages/TourList';
import TourDetail from './pages/TourDetail';
import { TourProvider } from './contexts/TourContext';

export default function App(props) {

  return (
    <TourProvider>
    <div className="boxed_wrapper">
      <BrowserRouter>
        <PreLoader />
        <Header />
        <MobileMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tour-list" component={TourList} />
          {/* <Route exact path="/tour-detail">
            <TourDetail />
          </Route> */}
          <Route exact path="/tour-detail/:id">
            <TourDetail />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </div>
    </TourProvider>
  );
}