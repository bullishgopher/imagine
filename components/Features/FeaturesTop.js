import React, { Component } from 'react';
import Link from 'next/link';

class FeaturesTop extends Component {
    render() {
        return (
            <section className="features-area saas-features ptb-100 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-features single-features-btn">
                                <img src={require('../../images/features/1_Operating_systems.png')} alt="feature item" style={{width: "180px"}} />
                               
                                <h3>Compatible with Multiple Operating Systems</h3>
                                <p>Works on Windows, Linux, Android and LG web OS platforms&nbsp;</p>
                                <Link href="/signup">
                                    <a className="btn btn-primary">Download now</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-features single-features-btn">
                                <img src={require('../../images/features/2_Management.png')} alt="feature item" style={{width: "180px"}} />
                                <h3>Simple Management Portal</h3>
                                <p>Easily manage content and screens from your Chrome browser. Anywhere in the world.&nbsp;</p>
                                <Link href="/signup">
                                    <a className="btn btn-primary">Sign up now</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-features single-features-btn">
                                <img src={require('../../images/features/3_Widgets.png')} alt="feature item" style={{width: "180px"}} />
                                <h3>Content Widgets</h3>
                                <p>Choose from a variety of free and paid widgets to enhance your content playlist<br/>&nbsp;</p>
                                <Link href="/signup">
                                    <a className="btn btn-primary">View</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-features single-features-btn">
                                {/* <div className="icon">
                                    <i className="icofont-camera"></i>
                                </div> */}
                                <img src={require('../../images/features/4_Scalable.png')} alt="feature item" style={{width: "180px"}} />
                                <h3>Scalable &amp; Customizable</h3>
                                <p>Zero limitations to the Imagine capabilities with custom features tailored to industries<br/>&nbsp;</p>
                                <Link href="/signup">
                                    <a className="btn btn-primary">View</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesTop;
