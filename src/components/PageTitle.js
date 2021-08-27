import React from "react";

class PageTitle extends React.Component {
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
            <h1>Sign In</h1>
            <p>Discover your next great adventure</p>
          </div>
        </div>
      </section>
    );
  }
}

export default PageTitle;
