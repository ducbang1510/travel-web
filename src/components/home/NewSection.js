import React, { useEffect, useState } from "react";

import shape10 from "../../static/image/shape/shape-10.png"
import API, { endpoints } from "../../API";
import { Link } from "react-router-dom";

export default function NewSection() {
  const [listBlog, setListBlog] = useState([])

  useEffect(() => {
    let loadNewestBlogs = async () => {
      try {
        let res = await API.get(endpoints['newest-blogs'])
        setListBlog(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadNewestBlogs()
  }, [])

  return (
    <section className="news-section sec-pad pb-220">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: `url(${shape10})`
        }}
      />
      <div className="auto-container">
        <div className="sec-title">
          <p>Tin tức & Bài viết</p>
          <h2>Cập nhật với Travio</h2>
          <Link to="/blogs" className="theme-btn-two">
            Tất cả tin tức
          </Link>
        </div>
        <div className="row clearfix">
          {listBlog.map(b => <BlogItem blog={b} />)}
        </div>
      </div>
    </section>
  );
}

class BlogItem extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
          <div className="inner-box">
            <figure className="image-box">
              <Link to={"/blog-details/" + this.props.blog.id}>
                <img style={{ width: '370px', height: '270px' }} src={this.props.blog.image} alt="" />
              </Link>
              <span className="post-date">
                <i className="far fa-calendar-alt" />{this.props.blog.created_date}
              </span>
            </figure>
            <div className="lower-content">
              <div className="category">
                <Link to={"/blog-details/" + this.props.blog.id}>Lifestyle</Link>
              </div>
              <h3 style={{height: "90px"}}>
                <Link to={"/blog-details/" + this.props.blog.id}>
                  {this.props.blog.title}
                </Link>
              </h3>
              <ul className="post-info clearfix">
                <li>
                  <span>Theo</span> <Link to={"/blog-details/" + this.props.blog.id}>{this.props.blog.author}</Link>
                </li>
                <li> - {this.props.blog.created_date}</li>
              </ul>
              <div className="btn-box">
                <Link to={"/blog-details/" + this.props.blog.id} className="theme-btn-two">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}