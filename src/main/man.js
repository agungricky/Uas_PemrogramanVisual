import React from 'react';
import '../assets/css/styleku1.css';
import gambar1 from '../assets/images/Adidas.png';
import gambar2 from '../assets/images/Krudung.png';
import gambar3 from '../assets/images/Gamis.png';
import gambar4 from '../assets/images/Jas.png';
import gambar5 from '../assets/images/tas.png';
import gambar6 from '../assets/images/Blazer.png';
import gambar7 from '../assets/images/tas anak.png';
import gambar8 from '../assets/images/tas anak2.png';
import gambar9 from '../assets/images/topi.png';
import gambar10 from '../assets/images/women-02.jpg';
import gambar11 from '../assets/images/jam.png';
import gambar12 from '../assets/images/dompet.png';




const Man = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Produk <b>Diskon</b></h2>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                        {/* <!-- Carousel indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div class="carousel-inner">
                            <div class="item active">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar1} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Adidas</h4>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <p class="item-price"><strike>Rp. 400,000</strike> <b>Rp. 299,000</b></p>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar2} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Bella Square</h4>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <p class="item-price"><strike>Rp. 20,000</strike> <b>Rp. 12,000</b></p>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar3} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Gamis</h4>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                                    </ul>
                                                </div>
                                                <p class="item-price"><strike>Rp. 329,000</strike> <b>Rp. 299,000w</b></p>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar4} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Kemeja</h4>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <p class="item-price"><strike>Rp. 150,000</strike> <b>Rp. 99,000</b></p>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar5} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Merce Tas Wanita</h4>
                                                <p class="item-price"><strike>Rp.150,000</strike> <span>Rp. 99,000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar6} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Blazer Wanita</h4>
                                                <p class="item-price"><strike>Rp. 298,000</strike> <span>Rp. 249,000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar7} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Ransel Anak</h4>
                                                <p class="item-price"><strike>Rp. 190,000</strike> <span>Rp. 119,000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar8} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Ransel Karakter</h4>
                                                <p class="item-price"><strike>Rp. 150,000</strike> <span>Rp. 99.000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar9} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Lola beach Topi</h4>
                                                <p class="item-price"><strike>Rp. 90,000</strike> <span>Rp. 49,000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar10} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Daster Wanita</h4>
                                                <p class="item-price"><strike>Rp. 90,000</strike> <span>Rp. 75,000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar11} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Jam Tangan Rolex</h4>
                                                <p class="item-price"><strike>Rp. 150,000</strike> <span>Rp. 110,000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="thumb-wrapper">
                                            <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                            <div class="img-box">
                                                <img src={gambar12} class="img-responsive" alt="" />
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Tiger Dompet Pria</h4>
                                                <p class="item-price"><strike>Rp. 75,000</strike> <span>Rp. 49.000</span></p>
                                                <div class="star-rating">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Carousel controls --> */}
                        <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control right" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Man;
