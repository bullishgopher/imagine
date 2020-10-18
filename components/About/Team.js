import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
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
        1024:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
}

class Team extends React.Component {
    state = { display:false};


    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="team-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Smart Team</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="team-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="single-team-member">
                                    <img src={require('../../images/team-img1.jpg')} alt="team" />

                                    <div className="team-content">
                                        <h3>John Doe</h3>
                                        <span>CEO</span>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-team-member">
                                    <img src={require('../../images/team-img2.jpg')} alt="team" />

                                    <div className="team-content">
                                        <h3>Steven Smith</h3>
                                        <span>Developer</span>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-team-member">
                                    <img src={require('../../images/team-img3.jpg')} alt="team" />

                                    <div className="team-content">
                                        <h3>David Luiz</h3>
                                        <span>Designer</span>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-team-member">
                                    <img src={require('../../images/team-img4.jpg')} alt="team" />

                                    <div className="team-content">
                                        <h3>Park Tim</h3>
                                        <span>SEO Expert</span>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-team-member">
                                    <img src={require('../../images/team-img5.jpg')} alt="team" />

                                    <div className="team-content">
                                        <h3>Doglas Costa</h3>
                                        <span>Manager</span>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : '' }
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
