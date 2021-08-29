import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API, { endpoints } from '../API';
import TourPageTitle from '../components/tour/TourPageTitle';

export default function TourList() {
    const [tours, setTours] = useState([])
    const [count, setCount] = useState(0)
    const [cName, setcName] = useState('wrapper list')
    const [cList, setcList] = useState('list-view on')
    const [cGrid, setcGrid] = useState('grid-view')

    const listOn = () => {
        setcName('wrapper list') 
        setcList('list-view on') 
        setcGrid('grid-view')
    }

    const gridOn = () => {
        setcName('wrapper grid') 
        setcList('list-view') 
        setcGrid('grid-view on')
    }

    const loadTour = (page = "?page1") => {
        API.get(`${endpoints['tours']}${page}`).then(res => {
            console.info(res.data)
            setTours(res.data.results)
            setCount(res.data.count)
        })
    }
    
    useEffect(() => {
        loadTour()
    }, [])

    let location = useLocation()
    useEffect(() => {
        loadTour(location.search)
    }, [location.search])

    let items = []
    for(let i = 0; i < Math.ceil(count/4); i++)
        items.push(
            <li><a href={"/tour-list?page=" + (i + 1)}>{i + 1}</a></li>
        )

    return (
        <>
            <TourPageTitle />
            <section className="tours-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="item-shorting clearfix">
                                <div className="left-column pull-left">
                                    <h3>Showing 1-8 of 20 Results</h3>
                                </div>
                                <div className="right-column pull-right clearfix">
                                    <div className="short-box clearfix">
                                        <div className="select-box">
                                            <select className="wide">
                                                <option data-display="Sort by">Sort by</option>
                                                <option value={1}>Name (a - z)</option>
                                                <option value={2}>Price Up</option>
                                                <option value={3}>Price Down</option>
                                                <option value={3}>Rating</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="menu-box">
                                        <button className={cList} onClick={listOn}>
                                            <i className="fas fa-stream" />
                                        </button>
                                        <button className={cGrid} onClick={gridOn}>
                                            <i className="fas fa-th-large" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={cName}>
                                <div className="tour-grid-content">
                                    <div className="row clearfix">
                                        {tours.map(t => <TourItem tour={t} />)}
                                    </div>
                                </div>
                                <div className="tour-list-content list-item">
                                    {tours.map(t => <TourItem2 tour={t} />)}
                                </div>
                            </div>
                            <div className="pagination-wrapper">
                                <ul className="pagination clearfix">
                                    {items}
                                    {/* <li>
                                        <a href="/tour.html" className="current">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour.html">2</a>
                                    </li>
                                    <li>
                                        <a href="/tour.html">3</a>
                                    </li> */}
                                    <li>
                                        <a href="/tour.html">
                                            <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="default-sidebar tour-sidebar ml-20">
                                <div className="sidebar-widget sidebar-search">
                                    <div className="widget-title">
                                        <h3>Search</h3>
                                    </div>
                                    <form
                                        action="./destination-details.html"
                                        method="post"
                                        className="search-form"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="search"
                                                name="search-field"
                                                placeholder="Search"
                                                required
                                            />
                                            <button type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">Adventure Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                            defaultChecked="checked"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">City Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">Couple Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">Group Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">Hosted Tours</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget price-filter">
                                    <div className="widget-title">
                                        <h3>Price Range</h3>
                                    </div>
                                    <div className="range-slider clearfix">
                                        <div className="value-box clearfix">
                                            <div className="min-value pull-left">
                                                <p>$50.00</p>
                                            </div>
                                            <div className="max-value pull-right">
                                                <p>$500.00</p>
                                            </div>
                                        </div>
                                        <div className="price-range-slider" />
                                    </div>
                                </div>
                                <div className="sidebar-widget duration-widget">
                                    <div className="widget-title">
                                        <h3>Durations</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">0 - 24 hours</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">1 - 2 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">2 - 3 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">3 - 4 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">4 - 5 days</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget review-widget">
                                    <div className="widget-title">
                                        <h3>Review Score</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="far fa-star" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="far fa-star" />
                                                            <i className="far fa-star" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="far fa-star" />
                                                            <i className="far fa-star" />
                                                            <i className="far fa-star" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="custom-check-box">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">
                                                            <i className="fas fa-star" />
                                                            <i className="far fa-star" />
                                                            <i className="far fa-star" />
                                                            <i className="far fa-star" />
                                                            <i className="far fa-star" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="advice-widget">
                                    <div
                                        className="inner-box"
                                        style={{
                                            backgroundImage: "url(./assets/image/advice/advice-1.jpg)"
                                        }}
                                    >
                                        <div className="text">
                                            <h2>
                                                Get <br />
                                                25% Off <br />
                                                On New York Tours
                                            </h2>
                                        </div>
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

class TourItem extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-12 tour-block">
                <div className="tour-block-one">
                    <div className="inner-box">
                        <figure className="image-box">
                            <img src="./assets/image/tour/tour-12.jpg" alt="ImageTour" />
                            <a href="/tour-details.html">
                                <i className="fas fa-link" />
                            </a>
                        </figure>
                        <div className="lower-content">
                            <div className="rating">
                                <span>
                                    <i className="fas fa-star" />
                                    {this.props.tour.rating}
                                </span>
                            </div>
                            <h3>
                                <a href="/tour-details.html">
                                    {this.props.tour.tour_name}
                                </a>
                            </h3>
                            <h4>
                                {this.props.tour.price_of_tour} <span>/ Per person</span>
                            </h4>
                            <ul className="info clearfix">
                                <li>
                                    <i className="far fa-clock" />{this.props.tour.duration}
                                </li>
                                <li>
                                    <i className="far fa-map" />
                                    {this.props.tour.departure}
                                </li>
                            </ul>
                            <p>
                                {this.props.tour.depart_date}
                            </p>
                            <div className="btn-box">
                                <a href="/tour-details.html">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TourItem2 extends React.Component {
    render() {
        return (
            <div className="tour-block-two">
                <div className="inner-box">
                    <figure className="image-box">
                        <img
                            src="./assets/image/tour/tour-4.jpg"
                            alt="ImageTour"
                        />
                        <a href="/tour-details.html">
                            <i className="fas fa-link" />
                        </a>
                    </figure>
                    <div className="content-box">
                        <div className="rating">
                            <span>
                                <i className="fas fa-star" />
                                {this.props.tour.rating}
                            </span>
                        </div>
                        <h3>
                            <a href="/tour-details.html">{this.props.tour.tour_name}</a>
                        </h3>
                        <h4>
                            {this.props.tour.price_of_tour}<span> / Per person</span>
                        </h4>
                        <p>
                            {this.props.tour.depart_date}
                        </p>
                        <div className="btn-box">
                            <a href="/tour-details.html">See Details</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}