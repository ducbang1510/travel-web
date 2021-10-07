import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import API, { endpoints } from '../API';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import advice1 from "../static/image/advice/advice-1.jpg"
import PreLoader from "../components/PreLoader"

function valuetext(value) {
    return `${value}°C`;
  }
  
let beforeChange = null;

export default function TourList() {
    const [count, setCount] = useState(0)
    const [tourList, setTourList] = useState([])
    const [categories, setCategories] = useState([])
    const location = useLocation()

    const [cName, setcName] = useState('wrapper list')
    const [cList, setcList] = useState('list-view on')
    const [cGrid, setcGrid] = useState('grid-view')

    const [searchTerm, setSearchTerm] = useState("");
    const [searchRes, setSearchRes] = useState([])

    /* Radio Search */
    const [duration, setDuration] = useState("");
    const [cate, setCate] = useState(null);
    const [rate, setRate] = useState("")

    const handleRadioChange = (event) => {
        setDuration(event.target.value);
    };
    const handleCateChange = (event) => {
        setCate(Number(event.target.value));
    };
    /* End Radio Search */

    /* Range slider */
    const [value, setValue] = useState([500000, 10000000]);
    const timeoutRef = useRef(null) // debounce timeout

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

    useEffect(() => {
        API.get(endpoints['categories']).then(res => {
          setCategories(res.data)
        })

        let loadTour = async () => {
            let res = await API.get(`${endpoints['tours']}${location.search}`)
            setTourList(res.data.results)
            setCount(res.data.count)
        }
        loadTour()
      }, [location.search])

    /* Function Search Tour */
    const searchTour = (event) => {
        event.preventDefault()
        API.get(`${endpoints['tours']}?q=${searchTerm}`).then(res => {
            setSearchRes(res.data.results)
            setCount(res.data.count)
        })
    }

    const [skipFirst, setSkipFirst] = useState(false);
    useEffect(() => {
        if (!skipFirst) setSkipFirst(true);
        if (skipFirst) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            let searchByPrice = async () => {
                let res = await API.get(`${endpoints['tours']}?min=${value[0]}&max=${value[1]}`)
                setSearchRes(res.data.results)
                setCount(res.data.count)
            }

            timeoutRef.current = setTimeout(() => {
                searchByPrice()
            }, 300)
        }
    }, [value])

    useEffect(() => {
        let min_d=null;
        let max_d=null;
        if (duration==="1") { min_d=1; max_d=2;}
        if (duration==="2") { min_d=2; max_d=3;}
        if (duration==="3") { min_d=3; max_d=4;}
        if (duration==="4") { min_d=4; max_d=5;}
        const searchByDuration = () => {
            API.get(`${endpoints['tours']}?min_d=${min_d}&max_d=${max_d}`).then(res => {
                console.info(res.data)
                setSearchRes(res.data.results)
                setCount(res.data.count)
            })
        }
        if (duration !== "")
            searchByDuration()
    }, [duration])

    useEffect(() => {
        const searchByCate = () => {
            API.get(`${endpoints['tours']}?category_id=${cate}`).then(res => {
                console.info(res.data)
                setSearchRes(res.data.results)
                setCount(res.data.count)
            })
        }
        if (cate !== null)
            searchByCate()
    }, [cate])

    useEffect(() => {
        const searchByRate = () => {
            API.get(`${endpoints['tours']}?rate=${rate}`).then(res => {
                console.info(res.data)
                setSearchRes(res.data.results)
                setCount(res.data.count)
            })
        }
        if (rate !== "")
            searchByRate()
    }, [rate])
    /* End Function Search Tour */

    /* Render tour list */
    let tours = <></>
    let results = <></>

    if (searchRes.length === 0) {
        tours = <>
            <div className="tour-grid-content">
                <div className="row clearfix">
                    {tourList.map(t => <TourItem tour={t} key={t.id} />)}
                </div>
            </div>
            <div className="tour-list-content list-item">
                {tourList.map(t => <TourItem2 tour={t} key={t.id} />)}
            </div>
        </>
        results = <><h3>Hiển thị {tourList.length} trên {count} kết quả</h3></>
    } else {
        tours = <>
            <div className="tour-grid-content">
                <div className="row clearfix">
                    {searchRes.map(t => <TourItem tour={t} key={t.id} />)}
                </div>
            </div>
            <div className="tour-list-content list-item">
                {searchRes.map(t => <TourItem2 tour={t} key={t.id} />)}
            </div>
        </>
        results = <><h3>Hiển thị {searchRes.length} trên {count} kết quả</h3></>
    }

    // Pagination
    let items = []
    for (let i = 0; i < Math.ceil(count / 6); i++)
        items.push(
            <li key={i}><a href={"/tour-list?page=" + (i + 1)}>{i + 1}</a></li>
        )
    /* End Render */
    if (tourList.length === 0) {
        return <PreLoader />
    }

    return (
        <>
            <section className="page-title style-two centred"
                style={{ backgroundImage: "url(./assets/image/background/page-title-2.jpg)" }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Danh Sách Tour</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>

            <section className="tours-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="item-shorting clearfix">
                                <div className="left-column pull-left">
                                    {results}
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
                                        <Link to="/tour-list">
                                            <i className="fas fa-long-arrow-alt-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="default-sidebar tour-sidebar ml-20">
                                <div className="sidebar-widget sidebar-search">
                                    <div className="widget-title">
                                        <h3>Tìm kiếm</h3>
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
                                        <h3>Loại tour</h3>
                                    </div>
                                    <div className="widget-content">
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="category" name="controlled-radio-buttons-group" value={cate}
                                            onChange={handleCateChange}>
                                                {categories.map(c => <FormControlLabel key={c.id} value={c.id} control={<Radio />} label={c.name} />)}
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="sidebar-widget price-filter">
                                    <div className="widget-title">
                                        <h3>Lọc theo giá</h3>
                                    </div>
                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        onChangeCommitted={handleChangeCommitted}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                        min={500000}
                                        max={10000000}
                                    />
                                    <div className="range-slider clearfix">
                                        <div className="value-box clearfix">
                                            <div className="min-value pull-left">
                                                <p>500.000</p>
                                            </div>
                                            <div className="max-value pull-right">
                                                <p>10.000.000</p>
                                            </div>
                                        </div>
                                        <div className="price-range-slider" />
                                    </div>
                                </div>
                                <div className="sidebar-widget duration-widget">
                                    <div className="widget-title">
                                        <h3>Thời gian</h3>
                                    </div>
                                    <div className="widget-content">
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="duration" name="controlled-radio-buttons-group" value={duration}
                                            onChange={handleRadioChange}>
                                                <FormControlLabel value="1" control={<Radio />} label="1 - 2 ngày" />
                                                <FormControlLabel value="2" control={<Radio />} label="2 - 3 ngày" />
                                                <FormControlLabel value="3" control={<Radio />} label="3 - 4 ngày" />
                                                <FormControlLabel value="4" control={<Radio />} label="4 - 5 ngày" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="sidebar-widget review-widget">
                                    <div className="widget-title">
                                        <h3>Điểm đánh giá</h3>
                                    </div>
                                    <div className="widget-content">
                                    <FormControl component="fieldset">
                                            <RadioGroup aria-label="duration" name="controlled-radio-buttons-group" 
                                            value={rate}
                                            onChange={(event) => setRate(event.target.value)}>
                                                <FormControlLabel value="1" control={<Radio />} label="1 sao" />
                                                <FormControlLabel value="2" control={<Radio />} label="2 sao" />
                                                <FormControlLabel value="3" control={<Radio />} label="3 sao" />
                                                <FormControlLabel value="4" control={<Radio />} label="4 sao" />
                                                <FormControlLabel value="5" control={<Radio />} label="5 sao" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="advice-widget">
                                    <div className="inner-box"
                                        style={{
                                            backgroundImage: `url(${advice1})`
                                        }}>
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
                            <Link to={'/tour-detail/' + this.props.tour.id} >
                                <i className="fas fa-link" />
                            </Link>
                        </figure>
                        <div className="lower-content">
                            <div className="rating">
                                <span>
                                    <i className="fas fa-star" />
                                    {this.props.tour.rating}
                                </span>
                            </div>
                            <h3>
                                <Link to={'/tour-detail/' + this.props.tour.id} data-toggle="tooltip" title={this.props.tour.tour_name}>
                                    {this.props.tour.tour_name}
                                </Link>
                            </h3>
                            <h4 >
                                {this.props.tour.price_of_tour.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} <span>/ 1 người</span>
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
                                <Link to={'/tour-detail/' + this.props.tour.id}>Xem chi tiết</Link>
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
                        <Link to={'/tour-detail/' + this.props.tour.id} >
                            <i className="fas fa-link" />
                        </Link>
                    </figure>
                    <div className="content-box">
                        <div className="rating">
                            <span>
                                <i className="fas fa-star" />
                                {this.props.tour.rating}
                            </span>
                        </div>
                        <h3>
                            <Link to={'/tour-detail/' + this.props.tour.id} data-toggle="tooltip" title={this.props.tour.tour_name}>
                                {this.props.tour.tour_name}
                            </Link>
                        </h3>
                        <h4>
                        {this.props.tour.price_of_tour.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}<span> / 1 người</span>
                        </h4>
                        <p>
                            {this.props.tour.depart_date}
                        </p>
                        <div className="btn-box">
                            <Link to={`/tour-detail/${this.props.tour.id}`}>Xem chi tiết</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
