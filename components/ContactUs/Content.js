import React, { Component } from 'react';
import Link from 'next/link';

// Google Map
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Content extends Component {
    render() {
        const MyMapComponent = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvuFWzm09XxxbywLcjZRvvg8AiAn-e94M&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `400px` }} />,
                mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap
          )((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.087, lng: 18.820 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: -34.087, lng: 18.820 }} />}
            </GoogleMap>
        )
        return (
            <section className="contact-info-area ptb-100 pb-0">
                <div className="section-title">
                    <h2>Give us a shout anytime, we’d love to hear from you</h2>
                    <div className="bar"></div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-phone"></i>
                                </div>
                                <h3>WhatsApp Us</h3>
                                <p>
                                    <Link href="tel:+27728910151">
                                        <a>+27 72 891 0151</a>
                                    </Link>
                                </p>
                                <p>&nbsp;</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-phone"></i>
                                </div>
                                <h3>Call Us</h3>
                                <p>
                                    <Link href="tel:+27218510119">
                                        <a>+27 21 851 0119</a>
                                    </Link>
                                </p>
                                <p>&nbsp;</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-email"></i>
                                </div>
                                <h3>Mail Us</h3>
                                <p>
                                    <Link href="mailto:info@imaginesignage.com">
                                        <a>info@imaginesignage.com</a>
                                    </Link>
                                </p>
                                <p>&nbsp;</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-email"></i>
                                </div>
                                <h3>Follow Us</h3>
                                <p>
                                    <Link href="/facebook">
                                        <a>facebook.com</a>
                                    </Link>
                                </p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="google-map ptb-100 pb-0">
                    <MyMapComponent
                        isMarkerShown = { true }
                    />
                </div>
            </section>
        );
    }
}

export default Content;
