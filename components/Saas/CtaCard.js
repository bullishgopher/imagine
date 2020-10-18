import React from 'react';
import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class CtaCard extends React.Component {
    state = {
        email: '',
    };
    onSubmit = e => {
        e.preventDefault();

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Thanks for joining us!',
            buttons: [
              {
                label: 'My pleasure',
                onClick: () => {
                    return;
                }
              },
              {
                label: 'No',
                onClick: () => {return;}
              }
            ]
        });

        const { email } = this.state;
    
        const data = {
            email,
        };

        axios.post(config.NEWSLETTER_FORM, data)
        .then(res => {
        })
        .catch(function (error) {
        });
    };

    onChange = e => {
        this.setState({ email: e.target.value });
    };

    render() {
        return (
            <div className="cta-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                    {/* <form id="newsletterForm" onSubmit={this.onSubmit}> */}
                        <div className="col-lg-5 col-md-5">
                            <p>Want to know more? Enter your e-mail to receive the latest imAGINE software brochure</p>
                        </div>

                        <div className="offset-lg-1 offset-md-1 col-lg-4 col-md-4 text-right">
                            <input type="email" id="email" name="email" className="form-control" placeholder="Email" onChange={this.onChange} />
                        </div>

                        <div className="col-lg-2 col-md-2 text-right">
                            <Link href="#">
                                {/* <a className="btn btn-primary">Take a Test Drive</a> */}
                                <a className="btn btn-primary" onClick={e => this.onSubmit(e)} style={{color: "white"}}>Take a Test Drive</a>
                            </Link>
                        </div>
                    {/* </form> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaCard;
