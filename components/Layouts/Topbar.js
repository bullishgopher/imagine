import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/actions/authActions';

class Topbar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const loggedin = (
            <div className="col-lg-6 col-md-5 col-sm-4 col-12 topbar-text-right sign-btns">
                <Link href="#">
                    <a onClick={this.props.logout} className="btn btn-primary sign-btn">Logout</a>
                </Link>
            </div>
        );
      
        const guest = (
            <div className="col-lg-6 col-md-5 col-sm-4 col-12 topbar-text-right sign-btns">
                <Link href="/login">
                    <a className="btn btn-primary sign-btn">Sign in</a>
                </Link>&nbsp;&nbsp;&nbsp;
                <Link href="/signup">
                    <a className="btn btn-primary sign-btn">Sign up</a>
                </Link>&nbsp;&nbsp;&nbsp;
            </div>
        );

        return (
            <section className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-sm-8 col-12">
                            <div className="contact-list">
                                <Link href="tel:+27218510119"><a><i className="icofont-phone"></i> +27 21 851 0119</a></Link> &nbsp;&nbsp;|&nbsp;&nbsp; 
                                <Link href="mailto:support@imaginesignage.com"><a><i className="icofont-envelope"></i> info@imaginesignage.com</a></Link>
                            </div>
                        </div>
                        {isAuthenticated ? loggedin : guest}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
  
export default connect(
    mapStateToProps,
    { logout }
)(Topbar);