import React from "react";
import '../assets/css/templatemo-hexashop.css';
import gambar1 from '../assets/images/left-banner-image.jpg';
import gambar2 from '../assets/images/baner-right-image-01.jpg';
import gambar3 from '../assets/images/baner-right-image-02.jpg';
import gambar4 from '../assets/images/baner-right-image-03.jpg';
import gambar5 from '../assets/images/baner-right-image-04.jpg';

const Content = () => {
    return (
        <>
            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>We Are Hexashop</h4>
                                        <span>Awesome, clean &amp; creative HTML5 Template</span>
                                        <div class="main-border-button">
                                            <a href="#">Purchase Now!</a>
                                        </div>
                                    </div>
                                    <img src={gambar1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Women</h4>
                                                    <span>Best Clothes For Women</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Women</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.
                                                        </p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Men</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.
                                                        </p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar3} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Kids</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Kids</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.
                                                        </p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar4} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.
                                                        </p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Main Banner Area End ***** --> */}
        </>
    )
}
export default Content;