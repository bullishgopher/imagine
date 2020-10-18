import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Blog/Banner';
import BlogOne from '../components/Blog/BlogOne';
// import GetInTouch from '../components/Blog/GetInTouch';

import CtaCard from '../components/Saas/CtaCard';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <BlogOne />

                {/* <GetInTouch /> */}
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;