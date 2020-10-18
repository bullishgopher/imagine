import React, { Component } from 'react';
// import Link from 'next/link';

import axios from 'axios';
import config from "../../config/config.json";

class BlogOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_blogs: [],
            blogs_to_show: [],
            blog_show: 1,
            load_more_disable: false,

            rand_three_blogs: [],
            rand_show_id: 0,
        };
    }
    
    async componentDidMount() {
        await axios.get(config.ALL_BLOGS)
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ all_blogs : response.data });
                this.setState({blogs_to_show: this.state.all_blogs.slice(0, this.state.blog_show * 3)});
            }

            // top three
            if (response.data.length > 3) {
                let rand_num = Math.floor(Math.random()*10)%(response.data.length-3);
                this.setState({rand_three_blogs: response.data.slice(rand_num, rand_num + 3)});
            }
            else if(response.data.length>0 && response.data.length <= 3)
            {
                this.setState({rand_three_blogs: response.data});
            }
        })
        .catch((error) => {
        })
    }

    loadMoreBlog() {
        if ( this.state.blog_show < this.state.all_blogs.length / 3 )
        {
            this.state.blog_show = this.state.blog_show + 1;
            this.setState({blogs_to_show: this.state.all_blogs.slice(0, this.state.blog_show * 3)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }

    dateDifference(e) {
        var today = new Date;
        var yesterday = new Date(e);
        var Difference_In_Time = Math.abs(today.getTime() - yesterday.getTime());
        var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
        return Difference_In_Days;
    }

    onRandShowChange(e){
        this.setState({rand_show_id: e});
    }

    render() {
        
        return (
            <section className="blog-area blog-section ptb-100">
                <div className="section-title">
                    <h2>Support, now simplified</h2>
                    <div className="bar"></div>
                </div>
                <div className="container">
                    <p className="most-popular-tag">MOST POPULAR</p>

                    <div className="row h-100 justify-content-center align-items-center ptb-100 pt-0">
                        <div className="col-lg-7 col-md-12">
                            {this.state.rand_three_blogs[this.state.rand_show_id]? <div className="recommend-image">
                                <div className="tag">{this.state.rand_three_blogs[this.state.rand_show_id].category}</div>
                                <div className="color-paper-orange">{this.state.rand_three_blogs[this.state.rand_show_id].title}</div>
                                <img src={config.SERVER_BASE_URL + this.state.rand_three_blogs[this.state.rand_show_id].imageurl} alt="image" />
                            </div>:""}
                        </div>
                        
                        <div className="col-lg-5 col-md-12">
                        {
                            this.state.rand_three_blogs.map( (blog, index) => (
                                <div className="recommend-articles" key={index} onClick={ e => this.onRandShowChange(index)} style={{cursor: "pointer"}} >
                                    <h5>{blog.title}</h5>
                                    <i className="icofont-wall-clock"></i> &nbsp;&nbsp;{ this.dateDifference(blog.createdAt) } day(s) ago
                                    <hr />
                                </div>
                            ))
                        }
                            
                            {/* <div className="recommend-articles">
                                <h5>How to Foster Shared understanding of Customer Needs</h5>
                                <i className="icofont-wall-clock"></i> 6 MIN READ
                                <hr />
                            </div>
                            <div className="recommend-articles">
                                <h5>How to Foster Shared understanding of Customer Needs</h5>
                                <i className="icofont-wall-clock"></i> 6 MIN READ
                                <hr />
                            </div> */}
                        </div>                        
                    </div>

                    <div className="row">
                        {
                            this.state.blogs_to_show.map( blog => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-blog-post">
                                        <a href="#" className="post-image blog-post-image">
                                            <div className="color-paper-blue"></div>
                                            <div className="tag">{blog.category}</div>
                                            <img src={ config.SERVER_BASE_URL + blog.imageurl } alt="blog-image" />
                                        </a>

                                        <div className="blog-post-content">
                                            <ul>
                                                <li><i className="icofont-user-male"></i> <a href="#">{blog.author}</a></li>
                                                <li><i className="icofont-wall-clock"></i> { this.dateDifference(blog.createdAt) } day(s) ago</li>
                                            </ul>
                                            <h3><a href="#">{blog.title}</a></h3>
                                            <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image blog-post-image">
                                    <div className="color-paper-green"></div>
                                    <div className="tag">EXPERT ADVICE</div>
                                    <img src={require('../../images/blog/1.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 23, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Most Popular New Business Apps</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image blog-post-image">
                                    <div className="color-paper-blue"></div>
                                    <div className="tag">EXPERT ADVICE</div>
                                    <img src={require('../../images/blog/2.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 16, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Best Marketing Management Tools</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image blog-post-image">
                                    <div className="color-paper-orange"></div>
                                    <div className="tag">TIPS & TRICKS</div>
                                    <img src={require('../../images/blog/3.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 14, 2019</li>
                                    </ul>
                                    <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image blog-post-image">
                                    <div className="color-paper-orange"></div>
                                    <div className="tag">HOW TO</div>
                                    <img src={require('../../images/blog/1.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 06, 2019</li>
                                    </ul>
                                    <h3><a href="#">CakeMail Review – Design Custom Emails</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image blog-post-image">
                                    <div className="color-paper-orange"></div>
                                    <div className="tag">INTERNAL FEEDBACK</div>
                                    <img src={require('../../images/blog/2.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 04, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Most Popular New Apps in 2019</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a href="#" className="post-image blog-post-image">
                                    <div className="color-paper-blue"></div>
                                    <div className="tag">EXPERT ADVICE</div>
                                    <img src={require('../../images/blog/3.jpg')} alt="blog-image" />
                                </a>

                                <div className="blog-post-content">
                                    <ul>
                                        <li><i className="icofont-user-male"></i> <a href="#">Admin</a></li>
                                        <li><i className="icofont-wall-clock"></i> January 26, 2019</li>
                                    </ul>
                                    <h3><a href="#">The Fastest Growing Apps in 2019</a></h3>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-12 col-md-12 text-center">
                            <button onClick={ (e) => this.loadMoreBlog()} className="btn btn-primary">View more ➟</button>
                            {/* <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                    
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                        
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogOne;
