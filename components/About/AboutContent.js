import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>A singular, uncompromising approach to software design</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>Imagine Software was developed by a core team of seasoned digital signage professionals.
                                   The vision was to design a comprehensive software solution for both novice end user customers and professional third-party digital signage providers. </p>

                                <p>The challenge was to achieve industry leading functionality whilst designing a clean interface that was intuitive for all users. 
                                   It was important for us that our software be the most cost-effective platform of its kind anywhere on the market.
                                   This ultimately meant there was no room for unnecessary and bloated development teams that would rush to write bloated code and burn through resources.</p>

                                <p>Imagine Software was battle-tested from its inception by real companies and incrementally developed, improved and refined over many years.
                                   We are enormously proud of our lighting fast platform that we believe is the new gold standard for digital signage software globally.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <img src={require('../../images/about/Picture24.png')} alt="image" />
                            <h3 className="mx-5 my-3">“Simplicity.
                                Efficiency.
                                Functionality.”
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="about-inner-area">
                    <div className="container">
                        <div className="section-title">
                            <h2>What do you value in a software partner?</h2>
                            <div className="bar"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="about-text">
                                    <div className="icon">
                                        <i className="icofont-gift"></i>
                                    </div>
                                    <h3>Who we work with</h3>
                                    <p>Our partners</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="about-text">
                                    <div className="icon">
                                        <i className="icofont-gift"></i>
                                    </div>
                                    <h3>Need more info?</h3>
                                    <p>FAQ's</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="about-text">
                                    <div className="icon">
                                        <i className="icofont-gift"></i>
                                    </div>
                                    <h3>Read our stories</h3>
                                    <p>Our blog</p>
                                </div>
                            </div>

                        </div>

                        {/* <div className="section-title ptb-100 pb-0">
                            <h2>Meet Our Team</h2>
                            <div className="bar"></div>
                            <p>A perfect blend of creativity and technical wizardry. The best people formula for great websites!</p>
                            <img src={require('../../images/about/Picture25.png')} alt="our team" />
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;
