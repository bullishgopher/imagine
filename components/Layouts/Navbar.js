import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SideDrawer from './SideDrawer';
import SearchForm from './SearchForm';

import Topbar from './Topbar';

// import 'lazysizes';
// // import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class Navbar extends React.Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { pathname } = this.props.router;
        let { products } = this.props;

        let layOutCls = '';
        let logo = require('../../images/logo.png');
        if (pathname == '/digital-marketing'){
            layOutCls = 'marketing-navbar';
            logo = require('../../images/logo2.png');
        }

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        return (
            <React.Fragment>
                <header id="header">
                    <Topbar />
                    <div id="navbar" className={`crake-nav ${layOutCls}`}>
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img data-src={logo} alt="logo" className="lazyload" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav nav ml-auto">
                                        {/* <li className="nav-item">
                                            <Link activeClassName="active" href="/">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="">
                                                        <a>SaaS Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/app">
                                                        <a>App Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/digital-marketing">
                                                        <a>Digital Marketing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/product-landing">
                                                        <a>Product Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/software-landing">
                                                        <a>Software Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/book-landing">
                                                        <a>Book Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/agency">
                                                        <a>Startup Agency</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/payment-processing">
                                                        <a>Payment Processing</a>
                                                    </Link>
                                                </li>
                                            </ul> 
                                        </li>*/}
                                        
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/">
                                                <a className="nav-link"><img src={require('../../images/home/big-home-icon.png')} alt="Home" style={{width: "25px"}}/></a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/features">
                                                <a className="nav-link">Features</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item"><a href="#" className="nav-link">Industries</a>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/retail">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-basket"></i></div> Retail</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/restaurants">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-restaurant"></i></div> Restaurants</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/education">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-education"></i></div> Education</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/corporate">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-workers-group"></i></div> Corporate</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/hospitality">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-gift"></i></div> Hospitality</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/healthcare">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-heart-beat"></i></div> Healthcare</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/casino">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-bill"></i></div> Gambling</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/outdoor">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-ui-home"></i></div> Outdoor</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/widgets">
                                                <a className="nav-link">Widgets</a>
                                            </Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Portfolio</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-one">
                                                        <a>Portfolio 2 Columns</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-two">
                                                        <a>Portfolio 3 Columns</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-three">
                                                        <a>Portfolio 4 Columns Wide</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/project-details">
                                                        <a>Portfolio Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                                        
                                        
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/shop">
                                                <a className="nav-link">Shop</a>
                                            </Link>
                                            {/* <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/shop-one">
                                                        <a>Shop 1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-two">
                                                        <a><div className="icon text-center"><i className="icofont-shopping-cart"></i></div> Shop</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-details">
                                                        <a>Shop Details</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/cart">
                                                        <a><div className="icon text-center"><i className="icofont-cart"></i></div> Cart</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/checkout">
                                                        <a><div className="icon text-center"><i className="icofont-checked"></i></div> Checkout</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/pricing">
                                                <a className="nav-link">Pricing</a>
                                            </Link>
                                            {/* <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/blog/blog-one">
                                                        <a>Blog 1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/blog/blog-two">
                                                        <a>Blog 2</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/blog/blog-details">
                                                        <a>Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>

                                        <li className="nav-item"><a href="#" className="nav-link">Company</a>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/contact">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-ui-dial-phone"></i></div> Contact</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/clients">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-users"></i></div> Clients</a>
                                                    </Link>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="/partners">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-users-social"></i></div> Partners</a>
                                                    </Link>
                                                </li> */}
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/about">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-info"></i></div> About</a>
                                                    </Link>
                                                    {/* <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/about/about-one">
                                                                <a>About Us 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/about/about-two">
                                                                <a>About Us 2</a>
                                                            </Link>
                                                        </li>
                                                    </ul> */}
                                                </li>

                                                {/* <li>
                                                    <Link activeClassName="active" href="/features">
                                                        <a>Features</a>
                                                    </Link>
                                                </li> */}

                                                {/* <li>
                                                    <Link activeClassName="active" href="/services">
                                                        <a>Services</a>
                                                    </Link>
                                                </li>
                                                
                                                <li>
                                                    <Link activeClassName="active" href="/gallery">
                                                        <a>Gallery</a>
                                                    </Link>
                                                </li> */}

                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="/team">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-workers-group"></i></div> Team</a>
                                                    </Link> */}
                                                    {/* <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/team/team-one">
                                                                <a>Team 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/team/team-two">
                                                                <a>Team 2</a>
                                                            </Link>
                                                        </li>
                                                    </ul> */}
                                                {/* </li> */}

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/blog">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-price"></i></div> Blog</a>
                                                    </Link>
                                                    {/* <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing/pricing-one">
                                                                <a>Pricing 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing/pricing-two">
                                                                <a>Pricing 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing/pricing-three">
                                                                <a>Pricing 3</a>
                                                            </Link>
                                                        </li>
                                                    </ul> */}
                                                </li>

                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Portfolio</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-one">
                                                                <a>Portfolio 2 Columns</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-two">
                                                                <a>Portfolio 3 Columns</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-three">
                                                                <a>Portfolio 4 Columns Wide</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/project-details">
                                                                <a>Portfolio Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Shop</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-one">
                                                                <a>Shop 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-two">
                                                                <a>Shop 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-details">
                                                                <a>Shop Details</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/cart">
                                                                <a>Cart</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/checkout">
                                                                <a>Checkout</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/blog/blog-one">
                                                        <a className="nav-link">Blog</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/blog/blog-one">
                                                                <a>Blog 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/blog/blog-two">
                                                                <a>Blog 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/blog/blog-details">
                                                                <a>Blog Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}

                                                {/* <li>
                                                    <Link activeClassName="active" href="/login">
                                                        <a>Login</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/signup">
                                                        <a>Sign Up</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/coming-soon">
                                                        <a>Coming Soon</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/error">
                                                        <a>404 Error</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/faq">
                                                        <a>FAQ</a>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link activeClassName="active" href="/contact">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <div className="col-12 sign-btns-nav">
                                                <Link href="/login">
                                                    <a>Sign in</a>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-12 sign-btns-nav">
                                                <Link href="/signup">
                                                    <a>Sign up</a>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mr-auto others-option">
                                    <ul className="navbar-nav">
                                        <li className="nav-item cart-wrapper">
                                            <Link activeClassName="active" href="/cart">
                                                <a>
                                                    <i className="icofont-shopping-cart cart-icon"></i>

                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li className="header-search-box">
                                            <Link activeClassName="active" href="#">
                                                <a 
                                                    onClick={e => {e.preventDefault();this.handleSearchForm();}}
                                                    title="Search"
                                                >
                                                    <i className="icofont-search-2"></i>
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div> 
                    </div>
                </header>

                {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ''}
                {this.state.searchForm ? <SearchForm onClick={this.handleSearchForm} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.cart.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))
