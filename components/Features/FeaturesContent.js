import React, { Component } from 'react';

import dashboard1 from '../../images/features/Dashboard/1. Monitor.png';
import dashboard2 from '../../images/features/Dashboard/2. Map.png';
import dashboard3 from '../../images/features/Dashboard/3. Screenshot test.png';
import dashboard4 from '../../images/features/Dashboard/4. Data usage.png';
import dashboard5 from '../../images/features/Dashboard/5. User activity.png';
// import dashboard6 from '../../images/features/Dashboard/6-library.png';

import layout1 from '../../images/features/layout/1-add-region.png';
import layout2 from '../../images/features/layout/2-upload-content.png';
import layout3 from '../../images/features/layout/3-schedule.png';
import layout4 from '../../images/features/layout/4-Preview.png';

// import {features_list} from '../../shared/constant';

import axios from 'axios';
import config from "../../config/config.json";

class FeaturesContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // for image change when click
            images: [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5],
            imgCur: 0,

            layoutImg: [layout1, layout2, layout3, layout4],
            layoutImgCur: 1,

            // for load more button
            all_features: [],    // <= data is used on top
            features_array_to_show: [],
            features_show_row_count: 4,
            items_in_a_row: 3,
            load_more_disable: false,
        }
    }

    // componentDidMount() {
    //     this.setState({features_array_to_show: features_list.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
    // }

    async componentDidMount() {
        await axios.get(config.ALL_FEATURES)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_features : response.data });
                this.setState({features_array_to_show: this.state.all_features.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
            }
        })
        .catch((error) => {
        })
    }

    // for image change when click
    onDashboardHandle(e){
        this.setState({imgCur: e});
    }

    onLayoutHandle(e){
        this.setState({layoutImgCur: e});
    }

    // for load more button
    loadMoreFeatures() {
        if ( this.state.features_show_row_count < this.state.all_features.length / this.state.items_in_a_row )
        {
            this.state.features_show_row_count = this.state.features_show_row_count + 4;
            this.setState({features_array_to_show: this.state.all_features.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }

    render() {
        return (
            <section className="features-area saas-features ptb-100 pb-0">


                <div className="features-inner-area ptb-100 pt-0">
                    <div className="section-title">
                        <h2>Dashboard</h2>
                        <div className="bar"></div>
                        <p>View key information, functionality and support at-a-glance</p>
                    </div>
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="features-image">
                                    <img src={this.state.images[this.state.imgCur]} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <h3 className="pb-3">Here's how it works</h3>
                                <div className="features-inner-content feature-dashboard-right">
                                    <h5 className="my-3">Dashboard features</h5>
                                        <p onClick={e => this.onDashboardHandle(0)} style={{"cursor": "pointer"}}><img data-src={require('../../images/features/Dashboard/1. monitor.svg')} alt="icon" className="lazyload"  width="50px" /> &nbsp;&nbsp;&nbsp;Monitor your displays status</p>
                                        <p onClick={e => this.onDashboardHandle(1)} style={{"cursor": "pointer"}}><img data-src={require('../../images/features/Dashboard/2. map.svg')} alt="icon" className="lazyload"  width="50px" /> &nbsp;&nbsp;&nbsp;View your displays on a map view</p>
                                        <p onClick={e => this.onDashboardHandle(2)} style={{"cursor": "pointer"}}><img data-src={require('../../images/features/Dashboard/3. screenshot.svg')} alt="icon" className="lazyload"  width="50px" /> &nbsp;&nbsp;&nbsp;Screenshot online displays</p>
                                        <p onClick={e => this.onDashboardHandle(3)} style={{"cursor": "pointer"}}><img data-src={require('../../images/features/Dashboard/4. data.svg')} alt="icon" className="lazyload"  width="50px" /> &nbsp;&nbsp;&nbsp;Highlight each displays data usage</p>
                                        <p onClick={e => this.onDashboardHandle(4)} style={{"cursor": "pointer"}}><img data-src={require('../../images/features/Dashboard/5. user.svg')} alt="icon" className="lazyload"  width="50px" /> &nbsp;&nbsp;&nbsp;Content library metrics</p>
                                        {/* <p onClick={e => this.onDashboardHandle(5)} style={{"cursor": "pointer"}}><i className="icofont-ui-call"></i> &nbsp;&nbsp;&nbsp;Monitor user's activity</p> */}
                                </div>
                                {/* <a href="#" className="pt-5">Full product tour ➟</a> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="features-inner-area ptb-100 pt-0">
                    <div className="section-title">
                        <h2>Creating your own custom layout with no skills necessary</h2>
                        <div className="bar"></div>
                        <p>Only Takes 60 seconds to create your own layout</p>
                    </div>
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            
                            <div className="col-lg-5 col-md-12">
                                <div className="features-inner-content">
                                    <div className="features-item features-item-shadow" onClick={e => this.onLayoutHandle(0)} style={{"cursor": "pointer"}}>
                                        <div className="icon">
                                            <img src={require('../../images/features/layout/layout.svg')} alt="imag" />
                                        </div>
                                        <h3>Design your layout</h3>
                                        <p>Select a template or create your own screen layout</p>
                                    </div>

                                    <div className="features-item features-item-shadow" onClick={e => this.onLayoutHandle(1)} style={{"cursor": "pointer"}}>
                                        <div className="icon">
                                        <img src={require('../../images/features/layout/multiple.svg')} alt="imag" />
                                        </div>
                                        <h3>Upload your content</h3>
                                        <p>Manage Images, videos, Pdf’s, PowerPoint files and even mp3’s</p>
                                    </div>

                                    <div className="features-item features-item-shadow" onClick={e => this.onLayoutHandle(2)} style={{"cursor": "pointer"}}>
                                        <div className="icon">
                                        <img src={require('../../images/features/layout/schedule.svg')} alt="imag" />
                                        </div>
                                        <h3>Schedule your content</h3>
                                        <p>Select a certain day, time of day or schedule in advance.</p>
                                    </div>

                                    <div className="features-item features-item-shadow" onClick={e => this.onLayoutHandle(3)} style={{"cursor": "pointer"}}>
                                        <div className="icon">
                                        <img src={require('../../images/features/layout/preview.svg')} alt="imag" />
                                        </div>
                                        <h3>Preview your layout</h3>
                                        <p>See what goes live before anyone else. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="features-image">
                                    <img src={this.state.layoutImg[this.state.layoutImgCur]} alt="image" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container" id="feature_icons">
                    <div className="section-title">
                        <h2>Battle-tested software features</h2>
                        <div className="bar"></div>
                        <p>Designed for versatility in every digital signage environment</p>
                    </div>

                    <div className="row">
                        {
                            this.state.features_array_to_show.map( (feature, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-features single-features-amazing row">
                                        <div className="col-4">
                                            <div className="icon">
                                                {/* <i className={feature.icon}></i> */}
                                                <img src={config.SERVER_BASE_URL + feature.imageurl} alt={feature.title} />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.text}</p></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="row justify-content-center">
                        { this.state.all_features.length ? <button onClick={ (e) => this.loadMoreFeatures() } className="btn btn-primary">View more</button> : "" }
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;
