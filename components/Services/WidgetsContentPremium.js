import React, { Component } from 'react';

class ServiceContent extends Component {
    render() {
        return (
            <section className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>New widgets coming soon</h2>
                        <div className="bar"></div>
                        <p>Exciting new content is on the way</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                {/* <div className="icon">
                                    <i className="icofont-pay"></i>
                                </div> */}
                                <img src={'images/widgets/premium/Picture1.png'} alt="enca" />
                                {/* <h3>Online Payments</h3>
                                <p>Well at public scho cheeky bugger grub burke.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                {/* <div className="icon">
                                    <i className="icofont-music-note"></i>
                                </div> */}
                                <img src={'images/widgets/premium/Picture2.png'} alt="enca" />
                                {/* <h3>Subscription Management</h3>
                                <p>Well at public scho cheeky bugger grub burke.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                {/* <div className="icon">
                                    <i className="icofont-optic"></i>
                                </div> */}
                                <img src={'images/widgets/premium/Picture3.png'} alt="enca" />
                                {/* <h3>Optimization</h3>
                                <p>Well at public scho cheeky bugger grub burke.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                {/* <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div> */}
                                <img src={'images/widgets/premium/Picture4.png'} alt="enca" />
                                {/* <h3>In-depth Analytics</h3>
                                <p>Well at public scho cheeky bugger grub burke.</p> */}
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-deviantart"></i>
                                </div>
                                <img src={'images/widgets/premium/date-and-time.png'} alt="enca" />
                                <h3>Anti-Fraud System</h3>
                                <p>Well at public scho cheeky bugger grub burke.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceContent;
