import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="#">
                                    <a className="logo">
                                        <img src={require('../../images/logo2.png')} alt="logo2" />
                                    </a>
                                </Link>
                                <p>Drag, drop and schedule content across multiple displays with the ability to scale infinitely. Monitor the status of every display in a single view format or filter to manage each individually from our web-based management  interface.</p>

                                <ul className="social-list">
                                    <li>
                                        <Link href="https://www.facebook.com/imaginedigitalsignage">
                                            <a><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCGlcTeybhh35gMdAcHPOdiQ/featured?view_as=subscriber">
                                            <a><i className="icofont-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/explore/locations/831795206873516/imagine-digital-signage/?hl=en">
                                            <a><i className="icofont-instagram"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/imagine-digital-signage/?viewAsMember=true">
                                            <a><i className="icofont-linkedin"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Team</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Clients</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Partners</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Widgets</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Industries</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>Retail</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Restaurants</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Education</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Coporate</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Healthcare</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Casino</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Hospitality</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Outdoor</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @ 2019 imAGINE. All rights reserved</p>
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
