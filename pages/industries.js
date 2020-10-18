import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Industries/Banner';
// import Feedback from '../components/Industries/Feedback';
// import Overview from '../components/Industries/Overview';
// import Partner from '../components/Industries/Partner';
// import SaasTools from '../components/Industries/SaasTools';
// import GalleryContent from '../components/Industries/GalleryContent';
import CaseStudy from '../components/Industries/CaseStudy';
import CoreFeatures from '../components/Industries/CoreFeatures';
import Dashboard from '../components/Industries/Dashboard';
import GetStarted from '../components/Industries/GetStarted';
//import SimplePricing from '../components/Industries/SimplePricing';

import CtaCard from '../components/Saas/CtaCard';
import Feedback from '../components/Industries/Feedback';

class Industries extends Component {
    static async getInitialProps({query}) {
      const urls = {
        "corporate": "Corporate.png",
        "education": "Education.png",
        "casino": "Gambling.png",
        "healthcare": "Healthcare.png",
        "hospitality": "Hospitality.png",
        "outdoor": "Outdoor.png",
        "restaurants": "Restaurant.png",
        "retail": "Retail.png"
      }
      return { data: [urls[query.slug], query.slug] }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner url={this.props.data[0]}/>
                {/* <Banner title={this.props.data[0].replace(/^\w/, c => c.toUpperCase())}/> */}
                {/* {this.props.data[1].map( (industry, index) => (
                    
                ))} */}
                
                <CoreFeatures slug={this.props.data[1]}/>
                {/* <Partner />
                <Overview />
                <SimplePricing /> */}
                <Feedback slug={this.props.data[1]}/>
                {/* <Dashboard /> */}
                <CaseStudy slug={this.props.data[1]}/>
                <GetStarted />
                <CtaCard />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Industries;
