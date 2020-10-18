import React from 'react';
import Link from 'next/link';


// import 'lazysizes';
// // import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';


class Overview extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>So, what brings to you here today?</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="overview-box">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="index-overview">
                                    <img data-src={require('../../images/home/home-left.png')} alt="image" className="lazyload" />
                                    <h3 className="mt-4">Management Interface</h3>
                                    <p>Upload, remove & schedule content <br/>whilst monitoring your status</p>

                                    <Link href="/signup/">
                                        <a className="btn btn-primary">Register Now</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="index-overview">
                                <img data-src={require('../../images/home/home-middle-new.png')} alt="image" className="lazyload" />
                                <h3 className="mt-4">See our features</h3>
                                <p>Shop from a range of screens, media players, <br />stands, and all-in-one displays </p>

                                <Link href="/features/#feature_icons">
                                    <a className="btn btn-primary">View Features</a>
                                </Link>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="index-overview">
                                <img data-src={require('../../images/home/home-right.png')} alt="image" className="lazyload" />
                                <h3 className="mt-4">Purchase Hardware</h3>
                                <p>Shop from a range of screens, media players, stands, and all-in-one displays.</p>

                                <Link href="/shop/">
                                    <a className="btn btn-primary">Visit Shop</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-anchor"></i>
                                </div>
                                <h3>Outdated comments toggling</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 app-fetured-item">
                                <div className="app-item item-one">
                                    <i className="icofont-wink-smile"></i>
                                    <h6>Community</h6>
                                </div>

                                <div className="app-item item-two">
                                    <i className="icofont-ebook"></i>
                                    <h6>Honest pricing</h6>
                                </div>

                                <div className="app-item item-three">
                                    <i className="icofont-wink-smile"></i>
                                    <h6>Management</h6>
                                </div>

                                <div className="app-item item-four">
                                    <i className="icofont-stock-mobile"></i>
                                    <h6>Mobile Design</h6>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-ui-messaging"></i>
                                </div>
                                <h3>We provide proffesional staff</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-4.png')} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-3.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-users-social"></i>
                                </div>
                                <h3>Code review illustrations</h3>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>

                                <ul>
                                    <li>Unimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="#">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div> */}

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

export default Overview;
