import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shop/Banner';
// import ShopVTwo from '../components/Shop/ShopVTwo';

import ShopVOneA from '../components/Shop/ShopVOneA';
// import ShopVTwoB from '../components/Shop/ShopVTwoB';

class ShopOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                {/* <ShopVTwo /> */}

                <ShopVOneA />

                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopOne;