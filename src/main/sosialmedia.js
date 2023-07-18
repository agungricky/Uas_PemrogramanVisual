import gambar1 from '../assets/images/instagram-01.jpg';
import gambar2 from '../assets/images/instagram-02.jpg';
import gambar3 from '../assets/images/instagram-03.jpg';
import gambar4 from '../assets/images/instagram-04.jpg';
import gambar5 from '../assets/images/instagram-05.jpg';
import gambar6 from '../assets/images/instagram-06.jpg';

const Sosialmedia = () => {
    return (
        <>
            {/* <!-- ***** Social Area Starts ***** --> */}
            <section class="section" id="social">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Sosial Media</h2>
                                <span>Kunjungi Sosial media kami dan dapatkan informasi tentang kami untuk jadi yang utama</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row images">
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Fashion</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={gambar1} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>New</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={gambar2} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Brand</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={gambar3} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Makeup</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={gambar4} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Leather</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={gambar5} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Bag</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={gambar6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Social Area Ends ***** --> */}
        </>
    )
}
export default Sosialmedia;