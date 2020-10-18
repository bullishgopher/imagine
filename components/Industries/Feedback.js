import React from 'react';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));

import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

// const options = {
//     loop:true,
//     nav:true,
//     autoplay:true,
//     autoplayHoverPause: true,
//     mouseDrag: true,
//     center: true,
//     dots: false,
//     navText: [
//         "<i class='icofont-bubble-left'></i>",
//         "<i class='icofont-bubble-right'></i>"
//     ],
//     responsive:{
//         0:{
//             items:1,
//         },
//         768:{
//             items:1,
//         },
//         1200:{
//             items:1,
//         }
//     }
// }

const data = {
    "corporate": { 
        img: "Corporate (secure login) (1).png",
        title: "Customised for your corporate environment",
        text: "Compliant login protocols, Azure integration, with secured data transfer through Https, SFTP & FTP..",
        aboveImg: "Corporate - Curo.png",
    },
    "education": {
        img: "Education (user permissions) (1).png",
        title: "Enable certain permissions to certain staff or pupils.",
        text: "Create a hierarchy of power with registered users. Enable and disable certain user rights and privileges, viewable pages, abilities and features restricted to each individual user account, all controlled via a central administrator.",
        aboveImg: "Education - Stellenbosch.png",
    },
    "casino": {
        img: "Gambling (live TV) (1).png",
        title: "Overlay content on a LIVE TV signal",
        text: "The overlay schedule feature allows for pop ups over LIVE TV. Select from a bottom, top, side or L shaped pop up which can be scheduled to appear at a specific time, day or period (once every half hour). A powerful feature to maximize viewing space while  utilizing the screen for messaging/statistics or betting odds without covering the full screen.",
        aboveImg: "Gambling - gbets.png",
    },
    "healthcare": {
        img: "Healthcare (widgets) (1).png",
        title: "Enhance your waiting areas with infotainment widgets",
        text: "Split your screen into multiple areas/regions and select from an array of free content to keep patients entertained and informed; Health news from News24, fun insights into what’s trending on Google as well as employee spotlight tool to highlight medical staff and their roles. ",
        aboveImg: "Hospitality - Waterfront.png",
    },
    "hospitality": {
        img: "Hospitality (widgets) (1).png",
        title: "An entrance screen with a purpose",
        text: "Highlight room rates, amenities, breakfast hours and the manager on duty. Utilize the Imagine free widgets for fillers; local weather forecasts for customer day planning, exchange rates as well as local notices. The potential is endless.",
        aboveImg: "Hospitality - Waterfront.png",
    },
    "outdoor": {
        img: "Outdoor (resolutions) (2).png",
        title: "No limitations to the screen size or resolutions",
        text: "Built to be scalable, Imagine can control any matrix or pixel configuration, whether it be portrait or landscape orientation. Either select a pre-defined resolution or create a custom resolution to align with you LED display.",
        aboveImg: "Retail - Sportsmans Warehouse.png",
    },
    "restaurants": {
        img: "Restaurant (BP sync) (4).png",
        title: "LG ALL IN ONE MENU DISPLAYS",
        text: "Utilize the LG commercial grade screens for your digital menu boards. Simply install the Imagine software which has been adapted specifically for the LG WEB OS operating system and enables synchronization of content where images or videos pass from one screen to another creating a visually captivating menu display.",
        aboveImg: "Restaurant - BP.png",
    },
    "retail": {
        img: "retail (queue management) (1).png",
        title: "Integrate queue management into your digital displays",
        text: "An integrated queue management solution operating through the imagine software. Tellers or cashiers can have dedicated messages to their specific till point with a tracking tool that counts the amount of times each button was pushed. The queue message can pop up over existing content or can be a dedicated queue caller screen. With integration of Flic, wireless push buttons can be installed in minutes.",
        aboveImg: "Retail - Sportsmans Warehouse.png",
    }
  }

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            all_testimonials: [],
        };
    }
    
    async componentDidMount() {
        await axios.get(config.ALL_TESTIMONIALS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_testimonials : response.data });
            }
        })
        .catch((error) => {
        })
    }

    render() {
        return (
            <section className="feedback-area ptb-100 bg-gray pb-0">
                <div className="container ptb-100 pt-0">
                    <div className="row h-100 justify-content-center align-items-center">

                        <div className="col-lg-5 col-md-12">
                            <h3 className="pb-3">{data[this.props.slug]["title"]}</h3>
                            <p>{data[this.props.slug]["text"]}</p>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="text-right">
                                <img src={require(`../../images/industries/${data[this.props.slug]["img"]}`)} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
<hr />
                <div className="container ptb-100 pb-0">
                    {/* <div className="section-title">
                        <h2>Testimonials</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <img src={require(`../../images/industries/second/${data[this.props.slug]["aboveImg"]}`)} alt={this.props.slug} style={{width: "80%", height: "80%", border: "solid 1px black"}}/>
                        </div>
                        <div className="col-lg-6 col-md-6 ptb-100 pt-2">
                            <h3>Manage you screens from anywhere in the world with the power of the Imagine Digital Signage Software</h3>
                            <Link href="#"><a className="btn btn-primary my-3">Meet our customers</a></Link>
 
                            <div className="feedback-right-panel">
                                <img src={require('../../images/partner/partner-1.png')} alt="partner" />
                                <img src={require('../../images/partner/partner-2.jpg')} alt="partner" />
                                <img src={require('../../images/partner/partner-3.jpg')} alt="partner" />
                                <img src={require('../../images/partner/partner-4.jpg')} alt="partner" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <svg className="svg-feedback-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff"/>
                </svg>
            </section>
        );
    }
}

export default Feedback;
