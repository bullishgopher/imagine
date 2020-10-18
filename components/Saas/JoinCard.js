import React from 'react';
import Link from 'next/link';
import Img from 'react-cool-img';

class JoinCard extends React.Component {
    render() {
        return (
            <section className="join-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="join-img">
                                <Img src={require('../../images/features-img1.png')} alt="img" />
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="join-content">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Join Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="join-content">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Join Now</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7">
                            <div className="join-img">
                                <Img src={require('../../images/features-img1.png')} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default JoinCard;
