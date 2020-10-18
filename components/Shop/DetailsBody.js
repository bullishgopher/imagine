import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import ImageSlide from './ImageSlide';
import RelatedProducts from './RelatedProducts';
import Description from './Description';

class DetailsBody extends Component {

    state = {
        qty: 1,
        max: 10,
        min: 1,
        sizeGuide: false,
        shipModal: false
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(8, this.state.qty); 
    }

    render() {
        return (
            <section className="shop-details-area ptb-100">
                <div className="container">
                    <div className="shop-details">
                        <div className="row h-100 justify-content-center align-items-center">
                            <ImageSlide />

                            <div className="col-lg-8 col-md-12">
                                <div className="product-entry-summary">
                                    <h3>Gold Buyer's Survival Manual</h3>
                                    <h4><span>$44.00</span> $30.00</h4>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <ul className="product-categories">
                                        <li>Categories:</li>
                                        <li><a href="#">Books</a>,</li>
                                        <li><a href="#">Art</a></li>
                                    </ul>

                                    <form onSubmit={this.onFormSubmit}>
                                        <input 
                                            type="number" 
                                            name="quantity" 
                                            title="Qty"
                                            className="form-control" 
                                            value={this.state.qty}
                                            min={this.state.min}
                                            max={this.state.max} 
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            onClick={this.handleAddToCartFromView}
                                        >
                                            Add to Cart
                                        </button>
                                    </form>

                                    <ul className="share-social">
                                        <li>Share:</li>
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Description />


                    </div>
                </div>
                
                <RelatedProducts />
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DetailsBody)
