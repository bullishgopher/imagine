import React, { Component } from 'react';
import Link from "next/link";
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

class TeamOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="page-title-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Thank You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="shape3"><img src={require('../images/shape3.png')} alt="img" /></div>
                </section>
                <div className="thank-you-area">
                    <div className="container">
                        <h4 style={{lineHeight: "40px"}}>Thank you for registering. <br />
                            Please check your inbox folder. If you have not received an email, <br />
                            Please check your SPAM folder or <a href="/signup" style={{color: "grey"}}>click</a> here to resend.</h4>
                        <Link href="/">
                            <a className="btn btn-primary mt-3">Go Home</a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
