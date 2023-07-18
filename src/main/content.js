import React from "react";
import "../assets/css/templatemo-hexashop.css";
import gambar1 from "../assets/images/left-banner-image.jpg";
import gambar2 from "../assets/images/baner-right-image-01.jpg";
import gambar3 from "../assets/images/baner-right-image-02.jpg";
import gambar4 from "../assets/images/baner-right-image-03.jpg";
import gambar5 from "../assets/images/baner-right-image-04.jpg";

const Content = () => {
    return (
        <>
            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div className="main-banner" id="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <div className="thumb">
                                    <div className="inner-content">
                                        <h4>Selamat Datang <br />Auto Smart</h4>
                                        <span>====== Orang Bijak Belanja bijak ======</span>
                                        <div className="main-border-button">
                                            <a href="#">Checkout sekarang!</a>
                                        </div>
                                    </div>
                                    <img src={gambar1} alt="Left Banner" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Wanita</h4>
                                                    <span>Pakaian Terbaik Untuk Wanita</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Wanita</h4>
                                                        <p>
                                                            Hemat hingga 50% dengan diskon spesial pada koleksi pakaian wanita kami, cocok untuk gaya sehari-hari maupun acara khusus.
                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Jelajahi koleksi</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar2} alt="Banner Right 1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Pria</h4>
                                                    <span>Tampilkan Gaya yang Mengesankan </span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Pria</h4>
                                                        <p>
                                                            Tampil Lebih Percaya Diri dengan Pakaian Pria Terbaik yang Membuat Anda Menonjol dari yang Lain.
                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Jelajahi koleksi</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar3} alt="Banner Right 2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Anak</h4>
                                                    <span>Perlihatkan Pesona Si Buah Hati!</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Anak</h4>
                                                        <p>
                                                            Ini Dia Pakaian Anak Pilihan Terbaik untuk Sang Buah Hati Anda!
                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Jelajahi koleksi</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar4} alt="Banner Right 3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Aksesoris</h4>
                                                    <span>Dapatkan aksesoris memukau!</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Aksesoris</h4>
                                                        <p>
                                                            Penawaran terbatas dengan pembelian Aksesoris Pria/wanita, diskon 40% Hari ini.
                                                        </p>
                                                        <div className="main-border-button">
                                                            <a href="#">Jelajahi koleksi</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={gambar5} alt="Banner Right 4" />
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
    );
};

export default Content;
