import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    center: true,
    dots: false,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}

class Feedback extends React.Component {
    state = { display:false};


    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section className="feedback-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="single-feedback">
                                    <div className="client-info">
                                        <img src={require('../../images/client1.jpg')} alt="client" />
                                        <h3>Alit John</h3>
                                        <span>Web Developer</span>
                                    </div>
                                    <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.</p>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-feedback">
                                    <div className="client-info">
                                        <img src={require('../../images/client2.jpg')} alt="client" />
                                        <h3>Alit John</h3>
                                        <span>SEO Expert</span>
                                    </div>
                                    <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.</p>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-feedback">
                                    <div className="client-info">
                                        <img src={require('../../images/client3.jpg')} alt="client" />
                                        <h3>Steven John</h3>
                                        <span>Web Developer</span>
                                    </div>
                                    <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.</p>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-feedback">
                                    <div className="client-info">
                                        <img src={require('../../images/client4.jpg')} alt="client" />
                                        <h3>David Warner</h3>
                                        <span>Web Developer</span>
                                    </div>
                                    <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.</p>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
                
                <svg className="svg-feedback-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff"/>
                </svg>
            </section>
        );
    }
}

export default Feedback;
