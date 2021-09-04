import React from "react";
import FormInner from "../FormInner"

class BannerSection extends React.Component {
  render() {
    return (
      <section
        className="banner-section"
        style={{
          backgroundImage: "url(./assets/image/banner/banner-1.jpg)"
        }}
      >
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(./assets/image/shape/shape-1.png)"
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
            <div className="form-inner">
              <form action="/home.html" method="post" className="booking-form clearfix">
                <FormInner />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerSection;
