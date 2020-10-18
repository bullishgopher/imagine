import React, { Component } from 'react';
// import Link from 'next/link';

// import dashboard1 from '../../images/features/Dashboard/1. Monitor.png';
// import dashboard2 from '../../images/features/Dashboard/2. Map.png';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     images: [dashboard1, dashboard2],
        //     imgCur: 0,
        // }
    }
    // onDashboardHandle(e){
    //     this.setState({imgCur: e});
    // }
    render() {
        return (
            <section className="features-area saas-features ptb-100 pt-0">
                <div className="features-inner-area">
                    {/* <div className="section-title">
                        <h2>Dashboard</h2>
                        <div className="bar"></div>
                        <p>A web based central management interface</p>
                    </div> */}
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="features-image">
                                    {/* <img src={this.state.images[this.state.imgCur]} alt="image" /> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <h3 className="pb-3">Here's how it works</h3>
                                <div className="features-inner-content">
                                    {/* <h6>Profile Management</h6>
                                        <p onClick={e => this.onDashboardHandle(0)} style={{"cursor": "help"}}><i className="icofont-ui-call"></i> &nbsp;&nbsp;&nbsp;Manage subscriptions</p>
                                        <p onClick={e => this.onDashboardHandle(1)} style={{"cursor": "help"}}><i className="icofont-gift"></i> &nbsp;&nbsp;&nbsp;Manage Images, videos, Pdf’s, PowerPoint files and even mp3’s</p>
                                    <h6>Screen Management</h6>
                                        <p onClick={e => this.onDashboardHandle(0)} style={{"cursor": "help"}}><i className="icofont-qr-code"></i> &nbsp;&nbsp;&nbsp;Select a certain day, time of day or schedule in advance.</p>
                                        <p onClick={e => this.onDashboardHandle(1)} style={{"cursor": "help"}}><i className="icofont-ui-call"></i> &nbsp;&nbsp;&nbsp;Screen shot</p> */}
                                </div>
                                <a href="#" className="pt-3">Full product tour ➟</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
