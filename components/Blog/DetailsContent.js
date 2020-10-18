import React, { Component } from 'react';

class DetailsContent extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={require('../../images/blog-details.jpg')} alt="blog-details" />
                                    <div className="date">20 <br /> Jan</div>
                                </div>
                                
                                <div className="article-content">
                                    <ul className="category">
                                        <li><a href="#">IT</a></li>
                                        <li><a href="#">Mobile</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                        
                                    <h3>The Fastest Growing Apps in 2019</h3>
                                    
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore a repellendus debitis explicabo quisquam obcaecati....</p>
                                    
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                    
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                    
                                    <blockquote className="blockquote">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                    </blockquote>
                                    
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                    
                                    <div className="share-post">
                                        <ul>
                                            <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                            <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                            <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="post-controls-buttons">
                                <div className="controls-left">
                                    <a href="#"><i className="icofont-double-left"></i> Prev Post</a>
                                </div>

                                <div className="controls-right">
                                    <a href="#">Next Post <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                            
                            <div className="post-comments">
                                <h3>Comments</h3>
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client1.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Smith</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment left-m">
                                    <div className="comment-img">
                                        <img src={require('../../images/client2.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Doe John</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client3.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Steven Doe</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require('../../images/client4.jpg')} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Cina</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="leave-a-reply">
                                <h3>Leave a Reply</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="E-Mail" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Your Comment" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="sidebar-area">
                                <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget_post_categories">
                                    <h3 className="widget-title">Post Categories</h3>
                                    <div className="bar"></div>

                                    <ul>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Art</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Book</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Watch</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> TV</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Gifts</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Design</a></li>
                                        <li><a href="#"><i className="icofont-bubble-right"></i> Smart TV</a></li>
                                    </ul>
                                </div>
                                
                                <div className="widget widget_recent_posts">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="#">
                                                    <img src={require('../../images/blog-img1.jpg')} alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="#">The Fastest Growing Apps in 2019</a></h3>
                                                <span className="date">23 January 2019</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="#">
                                                    <img src={require('../../images/blog-img2.jpg')} alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="#">The Most Popular New Business Apps</a></h3>
                                                <span className="date">16 January 2019</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="#">
                                                    <img src={require('../../images/blog-img3.jpg')} alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                                <span className="date">14 January 2019</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="#">
                                                    <img src={require('../../images/blog-img4.jpg')} alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="#">CakeMail Review – Design Custom Emails</a></h3>
                                                <span className="date">06 January 2019</span>
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
                                </div>
                                
                                <div className="widget widget_text">
                                    <h3 className="widget-title">Instagram</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img1.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img2.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img3.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img4.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img5.jpg')} alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={require('../../images/work-img6.jpg')} alt="image" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
