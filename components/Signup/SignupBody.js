import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions';

import Router from 'next/router'

import ReCAPTCHA from "react-google-recaptcha";

import axios from 'axios';

import {
    Select,
    MenuItem,
} from "@material-ui/core";

class SignupBody extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        msg: null,
        name: '',
        mobile: '',
        accountname: '',

        captcha: true,

        businesstype: 'None',
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
          if (error.id === 'REGISTER_FAIL') {
            this.setState({ msg: error.msg.msg });
          } else {
            this.setState({ msg: null });
          }
        }
    
        // If authenticated, do something
        if (isAuthenticated) {
            //
        }
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

        const { username, email, password, name, mobile, accountname, businesstype } = this.state;
    
        // Create user object
        const newUser = {
          username,
          email,
          password,
          name,
          mobile,
          accountname,
          businesstype
        };
    
        // Attempt to register
        this.props.register(newUser);

        // Send user info to the CRM
        axios.post('http://central.imaginesignage.com/signup/signup_api', {
            firstName: name,
            lastName: name,
            email: email,
            contactPhone: mobile,
            companyname: '',
            cmsName: accountname,
            additionalmessage: '',
            user_id: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        if (localStorage)
        {
            Router.push('/thankyou');
        }
    };

    onCaptchaChange = e => {
        console.log("Captcha value:", e);

        if ( !!e){
            this.setState({captcha: true});
        }
    };

    onBusinessType = (event) => {
        this.setState({businesstype: event.target.value});
    }

    render() {
        return (
            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src={require('../../images/marketing.png')} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="signup-form">
                                <h3>Create your Account</h3>
                                {this.state.msg ? ( <p>{this.state.msg}</p> ) : null}
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="name" 
                                                    id="name" 
                                                    className="form-control" 
                                                    placeholder="Full Name"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email" 
                                                    name="email" 
                                                    id="email" 
                                                    className="form-control" 
                                                    placeholder="Email"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="mobile" 
                                                    id="mobile" 
                                                    className="form-control" 
                                                    placeholder="Phone"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="accountname" 
                                                    id="accountname" 
                                                    className="form-control" 
                                                    placeholder="Account Name"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" 
                                                    name="username" 
                                                    id="username" 
                                                    className="form-control" 
                                                    placeholder="Username"
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

                                        <div className="col-lg-12 mb-2">
                                            <Select
                                                value={this.state.businesstype}
                                                onChange={this.onBusinessType}
                                                style={{width: "100%", paddingLeft: "12px"}}
                                            >
                                                <MenuItem value="None">Business Type</MenuItem>
                                                <MenuItem value="Retail">Retail</MenuItem>
                                                <MenuItem value="Restaurant">Restaurant</MenuItem>
                                                <MenuItem value="Corporate">Corporate</MenuItem>
                                                <MenuItem value="Education">Education</MenuItem>
                                                <MenuItem value="Gambling">Gambling</MenuItem>
                                                <MenuItem value="Outdoor">Outdoor</MenuItem>
                                                <MenuItem value="Hospitality">Hospitality</MenuItem>
                                                <MenuItem value="Healthcare">Healthcare</MenuItem>
                                            </Select>
                                        </div>

                                        <div className="col-lg-12">
                                        <ReCAPTCHA
                                            sitekey="6LfLr-EUAAAAANxJc-VGHncZS1a0e7J3jhDAm32T"
                                            onChange={this.onCaptchaChange}
                                        />
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary">Signup Now!</button>
                                            <br />
                                            <span>Already a registered user? <Link href="/login"><a>Login!</a></Link></span>
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
  
export default connect( mapStateToProps, { register, clearErrors } )(SignupBody);
  