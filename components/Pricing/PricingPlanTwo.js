import React from 'react';
import Link from 'next/link';

class PricingPlanTwo extends React.Component {
    render() {
        return (
            <section className="pricing-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">Personal</h3>
                                    <div className="price"><span className="dollar">$</span>15<span className="month">/Mo</span></div>
                                </div>
                                
                                <div className="price-body">
                                    <ul>
                                        <li><b>Free</b> Security Service</li>
                                        <li><b>1x</b> Security Service</li>
                                        <li><b>Unlimited</b> Security Service</li>
                                        <li><b>1x</b> Dashboard Access</li>
                                        <li><b>3x</b> Job Listings</li>
                                        <li><b>5x</b> invoices and quotes</li>
                                    </ul>
                                </div>

                                <div className="price-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">Business</h3>
                                    <div className="price"><span className="dollar">$</span>39<span className="month">/Mo</span></div>
                                </div>
                                
                                <div className="price-body">
                                    <ul>
                                        <li><b>Free</b> Security Service</li>
                                        <li><b>1x</b> Security Service</li>
                                        <li><b>Unlimited</b> Security Service</li>
                                        <li><b>1x</b> Dashboard Access</li>
                                        <li><b>3x</b> Job Listings</li>
                                        <li><b>5x</b> invoices and quotes</li>
                                    </ul>
                                </div>

                                <div className="price-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">Enterprise</h3>
                                    <div className="price"><span className="dollar">$</span>99<span className="month">/Mo</span></div>
                                </div>
                                
                                <div className="price-body">
                                    <ul>
                                        <li><b>Free</b> Security Service</li>
                                        <li><b>1x</b> Security Service</li>
                                        <li><b>Unlimited</b> Security Service</li>
                                        <li><b>1x</b> Dashboard Access</li>
                                        <li><b>3x</b> Job Listings</li>
                                        <li><b>5x</b> invoices and quotes</li>
                                    </ul>
                                </div>

                                <div className="price-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingPlanTwo;
