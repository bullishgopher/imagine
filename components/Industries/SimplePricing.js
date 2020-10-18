import React from 'react';
import Link from 'next/link';

class SimplePricing extends React.Component {
    render() {
        return (
            <section className="pricing-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="price-header">
                                    <h3 className="title">Personal</h3>
                                    <div className="price"><span className="dollar">$</span>15<span className="month">/Mo</span></div>
                                </div>
                                
                                <div className="price-body">
                                    <ul>
                                        <li><b>Free</b> Security Service</li>
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
                            <div className="section-title text-left mt-4 simple-pricing">
                                <h2>Simple Pricing</h2>
                                <div className="bar mb-5 ml-0"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default SimplePricing;
