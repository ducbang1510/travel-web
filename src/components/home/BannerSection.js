import React from "react";

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
              <form
                action="home.html"
                method="post"
                className="booking-form clearfix"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="service"
                    placeholder="Where to?"
                    required
                  />
                </div>
                <div className="form-group input-date">
                  <i className="fas fa-angle-down" />
                  <input
                    type="text"
                    name="date"
                    placeholder="When?"
                    id="datepicker"
                  />
                </div>
                <div className="form-group">
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Travel Type">Travel Type</option>
                      <option value={1}>Adventure Tours</option>
                      <option value={2}>City Tours</option>
                      <option value={3}>Couple Tours</option>
                      <option value={4}>Group Tours</option>
                    </select>
                  </div>
                </div>
                <div className="message-btn">
                  <button type="submit" className="theme-btn">
                    <i className="fas fa-search" />
                    Find Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerSection;
