import React from 'react';
import './Works.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };
    
    return (
        <section className="works">
            <h3 className="text-white text-center p-5">Here are some of <span className="text-success">our works</span></h3>
            <div className="top-content">
                <div className="container-fluid">
                    <Slider {...settings}>
                        <div>
                            <img src={require(`../../../images/carousel-1.png`)} className="img-fluid" alt="img1" />
                        </div>
                        <div>
                            <img src={require(`../../../images/carousel-2.png`)} className="img-fluid" alt="img2" />
                        </div>
                        <div>
                            <img src={require(`../../../images/carousel-3.png`)} className="img-fluid w-100 h-75" alt="img3" />
                        </div>
                        <div>
                            <img src={require(`../../../images/carousel-4.png`)} className="img-fluid" alt="img4" />
                        </div>
                        <div>
                            <img src={require(`../../../images/carousel-5.png`)} className="img-fluid" alt="img5" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Works;