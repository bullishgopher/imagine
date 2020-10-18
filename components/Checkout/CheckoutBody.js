import React from 'react';
import OrderSummary from './OrderSummary';
import useForm from './userForm';

function CheckoutBody({total, shipping}) {
    function handleSubmit() {
        console.log("Form submitted.");
    }

    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        address: {value: "", error: ""},
        city: {value: "", error: ""},
        state: {value: "", error: ""},
        zip: {value: "", error: ""},
        email: {value: "", error: ""},
        phone: {value: "", error: ""}
    };

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid first name format."
            }
        },

        lastName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid last name format."
            }
        },

        address: {
            required: true,
            validator: {
                error: "Invalid address format."
            }
        },

        city: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        state: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        zip: {
            required: true,
            validator: {
                regEx: /^\d{5}$|^\d{5}-\d{4}$/,
                error: "Invalid zip format, use like 12345."
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Invalid email format."
            }
        },

        phone: {
            required: true,
            validator: {
                regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
                error: "Invalid phone number format use like +2923432432432."
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };

    return (
        <section className="checkout-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i className="icofont-ui-file"></i>
                            <span>Returning customer? <a href="#">Click here to login</a></span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>
                            <div className="bar"></div>

                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>Country <span className="required">*</span></label>
                                        
                                        <div className="select-box">
                                            <select className="form-control">
                                                <option value="6">Russia</option>
                                                <option value="1">South Africa</option>
                                                <option value="7">United States</option>
                                                <option value="5">United Arab Emirates</option>
                                                <option value="2">United Kingdom</option>
                                                <option value="0">Germany</option>
                                                <option value="3">France</option>
                                                <option value="4">Japan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Adress <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Town / City <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="city"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>State / County <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="state"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.state.value}
                                            />
                                            {state.state.error && <p style={errorStyle}>{state.state.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Postcode / Zip <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="zip"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.zip.value}
                                            />
                                            {state.zip.error && <p style={errorStyle}>{state.zip.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="phone"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="create-an-account" />
                                            <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <OrderSummary disabled={disable} />

                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckoutBody
