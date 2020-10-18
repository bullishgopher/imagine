import React, { Component } from 'react';
import Banner from '../components/Features/Banner';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

import FeaturesTop from '../components/Features/FeaturesTop';
import FeaturesContent from '../components/Features/FeaturesContent';
import Overview from '../components/Features/Overview';
// import Platform from '../components/Features/Platform';

import CtaCard from '../components/Saas/CtaCard';
import ClientFeedback from '../components/Saas/ClientFeedback';
import GalleryContent from '../components/Saas/GalleryContent';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <FeaturesTop />
                <ClientFeedback />
                <Overview />
                {/* <Platform /> */}
                <FeaturesContent />
                <GalleryContent />
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Features;
