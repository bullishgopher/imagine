import React, { Component } from 'react';

// Google Map
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import axios from "axios";
import config from "../../config/config.json";

import ReCAPTCHA from "react-google-recaptcha";

class Form extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',

        captcha: false,
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onSubmit = e => {
        e.preventDefault();
    
        const { name, email, phone, subject, message } = this.state;
    
        const data = {
            name,
            email,
            phone,
            subject,
            message
        };

        // var str = JSON.stringify(data);

        // console.log("str", str);

        axios.post(config.CONTACT_FORM, data)
        .then(res => {
        })
        .catch(function (error) {
        });
    };

    onCaptchaChange = e => {
        console.log("Captcha value:", e);

        if ( !!e){
            this.setState({captcha: true});
        }
    };

    render() {
        // const MyMapComponent = compose(
        //     withProps({
        //         googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        //         loadingElement: <div style={{ height: `100%` }} />,
        //         containerElement: <div style={{ height: `400px` }} />,
        //         mapElement: <div style={{ height: `100%` }} />,
        //     }),
        //     withScriptjs,
        //     withGoogleMap
        //   )((props) =>
        //     <GoogleMap
        //         defaultZoom={8}
        //         defaultCenter={{ lat: -34.087, lng: 18.820 }}
        //     >
        //         {props.isMarkerShown && <Marker position={{ lat: -34.087, lng: 18.820 }} />}
        //     </GoogleMap>
        // )

        return (
            <section className="contact-area">
                {/* <div className="google-map">
                    <MyMapComponent
                        isMarkerShown = { true }
                    />
                </div> */}

                <div className="container ptb-100 pb-0">
                    <div className="section-title">
                        <h2>Sales, technical or general queries? We’re here to help.</h2>
                        <div className="bar"></div>
                        <p>Professional, friendly & helpful service.</p>
                    </div>

                    <div className="row h-100 justify-content-center align-items-center arrow-image-relative">
                        <div className="col-lg-6 col-md-12">
                            {/* <h5>Get in touch now to learn how Imagine can help you: </h5> */}
                            <ul className="contact-form-ul">
                                <li><i className="icofont-user-male"></i> &nbsp;&nbsp;Software Support</li>
                                <li><i className="icofont-wall-clock"></i> &nbsp;&nbsp;Billing queries</li>
                                <li><i className="icofont-bubble-right"></i> &nbsp;&nbsp;License upgrades</li>
                                <li><i className="icofont-google-map"></i> &nbsp;&nbsp;Suggestions</li>
                                <li><i className="icofont-basket"></i> &nbsp;&nbsp;Media & Press</li>
                            </ul>
                            <div className="arrow-image">
                                <img src={require('../../images/contact/arrow.png')} alt="arrow" /><br />
                                <h4>Drop your details here.</h4>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <form id="contactForm" onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required={true} data-error="Please enter your name" placeholder="Name" 
                                            name="name" 
                                            id="name" 
                                            onChange={this.onChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Email" 
                                            name="email" 
                                            id="email" 
                                            onChange={this.onChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" 
                                            name="phone" 
                                            id="phone" 
                                            onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" 
                                            name="subject" 
                                            id="subject" 
                                            onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message" 
                                            name="message" 
                                            id="message" 
                                            onChange={this.onChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <ReCAPTCHA
                                            sitekey="6LfLr-EUAAAAANxJc-VGHncZS1a0e7J3jhDAm32T"
                                            onChange={this.onCaptchaChange}
                                        />
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Contact Us</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;
