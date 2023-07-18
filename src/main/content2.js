import React from "react";
import explor01 from '../assets/images/explore-image-01.jpg';
import explor02 from '../assets/images/explore-image-02.jpg';


const Conten2 = () => {
    return (
        <>
            {/* <!-- ***** Explore Area Starts ***** --> */}
            <section class="section" id="explore">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <h2>Tentang Kami</h2>
                                <span>"Kami adalah pilihan tepat untuk semua kebutuhan Fashion Anda, dengan komitmen kami pada kualitas, layanan pelanggan yang luar biasa, dan pengalaman belanja yang tak tertandingi."</span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i>
                                    <p>"Fashion adalah cara menyampaikan siapa diri kita tanpa perlu mengucapkan sepatah kata." - Ralph Lauren</p>
                                </div>
                                <p>Dengan fashion elegan dan inovatif, kami memahami bahwa penampilan mencerminkan kepribadian Anda. Setiap detail dipilih dengan cermat untuk mengekspresikan diri dan merayakan individualitas. Bergabunglah dengan kami dan temukan penampilan yang memancarkan kepercayaan diri yang sejati.
                                </p>
                                {/* <p>Buktikanlah sendiri kekuatan fashion kami dengan koleksi pakaian eksklusif dan aksesori yang memikat. <a rel="" target="_blank">Pesan Sekarang</a> Temukan penampilan yang tak terlupakan dan tetapkan tren Anda sendiri.</p> */}
                                <div class="main-border-button">
                                    <a href="products.html">Baca Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="leather">
                                            <h4>Anggun Elegan</h4>
                                            <span>Miliki tas mewah Pertamamu</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="first-image">
                                            <img src={explor01} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="second-image">
                                            <img src={explor02} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="types">
                                            <h4>Tampil Beda</h4>
                                            <span><b>Auto Smart</b> Solusinya</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Explore Area Ends ***** --> */}
        </>
    )
}
export default Conten2;