import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API, { endpoints } from "../API";

import pageTitle from "../static/image/background/page-title.jpg"
import PreLoader from "../components/PreLoader"

export default function Gallery() {
    const [listImages, setListImages] = useState([])

    const {tourId} = useParams()

    useEffect(() => {
        let getImages = async () => {
            try {
                let res = await API.get(`${endpoints['tour-images']}?tour_id=${tourId}`)
                setListImages(res.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getImages()
    }, [tourId])

    if (listImages.length === 0) {
        return <PreLoader />
    }
    

    return (
        <>
            <section className="page-title centred" style={{ backgroundImage: `url(${pageTitle})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Bộ Sưu Tập</h1>
                        <p>Khám phá cuộc phiêu lưu tuyệt vời tiếp theo của bạn</p>
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        {listImages.map(i => <ImageItem image={i} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

class ImageItem extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-4 col-md-6 col-sm-12 gallery-block">
                    <div className="gallery-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src={this.props.image.image} alt="GalleryImage" />
                                <a href={this.props.image.image} className="view-btn lightbox-image" data-fancybox="gallery">
                                    {/* <i className="far fa-plus-square"></i> */}
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}