import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

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
            items:1,
        },
        1200:{
            items:1,
        }
    }
}

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            all_testimonials: [],
        };
    }
    
    async componentDidMount() {
        await axios.get(config.ALL_TESTIMONIALS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_testimonials : response.data });
            }
        })
        .catch((error) => {
        })
    }

    render() {
        return (
            <section className="feedback-area ptb-100 bg-gray">
                <div className="container">
                    {/* <div className="section-title">
                        <h2>Testimonials</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            {this.state.all_testimonials.length>0 ? <OwlCarousel 
                                    className="feedback-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    {this.state.all_testimonials.map( testimonial => (
                                        <div className="col-lg-12" key={testimonial._id}>
                                            <div className="single-feedback">
                                                <div className="client-info">
                                                    <img src={config.SERVER_BASE_URL + testimonial.imageurl} alt="testimonial" />
                                                    <h3>{testimonial.name}</h3>
                                                    <span>{testimonial.position}</span>
                                                </div>
                                                <p>{testimonial.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel> : ''}

                                {/* 
                                    <div className="col-lg-12">
                                        <div className="single-feedback">
                                            <div className="client-info about-feedback-client">
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
                                </OwlCarousel> : ''} */}
                        </div>
                        <div className="col-lg-6 col-md-6 ptb-100 pt-2">
                            {/* <h3>Trusted by more than 10,000 businesses in 140 countries.</h3> */}
                            <h3>Manage you screens from anywhere in the world with the power of the Imagine Digital Signage Software</h3>
                            <Link href="/clients"><a className="btn btn-primary my-3">Meet our customers</a></Link>
 
                            <div className="feedback-right-panel">
                                <img src={require('../../images/partner/partner-1.png')} alt="partner" />
                                <img src={require('../../images/partner/partner-2.jpg')} alt="partner" />
                                <img src={require('../../images/partner/partner-3.jpg')} alt="partner" />
                                <img src={require('../../images/partner/partner-4.jpg')} alt="partner" />
                            </div>
                        </div>
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
