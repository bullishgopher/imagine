import React, { Component } from 'react';
import Link from 'next/link';

class Platform extends Component {
    render() {
        let industries_data = [
            {
                id: 0,
                url: '/industries/retail/',
                icon_classname: 'icofont-basket',
                title: 'Retail',
                sub_title: 'See more'
            },
            {
                id: 1,
                url: '/industries/restaurants/',
                icon_classname: 'icofont-restaurant',
                title: 'Restaurant',
                sub_title: 'See more'
            },
            {
                id: 2,
                url: '/industries/education/',
                icon_classname: 'icofont-education',
                title: 'Education',
                sub_title: 'See more'
            },
            {
                id: 3,
                url: '/industries/corporate/',
                icon_classname: 'icofont-workers-group',
                title: 'Corporate',
                sub_title: 'See more'
            },
            {
                id: 4,
                url: '/industries/hospitality/',
                icon_classname: 'icofont-gift',
                title: 'Hospitality',
                sub_title: 'See more'
            },
            {
                id: 5,
                url: '/industries/healthcare/',
                icon_classname: 'icofont-heart-beat',
                title: 'Healthcare',
                sub_title: 'See more'
            },
            {
                id: 6,
                url: '/industries/casino/',
                icon_classname: 'icofont-bill',
                title: 'Gambling',
                sub_title: 'See more'
            },
            {
                id: 7,
                url: '/industries/outdoor/',
                icon_classname: 'icofont-ui-home',
                title: 'Outdoor',
                sub_title: 'See more'
            }
        ];
        return (
            <section className="platform-connect2 ptb-100">
                <div className="section-title">
                    <h2>Let's get started in 4 easy steps</h2>
                    <div className="bar"></div>
                </div>
                <div className="container ptb-100 pt-0">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="single-features single-features-btn">
                                <img src={require('../../images/home/svg/1Register.svg')} alt="feature item" style={{width: "180px", borderRadius: "50%"}} />
                               
                                <h3>Register</h3>
                                <p>Sign-up for your free management interface&nbsp;</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="single-features single-features-btn">
                                <img src={require('../../images/home/svg/2Download_and_install.svg')} alt="feature item" style={{width: "180px", borderRadius: "50%"}} />
                                <h3>Download &amp; Install</h3>
                                <p>Set up on Windows, Linux, Android or WebOS&nbsp;</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="single-features single-features-btn">
                                <img src={require('../../images/home/svg/3Set_up_licenses.svg')} alt="feature item" style={{width: "180px", borderRadius: "50%"}} />
                                <h3>Licensing</h3>
                                <p>Add unlimited screens and top-up features&nbsp;</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="single-features single-features-btn">
                                {/* <div className="icon">
                                    <i className="icofont-camera"></i>
                                </div> */}
                                <img src={require('../../images/home/svg/4Manage.svg')} alt="feature item" style={{width: "180px", borderRadius: "50%"}} />
                                <h3>Manage</h3>
                                <p>Design content and monitor screens remotely&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12 col-md-12">
                            <h2>Interact With Your Users On Every Single Platform</h2>
                        </div> */}
                        {
                            industries_data.map( industry => (
                                <div className="col-lg-3 col-md-6 my-2" key={industry.id} >
                                    <Link href={industry.url}>
                                        <a className="box-daniil">
                                            <i className={`${industry.icon_classname} icon1`}></i>

                                            <h3>{industry.title}</h3>
                                            <span>{industry.sub_title}</span>

                                            <i className="icofont-bubble-right icon2"></i>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Platform;
