import React, { Component } from 'react';
import Link from 'next/link';

class RelatedProducts extends Component {
    render() {
        return (
            <div className="shop-related-prodcut">
                <div className="container">
                    <div className="section-title">
                        <h2>Related Products</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item1.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item2.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-product">
                                <div className="product-img">
                                    <img src={require('../../images/shop-item3.jpg')} alt="item" />

                                    <Link href="#">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedProducts;
