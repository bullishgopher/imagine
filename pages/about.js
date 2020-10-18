import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/About/Banner';
import AboutContent from '../components/About/AboutContent';
// import Team from '../components/About/Team';
// import CtaCard from '../components/About/CtaCard';
import Feedback from '../components/About/Feedback';
// import Partner from '../components/About/Partner';
// import Platform from '../components/About/Platform';

import CtaCard from '../components/Saas/CtaCard';

import TeamSecond from '../components/Team/TeamSecond';

class AboutOne extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <AboutContent />
               {/* <TeamSecond /> */}
               <Feedback />
               <CtaCard />
               
               {/* <Partner />
               <Platform /> */}
                
               <Footer />
            </React.Fragment>
        );
    }
}

export default AboutOne;
