import React from "react";

class NewSection extends React.Component {
  render() {
    return (
      <section className="news-section sec-pad pb-220">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(./assets/image/shape/shape-10.png)"
          }}
        />
        <div className="auto-container">
          <div className="sec-title">
            <p>News & Articles</p>
            <h2>Stay Update with Travio Tips</h2>
            <a href="/blog.html" className="theme-btn-two">
              All Blog Posts
            </a>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <a href="/blog-details.html">
                      <img src="./assets/image/news/news-1.jpg" alt="" />
                    </a>
                    <span className="post-date">
                      <i className="far fa-calendar-alt" />5 Oct, 2020
                    </span>
                  </figure>
                  <div className="lower-content">
                    <div className="category">
                      <a href="/blog-details.html">Lifestyle</a>
                    </div>
                    <h3>
                      <a href="/blog-details.html">
                        Including animation in your design system
                      </a>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <span>By</span> <a href="/">Eva Green</a>
                      </li>
                      <li> - October 13, 2020</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div className="btn-box">
                      <a href="/blog-details.html" className="theme-btn-two">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <a href="/blog-details.html">
                      <img src="./assets/image/news/news-2.jpg" alt="" />
                    </a>
                    <span className="post-date">
                      <i className="far fa-calendar-alt" />4 Oct, 2020
                    </span>
                  </figure>
                  <div className="lower-content">
                    <div className="category">
                      <a href="/blog-details.html">Lifestyle</a>
                    </div>
                    <h3>
                      <a href="/blog-details.html">
                        Strategic & commercial with issues.
                      </a>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <span>By</span> <a href="/">Eva Green</a>
                      </li>
                      <li> - October 13, 2020</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div className="btn-box">
                      <a href="/blog-details.html" className="theme-btn-two">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <a href="/blog-details.html">
                      <img src="./assets/image/news/news-3.jpg" alt="" />
                    </a>
                    <span className="post-date">
                      <i className="far fa-calendar-alt" />3 Oct, 2020
                    </span>
                  </figure>
                  <div className="lower-content">
                    <div className="category">
                      <a href="/blog-details.html">Lifestyle</a>
                    </div>
                    <h3>
                      <a href="/blog-details.html">
                        Best interior design idea for your home.
                      </a>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <span>By</span> <a href="/">Eva Green</a>
                      </li>
                      <li> - October 13, 2020</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div className="btn-box">
                      <a href="/blog-details.html" className="theme-btn-two">
                        See Details
                      </a>
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

export default NewSection;
