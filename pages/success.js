import React, { Component } from 'react';
import Link from "next/link";
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

import Router from 'next/router';

class Success extends Component {
    constructor() {
        super();
        
        this.state = {
            seconds : 3,
        };

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    
    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }
    
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
          Router.push('/');
        }
    }
    
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
                        <h4 style={{lineHeight: "40px"}}>Your email has verified.<br />
                            Redirect to the home page within <span style={{color: "#fb6520"}}>{this.state.seconds}</span>s.</h4>
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

export default Success;
