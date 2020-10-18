import React, { Component } from 'react';

import dashboard1 from '../../images/features/svg/Landscape.png';
import dashboard2 from '../../images/features/svg/outdoor.png';
import dashboard3 from '../../images/features/svg/portrait.png';
import dashboard4 from '../../images/features/svg/projector.png';
import dashboard5 from '../../images/features/svg/touch screen.png';
import dashboard6 from '../../images/features/svg/video wall.png';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentImg: [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6],
            contentImgCur: 0,
        }
    }

    onContentHandle(e){
        this.setState({contentImgCur: e});
    }

    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div style={{fontSize: "24px"}} className="mb-4">Content that displays perfectly on any size <br />or type of display, without any fuss.</div>
                                <p>Select a custom resolution or aspect ratio in both portrait or landscape formats. Imagine software works flawlessly with every display from low-res, HD and 4k screens to 8k projectors and beyond.</p>

                                <div> {/*  className="feature-display-inline">*/}
                                    <div className="row mt-3">
                                        <div className="col-md-2" style={{width: "33%"}}>
                                            <div onClick={e => this.onContentHandle(0)} style={{"cursor": "pointer", color: "#FB6520", padding: "6px 0"}}>
                                                <img src={require('../../images/features/svg/landscape.svg')} alt="display" width="65px" />
                                            </div>
                                        </div>
                                        <div className="col-md-2" style={{width: "33%"}}>
                                            <div onClick={e => this.onContentHandle(1)} style={{"cursor": "pointer", color: "#FB6520", padding: "6px 0"}}>
                                                <img src={require('../../images/features/svg/outdoor.svg')} alt="display" width="65px" />
                                            </div>
                                        </div>
                                        <div className="col-md-2" style={{width: "33%"}}>
                                            <div onClick={e => this.onContentHandle(2)} style={{"cursor": "pointer", color: "#FB6520", padding: "6px 0"}}>
                                                <img src={require('../../images/features/svg/portrait.svg')} alt="display" width="65px" />
                                            </div>
                                        </div>
                                        <div className="col-md-2" style={{width: "33%"}}>
                                            <div onClick={e => this.onContentHandle(3)} style={{"cursor": "pointer", color: "#FB6520", padding: "6px 0"}}>
                                                <img src={require('../../images/features/svg/projector.svg')} alt="display" width="65px" />
                                            </div>
                                        </div>
                                        <div className="col-md-2" style={{width: "33%"}}>
                                            <div onClick={e => this.onContentHandle(4)} style={{"cursor": "pointer", color: "#FB6520", padding: "6px 0"}}>
                                                <img src={require('../../images/features/svg/touchscreen.svg')} alt="display" width="65px" />
                                            </div>
                                        </div>
                                        <div className="col-md-2" style={{width: "33%"}}>
                                            <div onClick={e => this.onContentHandle(5)} style={{"cursor": "pointer", color: "#FB6520", padding: "6px 0"}}>
                                                <img src={require('../../images/features/svg/video wall.svg')} alt="display" width="65px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center mt-4" style={{color: "#FB6520"}}>Click icons above</p>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img data-src={this.state.contentImg[this.state.contentImgCur]} alt="image" className="lazyload" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Overview;
