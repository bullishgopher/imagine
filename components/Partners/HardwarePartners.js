import React, { Component } from 'react';
import Link from 'next/link';

class HardwarePartners extends Component {
        render() {
        return (
            <section className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Partners</h2>
                        <div className="bar"></div>
                        <p>Reliable, reputable and cost effective</p>
                    </div>
{/* 
                    <div className="woocommerce-topbar">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1–16 of 100 results</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="woocommerce-topbar-ordering">
                                    <form>
                                        <div className="select-box">
                                            <select className="form-control">
                                                <option value="1">Sort by Popularity</option>
                                                <option value="2">Sort by Average Rating</option>
                                                <option value="0">Sort by Latest</option>
                                                <option value="3">Sort by price: Low to High</option>
                                                <option value="4">Sort by price: High to Low</option>
                                                <option value="5">Sort by New</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-area col-lg-3 col-md-3">
                                <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <Link href="widget/enca"><a>
                                <div className="single-hardware-partner row">
                                    {/* <div className="icon">
                                        <i className="icofont-pay"></i>
                                    </div> */}
                                    <div className="col-4">
                                        <img src={require('../../images/partner/images.jpg')} alt="enca" />
                                    </div>
                                    <div className="col-8">
                                        <h6>Online Payments</h6>
                                        <p>Well at public scho cheeky bugger grub burke.</p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hardware-partner row">
                                {/* <div className="icon">
                                    <i className="icofont-music-note"></i>
                                </div> */}
                                <div className="col-4">
                                    <img src={require('../../images/partner/Mecer_logo.png')} alt="enca" />
                                </div>
                                <div className="col-8">
                                    <h6>Subscription Management</h6>
                                    <p>Well at public scho cheeky bugger grub burke.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-hardware-partner row">
                                {/* <div className="icon">
                                    <i className="icofont-optic"></i>
                                </div> */}
                                <div className="col-4">
                                    <img src={require('../../images/partner/images.png')} alt="enca" />
                                </div>
                                <div className="col-8">
                                    <h6>Optimization</h6>
                                    <p>Well at public scho cheeky bugger grub burke.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HardwarePartners;
