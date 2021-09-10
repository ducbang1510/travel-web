import React from "react";

import deals1 from "../../static/image/background/deals-1.jpg"

class DealsSection extends React.Component {
  render() {
    return (
      <section
        className="deals-section"
        style={{
          backgroundImage: `url(${deals1})`
        }}
      >
        <div className="auto-container">
          <div className="content_block_2">
            <div className="content-box">
              <h3>
                Group Travel <br />
                to New Zealand
              </h3>
              <div className="price">
                <h4>$150</h4>
                <del>$300</del>
              </div>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                tempor ux incidunt labore dolore magna aliqua Quis ipsum suspen.
              </p>
              <a href="/tour-details.html" className="theme-btn">
                See Details
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DealsSection;
