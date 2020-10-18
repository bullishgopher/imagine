import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <section className="features-area saas-features ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Amazing Features</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-lock"></i>
                                </div>
                                <h3>Quick Access</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-heart-eyes"></i>
                                </div>
                                <h3>Easily Manage</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-lock"></i>
                                </div>
                                <h3>Safty</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-camera"></i>
                                </div>
                                <h3>Camera Filter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-responsive"></i>
                                </div>
                                <h3>Fast and optimized</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-hand-drag1"></i>
                                </div>
                                <h3>Drag and Drop</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-inner-area">
                    <div className="container-fluid">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-image">
                                    <img src={require('../../images/features-img1.png')} alt="image feature" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-inner-content">
                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-ui-call"></i>
                                        </div>
                                        <h3>Free Caliing Service</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-gift"></i>
                                        </div>
                                        <h3>Daily Free Gift</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-qr-code"></i>
                                        </div>
                                        <h3>QR Code Scaner</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape7">
                    <img src={require('../../images/shape7.png')} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={require('../../images/shape3.png')} alt="img" />
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6">
                    <img src={require('../../images/shape6.png')} alt="img" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require('../../images/shape8.svg')} alt="shape" />
                </div>
                <div className="shape9">
                    <img src={require('../../images/shape9.svg')} alt="shape" />
                </div>
                <div className="shape10">
                    <img src={require('../../images/shape10.svg')} alt="shape" />
                </div>
                <div className="shape11 rotateme">
                    <img src={require('../../images/shape11.svg')} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Features;
