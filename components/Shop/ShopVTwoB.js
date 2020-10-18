import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

class ShopVTwo extends Component {

    handleAddToCart = (id) => {
        this.props.addToCart(id); 
    }

    render() {
        let { products } = this.props;
        return (
            <section className="product-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our products</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-4 col-md-12">
                            <div className="sidebar-area">
                                <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget_product_categories">
                                    <h3 className="widget-title">Product Categories</h3>
                                    <div className="bar"></div>

                                    <ul>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Menu Board screens</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> TV screens</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Monitors</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Commercial Lite monitors</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Full Commercial monitors</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Video Wall screens</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Outdoor screens</a></li>
                                    </ul>
                                </div>
                                
                                {/* <div className="widget widget_recent_products">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li>
                                            <div className="recent-products-thumb">
                                                <Link href="#">
                                                    <a>
                                                        <img src={require('../../images/shop-item1.jpg')} alt="blog-image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="recent-products-content">
                                                <h3><a href="#">Form Rocking Chair</a></h3>
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                                <span className="date">$18.00</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-products-thumb">
                                                <Link href="#">
                                                    <a>
                                                        <img src={require('../../images/shop-item2.jpg')} alt="blog-image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="recent-products-content">
                                                <h3><a href="#">Form Rocking Chair</a></h3>
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                                <span className="date">$18.00</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-products-thumb">
                                                <Link href="#">
                                                    <a>
                                                        <img src={require('../../images/shop-item3.jpg')} alt="blog-image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="recent-products-content">
                                                <h3><a href="#">Form Rocking Chair</a></h3>
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                                <span className="date">$18.00</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-products-thumb">
                                                <Link href="#">
                                                    <a>
                                                        <img src={require('../../images/shop-item4.jpg')} alt="blog-image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="recent-products-content">
                                                <h3>
                                                    <Link href="#">
                                                        <a>Form Rocking Chair</a>
                                                    </Link>
                                                </h3>
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                                <span className="date">$18.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Popular Tags</h3>
                                    <div className="bar"></div>

                                    <div className="tagcloud">
                                        <a href="#">Art</a>
                                        <a href="#">Book</a>
                                        <a href="#">Watch</a>
                                        <a href="#">TV</a>
                                        <a href="#">Gifts</a>
                                        <a href="#">Smart TV</a>
                                        <a href="#">Design</a>
                                    </div>
                                </div> */}
                                
                                {/* <div className="widget widget_text">
                                    <h3 className="widget-title">Instagram</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require('../../images/work-img1.jpg')} alt="image" />
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require('../../images/work-img2.jpg')} alt="image" />
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require('../../images/work-img3.jpg')} alt="image" />
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require('../../images/work-img4.jpg')} alt="image" />
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require('../../images/work-img5.jpg')} alt="image" />
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require('../../images/work-img6.jpg')} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="woocommerce-topbar">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-7 col-md-7">
                                                {/* <div className="woocommerce-result-count">
                                                    <p>Showing 1–16 of 100 results</p>
                                                </div> */}
                                                <div className="woocommerce-topbar-ordering">
                                                    <form>
                                                        <div className="select-box">
                                                            <select className="form-control">
                                                                <option value="1">Filter by Operating System</option>
                                                                <option value="2">Filter by Screen Size</option>
                                                                <option value="0">Filter by ...</option>
                                                                <option value="3">Filter by ...</option>
                                                                <option value="4">Filter by ...</option>
                                                                <option value="5">Filter by ...</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
            
                                            <div className="col-lg-5 col-md-5">
                                                <div className="woocommerce-topbar-ordering">
                                                    <form>
                                                        <div className="select-box">
                                                            <select className="form-control">
                                                                <option value="1">Sort by Popularity</option>
                                                                <option value="2">Sort by Average Rating</option>
                                                                <option value="0">Sort by Latest</option>
                                                                <option value="3">Sort by price: Low to High</option>
                                                                <option value="4">Sort by price: High to Low</option>
                                                                <option value="5">Sort by New</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {products.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12" key={idx}>
                                        <div className="single-product row mx-0">
                                            <div className="product-img col-lg-3 px-0">
                                                <img src={data.image} alt="item" />

                                                <Link href="#">
                                                    <a 
                                                        className="add-to-cart-btn"
                                                        onClick={(e) => {
                                                            e.preventDefault(); this.handleAddToCart(data.id)
                                                        }}
                                                    >
                                                        Add to Cart <i className="icofont-shopping-cart"></i>
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="product-content col-lg-4 py-3">
                                                <h3>
                                                    <Link href="#">
                                                        <a>{data.title}</a>
                                                    </Link>
                                                </h3>

                                                <h5>${data.price} <span>${data.price - 3}</span></h5>

                                                <h6>24 months contract</h6>
                                                
                                                <div className="os-icons">
                                                    <i className="icofont-brand-windows"></i>
                                                    <i className="icofont-brand-linux"></i>
                                                </div>
                                                {/* <div className="row h-100 justify-content-center align-items-center">
                                                    <div className="col-lg-5">
                                                        <h5>${data.price} <span>${data.price - 3}</span></h5>
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
                                                </div> */}
                                            </div>

                                            <div className="description col-lg-5 py-3">
                                                <div className="section-title text-left mb-3">
                                                    <h5>Inclusions</h5>
                                                    <div className="bar mx-0 my-0"></div>
                                                </div>
                                                <ul>
                                                    <li><i className="icofont-ui-check"></i> Auto start on power failure</li>
                                                    <li><i className="icofont-ui-check"></i> Multiple regions/zones</li>
                                                    <li><i className="icofont-ui-check"></i> Start up and Shutdown timer</li>
                                                    <li><i className="icofont-ui-close"></i> Auto start on power failure</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                            
                                                <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                                
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                
                                                <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopVTwo)