import React from "react";

import shape3 from "../../static/image/shape/shape-3.png"
import shape5 from "../../static/image/shape/shape-5.png"
import shape6 from "../../static/image/shape/shape-6.png"
import shape7 from "../../static/image/shape/shape-7.png"
import shape8 from "../../static/image/shape/shape-8.png"

class FunfactSection extends React.Component {
  render() {
    return (
      <section className="funfact-section centred">
        <div className="anim-icon">
          <div
            className="icon anim-icon-1"
            style={{
              backgroundImage: `url(${shape3})`
            }}
          />
          <div
            className="icon anim-icon-2"
            style={{
              backgroundImage: `url(${shape3})`
            }}
          />
        </div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div
                      className="pattern"
                      style={{
                        backgroundImage: `url(${shape5})`
                      }}
                    />
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={2000}
                      >
                        0
                      </span>
                      <span>+</span>
                      <p>Awesome Hikers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div
                      className="pattern"
                      style={{
                        backgroundImage: `url(${shape6})`
                      }}
                    />
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={70}
                      >
                        0
                      </span>
                      <span>+</span>
                      <p>Stunning Places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div
                      className="pattern"
                      style={{
                        backgroundImage: `url(${shape7})`
                      }}
                    />
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={1200}
                      >
                        0
                      </span>
                      <span>+</span>
                      <p>Miles to Hike</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div
                      className="pattern"
                      style={{
                        backgroundImage: `url(${shape8})`
                      }}
                    />
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={15}
                      >
                        0
                      </span>
                      <p>Years in Service</p>
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

export default FunfactSection;
