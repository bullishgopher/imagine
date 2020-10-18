import React from 'react';
import Link from 'next/link';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// import {withRouter} from 'react-router-dom';

import Router from 'next/router'

import {
    Select,
    MenuItem,
} from "@material-ui/core";

const currency_data = [
    {
        mark: "$",
        rate: 1,
    },
    {
        mark: "€",
        rate: 0.93,
    },
    {
        mark: "£",
        rate: 0.86,
    },
    {
        mark: "R",
        rate: 17.36,
    },
];

class PricingPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sliderContacts: 20,
            switchAnnual: false,

            currency_id: 0,
        };
        this.handleSlider = this.handleSlider.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
    }

    onCurrency = (event) => {
        this.setState({currency_id: event.target.value});
    }

    handleSlider(e, val) {
        this.setState({sliderContacts: val});

        if ( val == "100" ) {
            confirmAlert({
                title: 'Confirm to submit',
                message: 'Are you sure to do this.',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => {
                        Router.push('/contact')
                        // this.prop s.history.push('/contact');
                        // return <Redirect to='/target' />
                    }
                  },
                  {
                    label: 'No',
                    onClick: () => {return;}
                  }
                ]
              });
        }
    }

    handleSwitch(e, val) {
        this.setState({...this.state, [val]: e.target.value === "Yearly" });
    }

    render() {
        const marks = [
            {
              value: 1,
              label: '1',
            },
            {
              value: 10,
              label: '10',
            },
            {
              value: 20,
              label: '20',
            },
            {
              value: 30,
              label: '30',
            },
            {
              value: 40,
              label: '40',
            },
            {
                value: 50,
                label: '50',
              },
              {
                value: 60,
                label: '60',
              },
              {
                value: 70,
                label: '70',
              },
              {
                value: 80,
                label: '80',
              },
              {
                value: 90,
                label: '90',
              },{
                value: 100,
                label: '100',
              },
        ];

        // const PrettoSlider = withStyles({
        //     root: {
        //       color: '#52af77',
        //       height: 8,
        //     },
        //     thumb: {
        //       height: 24,
        //       width: 24,
        //       backgroundColor: '#fff',
        //       border: '2px solid currentColor',
        //       marginTop: -8,
        //       marginLeft: -12,
        //       '&:focus,&:hover,&$active': {
        //         boxShadow: 'inherit',
        //       },
        //     },
        //     active: {},
        //     valueLabel: {
        //       left: 'calc(-50% + 4px)',
        //     },
        //     track: {
        //       height: 8,
        //       borderRadius: 4,
        //     },
        //     rail: {
        //       height: 8,
        //       borderRadius: 4,
        //     },
        // })(Slider);

        // const PurpleSwitch = withStyles({
        //     switchBase: {
        //       //color: purple[300],
        //       '&$checked': {
        //         color: "#6EC5B8",
        //       },
        //       '&$checked + $track': {
        //         backgroundColor: "rgb(154, 223, 212)",
        //       },
        //     },
        //     checked: {},
        //     track: {},
        // })(Switch);

        return (
            <section className="pricing-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Imagine Digital Signage monthly licensing fees</h2>
                        <div className="bar"></div>
                        <p>Month to month agreements</p>
                        <div className="pricing-btns pt-3">
                            <input 
                                type="button" 
                                value="Monthly" 
                                className={`btn-monthly ${this.state.switchAnnual ? '' : 'active'}`}
                                onClick={ (e) => this.handleSwitch(e, 'switchAnnual')} 
                            />
                            <input 
                                type="button" 
                                value="Yearly" 
                                className={`btn-yearly ${this.state.switchAnnual ? 'active' : ''}`}
                                onClick={ (e) => this.handleSwitch(e, 'switchAnnual')} 
                            />
                        </div>
                    </div>

                    <div className="my-2 ml-5">
                        Currency: &nbsp;&nbsp;&nbsp;&nbsp;
                        <Select
                            value={this.state.currency_id}
                            onChange={this.onCurrency}
                            // style={{width: "100%", paddingLeft: "12px"}}
                        >
                            <MenuItem value={0}>Dollar</MenuItem>
                            <MenuItem value={1}>Euro</MenuItem>
                            <MenuItem value={2}>Pound</MenuItem>
                            <MenuItem value={3}>Rand</MenuItem>
                        </Select>
                    </div>

                    <div className="row pricing-slider">
                        <div className="col-lg-3 col-sm-12 col-xs-12 my-2">
                            <div className="price-header">
                                <h3 className="title">Software Licenses</h3>
                                <div className="price">Use the slider to select the number of displays.</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12  col-xs-12 contacts-count text-center my-2">
                            <span>{this.state.sliderContacts}</span>
                        </div>
                        <div className="col-lg-7 col-sm-12 col-xs-12 center-pricing-slider my-2">
                            <Slider
                                defaultValue={20}
                                aria-labelledby="discrete-slider-custom"
                                step={10}
                                valueLabelDisplay="auto"
                                marks={marks}
                                onChange={ (e, val) => this.handleSlider(e, val) }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            {/* <div className="pricing-table mt-5">
                                <div className="price-header">
                                    <h3 className="title">Contacts</h3>
                                    <div className="price">{this.state.sliderContacts}</div>
                                </div>
                                
                                <div className="price-body">
                                    <ul>
                                        <li className="px-3">
                                            <PrettoSlider
                                                valueLabelDisplay="auto" 
                                                aria-label="pretto slider" 
                                                value = {this.state.sliderContacts}
                                                max={500} 
                                                min={1}
                                                onChange={ (e, val) => this.handleSlider(e, val) }
                                            />
                                        </li>
                                    </ul>
                                </div>

                                <hr />

                                <div className="price-footer">
                                <FormControlLabel
                                    control={
                                        <PurpleSwitch 
                                            checked={this.state.switchAnnual} 
                                            onChange={ (e) => this.handleSwitch(e, 'switchAnnual')} 
                                            value="switchAnnual" 
                                        />
                                    }
                                    label="Annual billing"
                                />
                                </div>
                            </div> */}
                            <div className="pricingTable text-left">
                                {/* <div className="pricing-icon">
                                    <i className="icofont-globe"></i>
                                </div> */}
                                <div className="price-Value pl-5 ml-5">
                            <span className="currency: 1, ml-5">{currency_data[this.state.currency_id].mark}</span> <span style={{color: "#fb6520"}}>{ this.state.switchAnnual ? this.state.sliderContacts * 10 * 12 * currency_data[this.state.currency_id].rate : this.state.sliderContacts * 10 * currency_data[this.state.currency_id].rate }</span>
                                </div>
                                <span className="month ml-2">/{ this.state.switchAnnual ? "Year" : "Month" }</span>
                                {/* <div className="pricingHeader">
                                    <h3 className="title">Personal</h3>
                                </div> */}
                                <div className="pricing-content pl-5 ml-5">
                                    <div className="row">
                                    <ul className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-2">
                                        <li className="active"><i className="icofont-check"></i> 10 Gig storage</li>
                                        <li className="active"><i className="icofont-check"></i> 2 users</li>
                                        <li className="active"><i className="icofont-check"></i> Scheduler</li>
                                        <li className="active"><i className="icofont-check"></i> Playback reports</li>
                                    </ul>
                                    <ul className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-2">
                                        <li className="active"><i className="icofont-check"></i> Layout creator</li>
                                        <li className="active"><i className="icofont-check"></i> Free content widgets</li>
                                        <li className="active"><i className="icofont-check"></i> Includes updates</li>
                                        <li className="active"><i className="icofont-check"></i> Online chat support </li>
                                    </ul>
                                    </div>
                                </div>
                                <Link href="#">
                                    <a className="btn btn-primary" style={{marginLeft: "80px"}}>Start free trial</a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="pricingTable">
                                <div className="pricing-icon">
                                    <i className="icofont-globe"></i>
                                </div>
                                <div className="price-Value">
                                    <span className="currency: 1,">$</span> { this.state.switchAnnual ? 100 - Math.floor(this.state.sliderContacts / 40) : 15 - Math.floor(this.state.sliderContacts / 100) }
                                </div>
                                <span className="month">/{ this.state.switchAnnual ? "Year" : "Month" }</span>
                                <div className="pricingHeader">
                                    <h3 className="title">Personal</h3>
                                </div>
                                <div className="pricing-content">
                                    <ul>
                                        <li className="active">Web Audio</li>
                                        <li className="active">Screen Sharing</li>
                                        <li className="active">Invoicing and Payments</li>
                                        <li className="active">Unlimited</li>
                                        <li className="active">Screen Sharing</li>
                                        <li>Unlimited Staff Accounts</li>
                                        <li>Web Booking Widget</li>
                                        <li>Monthly Reports and Analytics</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="pricingTable">
                                <div className="pricing-icon">
                                    <i className="icofont-globe"></i>
                                </div>
                                <div className="price-Value">
                                    <span className="currency: 1,">$</span>{ this.state.switchAnnual ? 200 - Math.floor(this.state.sliderContacts / 40) : 39 - Math.floor(this.state.sliderContacts / 100) }
                                </div>
                                <span className="month">/{ this.state.switchAnnual ? "Year" : "Month" }</span>
                                <div className="pricingHeader">
                                    <h3 className="title">Business</h3>
                                </div>
                                <div className="pricing-content">
                                    <ul>
                                        <li className="active">Send 5 invoices and quotes</li>
                                        <li className="active">2 Clients and Products</li>
                                        <li className="active">Invoicing and Payments</li>
                                        <li className="active">Enter 5 bills</li>
                                        <li className="active">Data Security and Backups</li>
                                        <li className="active">Unlimited Staff Accounts</li>
                                        <li className="active">Web Booking Widget</li>
                                        <li>Monthly Reports and Analytics</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-12">
                            <div className="pricingTable">
                                {/* <div className="pricing-icon">
                                    <i className="icofont-globe"></i>
                                </div> */}
                                {/* <div className="price-Value">
                                    <span className="currency: 1,">$</span>{ this.state.switchAnnual ? 600 - Math.floor(this.state.sliderContacts / 40) : 99 - Math.floor(this.state.sliderContacts / 100) }
                                </div>
                                <span className="month">/{ this.state.switchAnnual ? "Year" : "Month" }</span> */}
                                {/* <div className="pricingHeader">
                                    <h3 className="title">Enterprise</h3>
                                </div> */}
                                <h2 style={{color: "#fb6520"}}>Paid features</h2>
                                <h4>Looking for more?</h4>
                                <div className="pricing-content">
                                    <ul className="text-left pl-5 ml-5">
                                        <li className="active"><i className="icofont-check"></i> New users</li>
                                        <li className="active"><i className="icofont-check"></i> Paid widgets</li>
                                        <li className="active"><i className="icofont-check"></i> Queue management</li>
                                        <li className="active"><i className="icofont-check"></i> Overlay scheduler</li>
                                    </ul>
                                </div>
                                <Link href="#">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingPlan;
