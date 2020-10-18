import React, { Component } from 'react';

import customizable1 from '../../images/widgets/customization/size.png';
import customizable2 from '../../images/widgets/customization/text font.png';
import customizable3 from '../../images/widgets/customization/attributes.png';
import customizable4 from '../../images/widgets/customization/colour.png';
import customizable5 from '../../images/widgets/customization/logo.png';

class WidgetsSupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [customizable1, customizable2, customizable3, customizable4, customizable5],
            imgCur: 0,
        }
    }

    // for image change when click
    onCustomizeSelect(e){
        this.setState({imgCur: e});
    }

    render() {
        return (
            <section className="features-area saas-features ptb-100 pb-0">
                <div className="features-inner-area">
                    <div className="section-title">
                        <h2>Unlimited content, completely customizable</h2>
                        <div className="bar"></div>
                        <p>Refine your widgets to suit your environment</p>
                    </div>
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="support-item1 features-item-shadow" onClick={e => this.onCustomizeSelect(0)} style={{"cursor": "pointer", position: "relative"}}>
                                    <div style={{position: "absolute", top: "10px", left: "10px"}}>
                                        <img src={require('../../images/widgets/customization/size.svg')} alt="attributes" width="80px" />
                                    </div>
                                    <h4 style={{marginLeft: "90px", marginBottom: "0px"}}>Select orientation</h4>
                                    <p style={{marginLeft: "90px"}} className="hidden-xs-down">Customise the widget size</p>
                                </div>
                                <div className="support-item1 features-item-shadow" onClick={e => this.onCustomizeSelect(1)} style={{"cursor": "pointer", position: "relative"}}>
                                    <div style={{position: "absolute", top: "10px", left: "10px"}}>
                                        <img src={require('../../images/widgets/customization/text font.svg')} alt="attributes" width="80px" />
                                    </div>
                                    <h4 style={{marginLeft: "90px", marginBottom: "0px"}}>Select font</h4>
                                    <p style={{marginLeft: "90px"}} className="hidden-xs-down" >Select from all major font families</p>

                                </div>
                                <div className="support-item1 features-item-shadow" onClick={e => this.onCustomizeSelect(2)} style={{"cursor": "pointer", position: "relative"}}>
                                    <div style={{position: "absolute", top: "10px", left: "10px"}}>
                                        <img src={require('../../images/widgets/customization/attributes.svg')} alt="attributes" width="80px" />
                                    </div>
                                    <h4 style={{marginLeft: "90px", marginBottom: "0px"}}>Assign attributes</h4>
                                    <p style={{marginLeft: "90px"}} className="hidden-xs-down" >Each feed contains tailored settings</p>

                                </div>
                                <div className="support-item1 features-item-shadow" onClick={e => this.onCustomizeSelect(3)} style={{"cursor": "pointer", position: "relative"}}>
                                <div style={{position: "absolute", top: "10px", left: "10px"}}>
                                        <img src={require('../../images/widgets/customization/colour.svg')} alt="attributes" width="80px" />
                                    </div>
                                    <h4 style={{marginLeft: "90px", marginBottom: "0px"}}>Color variations</h4>
                                    <p style={{marginLeft: "90px"}} className="hidden-xs-down" >Align the colors to your brand</p>

                                </div>
                                <div className="support-item1 features-item-shadow" onClick={e => this.onCustomizeSelect(4)} style={{"cursor": "pointer", position: "relative"}}>
                                <div style={{position: "absolute", top: "10px", left: "10px"}}>
                                        <img src={require('../../images/widgets/customization/logo.svg')} alt="attributes" width="80px" />
                                    </div>
                                    <h4 style={{marginLeft: "90px", marginBottom: "0px"}}>Personalise</h4>
                                    <p style={{marginLeft: "90px"}}  className="hidden-xs-down" >Add your company logo</p>

                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="features-image">
                                    <img src={this.state.images[this.state.imgCur]} alt="image" style={{maxWidth: "120%", width: "120%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WidgetsSupport;
