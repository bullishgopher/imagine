import React, { Component } from 'react';
import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

class ServiceContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_widgets: [],
            widgets_to_show: [],
            widget_show: 1,
            load_more_disable: false,
        };
    }
    
    async componentDidMount() {
        await axios.get(config.ALL_WIDGETS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_widgets : response.data });
                this.setState({widgets_to_show: this.state.all_widgets.slice(0, this.state.widget_show * 3)});
            }
        })
        .catch((error) => {
        })
    }

    // loadMorewidget() {
    //     if ( this.state.widget_show < this.state.all_widgets.length / 3 )
    //     {
    //         this.state.widget_show = this.state.widget_show + 1;
    //         this.setState({widgets_to_show: this.state.all_widgets.slice(0, this.state.widget_show * 3)});
    //     }
    //     else {
    //         this.state.load_more_disable = true;
    //     }
    // }

    render() {
        return (
            <section className="services-area ptb-100 pb-0">
                <div className="container">
                    <div className="section-title">
                        <h2>Free additional content widgets</h2>
                        <div className="bar"></div>
                        <p>Make the most of powerful zero cost content</p>
                    </div>

                    {/* <div className="woocommerce-topbar">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1–16 of 100 results</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="woocommerce-topbar-ordering">
                                    <form>
                                        <div className="select-box">
                                            <select className="form-control">
                                                <option value="1">Sort by Popularity</option>
                                                <option value="2">Sort by Average Rating</option>
                                                <option value="0">Sort by Latest</option>
                                                <option value="3">Sort by price: Low to High</option>
                                                <option value="4">Sort by price: High to Low</option>
                                                <option value="5">Sort by New</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-area col-lg-3 col-md-3">
                                <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    

                    <div className="row">
                        {
                            this.state.all_widgets.map( widget => (
                                <div className="col-lg-4 col-md-6">
                                    {/* <Link href="widget/enca"><a> */}
                                        <div className="single-services">
                                            <img src={config.SERVER_BASE_URL + widget.imageurl} alt="alt" />
                                            <h3>{widget.title}</h3>
                                            <p>{widget.description}</p>
                                        </div>
                                    {/* </a></Link> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceContent;
