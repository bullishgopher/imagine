import Link from 'next/link';

class SideDrawer extends React.Component {

    state = {
        drawer: false
    };

    closeDrawer = () => {
        this.props.onClick(this.state.drawer);
    }

    render() {
        return (
            <div className="sidebar-modal">  
                <div 
                    className="modal right fade show" 
                    style={{
                        display: "block", paddingRight: "16px"
                    }}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button 
                                    type="button" 
                                    className="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close"
                                    onClick={this.closeDrawer}
                                >
                                    <span aria-hidden="true"><i className="icofont-close"></i></span>
                                </button>

                                <h2 className="modal-title" id="myModalLabel2">
                                    <Link href="/">
                                        <a>
                                            <img src={require('../../images/side-logo-small.png')} alt="logo" />
                                        </a>
                                    </Link>
                                </h2>
                            </div>

                            <div className="modal-body">
                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Additional Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/signup">
                                                <a>Register</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/logout">
                                                <a>Logout</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Contact Info</h3>

                                    <ul className="contact-info">
                                        <li>
                                            <i className="icofont-google-map"></i>
                                            Address
                                            <span>601 St Andrews, Somerset Links Office park, De Beers Avenue, Somerset West, 7129</span>
                                        </li>
                                        <li>
                                            <i className="icofont-email"></i>
                                            Email
                                            <span>info@imaginesignage.com</span>
                                        </li>
                                        <li>
                                            <i className="icofont-phone"></i>
                                            Phone
                                            <span>+27 21 851 0119</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Connect With Us</h3>

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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideDrawer;
