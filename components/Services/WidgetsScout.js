import React, { Component } from 'react';

import scountimage1 from '../../images/widgets/scoutimages/news.png';
import scountimage2 from '../../images/widgets/scoutimages/foreign exchange.png';
import scountimage3 from '../../images/widgets/scoutimages/google docs.png';
import scountimage4 from '../../images/widgets/scoutimages/social.png';
import scountimage5 from '../../images/widgets/scoutimages/traffic.png';
import scountimage6 from '../../images/widgets/scoutimages/weather.png';

// const resizeOptimizeImages = require('resize-optimize-images');

class WidgetsScout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [scountimage1, scountimage2, scountimage3, scountimage4, scountimage5, scountimage6],
            imgCur: 0,
        }
    }

    // for image change when click
    onClickScout(e){
        this.setState({imgCur: e});
    }

    render() {
        return (
            <section className="features-area saas-features ptb-100 pb-0">
                <div className="features-inner-area">
                    <div className="section-title">
                        <h2>Elevate your content with these sensational widgets</h2>
                        <div className="bar"></div>
                        <p>Weather, news, traffic, video & more</p>
                    </div>
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-image">
                                    <img src={this.state.images[this.state.imgCur]} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="scout-item" onClick={e => this.onClickScout(0)} style={{"cursor": "pointer"}}>
                                    <img src={require('../../images/widgets/scouticons/enca.png')} alt="scout" />
                                </div>
                                <div className="scout-item" onClick={e => this.onClickScout(1)} style={{"cursor": "pointer"}}>
                                    <img src={require('../../images/widgets/scouticons/Foreign exchange.png')} alt="scout" />
                                </div>
                                <div className="scout-item" onClick={e => this.onClickScout(2)} style={{"cursor": "pointer"}}>
                                    <img src={require('../../images/widgets/scouticons/News 24.png')} alt="scout" />
                                </div>
                                <div className="scout-item" onClick={e => this.onClickScout(3)} style={{"cursor": "pointer"}}>
                                    <img src={require('../../images/widgets/scouticons/Socail account.psd.png')} alt="scout" />
                                </div>
                                <div className="scout-item" onClick={e => this.onClickScout(4)} style={{"cursor": "pointer"}}>
                                    <img src={require('../../images/widgets/scouticons/Traffic.png')} alt="scout" />
                                </div>
                                <div className="scout-item" onClick={e => this.onClickScout(5)} style={{"cursor": "pointer"}}>
                                    <img src={require('../../images/widgets/scouticons/Weather.png')} alt="scout" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WidgetsScout;
