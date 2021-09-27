import React, { useEffect, useState } from "react";
import API, { endpoints } from "../../API";

import shape4 from "../../static/image/shape/shape-4.png"

export default function TourSection() {
  const [tourList, setTourList] = useState([])

  useEffect(() => {
    let loadPopularTour = async () => {
      try {
        let res = await API.get(endpoints['popular-tours'])
        setTourList(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadPopularTour()
  }, [])

  return (
    <section className="tour-section bg-color-1 sec-pad">
      <div className="pattern-layer" style={{
        backgroundImage: `url(${shape4})`
      }}
      />
      <div className="auto-container">
        <div className="sec-title text-center">
          <p>Hiện Đại & Tuyệt Đẹp</p>
          <h2>Những Tour Phổ Biến</h2>
        </div>
        <div className="row clearfix">
          {tourList.map(t => <TourItem tour={t}/>)}
        </div>
      </div>
    </section>
  );
}
class TourItem extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
          <div className="tour-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <figure className="image-box">
                <img style={{ width: '370px', height: '270px' }} src={this.props.tour.image} alt="ImageTour" />
                <a href={'/tour-detail/' + this.props.tour.id}>
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
                  <a href={'/tour-detail/' + this.props.tour.id}>{this.props.tour.tour_name}</a>
                </h3>
                <h4>
                  {this.props.tour.price_of_tour.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}<span> / 1 người</span>
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
                <div className="btn-box">
                  <a href={'/tour-detail/' + this.props.tour.id}>Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}