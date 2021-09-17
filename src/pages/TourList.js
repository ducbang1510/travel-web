import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Slider from '@mui/material/Slider';

import API, { endpoints } from '../API';
import FormInner from '../components/FormInner';
import advice1 from "../static/image/advice/advice-1.jpg"

function valuetext(value) {
    return `${value}°C`;
  }
  
let beforeChange = null;

export default function TourList() {
    const [count, setCount] = useState(0)
    const [tourList, setTourList] = useState([])

    const [cName, setcName] = useState('wrapper list')
    const [cList, setcList] = useState('list-view on')
    const [cGrid, setcGrid] = useState('grid-view')

    const [searchTerm, setSearchTerm] = useState("");
    const [searchRes, setSearchRes] = useState([])

    /* Range slider */
    const [value, setValue] = React.useState([100000, 100000000]);

    const handleChange = (event, newValue) => {
        if (!beforeChange) {
            beforeChange = [...value];
        }

        if (beforeChange[0] !== newValue[0] && beforeChange[1] !== newValue[1]) {
            return;
        }

        setValue(newValue);
    };

    const handleChangeCommitted = () => {
        beforeChange = null;
    };
    /* End Range Slider */

    /* Classname List and Grid view for page tour list */
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

    /* Load Data Tour-list */
    const loadTour = (page = "?page=1") => {
        API.get(`${endpoints['tours']}${page}`).then(res => {
            console.info(res.data)
            setTourList(res.data.results)
            setCount(res.data.count)
        })
    }
    /* End */

    let location = useLocation()
    useEffect(() => {
        loadTour(location.search)
    }, [location.search])

    // Pagination
    let items = []
    for (let i = 0; i < Math.ceil(count / 4); i++)
        items.push(
            <li><a href={"/tour-list?page=" + (i + 1)} className="current">{i + 1}</a></li>
        )

    /* Function Search Tour */
    const searchTour = (event, search = `?search=${searchTerm}`) => {
        event.preventDefault()
        API.get(`${endpoints['tours']}${search}`).then(res => {
            setSearchRes(res.data.results)
        })
    }
    /* End Function Search Tour */

    /* Render tour list */
    let tours = <></>

    if (searchRes.length === 0) {
        tours = <>
            <div className="tour-grid-content">
                <div className="row clearfix">
                    {tourList.map(t => <TourItem tour={t} />)}
                </div>
            </div>
            <div className="tour-list-content list-item">
                {tourList.map(t => <TourItem2 tour={t} />)}
            </div>
        </>
    } else {
        tours = <>
            <div className="tour-grid-content">
                <div className="row clearfix">
                    {searchRes.map(t => <TourItem tour={t} />)}
                </div>
            </div>
            <div className="tour-list-content list-item">
                {searchRes.map(t => <TourItem2 tour={t} />)}
            </div>
        </>
    }
    /* End Render */

    return (
        <>
            <section className="page-title style-two centred"
                style={{ backgroundImage: "url(./assets/image/background/page-title-2.jpg)" }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Tours Grid</h1>
                        <p>Discover your next great adventure</p>
                    </div>
                    <div className="form-inner">
                        <form action="/home.html" method="post" className="booking-form clearfix">
                            <FormInner />
                        </form>
                    </div>
                </div>
            </section>

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
                                {tours}
                            </div>
                            <div className="pagination-wrapper">
                                <ul className="pagination clearfix">
                                    {items}
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
                                    <form onSubmit={searchTour} className="search-form">
                                        <div className="form-group">
                                            <input
                                                type="search"
                                                placeholder="Search"
                                                value={searchTerm}
                                                onChange={event => setSearchTerm(event.target.value)}
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
                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        onChangeCommitted={handleChangeCommitted}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                        min={100000}
                                        max={100000000}
                                    />
                                    <div className="range-slider clearfix">
                                        <div className="value-box clearfix">
                                            <div className="min-value pull-left">
                                                <p>100.000</p>
                                            </div>
                                            <div className="max-value pull-right">
                                                <p>100.000.000</p>
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
                                            backgroundImage: `url(${advice1})`
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
                            <img style={{ width: '370px', height: '270px' }} src={this.props.tour.image} alt="ImageTour" />
                            <a href={'/tour-detail/' + this.props.tour.id} >
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
                                <a data-toggle="tooltip" title={this.props.tour.tour_name} href={'/tour-detail/' + this.props.tour.id} >
                                    {this.props.tour.tour_name}
                                </a>
                            </h3>
                            <h4 >
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
                                {/* <a href={'/tour-detail/' + this.props.tour.id} >See Details</a> */}
                                <Link to={'/tour-detail/' + this.props.tour.id}>See Details</Link>
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
                        <img style={{ width: '190px', height: '227px' }}
                            src={this.props.tour.image}
                            alt="ImageTour"
                        />
                        <a href={'/tour-detail/' + this.props.tour.id} >
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
                            <a data-toggle="tooltip" title={this.props.tour.tour_name} href={'/tour-detail/' + this.props.tour.id} >
                                {this.props.tour.tour_name}
                            </a>
                        </h3>
                        <h4>
                            {this.props.tour.price_of_tour}<span> / Per person</span>
                        </h4>
                        <p>
                            {this.props.tour.depart_date}
                        </p>
                        <div className="btn-box">
                            {/* <a href={'/tour-detail/' + this.props.tour.id} >See Details</a> */}
                            <Link to={`/tour-detail/${this.props.tour.id}`}>See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}