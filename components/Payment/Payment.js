import React from 'react';
import axios from "axios"
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { resetCart } from '../../store/actions/cartActions';

class Payments extends React.Component {
    handleClick = () => {
        this.props.resetCart(); 
        setTimeout(function(){ Router.push('/thankyou'); }, 3000);
    }
    render(){
        let { amount } = this.props;
        const onToken = async token => {
            const body = {
                amount: amount,
                token: token
            };  
            console.log(token);
            await axios.post("/api/stripe/checkout", body);
        };

        return (
            <React.Fragment>
                <div className="order-btn">
                    <StripeCheckout 
                        name="Mojosa"
                        description="React Next Landing Page Templates"
                        amount={amount}
                        currency="USD"
                        token={onToken}
                        stripeKey="pk_test_BY4VzJatP0QPNaxvm9dS5Kb500QooEC0ON"
                        billingAddress={false}
                        closed={this.handleClick}
                    >
                        <button disabled={this.props.disabled} className={`btn btn-primary order-btn ${this.props.disabled ? 'btn-disabled' : ''}`} >
                            Place Order
                        </button>
                    </StripeCheckout>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        resetCart: () => { dispatch(resetCart()) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Payments)