import React from "react";
import '../assets/css/templatemo-hexashop.css';
import gambar1 from '../assets/images/men-01.jpg';
import gambar2 from '../assets/images/men-02.jpg';
import gambar3 from '../assets/images/men-03.jpg';
import gambar4 from '../assets/images/men-01.jpg';

import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
// import '../assets/css/owl-carousel.css';
import '../assets/css/lightbox.css';

const Pria = () => {
    return (
        <>
            {/* <!-- ***** Men Area Starts ***** --> */}
            <section className="section" id="men">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Men's Latest</h2>
                                <span>
                                    Details to details is what makes Hexashop different from the other themes.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="men-item-carousel owl-carousel owl-theme">
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img src={gambar1} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img src={gambar2} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img src={gambar3} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Love Nana ‘20</h4>
                                        <span>$150.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img src={gambar4} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Men Area Ends ***** --> */}
        </>
    )
}

export default Pria;
