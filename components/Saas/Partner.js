import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    loop: true,
    navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:3,
        },
        1024:{
            items:4,
        },
        1200:{
            items:4,
        }
    }
}

class Partner extends React.Component {
    state = { display:false};


    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <div className="partner-area partner-area-pt100">
                <div className="container ptb-100 pt-0">
                    <div className="section-title">
                        <h2>Your Content. Your Widgets. Your Choice</h2>
                        <div className="bar"></div>
                        <p>News, Weather, Traffic, Uber, Markets, Social, Video, Live TV &amp; More</p>
                    </div>

                    <div className="row h-100 justify-content-center align-items-center">

                        <div className="col-lg-5 col-md-12">
                            <h3 className="pb-3">Informative, educational, functional and entertaining content widgets.</h3>
                            <p>A wide range of up-to-the-minute, free and paid content widgets to suit any environment and budget. 
                            Boost your content offering, enhance your content loop and captivate customers with useful information, 
                            with all designs being customizable.</p>
                            <Link href="/widgets">
                                <a className="btn btn-primary">See our widgets</a>
                            </Link>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className={{width: "100%"}}>
                                <img data-src={require('../../images/home/big-Widgets.png')} alt="image" style={{width: "100%"}} className="lazyload" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="section-title">
                        <h2>We have helped 2000+ locations find the true power of digital signage</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-1-sm.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-2-sm.jpg')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-3-sm.jpg')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-4-sm.jpg')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Partner;
