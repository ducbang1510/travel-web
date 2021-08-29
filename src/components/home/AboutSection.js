import React from "react";

class AboutSection extends React.Component {
  render() {
    return (
      <section className="about-section">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(./assets/image/shape/shape-2.png)"
          }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_1">
                <div className="image-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage: "url(./assets/image/shape/shape-2.png)"
                      }}
                    />
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage: "url(./assets/image/shape/shape-3.png)"
                      }}
                    />
                  </div>
                  <figure className="image image-1">
                    <img src="./assets/image/about/about-1.jpg" alt="" />
                    <div
                      className="shape-3"
                      style={{
                        backgroundImage: "url(./assets/image/shape/shape-3.png)"
                      }}
                    />
                  </figure>
                  <figure className="image image-2">
                    <img src="./assets/image/about/about-2.jpg" alt="" />
                  </figure>
                  <div className="video-content">
                    <h3>Find Your Best Destination</h3>
                    <div className="video-btn">
                      <a
                        href="https://www.youtube.com/watch?v=0kXCPo7c63I&t=28s"
                        className="lightbox-image"
                        data-caption
                      >
                        <i className="far fa-play-circle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_1">
                <div className="content-box">
                  <div className="sec-title">
                    <p>About Travio</p>
                    <h2>World Best Travel Agency Company Since 2008.</h2>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do eiu smod tempor incididunt ut labore dolore magna
                      aliqua.Quis ipsum suspen disse ultrices gravida Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <ul className="list clearfix">
                    <li>Ratione voluptatem.sequi nesciunt.</li>
                    <li>Ratione voluptatem.</li>
                    <li>Ratione voluptatem sequi.</li>
                  </ul>
                  <div className="btn-box">
                    <a href="/tour.html" className="theme-btn">
                      Find Tours
                    </a>
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

export default AboutSection;
