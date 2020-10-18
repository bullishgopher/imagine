import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Cart</h2>
                        </div>
                    </div>
                </div>
                <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div>
            </section>
        );
    }
}

export default Banner;
