import React, { Component } from 'react';
import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

class TrustLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_clients: [],
            clients_to_show: [],
            clients_show: 2,
            load_more_disable: false,
        };
    }
    
    async componentDidMount() {
        await axios.get(config.ALL_CLIENTS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_clients : response.data });
                this.setState({clients_to_show: this.state.all_clients.slice(0, this.state.clients_show * 4)});
            }
        })
        .catch((error) => {
        })
    }

    loadMoreClients() {
        if ( this.state.clients_show < this.state.all_clients.length / 4 )
        {
            this.state.clients_show = this.state.clients_show + 2;
            this.setState({clients_to_show: this.state.all_clients.slice(0, this.state.clients_show * 4)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }

    render() {
        return (
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Trusted by businesses around the world</h2>
                        <div className="bar"></div>
                        <p>Business close and far, and big and small</p>
                    </div>

                    <div className="row">
                        {
                            this.state.clients_to_show.map( client => (
                                <div className="col-lg-3 col-md-4" key= {client._id}>
                                    <div className="single-trust-logo">
                                        <img data-src={config.SERVER_BASE_URL + client.imageurl} alt="logo" className="lazyload" />
                                    </div>
                                    <p className="trust-logo-letter">{client.description}</p>
                                </div>
                            ))
                        }

                        {/* <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-1.png')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-2.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-3.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-4.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-1.png')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-2.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-3.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-4.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-1.png')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-2.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-3.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-4.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-1.png')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-2.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-3.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="single-trust-logo">
                                <img src={require('../../images/client/partner-4.jpg')} alt="logo" />
                            </div>
                            <p className="trust-logo-letter">A better read on driving revenue</p>
                        </div> */}
                    </div>
                    <div className="row justify-content-center py-2">
                        <button onClick={ (e) => this.loadMoreClients() } className="btn btn-primary">View more</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default TrustLogo;
