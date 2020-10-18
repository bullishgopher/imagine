import React from 'react';
import Link from 'next/link';

class GetStarted extends React.Component {
    render() {
        return (
            <section className="get-started ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Get Started Free</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="get-started-form">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                            <p>
                                Or use your <Link href="#"><a>Facebook Account</a></Link>
                            </p>
                        </form>
                    </div>
                </div>

                <canvas id="canvas"></canvas>
            </section>
        );
    }
}

export default GetStarted;
