import React from "react";

class PageTitleRegis extends React.Component {
  render() {
    return (
      <section
        className="page-title centred"
        style={{
          backgroundImage: "url(./assets/image/background/page-title-5.jpg)"
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <h1>Sign Up</h1>
            <p>Discover your next great adventure</p>
          </div>
        </div>
      </section>
    );
  }
}

export default PageTitleRegis;
