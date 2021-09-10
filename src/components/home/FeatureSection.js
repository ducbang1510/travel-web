import React from "react";

import feature1 from "../../static/image/feature/feature-1.jpg"
import feature2 from "../../static/image/feature/feature-2.jpg"
import feature3 from "../../static/image/feature/feature-3.jpg"
import feature4 from "../../static/image/feature/feature-4.jpg"
import reputation from "../../static/image/feature/reputation.png"
import reliability from "../../static/image/feature/reliability.png"
import experience from "../../static/image/feature/experience.png"
import motivation from "../../static/image/feature/motivation.png"

class FeatureSection extends React.Component {
  render() {
    return (
      <section className="feature-section centred bg-color-1 sec-pad">
        <div className="auto-container">
          <div className="sec-title text-center">
            <p>Travio Specials</p>
            <h2>Why Travel with Tutive?</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={feature1} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <img
                        className="icon-feature"
                        src={reputation}
                        alt="Icon"
                      />
                    </div>
                    <h4>2000+ Our Worldwide Guides</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={feature2} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <img
                        className="icon-feature"
                        src={reliability}
                        alt="Icon"
                      />
                    </div>
                    <h4>100% Trusted Tour Agency</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={feature3} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <img
                        className="icon-feature"
                        src={experience}
                        alt="Icon"
                      />
                    </div>
                    <h4>12+ Years of Travel Experience</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={feature4} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <img
                        className="icon-feature"
                        src={motivation}
                        alt="Icon"
                      />
                    </div>
                    <h4>98% of Our Travelers are Happy</h4>
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

export default FeatureSection;
