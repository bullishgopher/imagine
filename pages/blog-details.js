import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Blog/BannerTwo';
import DetailsContent from '../components/Blog/DetailsContent';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerTwo />
                <DetailsContent />

                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetails;