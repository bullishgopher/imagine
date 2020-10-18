import React from 'react';
import Link from 'next/link';

class StillHelp extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 still-help">
                                <h3>Still need help?</h3>
                                <p>Get in touch with our sales, technical or support team</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Contact us</a>
                                </Link>
                            </div>

                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 still-help">
                                <h3>Tutorials?</h3>
                                <p>Visit our YouTube and Social channels for news and training guides</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Watch</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StillHelp;
