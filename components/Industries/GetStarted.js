import React from 'react';
import Link from 'next/link';

class GetStarted extends React.Component {
    render() {
        return (
            <section className="features-area saas-features ptb-100 pt-0">
                <div className="container">
                    <div className="section-title">
                        <h2>Get started now</h2>
                        <div className="bar"></div>
                        <p>We’ve made it fast, easy to manage, simple to setup and a breeze to get your<br/>content from your PC to multiple screens anywhere in the world</p>
                    </div>

                    <div className="row justify-content-center">
                        <Link href="/pricing"><a className="btn btn-primary">SEE PRICING</a></Link>&nbsp;&nbsp;&nbsp;
                        <Link href="/signup"><a className="btn btn-primary">Try it for free</a></Link>
                    </div>
                    <br />
                    <p className="text-center">Have any questions? Get in touch, we would love to hear from you</p>
                </div>
            </section>
        );
    }
}

export default GetStarted;
