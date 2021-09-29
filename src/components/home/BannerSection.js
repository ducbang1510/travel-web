import React from "react";

import banner1 from "../../static/image/banner/banner-1.jpg"
import shape1 from "../../static/image/shape/shape-1.png"

export default function BannerSection(props) {
    return (
        <>
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
                              Khám Phá <br />
                              Chuyến Du Lịch Của Bạn
                          </h2>
                          <p>
                              Hành trình khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn
                              đã bắt đầu!
                          </p>
                      </div>
                  </div>
              </section>
        </>
    )
} 
