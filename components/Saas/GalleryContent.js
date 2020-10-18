import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Link from 'next/link';

const images = [
    require('../../images/gallery/1-Sportsmans Warehouse.png'),
    require('../../images/gallery/2-OK.png'),
    require('../../images/gallery/3-Petworld.png'),
    require('../../images/gallery/4-Soccershop.png')
]

// import 'lazysizes';
// // import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class GalleryContent extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
            <section className="gallery-area gallery-area-backcolor ptb-100 pb-0">
                <div className="row m-0">
                    {
                        images.map((item, index) => (
                            <div className="col-lg-3 col-md-6 p-0" key={index}>
                                <div className="single-image single-image-gallery">
                                    <img data-src={item} alt="gallery"  className="lazyload" />

                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true })}}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                    
                    {isOpenImage && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpenImage: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}
                </div>
            </section>
        );
    }
}

export default GalleryContent;
