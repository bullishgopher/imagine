import React, { Component } from 'react';
import axios from 'axios';
import config from "../../config/config.json";

class CaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs_by_category: [],
        }
    }

    async componentDidMount() {
        await axios.get(config.ALL_BLOGS)
        .then(response => {
            if (response.data.length > 0) {
                let temp_arr=[];
                response.data.map((blog) => {
                    if(blog.category === this.props.slug)
                    {
                        temp_arr.push(blog);
                    }
                })
                this.setState({blogs_by_category: temp_arr});
            }
        })
        .catch((error) => {
        })
    }

    render() {
        return (
            <section className="blog-area blog-section ptb-100 case-study">
                <div className="container">
                    <div className="section-title">
                        <h2>Imagine Digital Signage Case Studies</h2>
                        <div className="bar"></div>
                        <p>View all our stories, articles and latest news</p>
                    </div>

                    <div className="row">
                    {this.state.blogs_by_category.map( (blog, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog-post">
                                <a href="#" className="post-image casestudy-post-image">
                                    <img src={config.SERVER_BASE_URL + blog.imageurl} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <h3><a href="#">{blog.title}</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {/* {this.state.blogs_by_category.map( (blog, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={config.SERVER_BASE_URL + blog.imageurl} alt="blog-image" />
                                </a>

                                <div className="blog-post-content"> */}
                                    {/* <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 23, 2019</li>
                                    </ul> */}
                                    {/* <div className="icon"><i className="icofont-thumbs-up"></i></div>
                                    <h3><a href="#">{blog.title}</a></h3>
                                    <p>{blog.category}</p> */}
                                    {/* <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a> */}
                                {/* </div>
                            </div>
                        </div>
                    ))
                    } */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image">
                                    <img src={require('../../images/blog-img3.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <div className="icon"><i className="icofont-thumbs-up"></i></div>
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 14, 2019</li>
                                    </ul>
                                    <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseStudy;
