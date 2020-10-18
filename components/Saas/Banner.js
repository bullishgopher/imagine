import React from 'react';
import Link from 'next/link';

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {
    componentDidMount(){ 
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
            <div className="main-banner saas-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 index-banner-responsive">
                                    <div className="saas-image">
                                        <img 
                                            src={require('../../images/home/banner.png')} 
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="home hero" 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="hero-content pl-4">
                                        <h1>Anything is possible with imAGINE Digital Signage</h1>
                                        <p>Take control of your screens! It’s easy to install and even easier to manage. Try Imagine for free today.</p>
                                        <Link href="/signup/">
                                            <a className="btn btn-primary">
                                                START TRIAL
                                                <div style={{fontSize : "10px"}}>14 days free</div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Banner;
