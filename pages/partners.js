import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import HardwarePartners from '../components/Partners/HardwarePartners';
import PartnersBanner from '../components/Partners/PartnersBanner';

import BecomePartner from '../components/Partners/BecomePartner';
import GlobalPartners from '../components/Partners/GlobalPartners';
import ScoutIntegration from '../components/Partners/ScoutIntegration';

import CtaCard from '../components/Saas/CtaCard';

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PartnersBanner />
                <HardwarePartners />
                <GlobalPartners />
                <ScoutIntegration />

                <BecomePartner />
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Partners;
