import React, { Component } from 'react';

class ServiceContent extends Component {
    render() {
        const widget_list = {
            "enca": "ENCA news",
            "rss": "rss feed",
            "weather": "Weather",
            "website": "Website"
        }

        return (
            <section className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{ widget_list[this.props.data] }</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>                    

                    {/* <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="text-center">
                                <div className="icon">
                                    <i className="icofont-pay"></i>
                                </div>
                                <img src={'/images/widgets/enca.png'} alt="enca" style={{width: '30%', height: '27%'}}/>
                                <h3>Online Payments</h3>
                                <p>Well at public scho cheeky bugger grub burke.</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="join-area ptb-100">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="join-img">
                                        <img src={'/images/widgets/enca.png'} alt="img" style={{width: '88%'}}/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="join-content">
                                        <span>Start 30 Days Free Trial</span>
                                        <h3>{ widget_list[this.props.data] }</h3> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                        {/* <Link href="#">
                                            <a className="btn btn-primary">Join Now</a>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceContent;
