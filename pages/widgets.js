import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import WidgetsBanner from '../components/Services/WidgetsBanner';
import WidgetsContent from '../components/Services/WidgetsContent';
import WidgetsContentPremium from '../components/Services/WidgetsContentPremium';
import BuildPublish from '../components/Services/BuildPublish';
import WidgetsScout from '../components/Services/WidgetsScout';
import WidgetsSupport from '../components/Services/WidgetsSupport';

import CtaCard from '../components/Saas/CtaCard';
// import GalleryContent from '../components/Saas/GalleryContent';
import ClientFeedback from '../components/Saas/ClientFeedback';

class Widgets extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <WidgetsBanner />

                <WidgetsSupport />
                <WidgetsScout />
                <WidgetsContent />

                <ClientFeedback />
                
                <WidgetsContentPremium />

                {/* <BuildPublish /> */}
                {/* <GalleryContent /> */}
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Widgets;
