import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import pageTitle5 from "../static/image/background/page-title-5.jpg"
import new9 from "../static/image/news/news-9.jpg"
import comment1 from "../static/image/news/comment-1.png"
import comment2 from "../static/image/news/comment-2.png"
import comment3 from "../static/image/news/comment-3.png"
import post1 from "../static/image/news/post-1.png"
import post2 from "../static/image/news/post-2.png"
import post3 from "../static/image/news/post-3.png"
import advice1 from "../static/image/advice/advice-1.jpg"
import API, { endpoints } from '../API';

function BlogDetails(props) {
    const [blog, setBlog] = useState([])
    const [likes, setLikes] = useState(0)
    const [count, setCount] = useState(0)

    const { blogId } = useParams()

    const getTour = () => {
        API.get(`${endpoints['blogs']}${blogId}/`).then(res => {
            console.info(res.data)
            setBlog(res.data)
            setLikes(res.data.likes)
        })
    }

    let newLike
    const clickLike = (event) => {
        event.preventDefault()
        setCount(count + 1)
        if(parseInt(count) % 2 === 0)
            newLike = likes + 1;
        else
            newLike = likes - 1;
        setLikes(newLike)
    }
    console.log(likes)

    const addLike = (like = likes) => {
        if (likes > blog.likes) {
            const formData = new FormData()
            formData.append("likes", like)

            API.patch(`${endpoints['blogs']}${blogId}/`, formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.info(res)
            }).catch(err => console.error(err))
        }
    }

    useEffect(() => {
        addLike(likes)
    }, [likes])

    useEffect(() => {
        getTour()
    }, [])

    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle5})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Blog Details</h1>
                        <p>Discover your next great adventure</p>
                    </div>
                </div>
            </section>

            <section className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="blog-details-content">
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">
                                                <a href="/blog-details.html">Lifestyle</a>
                                            </div>
                                            <h2>{blog.title}</h2>
                                            <ul className="post-info clearfix">
                                                <li>
                                                    <span>By</span> <a href="/">Eva Green</a>
                                                </li>
                                                <li>-</li>
                                                <li className="comment">
                                                    <a href="/">0 Comment</a>
                                                </li>
                                                <li>-</li>
                                                <li>
                                                    <a href="/">{blog.likes} likes</a>
                                                </li>
                                            </ul>
                                            <form onSubmit={addLike}>
                                                <button onClick={clickLike} type="submit">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    Likes
                                                </button>
                                            </form>
                                        </div>
                                        <figure className="image-box">
                                            <img src={new9} alt="ImageBlog"/>
                                            <span className="post-date">
                                                <i className="far fa-calendar-alt" />
                                                {blog.created_date}
                                            </span>
                                        </figure>
                                    </div>
                                </div>
                                <div className="text">
                                    <p dangerouslySetInnerHTML={{__html: `${blog.content}`}} />
                                </div>
                                
                                {/* <div className="text">
                                    <p>
                                        Lorem ipsum dolor sit amet consectur adip icing sed eiusmod
                                        tempor incididunt labore dolore magna aliqua enim minim
                                        veniam quis nostrud exercitation laboris nisi ut aliquip ex
                                        commodo consequat duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed
                                        ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                    </p>
                                </div>
                                <div className="image-box clearfix">
                                    <figure className="image">
                                        <img
                                            src={des1}
                                            alt="ImageDestination"
                                        />
                                    </figure>
                                    <figure className="image">
                                        <img
                                            src={des2}
                                            alt="ImageDestination"
                                        />
                                    </figure>
                                    <figure className="image">
                                        <img
                                            src={des3}
                                            alt="ImageDestination"
                                        />
                                    </figure>
                                </div>
                                <div className="text">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed
                                        ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                    </p>
                                    <ul className="list clearfix">
                                        <li>Air fares</li>
                                        <li>4 Nights Hotel Accomodation</li>
                                        <li>Entrance Fees</li>
                                    </ul>
                                    <p>
                                        Totam rem aperiam eaque ipsa quae ab illo inventore
                                        veritatis quasi architecto beatae vitae dicta sunt
                                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit sed quia consequuntur magni
                                        dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                        porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                        consectetur, adipisci velit, sed quia non numquam eius modi
                                        tempora incidunt ut labore et dolore magnam aliquam quaerat
                                        voluptatem.
                                    </p>
                                </div> */}
                                <div className="post-share-option clearfix">
                                    <div className="text pull-left">
                                        <h3>We Are Social On:</h3>
                                    </div>
                                    <ul className="social-links pull-right clearfix">
                                        <li>
                                            <a href="/home.html">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/home.html">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/home.html">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-box">
                                    <div className="group-title">
                                        <h2>3 Comments</h2>
                                    </div>
                                    <div className="comment">
                                        <figure className="thumb-box">
                                            <img
                                                src={comment1}
                                                alt="ImageComment"
                                            />
                                        </figure>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">
                                                <h5>Rebeka Dawson</h5>
                                                <span className="post-date">April 12, 2020</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam quis nos
                                                trud exerc itation ullamco laboris.
                                            </p>
                                            <a href="/" className="reply-btn">
                                                <i className="fas fa-share" />
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <figure className="thumb-box">
                                            <img
                                                src={comment2}
                                                alt="ImageComment"
                                            />
                                        </figure>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">
                                                <h5>Elizabeth Winstead</h5>
                                                <span className="post-date">April 11, 2020</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam quis nos
                                                trud exerc itation ullamco laboris.
                                            </p>
                                            <a href="/" className="reply-btn">
                                                <i className="fas fa-share" />
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <figure className="thumb-box">
                                            <img
                                                src={comment3}
                                                alt="ImageComment"
                                            />
                                        </figure>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">
                                                <h5>Benedict Cumbatch</h5>
                                                <span className="post-date">April 10, 2020</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam quis nos
                                                trud exerc itation ullamco laboris.
                                            </p>
                                            <a href="/" className="reply-btn">
                                                <i className="fas fa-share" />
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-form-area">
                                    <div className="group-title">
                                        <h2>Leave Your Comments</h2>
                                        <p>
                                            Enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex commodo consequat duis aute
                                            irure dolor.
                                        </p>
                                    </div>
                                    <div className="form-inner">
                                        <form
                                            method="post"
                                            action="sendemail.php"
                                            id="contact-form"
                                            className="default-form"
                                        >
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder="Your Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        required
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        required
                                                        placeholder="Subject"
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write Message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button
                                                        className="theme-btn"
                                                        type="submit"
                                                        name="submit-form"
                                                    >
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="blog-sidebar default-sidebar ml-20">
                                <div className="sidebar-widget sidebar-search">
                                    <div className="widget-title">
                                        <h3>Search</h3>
                                    </div>
                                    <form
                                        action="destination-details.html"
                                        method="post"
                                        className="search-form"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="search"
                                                name="search-field"
                                                placeholder="Search"
                                                required
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
                                                <a href="/blog-details.html">
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                    Travel Direction
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/blog-details.html">
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                    Documetation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/blog-details.html">
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                    Logo & Assets
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h3>Latest News</h3>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb">
                                                <a href="/blog-details.html">
                                                    <img
                                                        src={post1}
                                                        alt="ImagePost"
                                                    />
                                                </a>
                                            </figure>
                                            <span className="post-date">April 18, 2020</span>
                                            <h4>
                                                <a href="/blog-details.html">
                                                    Consequntur eos magni dolore.
                                                </a>
                                            </h4>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb">
                                                <a href="/blog-details.html">
                                                    <img
                                                        src={post2}
                                                        alt="ImagePost"
                                                    />
                                                </a>
                                            </figure>
                                            <span className="post-date">April 17, 2020</span>
                                            <h4>
                                                <a href="/blog-details.html">
                                                    Magni dolore qui ratione seque.
                                                </a>
                                            </h4>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb">
                                                <a href="/blog-details.html">
                                                    <img
                                                        src={post3}
                                                        alt="ImagePost"
                                                    />
                                                </a>
                                            </figure>
                                            <span className="post-date">April 16, 2020</span>
                                            <h4>
                                                <a href="/blog-details.html">
                                                    Ratone magni sed dolore eos.
                                                </a>
                                            </h4>
                                        </div>
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

export default BlogDetails;