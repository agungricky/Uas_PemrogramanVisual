import React from "react";
import '../assets/css/templatemo-hexashop.css';
import gambar_logo from '../assets/images/logoku.png';
const Footer = () => {
    return (
        <>
            {/* <!-- ***** Subscribe Area Starts ***** --> */}
            <div class="subscribe">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="section-heading">
                                <h2>BAGI YANG PUNYA KARTU MEMBER DISKON 30%</h2>
                                <span>Daftarkan segera diri anda sekarang dan dapatkan diskonnya.</span>
                            </div>
                            <form id="subscribe" action="" method="get">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your Name" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-5">
                                        <fieldset>
                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*"
                                                placeholder="Your Email Address" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-2">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-dark-button"><i
                                                class="fa fa-paper-plane"></i></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>Lokasi Toko:<br /><span>Jl. Jendral Sudirman No.57 Kediri</span></li>
                                        <li>Nomor Hp:<br /><span>081928735765</span></li>
                                        <li>Website :<br /><span>www.AutoSmart</span></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Jam Operasional:<br /><span>07:30 Pagi - 19:30 Malam</span></li>
                                        <li>Email:<br /><span>autosmart@gmail.com</span></li>
                                        <li>Sosial Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a
                                            href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Subscribe Area Ends ***** --> */}

            {/* <!-- ***** Footer Start ***** --> */}
            <footer>
                <div class="container" />
                <div class="row">
                    <div class="col-lg-3">
                        <div class="first-item">
                            <div class="logo ms-5">
                                <img src={gambar_logo} alt="hexashop ecommerce templatemo" />
                            </div>
                            <ul className="m-5 text-light">
                                <li><a href="#">ber Operasi Sejak 2010</a></li>
                                <li><a href="#">Automart@company.com</a></li>
                                <li><a href="#">083-020-034-987</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h4>Belanja &amp; Fashion</h4>
                        <ul>
                            <li><a href="#">Laki - laki</a></li>
                            <li><a href="#">Perempuan</a></li>
                            <li><a href="#">Anak - anak</a></li>
                            <li><a href="#">Aksesoris</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h4>Menu Aplikasi</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Bantuan</a></li>
                            <li><a href="#">Hubungi Kami</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h4>Lokasi Toko &amp; Belanja Online</h4>
                        <ul>
                            <li><a href="#">www.AutoSmart</a></li>
                            <li><a href="#">Jl. Himalay, No.57</a></li>
                            <li><a href="#">0812938849</a></li>
                            <li><a href="#">AutoSmart</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-12">
                        <div class="under-footer">
                            <p>Copyright © 2023 AutoSmart Co., Ltd. All Rights Reserved.
                            </p>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div />
            </footer >
        </>
    )
}
export default Footer;