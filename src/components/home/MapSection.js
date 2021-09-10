import React from "react";

import shape9 from "../../static/image/shape/shape-9.png"
import map1 from "../../static/image/shape/map-1.png"
import marker1 from "../../static/image/icon/marker-1.png"

class MapSection extends React.Component {
  render() {
    return (
      <section className="map-section bg-color-1">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: `url(${shape9})`
          }}
        />
        <div className="outer-container">
          <div className="sec-title centred">
            <p>Modern & Beautiful</p>
            <h2>Explore the World for Travel</h2>
          </div>
          <div
            className="map-inner"
            style={{
              backgroundImage: `url(${map1})`
            }}
          >
            <div className="map-content clearfix">
              <div className="single-location-box">
                <figure className="map-marker">
                  <img src={marker1} alt="" />
                  <span>1</span>
                </figure>
                <div className="address-box">
                  <h3>Moscow City</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="single-location-box">
                <figure className="map-marker">
                  <img src={marker1} alt="" />
                  <span>2</span>
                </figure>
                <div className="address-box">
                  <h3>Affrican Park</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="single-location-box current">
                <figure className="map-marker">
                  <img src={marker1} alt="" />
                  <span>3</span>
                </figure>
                <div className="address-box">
                  <h3>Norway Lake</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="single-location-box">
                <figure className="map-marker">
                  <img src={marker1} alt="" />
                  <span>4</span>
                </figure>
                <div className="address-box">
                  <h3>New York City</h3>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MapSection;
