import React, { Component } from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/cartActions';

class CartBody extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render() {
        let cartItems = this.props.products.length ?
        (
            this.props.products.map((data, idx) => {
                return(
                    <tr key={idx}>
                        <td className="product-thumbnail">
                            <a href="#">
                                <img src={data.image} alt="item" />
                            </a>
                        </td>

                        <td className="product-name">
                            <Link href="#">
                                <a>{data.title}</a>
                            </Link>
                        </td>

                        <td className="product-price">
                            <span className="unit-amount">${data.price}</span>
                        </td>

                        <td className="product-quantity">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={()=>{this.handleSubtractQuantity(data.id)}}
                                >
                                    <i className="icofont-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={data.quantity} 
                                    min="1" 
                                    max={10} 
                                    readOnly={true}
                                    onChange={e => (e)}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={()=>{this.handleAddQuantity(data.id)}}
                                >
                                    <i className="icofont-plus"></i>
                                </span>
                            </div>
                        </td>

                        <td className="product-subtotal">
                            <span className="subtotal-amount">${data.price * data.quantity}</span>
                        </td>

                        <td className="product-remove">
                            <Link href="#">
                                <a
                                    onClick={(e)=>{e.preventDefault();this.handleRemove(data.id)}}
                                >
                                    <i className="icofont-ui-delete"></i>
                                </a>
                            </Link>
                        </td>
                    </tr>
                )
            })
        ): (
            <tr>
                <td className="product-thumbnail">
                    <p>Empty.</p>
                </td>
            </tr>
        );
        return (
            <section className="cart-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Unit Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Remove</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {cartItems}

                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart-buttons">
                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-md-5">
                                            <div className="coupon-box">
                                                <input type="text" className="form-control" placeholder="Coupon Code" />
                                                <button type="submit">Apply Coupon Code</button>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-5 col-md-5 text-right">
                                            <a href="#" className="btn btn-primary">Update Cart</a>
                                        </div> */}
                                        <div className="col-lg-7 col-md-7">
                                            <div className="cart-totals">
                                                <h3>Cart Totals</h3>

                                                <ul>
                                                    <li>Subtotal: <span>${this.props.total}</span></li>
                                                    <li>Total: <span>${this.props.total}</span></li>
                                                </ul>
                                                <Link href="/checkout">
                                                    <a className="btn btn-primary">Proceed to Checkout</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartBody)