import React from "react";

class TourPageTitle extends React.Component {
  render() {
    return (
      <section
        className="page-title style-two centred"
        style={{
          backgroundImage: "url(./assets/image/background/page-title-2.jpg)"
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <h1>Tours Grid</h1>
            <p>Discover your next great adventure</p>
          </div>
          <div className="form-inner">
            <form action="/home.html" method="post" className="booking-form clearfix">
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
                <i className="fas fa-angle-down" />
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
      </section>
    );
  }
}

export default TourPageTitle;
