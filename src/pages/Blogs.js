import React, { useEffect, useState } from 'react';

import pageTitle5 from "../static/image/background/page-title-5.jpg"
import advice1 from "../static/image/advice/advice-1.jpg"
import API, { endpoints } from '../API';
import { useLocation } from 'react-router';
import { Avatar } from '@mui/material';

function Blogs(props) {
    const [count, setCount] = useState(1)
    const [listBlog, setListBlog] = useState([])
    const [lastestBlogs, setLastestBlogs] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [searchRes, setSearchRes] = useState([])

    const loadBlogs = (page = "?page=1") => {
        API.get(`${endpoints['blogs']}${page}`).then(res => {
            console.info(res.data)
            setListBlog(res.data.results)
            setCount(res.data.count)
        })
    }

    const searchBlog = (event, search = `?q=${searchTerm}`) => {
        event.preventDefault()
        API.get(`${endpoints['blogs']}${search}`).then(res => {
            setSearchRes(res.data.results)
            setCount(res.data.count)
        })
    }

    let location = useLocation()
    useEffect(() => {
        loadBlogs(location.search)
    }, [location.search])

    useEffect(() => {
        let loadNewestBlogs = async () => {
            try {
                let res = await API.get(endpoints['newest-blogs'])
                setLastestBlogs(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        loadNewestBlogs()
    }, [])
    

    let blogs = <></>

    if (searchRes.length === 0) {
        blogs = <>
            {listBlog.map(b => <BlogItem blog={b} />)}
        </>
    } else {
        blogs = <>
            {searchRes.map(b => <BlogItem blog={b} />)}
        </>
    }

    let items = []
    for(let i = 0; i < Math.ceil(count/5); i++)
        items.push(
            <li><a href={"/blogs?page=" + (i + 1)} className="current">{i + 1}</a></li>
        )

    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle5})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Trang Tin Tức</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>

            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="blog-standard-content">
                                {blogs}
                                <div className="pagination-wrapper">
                                    <ul className="pagination clearfix">
                                        {items}
                                        <li>
                                            <a href="/blog.html">
                                                <i className="fas fa-long-arrow-alt-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="blog-sidebar default-sidebar ml-20">
                                <div className="sidebar-widget sidebar-search">
                                    <div className="widget-title">
                                        <h3>Tìm kiếm</h3>
                                    </div>
                                    <form onSubmit={searchBlog} className="search-form">
                                        <div className="form-group">
                                            <input type="search" 
                                            placeholder="Nhập từ khóa"
                                            value={searchTerm}
                                            onChange={event => setSearchTerm(event.target.value)}
                                            />
                                            <button type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li>
                                                <a href="/blog-details">
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                    Travel Direction
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/blog-details">
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                    Documetation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/blog-details">
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                    Logo & Assets
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h3>Tin mới nhất</h3>
                                    </div>
                                    <div className="post-inner">
                                        {lastestBlogs.map(blog =>
                                            <div className="post">
                                                <figure className="post-thumb">
                                                    <a href={"/blog-details/" + blog.id}>
                                                        <Avatar
                                                            alt="ImageComment"
                                                            src={blog.image}
                                                            sx={{ width: 90, height: 90 }}
                                                        />
                                                    </a>
                                                </figure>
                                                <span className="post-date">{blog.created_date}</span>
                                                <h4>
                                                    <a href={"/blog-details/" + blog.id}>
                                                        {blog.title}
                                                    </a>
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="advice-widget">
                                    <div
                                        className="inner-box"
                                        style={{
                                            backgroundImage: `url(${advice1})`
                                        }}
                                    >
                                        <div className="text">
                                            <h2>
                                                Get <br />
                                                25% Off <br />
                                                On New York Tours
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;

class BlogItem extends React.Component {
    render() {
        return (
            <>
                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box">
                            <a href={"/blog-details/" + this.props.blog.id}>
                                <img style={{width: "770px", height: "470px"}} src={this.props.blog.image} alt="ImageBlog"/>
                            </a>
                            <span className="post-date">
                                <i className="far fa-calendar-alt" />
                                {this.props.blog.created_date}
                            </span>
                        </figure>
                        <div className="lower-content">
                            <div className="category">
                                <a href={"/blog-details/" + this.props.blog.id}>Lifestyle</a>
                            </div>
                            <h2>
                                <a href={"/blog-details/" + this.props.blog.id}>
                                    {this.props.blog.title}
                                </a>
                            </h2>
                            <ul className="post-info clearfix">
                                <li>
                                    <span>Theo</span> <a href={"/blog-details/" + this.props.blog.id}>{this.props.blog.author}</a>
                                </li>
                                <li> - {this.props.blog.created_date}</li>
                            </ul>
                            <div className="btn-box">
                                <a href={"/blog-details/" + this.props.blog.id} className="theme-btn-two">
                                    Xem chi tiết
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}