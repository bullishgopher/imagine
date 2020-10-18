import React from 'react';
import Link from 'next/link';

class Overview extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>More to Discover</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={require('../../images/overview-1.png')} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-power"></i>
                                </div>
                                <h3>Getting started page</h3>
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

export default Overview;
