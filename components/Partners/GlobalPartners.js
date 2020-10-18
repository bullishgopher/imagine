import React, { Component } from 'react';
import Link from 'next/link';

class GlobalPartners extends Component {
    render() {
        return (
            <section className="features-area saas-features">
                <div className="features-inner-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="global-partner-image">
                                    <img src={require('../../images/partner/partner.png')} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                {/* <div className="section-title"> */}
                                    <h2 className="pb-3">Our global Software Applications Partners </h2>
                                    <div className="bar"></div>
                                    <p>Ensuring we keep up with the latest changes</p>
                                {/* </div> */}
                                <div className="global-partner-os">
                                    <ul>
                                        <li>
                                            <img src={require('../../images/partner/Picture26.png')} alt="widget" />
                                        </li>
                                        <li>
                                            <img src={require('../../images/partner/Picture27.png')} alt="widget" />
                                        </li>
                                        <li>
                                            <img src={require('../../images/partner/Picture28.png')} alt="widget" />
                                        </li>
                                        <li>
                                            <img src={require('../../images/partner/Picture29.png')} alt="widget" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GlobalPartners;
