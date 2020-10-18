import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

import Banner from '../components/Pricing/Banner';
import PricingPlan from '../components/Pricing/PricingPlan';
import PricingFaqContent from '../components/Pricing/PricingFaqContent';
import StillHelp from '../components/Pricing/StillHelp';

import CtaCard from '../components/Saas/CtaCard';
// import GalleryContent from '../components/Saas/GalleryContent';

class PricingOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <PricingPlan />
                <hr />
                <section className="faq-area ptb-100">
			        <div className="container">
                        <PricingFaqContent />
                    </div>
		        </section>

                <StillHelp />
                {/* <GalleryContent /> */}
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PricingOne;
