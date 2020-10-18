import React from 'react';
import Link from 'next/link';

class GetInTouch extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 get-in-touch">
                                <h3>Can't find an answer?</h3>
                                <p>We are here to help.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Get in touch ➟</a>
                                </Link>
                            </div>

                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 get-in-touch">
                                <h3>Most popular help articles</h3>
                                <p>Live chat FAQ.</p>
                                <p>Invite your team to GoSquared.</p>
                                <p>Frequently asked questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GetInTouch;
