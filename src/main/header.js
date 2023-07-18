import React from "react";
import '../assets/css/templatemo-hexashop.css';
import logo from '../assets/images/logoku.png';

const Header = () => {
    return (
        <>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" className="logo">
                                    <img src={logo} alt="Hexashop Logo" />
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <a href="#top" className="active">
                                            Home
                                        </a>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Halaman</a>
                                        <ul>
                                            <li>
                                                <a href="">Tentang Kami</a>
                                            </li>
                                            <li>
                                                <a href="">Tentang Aplikasi</a>
                                            </li>
                                            <li>
                                                <a href="">Hubungi Kami</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Pruduk</a>
                                        <ul>
                                            <li>
                                                <a href="#">Laki - laki</a>
                                            </li>
                                            <li>
                                                <a href="#">Wanita</a>
                                            </li>
                                            <li>
                                                <a href="#">Anak</a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="nofollow"
                                                    href="https://templatemo.com/page/4"
                                                    target="_blank"
                                                >
                                                    Aksesoris
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section">
                                        <a href="#explore">Semua Produk</a>
                                    </li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}
        </>
    );
};

export default Header;
