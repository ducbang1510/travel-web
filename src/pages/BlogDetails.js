import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API, { endpoints } from '../API';
import { useStore } from 'react-redux';
import cookies from 'react-cookies'

import pageTitle5 from "../static/image/background/page-title-5.jpg"
import comment2 from "../static/image/news/comment-2.png"
import post1 from "../static/image/news/post-1.png"
import post2 from "../static/image/news/post-2.png"
import post3 from "../static/image/news/post-3.png"
import advice1 from "../static/image/advice/advice-1.jpg"

function BlogDetails(props) {
    const [blog, setBlog] = useState([])
    const [isLike, setIsLike] = useState(false)
    const [count, setCount] = useState(1)

    const [comment, setComment] = useState("")
    const [listComment, setListComment] = useState([])

    const { blogId } = useParams()

    // Get user for confirm
    const store = useStore()
    const auth = store.getState()
    let user = auth // user redux
    if (cookies.load("user") != null) {
        user = cookies.load("user")
    }

    // Load detail of tour
    const getBlog = () => {
        API.get(`${endpoints['blogs']}${blogId}/`).then(res => {
            console.info(res.data)
            setBlog(res.data)
        })
    }

    // Load data of comment
    const getComments = () => {
        API.get(`${endpoints['blogs']}${blogId}/comments/`).then(res => {
            setListComment(res.data)
        })
    }
    
    /* Handle like function */
    const clickLike = (event) => {
        event.preventDefault()
        if (user != null) {
            setCount(count + 1)
            if(parseInt(count) % 2 === 0)
                setIsLike(false);
            else
                setIsLike(true);
        }
        else {
            alert("Hãy đăng nhập để có thể like")
        }
        
    }

    const addLike = (like = isLike) => {
        const formData = new FormData()
        if (like === true) {
            formData.append("likes", parseInt(blog.likes) + 1)
        } else {
            formData.append("likes", parseInt(blog.likes) - 1)
        }

        API.patch(`${endpoints['blogs']}${blogId}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.info(res)
        }).catch(err => console.error(err))
    }
    /* End Like Function */
    

    /* Handle Comment Function */
    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const addComment = (event) => {
        event.preventDefault()
        if (user != null) {
            const formData = new FormData()

            formData.append("content", comment)
            // formData.append("user", user.id)

            API.post(`${endpoints['blogs']}${blogId}/add-comment/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            }).then((res) => {
                console.info(res)
            }).catch(err => console.error(err))
        }
        else {
            alert("Hãy đăng nhập để có thể bình luận")
        }
    }
    /* End Comment Function */

    // Call function when like change
    useEffect(() => {
        if(count !== 1)
            addLike(isLike)
        getBlog()
        getComments()
    }, [isLike])

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
                                                <a href="true">
                                                <span className="post-date">
                                                    <i className="far fa-calendar-alt" />
                                                    {blog.created_date}
                                                </span>
                                                </a>
                                            </div>
                                            <h2>{blog.title}</h2>
                                            <ul className="post-info clearfix">
                                                <li>
                                                    <span>By</span> <a href="true">Eva Green</a>
                                                </li>
                                                <li>-</li>
                                                <li className="comment">
                                                    <a href="true">{listComment.length} Comment</a>
                                                </li>
                                                <li>-</li>
                                                <li>
                                                    <a href="true">{blog.likes} likes</a>
                                                </li>
                                            </ul>
                                            <form onSubmit={addLike}>
                                                <button onClick={clickLike} type="submit">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    Likes
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="text">
                                    <p dangerouslySetInnerHTML={{__html: `${blog.content}`}} />
                                </div>

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
                                        <h2>{listComment.length} Comments</h2>
                                    </div>
                                    
                                    {listComment.map(c => <CommentItem key={c.id} comment={c} />)}

                                </div>
                                <div className="comments-form-area">
                                    <div className="group-title">
                                        <h2>Bình luận</h2>
                                    </div>
                                    <div className="form-inner">
                                        <form id="contact-form" className="default-form" onSubmit={addComment}>
                                            <div className="row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea placeholder="Nội dung" value={comment} 
                                                    onChange={(event) => handleChange(event)}/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button className="theme-btn" type="submit" name="submit-form">
                                                        Gửi
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
                                    <form action="destination-details.html" method="post" className="search-form">
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
                                                    <img src={post1} alt="ImagePost"/>
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
                                                    <img src={post2} alt="ImagePost"/>
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
                                                    <img src={post3} alt="ImagePost"/>
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
                                    <div className="inner-box" style={{backgroundImage: `url(${advice1})`}}>
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

class CommentItem extends React.Component {
    render() {
        return (
            <div className="comment">
                <figure className="thumb-box">
                    <img
                        src={comment2}
                        alt="ImageComment"
                    />
                </figure>
                <div className="comment-inner">
                    <div className="comment-info clearfix">
                        <h5>{this.props.comment.name_author}</h5>
                        <span className="post-date">{this.props.comment.created_date}</span>
                    </div>
                    <p>
                        {this.props.comment.content}
                    </p>
                    <a href="true" className="reply-btn">
                        <i className="fas fa-share" />
                        Reply
                    </a>
                </div>
            </div>
        )
    }
}