import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import WidgetBanner from '../components/Widget/WidgetBanner';
import WidgetContent from '../components/Widget/WidgetContent';

class Widgets extends Component {
    static async getInitialProps({query}) {    
        return { data: query.slug }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <WidgetBanner />
                <WidgetContent data={this.props.data} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Widgets;
