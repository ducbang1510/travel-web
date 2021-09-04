import React from "react";
import FormInner from "../FormInner"

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
              <FormInner />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default TourPageTitle;
