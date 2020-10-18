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
            items:5,
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
            <div className="partner-area app-partner">
                <div className="container">
                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-1.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-2.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-3.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-4.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-5.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-6.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item">
                                    <Link href="#">
                                        <a><img src={require('../../images/partner-7.png')} alt="partner" /></a>
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
