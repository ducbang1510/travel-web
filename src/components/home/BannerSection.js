import React from "react";
// import FormInner from "../FormInner"

import banner1 from "../../static/image/banner/banner-1.jpg"
import shape1 from "../../static/image/shape/shape-1.png"

class BannerSection extends React.Component {
  render() {
    return (
      <section
        className="banner-section"
        style={{
          backgroundImage: `url(${banner1})`
        }}
      >
        <div
          className="pattern-layer"
          style={{
            backgroundImage: `url(${shape1})`
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>
              Explore <br />
              Your Travel
            </h2>
            <p>
              Discover your next great adventure, become an explorer to get
              started!
            </p>
            {/* <div className="form-inner">
              <form action="/home.html" method="post" className="booking-form clearfix">
                <FormInner />
              </form>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default BannerSection;
