import React from "react";

import animicon1 from "../../static/image/icon/anim-icon-1.png"
import shape3 from "../../static/image/shape/shape-3.png"
import place1 from "../../static/image/place/place-1.jpg"
import place2 from "../../static/image/place/place-2.jpg"
import place3 from "../../static/image/place/place-3.jpg"
import place4 from "../../static/image/place/place-4.jpg"

class PlaceSection extends React.Component {
  render() {
    return (
      <section className="place-section sec-pad">
        <div className="anim-icon">
          <div
            className="icon anim-icon-1"
            style={{
              backgroundImage: `url(${animicon1})`
            }}
          />
          <div
            className="icon anim-icon-2"
            style={{
              backgroundImage: `url(${shape3})`
            }}
          />
          <div
            className="icon anim-icon-3"
            style={{
              backgroundImage: `url(${shape3})`
            }}
          />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 title-column">
              <div className="sec-title">
                <p>Choose Your place</p>
                <h2>Popular Destinations</h2>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiu smod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src={place1}
                      alt="ImagePlace"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="/destination-details.html">New York City</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src={place2}
                      alt="ImagePlace"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="/destination-details.html">Norway Lake</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src={place3}
                      alt="ImagePlace"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="/destination-details.html">Affrican Park</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-block">
              <div className="place-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src={place4}
                      alt="ImagePlace"
                    />
                  </figure>
                  <div className="text">
                    <h3>
                      <a href="/destination-details.html">Vietnam</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 link-column">
              <div className="link-box centred">
                <h3>
                  Find All <br />
                  Destination
                </h3>
                <a href="/destination.html" className="theme-btn">
                  Find Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PlaceSection;
