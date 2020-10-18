import React, { Component } from 'react';
import Link from 'next/link';

class PricingPlanThree extends Component {
    render() {
        return (
            <section className="pricing-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Basic</h3>
                                    <div className="price-value"><sup>$</sup>59.99 <span>/per year</span></div>
                                </div>
                                
                                <ul className="pricing-content">
                                    <li>Managment & Marketing</li>
                                    <li>SEO Optimization</li>
                                    <li>25 Analytics Campaign</li>
                                    <li>1,300 Change Keywords</li>
                                    <li>25 Social Media Reviews</li>
                                    <li>1 Free Optimization</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Buy Now</a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Ultra</h3>
                                    <div className="price-value"><sup>$</sup>79.99 <span>/per year</span></div>
                                </div>
                                
                                <ul className="pricing-content">
                                    <li>Managment & Marketing</li>
                                    <li>SEO Optimization</li>
                                    <li>25 Analytics Campaign</li>
                                    <li>1,300 Change Keywords</li>
                                    <li>25 Social Media Reviews</li>
                                    <li>1 Free Optimization</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Buy Now</a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Pro</h3>
                                    <div className="price-value"><sup>$</sup>99.99 <span>/per year</span></div>
                                </div>
                                
                                <ul className="pricing-content">
                                    <li>Managment & Marketing</li>
                                    <li>SEO Optimization</li>
                                    <li>25 Analytics Campaign</li>
                                    <li>1,300 Change Keywords</li>
                                    <li>25 Social Media Reviews</li>
                                    <li>1 Free Optimization</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Buy Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingPlanThree;
