import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from "next/link";
import Payment from '../Payment/Payment';

class OrderSummary extends Component {
    render() {
        let totalAmount = (this.props.total).toFixed(2)
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>
                    <div className="bar"></div>

                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.products.map((data, idx) => (
                                    <tr key={idx}>
                                        <td className="product-name">
                                            <Link href="#">
                                                <a>{data.title}</a>
                                            </Link>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">${data.price * data.quantity}</span>
                                        </td>
                                    </tr>
                                ))}
                                
                                <tr>
                                    <td className="order-subtotal">
                                        <span>Cart Subtotal</span>
                                    </td>

                                    <td className="order-subtotal-price">
                                        <span className="order-subtotal-amount">${this.props.total}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="order-shipping">
                                        <span>Shipping</span>
                                    </td>

                                    <td className="shipping-price">
                                        <span>$0.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">${this.props.total}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-method">
                        <p>
                            <input type="radio" id="direct-bank-transfer" name="radio-group" />
                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>

                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                        <p>
                            <input type="radio" id="paypal" name="radio-group" />
                            <label htmlFor="paypal">PayPal</label>
                        </p>
                        <p>
                            <input type="radio" id="cash-on-delivery" name="radio-group" />
                            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                        </p>
                    </div>

                    <Payment 
                        amount={totalAmount * 100}
                        disabled={this.props.disabled}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.addedItems,
        total: state.cart.total
    }
}

export default connect(
    mapStateToProps
)(OrderSummary)
