import React from "react";

class VideoSection extends React.Component {
  render() {
    return (
      <section
        className="video-section centred"
        style={{
          backgroundImage: "url(./assets/image/background/video-1.jpg)"
        }}
      >
        <div className="auto-container">
          <div className="inner-box">
            <h2>Explore Your Travel</h2>
            <p>Your New Traveling Idea</p>
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=BHdIQy00_p4&t=28s"
                className="lightbox-image"
                data-caption
              >
                <i className="fas fa-play" />
                <span className="border-animation border-1" />
                <span className="border-animation border-2" />
                <span className="border-animation border-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VideoSection;
