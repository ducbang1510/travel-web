import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API, { endpoints } from '../API';
import { useSelector } from 'react-redux';
import cookies from 'react-cookies'
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import pageTitle5 from "../static/image/background/page-title-5.jpg"
import advice1 from "../static/image/advice/advice-1.jpg"
import PreLoader from "../components/PreLoader"

function BlogDetails(props) {
    const [blog, setBlog] = useState([])
    const [lastestBlogs, setLastestBlogs] = useState([])

    const [actionType, setActionType] = useState(null)
    const [stylebtLike, setstylebtLike] = useState(null)
    const [likesChange, setLikesChange] = useState(null)

    const [comment, setComment] = useState("")
    const [listComment, setListComment] = useState([])
    const [commentChange, setCommentChange] = useState(0)

    const { blogId } = useParams()

    let user = useSelector(state => state.user.user)

    useEffect(() => {
        let getBlog = async() => {
            try {
                let res = await API.get(endpoints['blog-details'](blogId), {
                    headers: {
                        'Authorization': `Bearer ${cookies.load('access_token')}`
                    }
                })
                setBlog(res.data)
                setActionType(res.data.type)
                if (res.data.type === 1)
                    setstylebtLike("contained")
                else
                    setstylebtLike("outlined")
            } catch (error) {
                console.error(error)
            }
        }

        let getComments = async() => {
            try {
                let res = await API.get(endpoints['blog-comments'](blogId))
                setListComment(res.data)
            } catch (error) {
                console.error(error)
            }
        }

        getBlog()
        getComments()
    }, [blogId, commentChange, likesChange])
    
    /* Handle like function */
    const addLike = async (event) => {
        let type = 0
        if (actionType === 2 || actionType === -1 || actionType === null) {
            type = 1
            setstylebtLike("contained")
        }
        else {
            type = 2
            setstylebtLike("outlined")
        }

        try {
            await API.post(endpoints['like'](blogId), {
                "type": type
            }, {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })
            setActionType(type)
            setLikesChange(type)
        } catch (error) {
            console.error(error)
        }
    }
    /* End Like Function */
    

    /* Handle Comment Function */
    const addComment = async (event) => {
        event.preventDefault()
        if (user != null) {
            try {
                let res = await API.post(endpoints['add-comment-blog'](blogId), {
                    "content": comment
                }, {
                    headers: {
                        'Authorization': `Bearer ${cookies.load('access_token')}`
                    }
                })
                listComment.push(res.data)
                setListComment(listComment)
                setCommentChange(listComment.length)
            } catch (error) {
                console.error(error)
            }
        }
        else {
            alert("Hãy đăng nhập để có thể bình luận")
        }
    }
    /* End Comment Function */

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

    if (blog.length === 0) {
        return <PreLoader />
    }

    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle5})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Chi Tiết</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
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
                                                <Link to="/">
                                                <span className="post-date">
                                                    <i className="far fa-calendar-alt" />
                                                    {blog.created_date}
                                                </span>
                                                </Link>
                                            </div>
                                            <h2>{blog.title}</h2>
                                            <ul className="post-info clearfix">
                                                <li>
                                                    <span>Theo</span> <Link to="/">{blog.author}</Link>
                                                </li>
                                                <li>-</li>
                                                <li className="comment">
                                                    <Link to="/">{listComment.length} Bình luận</Link>
                                                </li>
                                                <li>-</li>
                                                <li>
                                                    <Link to="/">{blog.likes} likes</Link>
                                                </li>
                                            </ul>
                                            <Button onClick={addLike} variant={stylebtLike} startIcon={<ThumbUpIcon />}>
                                                Like
                                            </Button>
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
                                            <Link to="/">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fab fa-google-plus-g" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fab fa-twitter" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-box">
                                    <div className="group-title">
                                        <h2>{listComment.length} Bình luận</h2>
                                    </div>
                                    {listComment.map(c => <CommentItem key={c.id} comment={c} />)}
                                </div>
                                <div className="comments-form-area">
                                    <div className="group-title">
                                        <h2>Để lại bình luận</h2>
                                    </div>
                                    <div className="form-inner">
                                        <form id="contact-form" className="default-form" onSubmit={addComment}>
                                            <div className="row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea placeholder="Nội dung" value={comment} 
                                                    onChange={(event) => setComment(event.target.value)}/>
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
                                        <h3>Tìm kiếm</h3>
                                    </div>
                                    <form action="destination-details.html" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Nhập từ khóa" required/>
                                            <button type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h3>Tin mới nhất</h3>
                                    </div>
                                    <div className="post-inner">
                                        {lastestBlogs.map(blog =>
                                            <div className="post" key={blog.id}>
                                                <figure className="post-thumb">
                                                    <Link to={"/blog-details/" + blog.id}>
                                                        <Avatar
                                                            alt="ImageComment"
                                                            src={blog.image}
                                                            sx={{ width: 90, height: 90 }}
                                                        />
                                                    </Link>
                                                </figure>
                                                <span className="post-date">{blog.created_date}</span>
                                                <h4 data-toggle="tooltip" title={blog.title}>
                                                    <Link to={"/blog-details/" + blog.id}>
                                                        {blog.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        )}
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
                    <Avatar
                        alt="ImageComment"
                        src={this.props.comment.user.avatar_url}
                        sx={{ width: 70, height: 70 }}
                    />
                </figure>
                <div className="comment-inner">
                    <div className="comment-info clearfix">
                        <span className="post-date">{this.props.comment.created_date}</span>
                    </div>
                    <p>
                        {this.props.comment.content}
                    </p>
                    <div>
                        Bình luận bởi: {this.props.comment.user.username}
                    </div>
                </div>
            </div>
        )
    }
}