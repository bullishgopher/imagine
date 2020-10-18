import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Checkout/Banner';
import CheckoutBody from '../components/Checkout/CheckoutBody';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <CheckoutBody />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Checkout;