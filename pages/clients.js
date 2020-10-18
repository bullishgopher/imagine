import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Clients/Banner';
import TrustLogo from '../components/Clients/TrustLogo';

// import Feedback from '../components/Clients/Feedback';

import CtaCard from '../components/Saas/CtaCard';
import HardwarePartners from '../components/Partners/HardwarePartners';

class PricingOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                {/* <Feedback /> */}

                <TrustLogo />

                <HardwarePartners />

                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PricingOne;
