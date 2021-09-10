import React from "react";

import shape4 from "../../static/image/shape/shape-4.png"
import tour1 from "../../static/image/tour/tour-1.jpg"
import tour2 from "../../static/image/tour/tour-2.jpg"
import tour3 from "../../static/image/tour/tour-3.jpg"

class TourSection extends React.Component {
  render() {
    return (
      <section className="tour-section bg-color-1 sec-pad">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: `url(${shape4})`
          }}
        />
        <div className="auto-container">
          <div className="sec-title text-center">
            <p>Modern & Beautiful</p>
            <h2>Our Most Popular Adventures</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={tour1} alt="ImageTour" />
                    <a href="/tour-details.html">
                      <i className="fas fa-link" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <i className="fas fa-star" />
                        8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <a href="/tour-details.html">Moscow Red City Land</a>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <i className="far fa-clock" />5 Days
                      </li>
                      <li>
                        <i className="far fa-map" />
                        G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <a href="/tour-details.html">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={tour2} alt="ImageTour" />
                    <a href="/tour-details.html">
                      <i className="fas fa-link" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <i className="fas fa-star" />
                        8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <a href="/tour-details.html">Moscow Red City Land</a>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <i className="far fa-clock" />5 Days
                      </li>
                      <li>
                        <i className="far fa-map" />
                        G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <a href="/tour-details.html">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                className="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={tour3} alt="ImageTour" />
                    <a href="/tour-details.html">
                      <i className="fas fa-link" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <div className="rating">
                      <span>
                        <i className="fas fa-star" />
                        8.0 Superb
                      </span>
                    </div>
                    <h3>
                      <a href="/tour-details.html">Moscow Red City Land</a>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul className="info clearfix">
                      <li>
                        <i className="far fa-clock" />5 Days
                      </li>
                      <li>
                        <i className="far fa-map" />
                        G87P, Birmingham
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div className="btn-box">
                      <a href="/tour-details.html">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TourSection;
