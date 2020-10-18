import React from 'react';
import Link from 'next/link';

class BuildPublish extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 build-publish">
                                <h3>Build and publish your app on Freshworks Marketplace</h3>
                                <p>Join a growing community of developers and start building.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Visit our developer portal</a>
                                </Link>
                            </div>

                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 build-publish">
                                <h3>Refreshing business software that your teams will love</h3>
                                <p>Start your free tiral now. No credit card required.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Try Freshdesk</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BuildPublish;
