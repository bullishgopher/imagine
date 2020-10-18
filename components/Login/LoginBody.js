import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions';

import ReCAPTCHA from "react-google-recaptcha";

class LoginBody extends Component {
    state = {
        email: '',
        password: '',
        msg: null,

        captcha: false,
      };
    
      static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
      };
    
      componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {

          // Check for register error
          if (error.id === 'LOGIN_FAIL') {
            this.setState({ msg: error.msg.msg });
          } else {
            this.setState({ msg: null });
          }
        }
    
        // If authenticated, 
        // if (isAuthenticated) {
        // }
    }
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onSubmit = e => {
        e.preventDefault();

        if ( !this.state.captcha )
        {
            this.setState({msg: "Please do the human check!"});
            return;
        }
    
        const { email, password } = this.state;
    
        const user = {
          email,
          password
        };
    
        // Attempt to login
        this.props.login(user);
    };

    onCaptchaChange = e => {
        console.log("Captcha value:", e);
        
        if ( !!e){
            this.setState({captcha: true});
        }
    };

    render() {
        return (
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src={require('../../images/marketing.png')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <h3>Welcome Back!</h3>
                                <p>Please login to your account.</p>
                                {this.state.msg ? ( <p>{this.state.msg}</p> ) : null}
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email" 
                                                    name="email" 
                                                    id="email" 
                                                    className="form-control" 
                                                    placeholder="Account URL" 
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="password" 
                                                    name="password" 
                                                    id="password" 
                                                    className="form-control" 
                                                    placeholder="Password" 
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                        <ReCAPTCHA
                                            sitekey="6LfLr-EUAAAAANxJc-VGHncZS1a0e7J3jhDAm32T"
                                            onChange={this.onCaptchaChange}
                                        />
                                        </div>

                                        {/* <div className="col-lg-6">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkme" />
                                                <label className="form-check-label" htmlFor="checkme">Keep me Login</label>
                                            </div>
                                        </div> */}

                                        <div className="col-lg-6 text-right">
                                            <p className="forgot-password">
                                                <Link href="#"><a>Forgot Password?</a></Link>
                                            </p>
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary">Login Now!</button>
                                            <br />
                                            <span>New User? <Link href="/signup"><a>Sign Up!</a></Link></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });
  
export default connect( mapStateToProps, { login, clearErrors } )(LoginBody);