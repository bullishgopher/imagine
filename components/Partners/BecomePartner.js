import React from 'react';
import Link from 'next/link';

class BecomePartner extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 become-partner">
                                <h3>Want to become an Imagine content partner?</h3>
                                <p>Get in touch, we love collaborations and creating new partnerships.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">CONTACT US</a>
                                </Link>
                            </div>

                            <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 become-partner">
                                <h3>We love to collaborations<br/>&nbsp;</h3>
                                <p>Get in touch, we love to collaborations<br/>&nbsp;</p>
                                <Link href="#">
                                    <a className="btn btn-primary">partners@imaginesignage.co.za</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BecomePartner;
