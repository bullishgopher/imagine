import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Cart/Banner';
import CartBody from '../components/Cart/CartBody';

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <CartBody />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;