import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ContactUs/Banner';
import Content from '../components/ContactUs/Content';
import Form from '../components/ContactUs/Form';

import CtaCard from '../components/Saas/CtaCard';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                
                <Form />
                
                <Content />
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
