import React, { Component } from 'react';
import Link from 'next/link';

class Platform extends Component {
    render() {
        return (
            <section className="platform-connect ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Interact With Your Users On Every Single Platform</h2>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link href="#">
                                <a className="box">
                                    <img src={require('../../images/mailchimp.png')} alt="mailchimp" />

                                    <h3>Mail Chimp</h3>
                                    <span>Send Mail</span>

                                    <i className="icofont-bubble-right"></i>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link href="#">
                                <a className="box">
                                    <img src={require('../../images/slack.png')} alt="mailchimp" />

                                    <h3>Slack</h3>
                                    <span>Messaging</span>

                                    <i className="icofont-bubble-right"></i>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link href="#">
                                <a className="box">
                                    <img src={require('../../images/twitter.png')} alt="mailchimp" />

                                    <h3>Twitter</h3>
                                    <span>Twitter Feed</span>

                                    <i className="icofont-bubble-right"></i>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <Link href="#">
                                <a className="box">
                                    <img src={require('../../images/instagram.png')} alt="mailchimp" />

                                    <h3>Instagram</h3>
                                    <span>News Feed</span>

                                    <i className="icofont-bubble-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Platform;
