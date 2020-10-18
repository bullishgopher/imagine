import React from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

import Banner from '../components/Saas/Banner';
import JoinCard from '../components/Saas/JoinCard';
import CtaCard from '../components/Saas/CtaCard';
import Partner from '../components/Saas/Partner';
import Platform from '../components/Saas/Platform';
import CaseStudy from '../components/Saas/CaseStudy';
import ClientFeedback from '../components/Saas/ClientFeedback';
import GalleryContent from '../components/Saas/GalleryContent';

class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Platform />
               <JoinCard />
               <Partner />
               <ClientFeedback />
               <GalleryContent />
               <CaseStudy />
               <CtaCard />
               <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
